import React from "react";
import BreadcrumbSection from "../sections/BreadscrumbSection";
import MapSection from "../sections/MapSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import NavSection from "../sections/NavSection";

 
const ContactView = () => {
  window.top.document.title = "Fixxo | Contacts";

  return (
    <>
      <NavSection />
      <BreadcrumbSection />
      <MapSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default ContactView
