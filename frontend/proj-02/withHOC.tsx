import React from "react";

export default function withHOC<P>(Component: React.ComponentType<P>) {
  function WithHOC(props: P) {
    return <Component {...props} />;
  }
  return WithHOC;
}
