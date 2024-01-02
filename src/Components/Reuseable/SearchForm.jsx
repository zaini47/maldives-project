import React, { useState } from 'react';
import Button from './Button';
import '../Reuseable/Reuseable.css';
import LimitDropdown from './LimitDropdown';

const SearchForm = (props) => {
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        rooms: 1,
        adults: 1,
        children: 0,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <>
            <div className={props.CheckBox}>
                <div className="searchBox1">
                    <form className=' row justify-content-evenly  p-3  align-items-center'>
                        <div className=' d-flex justify-content-evenly f-s-column f-m-column gap-4 col-md-12 col-lg-5 col-sm-12   '>
                            <div className="checkIn  col-md-12 col-lg-6 col-sm-12 ">
                                <label>
                                    Check In:
                                </label>
                                <input
                                    type="date"
                                    name="checkIn"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="checkOut  col-md-12 col-lg-6 col-sm-12 ">
                                <label>
                                    Check Out:
                                </label>
                                <input
                                    type="date"
                                    name="checkOut "
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                    required
                                    className="inputdate"
                                />
                            </div>
                        </div>
                        <div className=' d-flex justify-content-center gap-4 p-0 m-0  col-md-12 col-lg-3 col-xl-2 col-sm-12'>
                            <div className="rooms">
                                <label>
                                    Rooms:
                                </label>
                                <LimitDropdown />
                            </div>
                            <div className="adult">
                                <label>
                                    Adults:
                                </label>
                                <LimitDropdown />
                            </div>
                            <div className="child">
                                <label>
                                    Children:
                                </label>
                                <LimitDropdown />
                            </div>
                        </div>
                        <div className="btn col-md-12 col-lg-4 col-sm-12 p-0">
                            <Button
                                batn="buttn w-100 text-center"
                                name="Check Availiability"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SearchForm;