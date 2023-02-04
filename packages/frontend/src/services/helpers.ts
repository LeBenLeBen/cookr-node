import { Directus_Files } from '@/gql/graphql';

export function upload(file: File): Promise<Directus_Files> {
  const formData = new FormData();
  formData.append('file', file);

  return fetch('/files', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => response.data);
}
