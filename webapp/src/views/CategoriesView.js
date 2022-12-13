import FooterSection from "../sections/FooterSection";
import NavSection from "../sections/NavSection";

const CategoriesView = () => {
    window.top.document.title = "Fixxo | Categories";
  
    return <>
       <NavSection />
       <FooterSection />
    </>
  }
  
  export default CategoriesView;