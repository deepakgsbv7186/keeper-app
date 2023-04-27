import React from "react";

const Note = () => {
  return (
    <>
      <div className="flex flex-col items-center w-[240px] bg-slate-200 rounded-md shadow-md p-2">
        <h2 className="text-[1.1em] mb-[6px] font-bold">
          This note component.
        </h2>
        <p className="text-[1.1em] mb-[6px] whitespace-pre-wrap break-words">
          Lorem ipsum dolor sit amet consec
        </p>
      </div>
    </>
  );
};

export default Note;

// .note {
//   background: #fff;
//   border-radius: 7px;
//   box-shadow: 0 2px 5px #ccc;
//   padding: 10px;
//   width: 240px;
//   margin: 16px;
//   float: left;
// }
// .note h1 {
//   font-size: 1.1em;
//   margin-bottom: 6px;
// }
// .note p {
//   font-size: 1.1em;
//   margin-bottom: 10px;
//   white-space: pre-wrap;
//   word-wrap: break-word;
// }
