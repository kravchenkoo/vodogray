export async function getStrapiData(path: string) {
  try {
    const response = await fetch(process.env.STRAPI_URL + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
