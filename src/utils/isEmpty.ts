export const isEmpty = (
  value: undefined | null | string | Record<string, any>,
): boolean => (
  value === undefined
      || value === null
      || (typeof value === 'object' && Object.keys(value).length === 0)
      || (typeof value === 'string' && value.trim().length === 0)
);
