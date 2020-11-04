import React from "react";
import styled from "@emotion/styled";

export interface IProps {
  data: Array<string>;
}

export default function SeoFooter({ data }: IProps) {
  if (data.length === 0) {
    return null;
  }

  const content = data.join(" ");
  return <Container>{content}</Container>;
}

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ccc;
`;
