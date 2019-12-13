import React from "react";

const DataCards = props => {
  return (
    <div>
      <h2>Rick and Morty Character Sheet</h2>
      <div className="card">
        <h3>Name: {props.name}</h3>
        <h3>Status: {props.status}</h3>
        <h4>Species: {props.species}</h4>
        <h5>Gender: {props.gender}</h5>
      </div>
    </div>
  );
};

export default DataCards;
