import React, {useEffect} from 'react';
import '../Styles/Navbar.css'
import {useTranslation} from "react-i18next";
import LangSwitch from "./LangSwitch";
import {SET_LOGGED_OUT} from "../actions/types";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn} from "../actions";
import {Link} from "react-router-dom";

export const Navbar = ({page}) => {
  const {t, i18n} = useTranslation();
  // const st = useSelector(state => state)
  const loggedIn = useSelector(state => state.loggedIn.loggedIn);
  const status = useSelector(state => state.status.status);
  const dispatch = useDispatch();
  const navColor = page==='blog' ? '[#efbc75]' : '[#7C8CFD]';
  // const navTextColor = page==='blog' || page==='therapists' ? '[#7C8CFD]' : page==='therapists' ? '[#7C8CFD]' : '[#7C8CFD]';

  const logOut = () => {
    setIsLoggedIn().then(() => {dispatch({type: SET_LOGGED_OUT})})
    window.location.assign('/')
  };

  return(
    <header className={`h-24 sm:h-32 flex items-center z-30 w-full bg-${navColor}`}>
      <div className="container mx-auto px-0 flex items-center justify-between">
        <div className="relative right-10">
          <Link to="/">
            <img src={`Images/${t("logo.src")}`} alt="Logo" className='w-[160px]'/>
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="font-alike text-white text-[23px] dark:text-white lg:flex items-center hidden">
            <Link to="/therapists" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.find")}
            </Link>
            <Link to="/blog" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.blog")}
            </Link>
            <Link to="/joinus" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.join")}
            </Link>
            <Link to="/contactus" className="py-2 px-4 flex hover:text-[#362D64]">
              {t("nav.contact")}
            </Link>
            {
              loggedIn ?
                <div className="group relative cursor-pointer py-2 w-max">
                  <div className="flex items-center justify-between px-4">
                    <button className="menu-hover py-2 px-4 flex hover:text-[#362D64]"><p onClick={logOut}>Log Out</p></button>
                  </div>
                  <Link to={status === 'user' ? '/userprof' : status === 'therapist' ? '/therprof' : ''}
                    className="invisible absolute z-50 flex w-[150px] cursor-pointer bg-white flex-col py-1 px-4 text-[#362D64] hover:text-[#131024] shadow-xl group-hover:visible">
                    Profile
                  </Link>
                </div>
                :
              <Link to="/signup" className="py-2 px-4 flex hover:text-[#362D64]">
                {t("nav.signup")}
              </Link>
            }
            <a href="#" className="py-2 px-1 flex text-[12px] hover:text-[#362D64] relative bottom-6 left-10">
              <LangSwitch />
            </a>
          </nav>
          <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-white dark:bg-white mb-1">
                    </span>
            <span className="w-6 h-1 bg-white dark:bg-white mb-1">
                    </span>
            <span className="w-6 h-1 bg-white dark:bg-white mb-1">
                    </span>
          </button>
        </div>
      </div>
    </header>
  )
}