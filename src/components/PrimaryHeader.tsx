import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import logo from "../../content/assets/logo.svg";

export interface IProps {
  title: string;
}

export default function PrimaryHeader(props: IProps) {
  const { title } = props;
  return (
    <h1
      css={css`
        @media only screen and (min-width: 500px) {
        }
      `}
    >
      <Link to={`/`}>
        <img src={logo} alt={title} />
      </Link>
    </h1>
  );
}
