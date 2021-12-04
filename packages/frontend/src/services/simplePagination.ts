import isPlainObject from 'lodash/isPlainObject';
import { stringifyVariables } from '@urql/core';
import { NullArray, Resolver, Variables } from '@urql/exchange-graphcache';
import { PaginationArg } from '@/gql/graphql';

export type MergeMode = 'before' | 'after';

export interface PaginationParams {
  offsetArgument?: keyof PaginationArg;
  limitArgument?: string;
  mergeMode?: MergeMode;
  linksKey?: string;
  resolveCurrentOffset?: (args: {
    pagination?: PaginationArg;
  }) => number | undefined | null;
}

/**
 * This is an extended version of the simplePagination function from URQL
 * It supports the special pagination of Strapi 4 GraphQL API
 *
 * 1. It handles deep comparision of the query arguments to determine if the query is the same ({ pagination: { start: 0, limit: 20 } })
 * 2. It paginates the items on a subfield (generally `data`), configurable with `linksKey`
 *
 * The query *must* includes the root `__typename` explicitely, otherwise it won’t return the proper type when querying the cache.
 */
export const simplePagination = ({
  offsetArgument = 'start',
  limitArgument = 'limit',
  mergeMode = 'after',
  linksKey = 'data',
  resolveCurrentOffset = (args: { pagination?: PaginationArg }) =>
    args.pagination?.[offsetArgument],
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
PaginationParams = {}): Resolver<any, any, any> => {
  const compareArgs = (
    fieldArgs: Variables,
    connectionArgs: Variables
  ): boolean => {
    for (const key in connectionArgs) {
      if (key === offsetArgument || key === limitArgument) {
        continue;
      } else if (!(key in fieldArgs)) {
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const compare = (a: any, b: any): boolean => {
        if (typeof a !== typeof b || (typeof a !== 'object' && a !== b)) {
          return false;
        }

        if (isPlainObject(a)) {
          for (const [key, value] of Object.entries(a)) {
            if (key === offsetArgument || key === limitArgument) {
              continue;
            }

            if (!compare(value, b[key])) {
              return false;
            }
          }

          return true;
        }

        return stringifyVariables(a) === stringifyVariables(b);
      };

      const argA = fieldArgs[key];
      const argB = connectionArgs[key];

      if (!compare(argA, argB)) {
        return false;
      }
    }

    for (const key in fieldArgs) {
      if (key === offsetArgument || key === limitArgument) {
        continue;
      }
      if (!(key in connectionArgs)) {
        return false;
      }
    }

    return true;
  };

  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;

    // Look for similar queries in the cache
    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    const size = fieldInfos.length;

    // If there are no similar queries, there’s nothing to paginate from
    if (size === 0) {
      return undefined;
    }

    // Combine results from all similar queries
    const visited = new Set();
    let result: NullArray<string> = [];
    let prevOffset: number | null = null;

    for (let i = 0; i < size; i++) {
      const { fieldKey, arguments: args } = fieldInfos[i];

      // If the arguments don’t match, skip this query
      if (args === null || !compareArgs(fieldArgs, args)) {
        continue;
      }

      const links = cache.resolve(
        cache.resolve(entityKey, fieldKey) as string,
        linksKey
      ) as string[];

      const currentOffset = resolveCurrentOffset(args);

      if (
        links === null ||
        links.length === 0 ||
        typeof currentOffset !== 'number'
      ) {
        continue;
      }

      const tempResult: NullArray<string> = [];

      for (let j = 0; j < links.length; j++) {
        const link = links[j];
        if (visited.has(link)) continue;
        tempResult.push(link);
        visited.add(link);
      }

      if (
        (!prevOffset || currentOffset > prevOffset) ===
        (mergeMode === 'after')
      ) {
        result = [...result, ...tempResult];
      } else {
        result = [...tempResult, ...result];
      }

      prevOffset = currentOffset;
    }

    const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);

    if (hasCurrentPage) {
      const __typename = _parent?.[fieldName]?.__typename;

      if (!__typename) {
        return result;
      }

      return {
        __typename,
        [linksKey]: result,
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    else if (!(info as any).store.schema) {
      return undefined;
    } else {
      info.partial = true;
      return result;
    }
  };
};
