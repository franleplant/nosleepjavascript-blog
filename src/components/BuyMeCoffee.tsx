import React from "react";

export interface IProps {
  className?: string;
}

export default function BuyMeCoffee(props: IProps): JSX.Element {
  return (
    <a href="https://www.buymeacoffee.com/Kp6R5Zr" className={props.className}>
      <img
        src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Kp6R5Zr&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
        alt="buy me coffee"
      />
    </a>
  );
}
