import React from "react";
import Component2 from ":proj-02/Component2";

type Props = {};

function Component3({}: Props) {
  return (
    <div>
      <Component2 prop="value" />
    </div>
  );
}

export default Component3;
