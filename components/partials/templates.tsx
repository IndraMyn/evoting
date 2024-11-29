import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface ITemplates {
  children: ReactNode;
}

export const Templates = (props: ITemplates) => {
  return (
    <>
      <div className="w-full h-20 flex bg-primary justify-center sticky top-0 z-50 drop-shadow-sm mb-5">
        <Navbar />
      </div>

      {props.children}

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};
