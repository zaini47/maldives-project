import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Reuseable/Hero'
import bookingbg from "../../Assets/Images/booking-bg.png"
import { Link } from 'react-router-dom'
import Button from '../Reuseable/Button'
import Footer from '../Footer/Footer'

function MyBooking() {

    const currents = [{
        id: "1", bookno: "#Booking 14256", date: "September 16, 2020", time: "11:54 PM",
        roomtype: "Royal King Room", person: "5"
    }, {
        id: "2", bookno: "#Booking 32561", date: "August 29, 2020", time: "12:06 AM", roomtype: "Simple Room", person: "2"
    }

    ]
    const previous = [{
        id: "1", bookno: "#Booking 14256", date: "September 16, 2020", time: "11:54 PM",
        roomtype: "Royal King Room", person: "5", bookingstats: "Completed"
    }, {
        id: "2", bookno: "#Booking 32561", date: "August 29, 2020", time: "12:06 AM", roomtype: "Simple Room", person: "2", bookingstats: "Canceled"
    }

    ]
    return (
        <>
            <Navbar />
            <Hero
                image={bookingbg}
                title="My Bookings"
                locat="Profile / Re-Book"
            />

            <div className="container-fluid">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-sm-12 col-md-12 col-lg-3">
                            <div className="custom_profile">
                                <div className='aside_1'>
                                    <div>
                                        <Link to="/Profile/Personal-Details" className='fs-18 ff-inter profile Hotel-Grey '><svg className='active mb-2 me-3' xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66797 10.6667C5.23153 10.6667 2.44575 13.4525 2.44575 16.8889V18.6667C2.44575 19.1576 2.04778 19.5556 1.55686 19.5556C1.06594 19.5556 0.667969 19.1576 0.667969 18.6667V16.8889C0.667969 12.4706 4.24969 8.88892 8.66797 8.88892C13.0862 8.88892 16.668 12.4706 16.668 16.8889V18.6667C16.668 19.1576 16.27 19.5556 15.7791 19.5556C15.2882 19.5556 14.8902 19.1576 14.8902 18.6667V16.8889C14.8902 13.4525 12.1044 10.6667 8.66797 10.6667Z" fill="#636A76" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66732 8.88889C10.631 8.88889 12.2229 7.29701 12.2229 5.33333C12.2229 3.36965 10.631 1.77778 8.66732 1.77778C6.70364 1.77778 5.11176 3.36965 5.11176 5.33333C5.11176 7.29701 6.70364 8.88889 8.66732 8.88889ZM8.66732 10.6667C11.6128 10.6667 14.0007 8.27885 14.0007 5.33333C14.0007 2.38781 11.6128 0 8.66732 0C5.7218 0 3.33398 2.38781 3.33398 5.33333C3.33398 8.27885 5.7218 10.6667 8.66732 10.6667Z" fill="#636A76" />
                                        </svg>Personal info</Link>
                                    </div>
                                    <div>
                                        <Link to="/Profile/Login&Security" className='fs-18 ff-inter profile Hotel-Grey'>
                                            <svg className='mb-2 me-3' xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 14 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.54542 7.2729C5.25628 7.2729 4.10793 7.31985 3.16971 7.37949C2.27978 7.43606 1.59548 8.11506 1.53161 8.9987C1.48617 9.62731 1.45454 10.2897 1.45454 10.9092C1.45454 11.5288 1.48617 12.1912 1.53161 12.8198C1.59548 13.7034 2.27978 14.3824 3.16971 14.439C4.10793 14.4986 5.25628 14.5456 6.54542 14.5456C7.83457 14.5456 8.98291 14.4986 9.92113 14.439C10.8111 14.3824 11.4954 13.7034 11.5592 12.8198C11.6047 12.1912 11.6363 11.5288 11.6363 10.9092C11.6363 10.2897 11.6047 9.62731 11.5592 8.9987C11.4954 8.11506 10.8111 7.43606 9.92113 7.37949C8.98291 7.31985 7.83457 7.2729 6.54542 7.2729ZM3.07744 5.92788C1.46454 6.0304 0.197362 7.2819 0.0808541 8.89385C0.0338306 9.54444 0 10.2438 0 10.9092C0 11.5747 0.0338306 12.274 0.0808542 12.9246C0.197362 14.5366 1.46455 15.7881 3.07744 15.8906C4.042 15.9519 5.2214 16.0001 6.54542 16.0001C7.86945 16.0001 9.04885 15.9519 10.0134 15.8906C11.6263 15.7881 12.8935 14.5366 13.01 12.9246C13.057 12.274 13.0908 11.5747 13.0908 10.9092C13.0908 10.2438 13.057 9.54444 13.01 8.89384C12.8935 7.2819 11.6263 6.0304 10.0134 5.92788C9.04885 5.86657 7.86945 5.81836 6.54542 5.81836C5.2214 5.81836 4.042 5.86657 3.07744 5.92788Z" fill="#22485D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2736 11.4418C7.70837 11.1903 8.00087 10.7202 8.00087 10.1818C8.00087 9.37851 7.34965 8.72729 6.54634 8.72729C5.74302 8.72729 5.0918 9.37851 5.0918 10.1818C5.0918 10.7202 5.3843 11.1903 5.81907 11.4418V12.3636C5.81907 12.7653 6.14468 13.0909 6.54634 13.0909C6.948 13.0909 7.2736 12.7653 7.2736 12.3636V11.4418Z" fill="#22485D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.9082 3.63635C2.9082 1.62805 4.53625 0 6.54455 0C8.55285 0 10.1809 1.62805 10.1809 3.63635V6.54542C10.1809 6.94708 9.85529 7.27269 9.45363 7.27269C9.05197 7.27269 8.72636 6.94708 8.72636 6.54542V3.63635C8.72636 2.43137 7.74953 1.45454 6.54455 1.45454C5.33957 1.45454 4.36274 2.43137 4.36274 3.63635V6.54542C4.36274 6.94708 4.03713 7.27269 3.63547 7.27269C3.23381 7.27269 2.9082 6.94708 2.9082 6.54542V3.63635Z" fill="#22485D" />
                                            </svg>
                                            Login and security</Link>
                                    </div>
                                    <div>
                                        <Link to="/Profile/MyPayment" className='fs-18 ff-inter profile Hotel-Grey'>
                                            <svg className='mb-2 me-3' xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 15 13" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 1.50106H2C1.63181 1.50106 1.33333 1.79954 1.33333 2.16773V10.1677C1.33333 10.5359 1.63181 10.8344 2 10.8344H12.6667C13.0349 10.8344 13.3333 10.5359 13.3333 10.1677V2.16772C13.3333 1.79953 13.0349 1.50106 12.6667 1.50106ZM2 0.167725C0.895431 0.167725 0 1.06316 0 2.16773V10.1677C0 11.2723 0.89543 12.1677 2 12.1677H12.6667C13.7712 12.1677 14.6667 11.2723 14.6667 10.1677V2.16772C14.6667 1.06316 13.7712 0.167725 12.6667 0.167725H2Z" fill="#22485D" />
                                                <path d="M4.66602 8.50098C4.66602 9.05326 4.2183 9.50098 3.66602 9.50098C3.11373 9.50098 2.66602 9.05326 2.66602 8.50098C2.66602 7.94869 3.11373 7.50098 3.66602 7.50098C4.2183 7.50098 4.66602 7.94869 4.66602 8.50098Z" fill="#22485D" />
                                                <path d="M8 8.50098C8 9.05326 7.55229 9.50098 7 9.50098C6.44772 9.50098 6 9.05326 6 8.50098C6 7.94869 6.44772 7.50098 7 7.50098C7.55229 7.50098 8 7.94869 8 8.50098Z" fill="#22485D" />
                                                <path d="M0 3.50098H14.6667V4.83431H0V3.50098Z" fill="#22485D" />
                                            </svg>
                                            My Payments</Link>
                                    </div>
                                    <div>
                                        <Link to="/Profile/MyBookings" className='fs-18 ff-inter profile text-prim'>
                                            <svg className='mb-2 me-3' xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                                <path d="M3.94737 0C2.64868 0 1.57895 1.06974 1.57895 2.36842V14.7368H0.789474C0.580099 14.7369 0.379305 14.82 0.231255 14.9681C0.0832042 15.1161 2.09344e-05 15.3169 0 15.5263V16.5789C0 18.4589 1.54109 20 3.42105 20H15C16.88 20 18.4211 18.4589 18.4211 16.5789V2.36842C18.4211 1.06974 17.3513 0 16.0526 0H3.94737ZM3.94737 1.57895H16.0526C16.4982 1.57895 16.8421 1.9229 16.8421 2.36842V16.5789C16.8421 17.6053 16.0263 18.4211 15 18.4211C13.9737 18.4211 13.1579 17.6053 13.1579 16.5789V15.5263C13.1579 15.3169 13.0747 15.1161 12.9266 14.9681C12.7786 14.82 12.5778 14.7369 12.3684 14.7368H3.15789V2.36842C3.15789 1.9229 3.50184 1.57895 3.94737 1.57895ZM6.05263 4.21053C5.84325 4.21053 5.64244 4.2937 5.49439 4.44176C5.34633 4.58981 5.26316 4.79062 5.26316 5C5.26316 5.20938 5.34633 5.41019 5.49439 5.55824C5.64244 5.7063 5.84325 5.78947 6.05263 5.78947C6.26201 5.78947 6.46282 5.7063 6.61087 5.55824C6.75893 5.41019 6.84211 5.20938 6.84211 5C6.84211 4.79062 6.75893 4.58981 6.61087 4.44176C6.46282 4.2937 6.26201 4.21053 6.05263 4.21053ZM8.68421 4.21053C8.5796 4.20905 8.47573 4.22837 8.37865 4.26739C8.28157 4.3064 8.19321 4.36431 8.11871 4.43777C8.04421 4.51122 7.98505 4.59876 7.94467 4.69527C7.90429 4.79179 7.88349 4.89538 7.88349 5C7.88349 5.10463 7.90429 5.20821 7.94467 5.30473C7.98505 5.40124 8.04421 5.48878 8.11871 5.56223C8.19321 5.63569 8.28157 5.6936 8.37865 5.73262C8.47573 5.77163 8.5796 5.79095 8.68421 5.78947H13.9474C14.052 5.79095 14.1559 5.77163 14.2529 5.73262C14.35 5.6936 14.4384 5.63569 14.5129 5.56223C14.5874 5.48878 14.6465 5.40124 14.6869 5.30473C14.7273 5.20821 14.7481 5.10463 14.7481 5C14.7481 4.89538 14.7273 4.79179 14.6869 4.69527C14.6465 4.59876 14.5874 4.51122 14.5129 4.43777C14.4384 4.36431 14.35 4.3064 14.2529 4.26739C14.1559 4.22837 14.052 4.20905 13.9474 4.21053H8.68421ZM6.05263 7.36842C5.84325 7.36842 5.64244 7.4516 5.49439 7.59965C5.34633 7.74771 5.26316 7.94851 5.26316 8.1579C5.26316 8.36728 5.34633 8.56808 5.49439 8.71614C5.64244 8.86419 5.84325 8.94737 6.05263 8.94737C6.26201 8.94737 6.46282 8.86419 6.61087 8.71614C6.75893 8.56808 6.84211 8.36728 6.84211 8.1579C6.84211 7.94851 6.75893 7.74771 6.61087 7.59965C6.46282 7.4516 6.26201 7.36842 6.05263 7.36842ZM8.68421 7.36842C8.5796 7.36694 8.47573 7.38627 8.37865 7.42528C8.28157 7.46429 8.19321 7.52221 8.11871 7.59566C8.04421 7.66912 7.98505 7.75665 7.94467 7.85317C7.90429 7.94969 7.88349 8.05327 7.88349 8.1579C7.88349 8.26252 7.90429 8.3661 7.94467 8.46262C7.98505 8.55914 8.04421 8.64667 8.11871 8.72013C8.19321 8.79358 8.28157 8.8515 8.37865 8.89051C8.47573 8.92952 8.5796 8.94885 8.68421 8.94737H13.9474C14.052 8.94885 14.1559 8.92952 14.2529 8.89051C14.35 8.8515 14.4384 8.79358 14.5129 8.72013C14.5874 8.64667 14.6465 8.55914 14.6869 8.46262C14.7273 8.3661 14.7481 8.26252 14.7481 8.1579C14.7481 8.05327 14.7273 7.94969 14.6869 7.85317C14.6465 7.75665 14.5874 7.66912 14.5129 7.59566C14.4384 7.52221 14.35 7.46429 14.2529 7.42528C14.1559 7.38627 14.052 7.36694 13.9474 7.36842H8.68421ZM6.05263 10.5263C5.84325 10.5263 5.64244 10.6095 5.49439 10.7575C5.34633 10.9056 5.26316 11.1064 5.26316 11.3158C5.26316 11.5252 5.34633 11.726 5.49439 11.874C5.64244 12.0221 5.84325 12.1053 6.05263 12.1053C6.26201 12.1053 6.46282 12.0221 6.61087 11.874C6.75893 11.726 6.84211 11.5252 6.84211 11.3158C6.84211 11.1064 6.75893 10.9056 6.61087 10.7575C6.46282 10.6095 6.26201 10.5263 6.05263 10.5263ZM8.68421 10.5263C8.5796 10.5248 8.47573 10.5442 8.37865 10.5832C8.28157 10.6222 8.19321 10.6801 8.11871 10.7536C8.04421 10.827 7.98505 10.9145 7.94467 11.0111C7.90429 11.1076 7.88349 11.2112 7.88349 11.3158C7.88349 11.4204 7.90429 11.524 7.94467 11.6205C7.98505 11.717 8.04421 11.8046 8.11871 11.878C8.19321 11.9515 8.28157 12.0094 8.37865 12.0484C8.47573 12.0874 8.5796 12.1067 8.68421 12.1053H13.9474C14.052 12.1067 14.1559 12.0874 14.2529 12.0484C14.35 12.0094 14.4384 11.9515 14.5129 11.878C14.5874 11.8046 14.6465 11.717 14.6869 11.6205C14.7273 11.524 14.7481 11.4204 14.7481 11.3158C14.7481 11.2112 14.7273 11.1076 14.6869 11.0111C14.6465 10.9145 14.5874 10.827 14.5129 10.7536C14.4384 10.6801 14.35 10.6222 14.2529 10.5832C14.1559 10.5442 14.052 10.5248 13.9474 10.5263H8.68421ZM1.57895 16.3158H11.5789V16.5789C11.5789 17.2711 11.839 17.8808 12.1968 18.4211H3.42105C2.3947 18.4211 1.57895 17.6053 1.57895 16.5789V16.3158Z" fill="#1CC3B2" />
                                            </svg>
                                            My Booking</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 set-fc col-md-12 col-lg-9'>

                            <div>
                                <p className='fs-52 ff-inter fw-600 text-d'>My Bookings</p>
                            </div>
                            <div>
                                <p className='ff-inter fs-28 fw-500 text-d'>Current Bookings</p>
                            </div>

                            <div className='d-flex set-fc py-4 gap-3'>
                                {
                                    currents.map((items) => {
                                        return (
                                            <>
                                                <div className='col-sm-12 col-md-12 col-lg-6 box-shadow p-3 ' key={items.id}>
                                                    <div>
                                                        <p className='fs-21 fw-500 ff-inter'>{items.bookno}</p>
                                                    </div>
                                                    <div className='d-flex set-fc align-items-center mb-3'>
                                                        <div className='d-flex align-items-center'>
                                                            <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                                                                <rect x="1.66797" y="4.3335" width="18.6667" height="18.6667" rx="1.33333" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M15.0026 1.66675V5.66675" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M7.0026 1.66675V5.66675" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M1.66797 9.66667H20.3346" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg></div>

                                                            <div>
                                                                <p className='fs-16 fw-400 ff-inter text--light m-0 px-3'>{items.date}</p>
                                                            </div>
                                                        </div>


                                                        <div className='d-flex 
                                                        align-items-center'>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0065 0.666748C13.8355 0.666748 16.5486 1.79055 18.549 3.79094C20.5494 5.79133 21.6732 8.50444 21.6732 11.3334C21.6732 17.2245 16.8975 22.0001 11.0065 22.0001C5.10784 22.0001 0.339844 17.2001 0.339844 11.3334C0.339844 5.44238 5.11547 0.666748 11.0065 0.666748ZM11.0099 19.8667C15.7227 19.8667 19.5432 16.0462 19.5432 11.3334C19.5432 6.62055 15.7227 2.80005 11.0099 2.80005C6.29707 2.80005 2.47656 6.62055 2.47656 11.3334C2.47656 16.0462 6.29707 19.8667 11.0099 19.8667ZM11.5375 11.6001V6.00012H9.9375V12.4001L15.5375 15.7601L16.3375 14.4481L11.5375 11.6001Z" fill="#636A76" />
                                                                </svg></div>
                                                            <div>
                                                                <p className='fs-16 fw-400 ff-inter text--light m-0 px-3'>{items.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='d-flex align-items-center mb-2'>
                                                        <div className='bg-book-i py-2 px-3 me-3 fs-16 fw-500 text-d'>1</div>
                                                        <div><p className='fs-16 fw-500 ff-inter text-d py-2 m-0'>{items.roomtype}</p></div>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='bg-book-i py-2 px-3  me-3 fs-16 fw-500 text-d'>2</div>
                                                        <div><p className='fs-16 fw-500 ff-inter text-d py-2 m-0'>For {items.person} persons</p></div>
                                                    </div>

                                                    <div>
                                                        <div class="accordion accordion-flush" id="accordionFlushExample">
                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id={`flush-heading${items.id}`}>
                                                                    <button class="accordion-button  accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${items.id}`} aria-expanded="false" aria-controls={`flush-collapse${items.id}`}>
                                                                        1 More item
                                                                    </button>
                                                                </h2>
                                                                <div id={`flush-collapse${items.id}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${items.id}`} data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">Placeholder</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>

                                                    </div>
                                                    <div className='row set-gap  py-4'>
                                                        <div className="col-sm-12 col-md-6">
                                                            <Button
                                                                name="Cancel Booking"
                                                                batn="cancel-btn fs-18 ff-inter fw-400 set-ww"
                                                            />
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <Button
                                                                name="View Details"
                                                                batn="details--btn set-ww ff-inter fs-18 fw-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <p className='fs-28 fw-500 text-d ff-inter'>
                                    Pervious Bookings
                                </p>
                            </div>

                            <div className='d-flex set-fc py-4 gap-3'>
                                {
                                    previous.map((items) => {
                                        return (
                                            <>
                                                <div className='col-sm-12 col-md-12 col-lg-6 box-shadow p-3 ' key={items.id}>
                                                    <div className='d-flex justify-content-between '>
                                                        <div> <p className='fs-21 fw-500 ff-inter'>{items.bookno}</p></div>

                                                        <div>
                                                            <p className={`text-white m-0 p-0 ${items.bookingstats === 'Canceled' ? 'stats-cancel-bg' : 'stats-complete-bg'}`}>
                                                                {items.bookingstats}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex set-fc align-items-center mb-3'>
                                                        <div className='d-flex align-items-center'>
                                                            <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                                                                <rect x="1.66797" y="4.3335" width="18.6667" height="18.6667" rx="1.33333" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M15.0026 1.66675V5.66675" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M7.0026 1.66675V5.66675" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M1.66797 9.66667H20.3346" stroke="#636A76" stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg></div>

                                                            <div>
                                                                <p className='fs-16 fw-400 ff-inter text--light m-0 px-3'>{items.date}</p>
                                                            </div>
                                                        </div>


                                                        <div className='d-flex 
                                                        align-items-center'>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0065 0.666748C13.8355 0.666748 16.5486 1.79055 18.549 3.79094C20.5494 5.79133 21.6732 8.50444 21.6732 11.3334C21.6732 17.2245 16.8975 22.0001 11.0065 22.0001C5.10784 22.0001 0.339844 17.2001 0.339844 11.3334C0.339844 5.44238 5.11547 0.666748 11.0065 0.666748ZM11.0099 19.8667C15.7227 19.8667 19.5432 16.0462 19.5432 11.3334C19.5432 6.62055 15.7227 2.80005 11.0099 2.80005C6.29707 2.80005 2.47656 6.62055 2.47656 11.3334C2.47656 16.0462 6.29707 19.8667 11.0099 19.8667ZM11.5375 11.6001V6.00012H9.9375V12.4001L15.5375 15.7601L16.3375 14.4481L11.5375 11.6001Z" fill="#636A76" />
                                                                </svg></div>
                                                            <div>
                                                                <p className='fs-16 fw-400 ff-inter text--light m-0 px-3'>{items.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='d-flex align-items-center mb-2'>
                                                        <div className='bg-book-i py-2 px-3 me-3 fs-16 fw-500 text-d'>1</div>
                                                        <div><p className='fs-16 fw-500 ff-inter text-d py-2 m-0'>{items.roomtype}</p></div>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='bg-book-i py-2 px-3  me-3 fs-16 fw-500 text-d'>2</div>
                                                        <div><p className='fs-16 fw-500 ff-inter text-d py-2 m-0'>For {items.person} persons</p></div>
                                                    </div>

                                                    <div>
                                                        <div class="accordion accordion-flush" id="accordionFlushExample">
                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header" id={`flush-heading${items.id}`}>
                                                                    <button class="accordion-button  accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${items.id}`} aria-expanded="false" aria-controls={`flush-collapse${items.id}`}>
                                                                        1 More item
                                                                    </button>
                                                                </h2>
                                                                <div id={`flush-collapse${items.id}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${items.id}`} data-bs-parent="#accordionFlushExample">
                                                                    <div class="accordion-body">Placeholder</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>

                                                    </div>
                                                    <div className='row set-gap  py-4'>
                                                        <div className="col-sm-12 col-md-6">
                                                            <Button
                                                                name="View Details"
                                                                batn="cancel-btn fs-18 ff-inter fw-400 border-black text-d set-ww"
                                                            />
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <Button
                                                                name="Re-book"
                                                                batn="details--btn border-prim set-ww ff-inter fs-18 fw-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyBooking
