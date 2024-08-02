import React from 'react';

export const BookingProfile = () => {
  const person = {
    name: "Sangmu Patel",
    description: "For over a decade, I have provided high-quality care for hundreds of clients\nwho can attest to my focus, diligence, and genuine passion for therapy..",
    specializations: "Anxiety, Depression, Trauma...",
    approach: "Existential, CBT",
    trainings: ["Existential therapy - 192 hours", "EMDR Level 1 and 2 - 24 hours", "CBT - 184 hours"],
    education: ["Bachelor’s degree in Psychology - YSU", "Master’s degree in Clinical Psychology - YSU"],
    sessions: "28",
    languages: ["Armenian", "English", "Russian"],
    price: "30",
    sessLength: "50"
  }


  return (
    <div className=" bg-white p-6 rounded-lg">
      <div className="flex items-start">
        <div className='w-[70%] mr-20'>
          <h1 className="font-coustard text-[54px] text-[#362d64] mb-2">{person.name}</h1>
          <p className="font-alike text-[24px] text-[#362d64] mb-4 text-left">{person.description}</p>
          <div className='ml-12'>
            <div className='text-[24px] text-[#362d64] text-left'>
              <strong>Specializes in:</strong> <span className="text-gray-600">{person.specializations}</span>
            </div>
            <div className='text-[24px] text-[#362d64] text-left'>
              <strong>Therapy approach:</strong> <span className="text-gray-600">{person.approach}</span>
            </div>
            <div className="mt-4 text-[24px] text-[#362d64] text-left">
              <h2 className="font-semibold text-[24px] text-[#362d64] text-left">Trainings</h2>
              <ul className="list-disc pl-5 text-[24px] text-[#362d64] text-left">
                {person.trainings.map((training, index) => (
                  <li key={index}>{training}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-[24px] text-[#362d64] text-left">Education</h2>
              <ul className="list-disc pl-5 text-[24px] text-[#362d64] text-left">
                {person.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='!mr-28 w-[30%]'>
          <img src='https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg' alt="Profile" className="w-[330px] h-[330px]"/>
          <div className="mt-4 flex items-start flex-col">
            <div className="flex items-center mb-2">
              <img src="Images/done.png" alt="" className='w-[25px] mr-4'/>
              <span className='text-[20px] text-[#362d64] font-alike'>Provided {person.sessions} sessions on Pattug</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="4.0 4.0 40.0 40.0"
                zoomAndPan="magnify"
                width="25px"
                height="25px"
                className='mr-4'
                style={{ fill: 'rgb(67, 64, 143)' }}
              >
                <g id="__id158_sn1zpr8vfm">
                  <path
                    d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z"
                    style={{ fill: 'inherit' }}
                  />
                </g>
              </svg>
              <span className='text-[20px] text-[#362d64] font-alike'>{person.languages.join(', ')}</span>
            </div>
          </div>
          <div className="mt-4 w-full text-center">
            <button className="bg-[#43408f] text-white p-[15px] font-bold rounded-full hover:bg-[#2a2859] focus:outline-none focus:ring-2 focus:ring-[#2a2859] focus:ring-opacity-50">
              Book a session
            </button>
            <p className="mt-2 text-[20px] text-[#362d64] font-alike">${person.price}/session ({person.sessLength} minutes)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
