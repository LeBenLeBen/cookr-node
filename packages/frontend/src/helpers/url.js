export function objectToUrlParams(object) {
  const params = new URLSearchParams();

  for (const item in object) {
    params.set(item, object[item]);
  }

  return `?${params}`;
}
