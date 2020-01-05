import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // esto quedo re hacky porque hice mil pruebas y quedo todo dado vuelta
            var viewCount;
            function getViewCount() {
              if (typeof viewCount !== "undefined") return viewCount;
              var data = JSON.stringify({
                "URL": encodeURIComponent(window.location.href)
              });
              
              var xhr = new XMLHttpRequest();
              xhr.withCredentials = true;
              
              xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                  console.log(this.responseText);
                }
              });
              
              xhr.open("POST", "https://pageviewcounterblog.azurewebsites.net/api/GetPageViewCount?code=Kc7Zaiv%2FwuM9M7WXJ7SEr3kzfbY7bW5Z2IMK8qUopKEaUMh4pdO3HQ%3D%3D");
              xhr.setRequestHeader("content-type", "application/json");
              xhr.setRequestHeader("cache-control", "no-cache");
              
              xhr.send(data);
              xhr.onreadystatechange = function() {
                  if (xhr.readyState == XMLHttpRequest.DONE) {
                    viewCount = xhr.responseText;
                    document.getElementById("view_counter").innerHTML = viewCount;
                  }
              }
            }

            getViewCount()
            `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
