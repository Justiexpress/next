export const apiClient = {
  get: async (url: string) => {
    const response = await fetch(url);
    return response.json();
  },
  // Otros métodos HTTP
};