import { GraphQLError } from 'graphql';

export type StrapiErrorMessage = {
  id: string;
  message: string;
};

export type StrapiErrors = Array<StrapiErrorMessage | string>;

export function getErrorMessages(
  graphQLErrors: GraphQLError[]
): StrapiErrors | null {
  return graphQLErrors?.length
    ? graphQLErrors.flatMap((gqlError) => {
        return (
          gqlError?.extensions?.exception.data?.message?.flatMap(
            (m: Record<string, string>) => m.messages
          ) ?? [gqlError?.extensions?.exception.message]
        );
      })
    : null;
}
