import React from "react";

const Error = ({
  message = "Something not ideal might be happening."
}) => {
  return <div>
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <p className="font-bold">Be Warned</p>
      <p>{message}</p>
    </div>
  </div>;
};

export default Error;