import { ReactNode } from "react";
import Navbar from "./navbar";

interface ITemplates {
    children: ReactNode;
} 

export const Templates = (props: ITemplates) => {
  return (
    <>
      <div className="w-full h-20 flex bg-red-100 items-center justify-center sticky top-0 z-50 drop-shadow-sm mb-5">
        <Navbar />
      </div>

      {props.children}
    </>
  );
};
