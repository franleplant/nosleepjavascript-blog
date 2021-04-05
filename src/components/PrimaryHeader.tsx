import React from "react";
import { Link } from "gatsby";

import logo from "../../content/assets/logo.svg";

export interface IProps {
  title: string;
}

export default function PrimaryHeader(props: IProps) {
  const { title } = props;
  return (
    <h1 className="max-w-md mx-auto">
      <Link to={`/`}>
        <img src={logo} alt={title} />
      </Link>
    </h1>
  );
}
