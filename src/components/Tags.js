import React from "react"
//TODO use emotion for css
export function Tags({ tags }) {
  return (
    <div
      style={{
        marginTop: "10px",
        marginLeft: "-5px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tags.map(tag => (
        <span
          key={tag}
          style={{
            boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
            borderRadius: "10px",
            margin: "5px",
            padding: "10px",
            whiteSpace: "nowrap",
          }}
        >{`#${tag}`}</span>
      ))}
    </div>
  )
}
