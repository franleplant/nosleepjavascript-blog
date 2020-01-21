import React from "react"
import styled from "@emotion/styled"
import color from "color"
import * as theme from "../utils/theme"

export default function Tags({ tags }) {
  return (
    <Container>
      {tags.map(tag => (
        <Tag key={tag}>{`#${tag}`}</Tag>
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10px;
  margin-left: -5px;
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: black;
  line-height: 1.5;
  display: inline-block;
  height: auto;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: ${color(theme.COLOR.PRIMARY)
    .alpha(0.05)
    .string()};
  border: 1px solid ${theme.COLOR.PRIMARY};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${color(theme.COLOR.PRIMARY)
      .alpha(0.5)
      .string()};
  }
`
