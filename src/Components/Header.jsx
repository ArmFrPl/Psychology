import React from 'react';
import {useTranslation} from "react-i18next";
import '../Styles/Navbar.css'
import {Navbar} from "./Navbar";
import {AboutUs} from "./AboutUs";

export const Header = () => {
  const { t, i18n } = useTranslation();

  return(
    <main className="dark:bg-gray-800 bg-[#7C8CFD] relative h-screen">
      <div className="bg-[#7C8CFD] dark:bg-white flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-2 flex relative py-32">
          <div className="w-2/3 flex flex-col relative z-20">
            <h1
              className="font-coustard text-[70px] text-left font-black flex flex-col whitespace-pre-line leading-none dark:text-white text-[#fff8ef]">
              {t('header.title')}
            </h1>
            <p className="text-[25px] text-[#FFF8EF] dark:text-white text-left whitespace-pre-line">
              {t('header.par')}
            </p>
            <div className="flex mt-16">
              <a href="#"
                 className="uppercase py-2.5 px-4 rounded-2xl w-40 bg-white border-2 border-transparent text-[#362D64] text-sm font-bold mr-4 hover:bg-[#362D64] hover:text-white">
                {t('header.button')}
              </a>
            </div>
          </div>
          <div className="hidden sm:block relative">
            <img src="/Images/homepage.png" className="w-[700px] m-auto relative bottom-[40px]"/>
          </div>
        </div>
      </div>
      <AboutUs />
    </main>
  )
}