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
                    <form className='frm'>
                        <div className="checkIn">
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
                        <div className="checkOut">
                            <label>
                                Check Out:
                            </label>
                            <input
                                type="date"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                required
                                 className="inputdate"
                            />
                        </div>
                            <div className="rooms">
                                <label>
                                    Rooms:
                                </label>
                                <LimitDropdown/>
                            </div>
                            <div className="adult">
                                <label>
                                    Adults:
                                </label>
                                <LimitDropdown/>
                            </div>
                            <div className="child">
                                <label>
                                    Children:
                                </label>
                                <LimitDropdown/>
                            </div>
                            <div className="btn">
                                <Button
                                batn="buttn"
                                    name="Check In"
                                />
                            </div>
                    </form>
                </div>
                </div>
        </>
    );
};

export default SearchForm;
