import React, {useEffect, useRef, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import { BookingProfile } from './BookingProfile';
import { Filters } from './Filters';

const initialTherapists = [
  { name: 'Sangmu Patel', rate: 30, imgSrc: 'path/to/image1.jpg', available: true, budget: '10000-15000', languages: ['English', 'Armenian'], therapy: 'CBT', issue: 'Anxiety' },
  { name: 'Guanyu Hsu', rate: 25, imgSrc: 'path/to/image2.jpg', available: false, budget: '15000-20000', languages: ['English'], therapy: 'EMDR', issue: 'Depression' },
  { name: 'Fayroz Rafiq', rate: 40, imgSrc: 'path/to/image3.jpg', available: true, budget: '20000-25000', languages: ['Russian'], therapy: 'Existential', issue: 'Trauma' },
  { name: 'Easd Aslani', rate: 12, imgSrc: 'path/to/image4.jpg', available: true, budget: 'Up to 10000', languages: ['Armenian'], therapy: 'CBT', issue: 'Anxiety' },
  { name: 'Karim Debayi', rate: 20, imgSrc: 'path/to/image5.jpg', available: false, budget: '15000-20000', languages: ['English', 'Russian'], therapy: 'Existential', issue: 'Depression' },
];

export const Therapists = () => {
  const { name } = useParams();
  const stateName = "Sangmu Patel";
  const [therapists, setTherapists] = useState(initialTherapists);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    availability: true,
    budget: '',
    language: '',
    therapy: '',
    issue: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const filtersRef = useRef(null);


  const handleClickOutside = (event) => {
    if (filtersRef.current && !filtersRef.current.contains(event.target)) {
      setShowFilters(false);
    }
  };

  useEffect(() => {
    if (showFilters) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilters]);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAvailability = !filters.availability || therapist.available === filters.availability;
    const matchesBudget = !filters.budget || therapist.budget === filters.budget;
    const matchesLanguages = !filters.language || therapist.languages.includes(filters.language);
    const matchesTherapy = !filters.therapy || therapist.therapy === filters.therapy;
    const matchesIssue = !filters.issue || therapist.issue === filters.issue;

    return matchesSearch && matchesAvailability && matchesBudget && matchesLanguages && matchesTherapy && matchesIssue;
  });

  const getName = () => {
    switch (name) {
      case stateName:
        return <BookingProfile />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-4xl text-[#362d64] font-bold">Our Therapists</h1>
        <div className='flex mb-6 justify-between'>
          <div className="flex justify-between items-center !justify-end">
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-transparent text-[#362d64] py-1 px-4 rounded-2xl"
                onClick={() => setShowFilters(!showFilters)}
              >
                <img src="/Images/filtersImage.png" alt="filters" className='w-[20px]' />
                <span className='text-[28px] font-alike'>Filters</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center !justify-end">
            <div className="relative">
              <input
                type="text"
                className="border-2 border-[#362d64] rounded-2xl py-1 pl-8 pr-4"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <svg className="w-5 h-5 text-gray-800 absolute left-2 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4a4 4 0 100 8 4 4 0 000-8zm2 14h4m2 0h6m-6-4h.01M10 10H8m-2 0H4m6 4h.01M8 4H4m6 8h2"></path>
              </svg>
            </div>
          </div>
        </div>
        {showFilters && <Filters onFilterChange={handleFilterChange} filtersRef={filtersRef} />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTherapists.map((therapist) => (
            <Link to={`/therapists/${therapist.name}`} key={therapist.name}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={therapist.imgSrc} alt={therapist.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-[#7C8CFD]">{therapist.name}</h2>
                  <p className="text-gray-600">{therapist.rate}/session</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
