const url =
  "https://pageviewcounterblog.azurewebsites.net/api/GetPageViewCount?code=Kc7Zaiv%2FwuM9M7WXJ7SEr3kzfbY7bW5Z2IMK8qUopKEaUMh4pdO3HQ%3D%3D"

// This function calls Azure to bump the page view count
// and it returns the updated count number
// TODO
// - enable azure cors from localhost:8000 so we can test it locally
export default async function getSetViewCount(slug) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      URL: encodeURIComponent(slug),
    }),
  })

  // Body is the page view number
  const body = await response.json()
  console.log("body", body)
  return body
}
