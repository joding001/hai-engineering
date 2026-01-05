"use client";

import Image from "next/image";
import Logo from "@/components/logo";
import MoreBtn from "@/components/moreBtn";
import DropDownMenu from "@/components/dropDownMenu";
import HeaderTitle from "@/components/headerTitle";
import SDLogo from "@/components/SDLogo";
import MOWRLogo from "@/components/MOWRLogo";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

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
