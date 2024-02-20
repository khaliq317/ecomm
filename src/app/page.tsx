"use client"
import Image from "next/image";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Blog from "@/components/blogs"
import Promo from "@/components/promo"
import React from "react";



export default function Home() {
  return (
    <main>    
<Header/>
<Promo/>
    
     <Blog/>
     
<Footer/>
    </main>
  );
}
