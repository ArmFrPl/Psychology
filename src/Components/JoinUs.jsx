import React from 'react';
import '../Styles/Navbar.css'
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export const JoinUs = () => {
  const { t } = useTranslation();

  return(
    <>
      <div className="flex items-center p-20 justify-center bg-[#7C8CFD] text-white text-center font-alike">
        <div className="">
          <h1 className="text-[53px] font-bold mb-2 whitespace-pre-line leading-[1.4]">{t("joinus.title")}</h1>
          <p className="text-[26px] font-bold">{t("joinus.par")}</p>
        </div>
        <div className="mt-4">
          <img src="/Images/joinus.png" alt="Hands" className="w-[30rem] ml-10" />
        </div>
      </div>
      <div className="flex items-center p-20 justify-center bg-[#7C8CFD] text-white text-center font-alike">
        <div className="p-8 rounded-lg text-[28px]">
          <h1 className="text-[45px] font-bold mb-10">{t('joinus.title2')}</h1>
          <p className="mb-4">
            {t('joinus.description')}
          </p>
          <p className="mb-4 text-left">
            <strong>{t('joinus.benefitsTitle')}</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-left">
            <li>{t('joinus.benefit1')}</li>
            <li>{t('joinus.benefit2')}</li>
            <li>{t('joinus.benefit3')}</li>
            <li>{t('joinus.benefit4')}</li>
            <li>{t('joinus.benefit5')}</li>
          </ul>
          <p className="mb-4 text-left">
            {t('joinus.qualityNote')}
          </p>
          <p className="mb-4 text-left">
            {t('joinus.last')}
          </p>
          <Link to="/joinus/apply">
            <button className="bg-[#7EC6AD] hover:bg-[#6dad97] w-[185px] h-[60px] mt-8 text-white font-bold py-2 px-4 rounded-full text-[24px] float-left">
              {t('joinus.applyButton')}
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}