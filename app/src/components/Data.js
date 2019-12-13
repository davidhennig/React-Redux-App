import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";
import DataResults from "./DataResults";

const Data = props => {
  return (
    <div>
      <h1>Rick and Morty API</h1>
      {!props.data && !props.isFetching && <p>Go ahead! Fetch some guys! </p>}
      {props.data && <DataResults />}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.data && <p>{props.data.data}</p>}
      <button onClick={props.getData}>Fetch Data!</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(Data);
