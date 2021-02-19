import React from "react";

type Props = {
  prop: string;
};

function Component1({ prop }: Props) {
  return <div>{prop}</div>;
}

export default Component1;
