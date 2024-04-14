export const getPaginatedData = <T>(
  data: T[],
  limit: number,
  currentPage: number
): T[] => {
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  return data.slice(startIndex, endIndex);
};
