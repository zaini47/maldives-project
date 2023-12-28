import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login page/Login";
import Signup from "./Components/Signup page/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import RoomsDetails from "./Components/Room/RoomsDetails";
import Rooms from "./Components/Room/Rooms";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Blogs from "./Components/Blog/Blogs";
import BlogDetail from "./Components/Blog/Blogdetail";
import FaqsPage from "./Components/Faqs/FaqsPage";
import PaymentDetail from "./Components/Dropdown/PaymentDetail";
import ThankYou from "./Components/Dropdown/ThankYou";
import Personalinfo from "./Components/Profile/Personalinfo";
import MyPayment from "./Components/MyPayments/MyPayment";
import LoginSecurity from "./Components/LoginSecurity/LoginSecurity/LoginSecurity";
import MyBooking from "./Components/Booking/MyBooking";
import Dummyroom from "./Components/Room/Dummyroom";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Rooms/RoomsDetail" element={<RoomsDetails />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blogs/Blogdetail" element={<BlogDetail />} />
        <Route path="/Faqs" element={<FaqsPage />} />
        <Route path="/PaymentDetail" element={<PaymentDetail />} />
        <Route path="/ThankYouForBooking" element={<ThankYou />} />
        <Route path="/Profile/Personal-Details" element={<Personalinfo />} />
        <Route path="/Profile/MyPayment" element={<MyPayment />} />
        <Route path="/Profile/Login&Security" element={<LoginSecurity />} />
        <Route path="/Profile/MyBookings" element={<MyBooking/>}/>
        <Route path="/Dummyroom" element={<Dummyroom/>}/>
      </Routes>
    </>
  );
}

export default App;
