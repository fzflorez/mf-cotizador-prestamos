import React from "react";

export default function Button({ operator, fn }) {
  return (
    <button
      type="button"
      className=" h-10 w-10 flex justify-center font-bold text-white text-2xl bg-green-600 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-600"
      onClick={fn}
    >
      {operator}
    </button>
  );
}
