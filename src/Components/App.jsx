import '../Styles/App.css';
import { Header } from './Header';
import { Therapists } from './Therapists';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { JoinUs } from './JoinUs';
import { Apply } from './Apply';
import { ThankYou } from './Thankyou';
import { ContactUs } from './ContactUs';
import { ContactForm } from './ContactForm';
import { BookingProfile } from './BookingProfile';
import { Blog } from './Blog';
import { SignUp } from './SignUp';
import { LogIn } from './LogIn';
import { UserProfile } from './UserProfile';
import { TherapistProfile } from './TherapistProfile';
import { Layout } from './Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Header />,
        },
        {
          path: "/therapists",
          element: <Therapists />,
        },
        {
          path: "/therapists/:name",
          element: <BookingProfile />,
        },
        {
          path: "/joinus",
          element: <JoinUs />,
        },
        {
          path: "/joinus/apply",
          element: <Apply />,
        },
        {
          path: "/joinus/thankyou",
          element: <ThankYou />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/book",
          element: <BookingProfile />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <LogIn />,
        },
        {
          path: "/userprof",
          element: <UserProfile />,
        },
        {
          path: "/therprof",
          element: <TherapistProfile />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ContactForm />
    </div>
  );
}

export default App;
