const url =
  "https://pageviewcounterblog.azurewebsites.net/api/GetPageViewCount?code=Kc7Zaiv%2FwuM9M7WXJ7SEr3kzfbY7bW5Z2IMK8qUopKEaUMh4pdO3HQ%3D%3D";

// This function calls Azure to bump the page view count
// and it returns the updated count number
export default async function getSetViewCount(slug: string): Promise<number> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      URL: encodeURIComponent(slug),
    }),
  });

  // Body is the page view number
  return await response.json();
}
