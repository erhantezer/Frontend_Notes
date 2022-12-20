import { useReducer, useState } from "react";
import { initialState, reducer } from "./Reducer";

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, loading, dog } = state;

  const fetchDog = () => {
    dispatch({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        dispatch({ type: "FAİL", payload: "Error" });
        // setError("ERROR!! DATA CAN NOT BE FETCHED");
        // setLoading(false);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseReducerExample;
