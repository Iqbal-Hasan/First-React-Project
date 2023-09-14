/* eslint-disable react/prop-types */
import { useState } from "react";

const Country = ({ data, addThisToList }) => {
  const [visited, setVisited] = useState(false);

  function visitedButton() {
    setVisited(!visited);
  }

  const [remove, setRemove] = useState(false);
  function handleDelete() {
    setRemove(!remove);
  }
  return (
    <div>
      <div
        style={{ display: remove ? "none" : "block" }}
        className={visited ? "child-div-visited" : "child-div"}
      >
        <img src={data.flags.png} alt="" />
        <h2>{data.name.common}</h2>
        <h4>Capital : {data.capital}</h4>
        <button onClick={visitedButton}>Visited</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => addThisToList(data)}>Add</button>
      </div>
    </div>
  );
};

export default Country;
