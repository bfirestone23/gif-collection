import React from "react";
import { FormGroup, FormControl, Button, Jumbotron } from "react-bootstrap";

export default function CollectionForm(props) {
  return (
    <Jumbotron
      className="my-5 mx-auto d-flex align-content-between flex-wrap"
      style={{ width: "25rem", height: "13rem" }}
    >
      <form className="m-auto" onSubmit={props.handleSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            className="m-auto"
            placeholder="New Collection"
            name="name"
            value={props.collectionName}
            onChange={props.handleChange}
          />
          <Button className="submit m-3" type="submit">
            Create
          </Button>
        </FormGroup>
      </form>
    </Jumbotron>
  );
}
