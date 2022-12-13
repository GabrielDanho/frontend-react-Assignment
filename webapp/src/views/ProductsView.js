import React from "react";
import FooterSection from "../sections/FooterSection";
import NavSection from "../sections/NavSection";

const ProductsView = () => {
  window.top.document.title = "Fixxo | Products";

  return <>
     <NavSection />
     <FooterSection />
  </>
}

export default ProductsView;