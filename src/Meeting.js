import React from "react";
import { useParams } from "react-router-dom";

const Meeting = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Meeting {id}</h1>
      {/* Other meeting content */}
    </div>
  );
};

export default Meeting;
