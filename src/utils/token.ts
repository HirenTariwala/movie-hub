export const getAccessToken = (): string | null => {
  return localStorage.getItem("access_token");
};
