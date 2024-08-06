import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {fetchTherapistsData} from "../actions";
import {useDispatch, useSelector} from "react-redux";

export const TherapistProfile = () => {
  const [sessLength, setSessLength] = useState('');
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [editMode, setEditMode] = useState({
    firstName: false,
    lastName: false,
    email: false,
    description: false,
    approach: false,
    specializations: false,
    price: false,
    trainings: false,
    education: false,
    languages: false,
    profileImage: false,
  });
  const [therInfo, setTherInfo] = useState({
    firstName: 'Something',
    lastName: 'Something',
    email: '',
    description:
      'For over a decade, I have provided high-quality care for hundreds of clients who can attest to my focus, diligence, and genuine passion for therapy..',
    approach: 'Existential, CBT',
    trainings: ['Existential therapy - 192 hours', 'EMDR Level 1 and 2 - 24 hours', 'CBT - 184 hours'],
    education: ["Bachelor’s degree in Psychology - YSU", "Master’s degree in Clinical Psychology - YSU"],
    specializations: 'Anxiety, Depression, Trauma...',
    languages: ['Armenian', 'English', 'Russian'],
    price: '30',
    sessLength: ['30 min', '45 min', '1 hour'],
    profileImage: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
  });
  // useEffect(() => {
  //   console.log(st)
  // });

  const togglePersonalInfo = () => {
    setShowPersonalInfo(!showPersonalInfo);
  };

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTherInfo({ ...therInfo, [name]: value });
  };

  const handleSubmit = (e, field) => {
    if (e.key === 'Enter') {
      setEditMode({ ...editMode, [field]: false });
    }
    console.log(therInfo);
  };

  const handleListChange = (e, field, index) => {
    const newList = [...therInfo[field]];
    newList[index] = e.target.value;
    setTherInfo({ ...therInfo, [field]: newList });
  };

  const handleAddItem = (field) => {
    setTherInfo({ ...therInfo, [field]: [...therInfo[field], ''] });
  };

  const handleRemoveItem = (field, index) => {
    const newList = therInfo[field].filter((_, i) => i !== index);
    setTherInfo({ ...therInfo, [field]: newList });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setTherInfo({...therInfo, profileImage: event.target.result});
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex items-start">
        <div className="w-[70%] mr-20">
          <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={togglePersonalInfo}>
            <h1 className="text-[24px] text-[#362D64] font-bold">
              Personal information <FontAwesomeIcon icon={showPersonalInfo ? faAngleUp : faAngleDown} />
            </h1>
          </div>
          <div className={`transition-all duration-200 ${showPersonalInfo ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            <div className="mb-4 flex flex-col justify-center pl-6 items-start">
              <p className="flex justify-center text-[#362D64] items-center text-[20px]">
                <strong>First Name:</strong>
                {editMode.firstName ? (
                  <input
                    type="text"
                    name="firstName"
                    value={therInfo.firstName}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleSubmit(e, 'firstName')}
                    className="ml-2 border rounded p-1"
                  />
                ) : (
                  <span className="ml-2">{therInfo.firstName}</span>
                )}
                <img
                  src="/Images/edit.png"
                  alt="edit"
                  className="w-[30px] cursor-pointer"
                  onClick={() => handleEditClick('firstName')}
                />
              </p>
              <p className="flex justify-center text-[#362D64] items-center text-[20px]">
                <strong>Last Name:</strong>
                {editMode.lastName ? (
                  <input
                    type="text"
                    name="lastName"
                    value={therInfo.lastName}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleSubmit(e, 'lastName')}
                    className="ml-2 border rounded p-1"
                  />
                ) : (
                  <span className="ml-2">{therInfo.lastName}</span>
                )}
                <img
                  src="/Images/edit.png"
                  alt="edit"
                  className="w-[30px] cursor-pointer"
                  onClick={() => handleEditClick('lastName')}
                />
              </p>
              <p className="flex justify-center text-[#362D64] items-center text-[20px]">
                <strong>Email:</strong>
                {editMode.email ? (
                  <input
                    type="email"
                    name="email"
                    value={therInfo.email}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleSubmit(e, 'email')}
                    className="ml-2 border rounded p-1"
                  />
                ) : (
                  <span className="ml-2">{therInfo.email}</span>
                )}
                <img
                  src="/Images/edit.png"
                  alt="edit"
                  className="w-[30px] cursor-pointer"
                  onClick={() => handleEditClick('email')}
                />
              </p>
            </div>
            <div className="flex items-center mb-4 cursor-pointer">
              <h1 className="text-[24px] text-[#362D64] font-bold">About You</h1>
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('description')}
              />
            </div>
            <p className="font-alike text-[24px] text-[#362D64] my-4 text-left">
              {editMode.description ? (
                <textarea
                  type="text"
                  name="description"
                  value={therInfo.description}
                  onChange={handleInputChange}
                  onKeyPress={(e) => handleSubmit(e, 'description')}
                  className="ml-2 border rounded p-1 w-full min-h-32"
                />
              ) : (
                <span className="ml-2">{therInfo.description}</span>
              )}
            </p>
          </div>
          <div>
            <div className="text-[24px] text-[#362D64] text-left flex items-center">
              <strong>Therapy approach:</strong>
              {editMode.approach ? (
                <input
                  type="text"
                  name="approach"
                  value={therInfo.approach}
                  onChange={handleInputChange}
                  onKeyPress={(e) => handleSubmit(e, 'approach')}
                  className="ml-2 border rounded p-1 w-full"
                />
              ) : (
                <span className="ml-2">{therInfo.approach}</span>
              )}
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('approach')}
              />
            </div>
            <div className="mt-4 text-[24px] text-[#362D64] text-left">
              <div className='flex justify-start items-center'>
                <h2 className="font-semibold text-[24px] text-[#362D64] text-left">Trainings</h2>
                <img
                  src="/Images/edit.png"
                  alt="edit"
                  className="w-[30px] cursor-pointer mt-2"
                  onClick={() => handleEditClick('trainings')}
                />
              </div>
              <ul className="list-disc pl-5 text-[24px] text-[#362D64] text-left ml-5">
                {therInfo.trainings.map((training, index) => (
                  <li key={index}>
                    {editMode.trainings ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={training}
                          onChange={(e) => handleListChange(e, 'trainings', index)}
                          onKeyPress={(e) => handleSubmit(e, 'trainings')}
                          className="ml-2 border rounded p-1 flex-grow"
                        />
                        <button
                          onClick={() => handleRemoveItem('trainings', index)}
                          className="ml-2 bg-red-800 text-white p-1 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <span>{training}</span>
                    )}
                  </li>
                ))}
              </ul>
              {editMode.trainings && (
                <button
                  onClick={() => handleAddItem('trainings')}
                  className="mt-2 bg-[#362D64] text-white h-[40px] w-[125px] text-[16px] p-2 rounded"
                >
                  Add Training
                </button>
              )}
            </div>
            <div className="text-[24px] text-[#362D64] text-left mt-4 flex items-center">
              <strong>Specializes in:</strong>
              {editMode.specializations ? (
                <input
                  type="text"
                  name="specializations"
                  value={therInfo.specializations}
                  onChange={handleInputChange}
                  onKeyPress={(e) => handleSubmit(e, 'specializations')}
                  className="ml-2 border rounded p-1 w-full"
                />
              ) : (
                <span className="ml-2">{therInfo.specializations}</span>
              )}
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('specializations')}
              />
            </div>
            <div className="mt-4">
              <div className='flex justify-start items-center'>
                <h2 className="font-semibold text-[24px] text-[#362D64] text-left">Education</h2>
                <img
                  src="/Images/edit.png"
                  alt="edit"
                  className="w-[30px] cursor-pointer mt-2"
                  onClick={() => handleEditClick('education')}
                />
              </div>
              <ul className="list-disc pl-5 text-[24px] text-[#362D64] text-left ml-5">
                {therInfo.education.map((edu, index) => (
                  <li key={index}>
                    {editMode.education ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={edu}
                          onChange={(e) => handleListChange(e, 'education', index)}
                          onKeyPress={(e) => handleSubmit(e, 'education')}
                          className="ml-2 border rounded p-1 flex-grow"
                        />
                        <button
                          onClick={() => handleRemoveItem('education', index)}
                          className="ml-2 bg-red-800 text-white p-1 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <span>{edu}</span>
                    )}
                  </li>
                ))}
              </ul>
              {editMode.education && (
                <button
                  onClick={() => handleAddItem('education')}
                  className="mt-2 bg-[#362D64] text-white flex h-[40px] w-[125px] text-[16px] p-2 rounded"
                >
                  Add Education
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="!mr-28 w-[30%]">
          <div className='flex flex-col items-center'>
            <img
              src={therInfo.profileImage}
              alt="Profile"
              className="w-[330px] h-[330px]"
            />
            <div className="mt-4">
              <label
                htmlFor="profileImage"
                className="text-[#362D64] px-4 py-2 text-[20px] cursor-pointer"
              >
                Edit your profile picture
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
          <div className="mt-4 flex items-start flex-col">
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
                className="mr-4"
                style={{ fill: 'rgb(67, 64, 143)' }}
              >
                <g id="__id158_sn1zpr8vfm">
                  <path
                    d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z"
                    style={{ fill: 'inherit' }}
                  />
                </g>
              </svg>
              {editMode.languages ? (
                <div className="flex flex-wrap items-center">
                  {therInfo.languages.map((lang, index) => (
                    <div key={index} className="flex items-center mr-2">
                      <input
                        type="text"
                        value={lang}
                        onChange={(e) => handleListChange(e, 'languages', index)}
                        onKeyPress={(e) => handleSubmit(e, 'languages')}
                        className="ml-2 border rounded p-1"
                      />
                      <button
                        onClick={() => handleRemoveItem('languages', index)}
                        className="ml-2 bg-red-800 text-white p-1 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddItem('languages')}
                    className="mt-2 bg-[#362D64] text-white p-2 rounded"
                  >
                    Add Language
                  </button>
                </div>
              ) : (
                <span className="text-[20px] text-[#362D64] font-alike">{therInfo.languages.join(', ')}</span>
                )}
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('languages')}
              />
            </div>
          </div>
          <div className="mt-4 w-full text-center">
            <p className="mt-2 text-[20px] text-[#362D64] font-alike flex items-center">
              {editMode.price ? (
                <input
                  type="number"
                  name="price"
                  value={therInfo.price}
                  onChange={handleInputChange}
                  onKeyPress={(e) => handleSubmit(e, 'price')}
                  className="ml-2 border rounded p-1 w-[80px]"
                />
              ) : (
                `$${therInfo.price}/session`
              )}
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('price')}
              />
            </p>
            <p className="mt-2 text-[20px] text-[#362D64] font-alike w-max flex">
              Edit the length of your sessions
              <select
                value={sessLength}
                onChange={(e) => setSessLength(e.target.value)}
                className="peer bg-transparent h-8 w-[100px] rounded-lg text-[#362D64] placeholder-transparent ring-2 ml-4 px-2 ring-[#362D64] focus:ring-sky-600 focus:outline-none focus:border-rose-600"
              >
                {therInfo.sessLength.map((len, i) => (
                  <option value={len} key={i}>
                    {len}
                  </option>
                ))}
              </select>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
