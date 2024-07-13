import React from "react";

function Stock() {
  return (
    <div className="p-5 text-purple-800 text-center">
      <h1 className="font-semibold text-purple-800">Type in a ticker : </h1>
      <input
        type="text"
        className="w-[45vw] border-[4px] border-black p-3 rounded-md "
      />
      <h1 className="text-[3em] font-extrabold mt-7 ">Stock News</h1>
    </div>
  );
}

export default Stock;
