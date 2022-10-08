import { GraphQLError } from 'graphql';

export type ApiError = {
  id: string;
  message: string;
};

export type NormalizedApiErrors = Array<ApiError | string>;

export type StrapiGraphQLException = {
  data?: {
    message?: Array<{ messages: string[] }>;
  };
  message: string;
  code: number;
};

export type StrapiGraphQLErrorExtensions = {
  exception?: StrapiGraphQLException;
};

export function getErrorMessages(
  graphQLErrors: GraphQLError[]
): NormalizedApiErrors | null {
  return graphQLErrors?.length
    ? graphQLErrors.flatMap((gqlError) => {
        const exception = gqlError.extensions
          ?.exception as StrapiGraphQLException;

        return (
          exception?.data?.message?.flatMap((m) => m.messages) ?? [
            exception.message,
          ]
        );
      })
    : null;
}
