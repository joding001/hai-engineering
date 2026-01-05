"use client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import Header from "../Header";
import Business from "../Business";



export default function Home() {


  return (
    <>
      {/****** 헤더 ******/}
      <Header></Header>


      {/******* 사업분야 ******/}
      <Business></Business>
    </>
  );
}
