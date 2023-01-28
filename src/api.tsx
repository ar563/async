export const api = async <T,>(url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw Error(response.statusText);
  return response.json().then((response) => response.data as T);
};
