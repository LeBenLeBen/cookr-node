import { Directus_Files } from '@/gql/graphql';

import store from '@/store';

export function upload(file: File): Promise<Directus_Files> {
  const formData = new FormData();
  formData.append('file', file);

  const headers = store.state.value.auth?.accessToken
    ? { Authorization: `Bearer ${store.state.value.auth?.accessToken}` }
    : undefined;

  return fetch('/files', {
    method: 'POST',
    body: formData,
    headers,
  })
    .then((response) => response.json())
    .then((response) => response.data);
}
