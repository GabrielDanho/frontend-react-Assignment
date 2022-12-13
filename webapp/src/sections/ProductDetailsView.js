import React from 'react'
import NavSection from "../sections/NavSection";
import FooterSection from "../sections/FooterSection";
import { useParams } from 'react-router-dom';

const ProductDetailsView = () => {
    const params = useParams()


  return (
      <>
      <NavSection />
      <div className="container mt-5">
        <h1>{params.name}</h1>
      </div>
      <FooterSection />
      </>
  )
}

export default ProductDetailsView