import qs from "qs";

export default async function fetchAPI(
  path: string,
  urlParamObject = {},
  options = {}
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const basePath =
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
  try {
    const fetchOptions = {
      next: {
        revalidate: 60,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      ...options,
    };

    const queryParams = urlParamObject ? qs.stringify(urlParamObject) : null;
    const queryString = `${basePath}/api${path}${
      queryParams ? `?${queryParams}` : ""
    }`;

    const result = await fetch(queryString, fetchOptions);

    return result.json();
  } catch (error) {
    console.log(error);
    throw new Error(
      "Please check if your server is running and you set all the required tokens."
    );
  }
}
