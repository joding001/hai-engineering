"use client";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import Header from "./Header";
import Business from "./Business";
import Nev from '../nev';



export default function Home() {


  return (
    <>
      {/****** 네비게이션 ******/}
      <Nev />

      {/****** 헤더 ******/}
      <Header />


      {/******* 사업분야 ******/}
      <Business />

      {/******* 뉴스 ******/}
      
    </>
  );
}
