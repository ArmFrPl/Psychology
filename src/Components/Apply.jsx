import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

export const Apply = () => {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState('amd');
  const [language, setLanguage] = useState('');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log(language);
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('universityDiploma').addEventListener('change', function() {
      document.getElementById('universityDiplomaName').textContent = this.files[0] ? this.files[0].name : 'Choose a file...';
    });
    document.getElementById('trainingCertifications').addEventListener('change', function() {
      document.getElementById('trainingCertificationsName').textContent = this.files[0] ? this.files[0].name : 'Choose a file...';
    });
  });

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <form className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.firstName')}/>
              <label htmlFor="username"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.firstName')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.lastName')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.lastName')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.phoneNumber')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.phoneNumber')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.email')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.email')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.password')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.password')}</label>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="file" id="universityDiploma" name="universityDiploma"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 opacity-0 absolute top-0 left-0"
                     placeholder=" " />
              <label htmlFor="universityDiploma"
                     className="absolute cursor-pointer left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.universityDiploma')}</label>
              <div className="peer h-10 w-full rounded-lg ring-2 ring-gray-500 focus-within:ring-sky-600 focus-within:border-rose-600 flex items-center px-2">
                <span className="text-gray-500" id="universityDiplomaName">{t('applicationForm.chooseFile')}</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="file" id="trainingCertifications" name="trainingCertifications"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 opacity-0 absolute top-0 left-0"
                     placeholder=" " />
              <label htmlFor="trainingCertifications"
                     className="absolute cursor-pointer left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.trainingCertifications')}</label>
              <div className="peer h-10 w-full rounded-lg ring-2 ring-gray-500 focus-within:ring-sky-600 focus-within:border-rose-600 flex items-center px-2">
                <span className="text-gray-500" id="trainingCertificationsName">{t('applicationForm.chooseFile')}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <select
                  id="language"
                  name="language"
                  value={language}
                  onChange={handleLanguageChange}
                  className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="">
                  <option value="" disabled selected hidden></option>
                  <option value="am">Armenian</option>
                  <option value="en">English</option>
                  <option value="ru">Russian</option>
                  <option value="fr">French</option>
                  <option value="dе">German</option>
                  <option value="es">Spanish</option>
                  <option value="ar">Arabic</option>
                  <option value="fa">Persian</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="currency"
                       className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.languages')}</label>
              </div>
            <div className={`bg-white rounded-lg mt-4 ${language !== 'other' ? 'hidden' : ''}`}>
              <div className="relative bg-inherit">
                <input type="text" id="otherLang" name="otherLang"
                       className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                       placeholder={t('applicationForm.languagesOther')}/>
                <label htmlFor="otherLang"
                       className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.languagesOther')}</label>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-grow bg-white p-4 rounded-lg">
              <div className="relative bg-inherit">
                <input type="number" id="amount" name="amount"
                       className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                       placeholder={t('applicationForm.chargePerSession')}/>
                <label htmlFor="amount"
                       className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.chargePerSession')}</label>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg">
              <div className="relative bg-inherit">
                <select
                  id="currency"
                  name="currency"
                  value={currency}
                  onChange={handleCurrencyChange}
                  className="peer bg-transparent h-10 w-[90px] rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  placeholder="">
                  <option value="" disabled selected hidden></option>
                  <option value="amd">AMD</option>
                  <option value="usd">USD</option>
                </select>
                <label htmlFor="currency"
                       className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Currency</label>
              </div>
            </div>
            </div>
          </div>
          <p className="text-gray-600 !mt-0 ml-4 text-left">{t('applicationForm.paymentNote')}</p>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input type="text" id="username" name="username"
                     className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                     placeholder={t('applicationForm.refuseDemographics')}/>
              <label htmlFor="username"
                     className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{t('applicationForm.refuseDemographics')}</label>
            </div>
          </div>
          <Link to="/joinus/thankyou">
            <button className="bg-[#7EC6AD] hover:bg-[#6dad97] w-[140px] h-[54px] text-white font-bold py-2 px-4 rounded-xl mt-10">
              {t('applicationForm.applyButton')}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
