import React from "react";
import Button from "./Button";

export default function ComponentWithState() {
  const [flag, setFlag] = React.useState(false);

  return (
    <div>
      <Button
        data-testid="button-change-state"
        label={"Mudar o Estado para true"}
        clique={() => {
          setFlag(true);
        }}
      />
      {flag && <p>O estado da flag foi para true</p>}
    </div>
  );
}
