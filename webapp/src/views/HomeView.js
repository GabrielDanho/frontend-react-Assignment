import React, {useState} from "react";
import BannersSection from "../sections/BannersSection";
import CustomerSection from "../sections/CustomerSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import ProductGridSection from "../sections/ProductGridSection";


const HomeView = () => {
  window.top.document.title = "Home";

  const [featuredProducts, setFeaturedProducts] = useState([
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5634667/pexels-photo-5634667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9968416/pexels-photo-9968416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9900327/pexels-photo-9900327.png?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9810719/pexels-photo-9810719.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
  ])

  const [topProducts, setTopProducts] = useState([
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/5634667/pexels-photo-5634667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9968416/pexels-photo-9968416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9900327/pexels-photo-9900327.png?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9810719/pexels-photo-9810719.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
  ])

  return <>
      <HeaderSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection title="Top Products" products={topProducts} />
      <BannersSection />
      <CustomerSection />
      <FooterSection />
      </>
}

export default HomeView;
