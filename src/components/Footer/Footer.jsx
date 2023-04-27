import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="flex items-center justify-center h-[5vh] w-full absolute bottom-0">
        <center className="text-slate-400">Copyright &#169; {year}</center>
      </div>
    </>
  );
};

export default Footer;
