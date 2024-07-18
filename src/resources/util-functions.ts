export const isCurrentPath = (currentPath: string, path: string) => {
  const currentPathSegment = currentPath.split("/")[1];
  const pathSegment = path.split("/")[1];

  return currentPathSegment === pathSegment;
};
