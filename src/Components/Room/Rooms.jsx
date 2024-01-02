import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Reuseable/Hero';
import Footer from '../Footer/Footer';
import '../Room/Room.css';
import "../Reuseable/Reuseable.css"
import SearchForm from '../Reuseable/SearchForm';
import roombg from "../../Assets/Images/roombg.png"
import Banners from "../Reuseable/Banner";
import '../Reuseable/Paginate.css';
import Pagination from '../Reuseable/Paginate';
import { useLocation } from 'react-router-dom';


function Rooms() {
    const {state} = useLocation();
    const item = state
    console.log(item)



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Hero
                image={roombg}
                title='Our Rooms'
                locat='HOME / ROOM'
                height="80vh"
            />
            <SearchForm
                CheckBox='CheckBox2'
            />

            <Pagination itemsPerPage={6} />
            <Banners />
            <Footer />
        </>
    )
}

export default Rooms
