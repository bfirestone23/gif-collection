import React from "react";
import { Button } from "react-bootstrap";

export default function RemoveGifButton(props) {
  return (
    <Button
      size="sm"
      variant="danger"
      className="remove-gif 
                rounded 
                position-absolute 
                py-0 
                m-1 
                w-auto 
                align-text-center"
      id={props.gifData.id}
      onClick={() => props.removeGif(props.gifData)}
    >
      -
    </Button>
  );
}
