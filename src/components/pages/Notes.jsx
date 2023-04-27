import React from "react";
import Note from "../Note/Note";

const Notes = () => {
  return (
    <>
      <div className="w-[90%] h-[85vh] mx-auto my-[20px]">
        <div className="flex flex-wrap justify-center gap-4 w-full ">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </>
  );
};

export default Notes;
