// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function objectToUrlParams(object: Record<string, any>) {
  const params = new URLSearchParams();

  for (const item in object) {
    params.set(item, object[item]);
  }

  return `?${params}`;
}
