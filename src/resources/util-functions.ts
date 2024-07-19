export const isCurrentPath = (
  currentPath: string,
  path: string,
  position?: number
) => {
  const index = position || 1;

  const currentPathSegment = currentPath.split("/");
  const pathSegment = path.split("/");

  if (currentPathSegment.length <= index || pathSegment.length <= index) {
    if (currentPathSegment.length === pathSegment.length)
      return currentPathSegment[index - 1] === pathSegment[index - 1];
    return false;
  }

  return currentPathSegment[index] === pathSegment[index];
};
