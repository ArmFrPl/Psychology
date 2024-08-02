import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp, faCalendarDays, faVideo} from "@fortawesome/free-solid-svg-icons";

const appointments = {
  date: "Sunday June 30, 1PM",
  therName: "Sangmu"
}

export const UserProfile = () => {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [editMode, setEditMode] = useState({
    firstName: false,
    lastName: false,
    email: false
  });

  const [userInfo, setUserInfo] = useState({
    firstName: 'Something',
    lastName: 'Something',
    email: 'something@gmail.com'
  });
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);
  const [isRegularAppointment, setIsRegularAppointment] = useState(false);

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log('Login Failed:', error)
  // });
  //
  // useEffect(
  //   () => {
  //     console.log(user)
  //     if (user) {
  //       axios
  //         .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: 'application/json'
  //           }
  //         })
  //         .then((res) => {
  //           setProfile(res.data);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   },
  //   [ user ]
  // );
  //
  // // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  const togglePersonalInfo = () => {
    setShowPersonalInfo(!showPersonalInfo);
  };

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e, field) => {
    if (e.key === 'Enter') {
      setEditMode({ ...editMode, [field]: false });
    }
  };

  const handleReminderToggle = () => {
    setIsReminderEnabled(!isReminderEnabled);
  };
  const handleRegularToggle = () => {
    setIsRegularAppointment(!isRegularAppointment);
  };

  return (
    <div className='p-10 flex justify-around'>
      {/*<h2>React Google Login</h2>*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*{profile ? (*/}
      {/*  <div>*/}
      {/*    <img src={profile.picture} alt="user image" />*/}
      {/*    <h3>User Logged in</h3>*/}
      {/*    <p>Name: {profile.given_name}</p>*/}
      {/*    <p>Email Address: {profile.email}</p>*/}
      {/*    <br />*/}
      {/*    <br />*/}
      {/*    <button onClick={logOut}>Log out</button>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <button onClick={() => login()}>Sign in with Google 🚀 </button>*/}
      {/*)}*/}
      <div className='text-[#362D64]'>
        <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={togglePersonalInfo}>
          <h1 className="text-[24px] text-[#362D64] font-bold">Personal information <FontAwesomeIcon icon={showPersonalInfo ? faAngleUp : faAngleDown} /></h1>
        </div>
        <div className={`transition-all duration-200 ${showPersonalInfo ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="mb-4 flex flex-col justify-center pl-6 items-start">
            <p className="flex justify-center items-center text-[20px]">
              <strong>First Name:</strong>
              {editMode.firstName ? (
                <input
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleInputChange}
                  onKeyPress={(e) => handleSubmit(e, 'firstName')}
                  className="ml-2 border rounded p-1"
                />
              ) : (
                <span className="ml-2">{userInfo.firstName}</span>
              )}
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('firstName')}
              />
            </p>
            <p className="flex justify-center items-center text-[20px]">
              <strong>Last Name:</strong>
              {editMode.lastName ? (
                <input
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleInputChange}
                  onKeyPress={(e) => handleSubmit(e, 'lastName')}
                  className="ml-2 border rounded p-1"
                />
              ) : (
                <span className="ml-2">{userInfo.lastName}</span>
              )}
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('lastName')}
              />
            </p>
            <p className="flex justify-center items-center text-[20px]">
              <strong>Email:</strong>
              {editMode.email ? (
                <input
                  type="text"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  onKeyPress={(e) => handleSubmit(e, 'email')}
                  className="ml-2 border rounded p-1"
                />
              ) : (
                <span className="ml-2">{userInfo.email}</span>
              )}
              <img
                src="/Images/edit.png"
                alt="edit"
                className="w-[30px] cursor-pointer"
                onClick={() => handleEditClick('email')}
              />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[20px] text-red-600" onClick>Delete my account</h1>
        </div>
      </div>
      <div className=''>
        <div className="bg-[#7c8cfc] w-[700px] h-[150px] p-4 rounded-full mb-4 flex space-x-2">
          <div className="bg-white rounded-full w-[120px] h-[120px] flex items-center justify-center"><FontAwesomeIcon icon={faCalendarDays} style={{color: "#7c8cfc", width: '80px', height: '80px'}} /></div>
          <h2 className="font-bold text-white text-[35px]">{appointments && `You have an appointment with ${appointments?.therName} on ${appointments?.date}` || `You don't have an appointment yet`}</h2>
        </div>
        <div className='flex flex-col ml-12'>
          <div className="flex items-center mb-2">
            <input type="checkbox"
                   checked={isReminderEnabled}
                   onChange={handleReminderToggle}
                   className="peer sr-only opacity-0" id="reminder"/>
            <label htmlFor="reminder"
                   className="relative flex h-6 w-11 mr-4 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#7c8cfc] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-[#7c8cfc]">
              <span className="sr-only">Enable</span>
            </label>
            <label htmlFor="reminder" className="mr-2 text-[24px] text-[#362D64]">Send me a reminder</label>
            <select id="reminder" className="border rounded p-1" disabled={!isReminderEnabled}>
              <option>1 hour before</option>
              <option>3 hours before</option>
              <option>1 day before</option>
            </select>
          </div>
          <p className="text-[#362D64] text-[24px] flex items-center cursor-pointer"><FontAwesomeIcon icon={faVideo} style={{color: "#7c8cfc", fontSize: '30px', marginRight: '25px'}} />Click here to join your session</p>
          <div className="group relative cursor-pointer py-2">
            <div className="flex items-center justify-between px-4">
              <label htmlFor="test" className="menu-hover my-2 py-2 lg:mx-4 text-[#362D64] text-[24px] cursor-pointer mt-4 text-center">
                Manage appointment
              </label>
            </div>

            <p
              className="invisible absolute z-50 flex w-[380px] left-[30px] flex-col py-1 px-4 text-[#362D64] shadow-xl group-hover:visible">

              <a href='#' className="my-2 text-left list-item py-1 font-semibold hover:text-[#362D64] md:mx-2">
                Reschedule appointment
              </a>
              <a href='#' className="my-2 text-left list-item py-1 font-semibold hover:text-[#362D64] md:mx-2">
                <p className='flex'>
                  Make this a regular appointment
                  <input type="checkbox"
                         checked={isRegularAppointment}
                         onChange={handleRegularToggle}
                         className="peer sr-only opacity-0" id="regular"/>
                  <label htmlFor="regular"
                         className="relative flex h-6 w-11 ml-4 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#7c8cfc] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-[#7c8cfc]">
                    <span className="sr-only">Enable</span>
                  </label>
                </p>
              </a>
              <a href='#' className="my-2 text-left list-item py-1 font-semibold hover:text-[#362D64] md:mx-2">
                Cancel appointment
              </a>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}