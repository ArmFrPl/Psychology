import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Filters = ({ onFilterChange, filtersRef }) => {
  const [availability, setAvailability] = useState(true);
  const [budget, setBudget] = useState('');
  const [therapy, setTherapy] = useState('');
  const [issue, setIssue] = useState('');
  const [language, setLanguage] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    handleFilterChange();
  }, [availability, budget, language, therapy, issue]);

  const handleFilterChange = () => {
    onFilterChange({
      availability,
      budget,
      language,
      therapy,
      issue,
    });
  };

  return (
    <div className="p-4 bg-[#362d64] rounded-3xl mb-6 w-80 absolute top-[230px] left-[140px] text-white" ref={filtersRef}>
      <div className="mb-4">
        <strong>Availability</strong>
        <div className='flex'>
          <input type="checkbox"
                 checked={availability}
                 onChange={() => setAvailability(!availability)}
                 className="peer sr-only opacity-0" id="toggle"/>
          <label htmlFor="toggle"
                 className="relative flex h-6 w-11 mr-4 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#7b66e5] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-[#7b66e5]">
            <span className="sr-only">Enable</span>
          </label>
          Available in the next 2 weeks
        </div>
      </div>

      <div className="mb-4">
        <strong>Budget</strong>
        <div className="flex flex-col">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="peer bg-transparent h-8 w-full rounded-lg text-white placeholder-transparent ring-2 mt-2 px-2 ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          >
            <option value="" disabled hidden>{t('Select Budget')}</option>
            <option value="Up to 10000">Up to 10000 AMD/session</option>
            <option value="10000-15000">10000-15000 AMD/session</option>
            <option value="15000-20000">15000-20000 AMD/session</option>
            <option value="20000-25000">20000-25000 AMD/session</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <strong>Languages</strong>
        <div className="flex flex-col">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="peer bg-transparent h-8 w-full rounded-lg text-white placeholder-transparent ring-2 mt-2 px-2 ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          >
            <option value="" disabled hidden>{t('Select Language')}</option>
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Armenian">Armenian</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <strong>Therapy Approach</strong>
        <div className="flex flex-col">
          <select
            value={therapy}
            onChange={(e) => setTherapy(e.target.value)}
            className="peer bg-transparent h-8 w-full rounded-lg text-white placeholder-transparent ring-2 mt-2 px-2 ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          >
            <option value="" disabled hidden>{t('Select Therapy Approach')}</option>
            <option value="CBT">CBT</option>
            <option value="EMDR">EMDR</option>
            <option value="Existential">Existential</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <strong>Issues</strong>
        <div className="flex flex-col">
          <select
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="peer bg-transparent h-8 w-full rounded-lg text-white placeholder-transparent ring-2 mt-2 px-2 ring-white focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          >
            <option value="" disabled hidden>{t('Select Issue')}</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Depression">Depression</option>
            <option value="Trauma">Trauma</option>
          </select>
        </div>
      </div>
    </div>
  );
};
