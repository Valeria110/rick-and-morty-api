export const formatDate = (isoString: string) => {
  return new Date(isoString).toLocaleDateString("ru-RU");
};
