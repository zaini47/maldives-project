import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Reuseable/Hero'
import bookingbg from "../../Assets/Images/booking-bg.png"
import { Link } from 'react-router-dom'
import Button from '../Reuseable/Button'

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
                        <div className="col-sm-12 col-md-3">
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
                                        <Link to="/Profile/MyBookings" className='fs-18 ff-inter profile Hotel-Grey'>
                                            <svg className='mb-2 me-3' xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 15 17" fill="none">
                                                <path d="M3.15789 0.333252C2.11895 0.333252 1.26316 1.18904 1.26316 2.22799V12.1227H0.631579C0.464079 12.1227 0.303444 12.1893 0.185004 12.3077C0.0665634 12.4262 1.67475e-05 12.5868 0 12.7543V13.5964C0 15.1004 1.23287 16.3333 2.73684 16.3333H12C13.504 16.3333 14.7368 15.1004 14.7368 13.5964V2.22799C14.7368 1.18904 13.8811 0.333252 12.8421 0.333252H3.15789ZM3.15789 1.59641H12.8421C13.1985 1.59641 13.4737 1.87157 13.4737 2.22799V13.5964C13.4737 14.4175 12.8211 15.0701 12 15.0701C11.1789 15.0701 10.5263 14.4175 10.5263 13.5964V12.7543C10.5263 12.5868 10.4598 12.4262 10.3413 12.3077C10.2229 12.1893 10.0622 12.1227 9.89474 12.1227H2.52632V2.22799C2.52632 1.87157 2.80147 1.59641 3.15789 1.59641ZM4.8421 3.70167C4.6746 3.70167 4.51396 3.76821 4.39551 3.88666C4.27707 4.0051 4.21053 4.16575 4.21053 4.33325C4.21053 4.50076 4.27707 4.6614 4.39551 4.77985C4.51396 4.89829 4.6746 4.96483 4.8421 4.96483C5.00961 4.96483 5.17025 4.89829 5.2887 4.77985C5.40714 4.6614 5.47368 4.50076 5.47368 4.33325C5.47368 4.16575 5.40714 4.0051 5.2887 3.88666C5.17025 3.76821 5.00961 3.70167 4.8421 3.70167ZM6.94737 3.70167C6.86368 3.70049 6.78058 3.71595 6.70292 3.74716C6.62526 3.77837 6.55457 3.8247 6.49497 3.88347C6.43536 3.94223 6.38804 4.01226 6.35573 4.08947C6.32343 4.16669 6.30679 4.24955 6.30679 4.33325C6.30679 4.41695 6.32343 4.49982 6.35573 4.57703C6.38804 4.65425 6.43536 4.72427 6.49497 4.78304C6.55457 4.8418 6.62526 4.88814 6.70292 4.91934C6.78058 4.95055 6.86368 4.96601 6.94737 4.96483H11.1579C11.2416 4.96601 11.3247 4.95055 11.4023 4.91934C11.48 4.88814 11.5507 4.8418 11.6103 4.78304C11.6699 4.72427 11.7172 4.65425 11.7495 4.57703C11.7818 4.49982 11.7985 4.41695 11.7985 4.33325C11.7985 4.24955 11.7818 4.16669 11.7495 4.08947C11.7172 4.01226 11.6699 3.94223 11.6103 3.88347C11.5507 3.8247 11.48 3.77837 11.4023 3.74716C11.3247 3.71595 11.2416 3.70049 11.1579 3.70167H6.94737ZM4.8421 6.22799C4.6746 6.22799 4.51396 6.29453 4.39551 6.41297C4.27707 6.53142 4.21053 6.69206 4.21053 6.85957C4.21053 7.02707 4.27707 7.18772 4.39551 7.30616C4.51396 7.42461 4.6746 7.49115 4.8421 7.49115C5.00961 7.49115 5.17025 7.42461 5.2887 7.30616C5.40714 7.18772 5.47368 7.02707 5.47368 6.85957C5.47368 6.69206 5.40714 6.53142 5.2887 6.41297C5.17025 6.29453 5.00961 6.22799 4.8421 6.22799ZM6.94737 6.22799C6.86368 6.22681 6.78058 6.24227 6.70292 6.27348C6.62526 6.30468 6.55457 6.35102 6.49497 6.40978C6.43536 6.46855 6.38804 6.53857 6.35573 6.61579C6.32343 6.693 6.30679 6.77587 6.30679 6.85957C6.30679 6.94327 6.32343 7.02613 6.35573 7.10335C6.38804 7.18056 6.43536 7.25059 6.49497 7.30935C6.55457 7.36812 6.62526 7.41445 6.70292 7.44566C6.78058 7.47687 6.86368 7.49233 6.94737 7.49115H11.1579C11.2416 7.49233 11.3247 7.47687 11.4023 7.44566C11.48 7.41445 11.5507 7.36812 11.6103 7.30935C11.6699 7.25059 11.7172 7.18056 11.7495 7.10335C11.7818 7.02613 11.7985 6.94327 11.7985 6.85957C11.7985 6.77587 11.7818 6.693 11.7495 6.61579C11.7172 6.53857 11.6699 6.46855 11.6103 6.40978C11.5507 6.35102 11.48 6.30468 11.4023 6.27348C11.3247 6.24227 11.2416 6.22681 11.1579 6.22799H6.94737ZM4.8421 8.7543C4.6746 8.7543 4.51396 8.82085 4.39551 8.93929C4.27707 9.05773 4.21053 9.21838 4.21053 9.38588C4.21053 9.55339 4.27707 9.71403 4.39551 9.83248C4.51396 9.95092 4.6746 10.0175 4.8421 10.0175C5.00961 10.0175 5.17025 9.95092 5.2887 9.83248C5.40714 9.71403 5.47368 9.55339 5.47368 9.38588C5.47368 9.21838 5.40714 9.05773 5.2887 8.93929C5.17025 8.82085 5.00961 8.7543 4.8421 8.7543ZM6.94737 8.7543C6.86368 8.75312 6.78058 8.76858 6.70292 8.79979C6.62526 8.831 6.55457 8.87733 6.49497 8.9361C6.43536 8.99486 6.38804 9.06489 6.35573 9.1421C6.32343 9.21932 6.30679 9.30218 6.30679 9.38588C6.30679 9.46958 6.32343 9.55245 6.35573 9.62966C6.38804 9.70688 6.43536 9.7769 6.49497 9.83567C6.55457 9.89443 6.62526 9.94077 6.70292 9.97198C6.78058 10.0032 6.86368 10.0186 6.94737 10.0175H11.1579C11.2416 10.0186 11.3247 10.0032 11.4023 9.97198C11.48 9.94077 11.5507 9.89443 11.6103 9.83567C11.6699 9.7769 11.7172 9.70688 11.7495 9.62966C11.7818 9.55245 11.7985 9.46958 11.7985 9.38588C11.7985 9.30218 11.7818 9.21932 11.7495 9.1421C11.7172 9.06489 11.6699 8.99486 11.6103 8.9361C11.5507 8.87733 11.48 8.831 11.4023 8.79979C11.3247 8.76858 11.2416 8.75312 11.1579 8.7543H6.94737ZM1.26316 13.3859H9.26316V13.5964C9.26316 14.1501 9.47119 14.6379 9.7574 15.0701H2.73684C1.91576 15.0701 1.26316 14.4175 1.26316 13.5964V13.3859Z" fill="#22485D" />
                                            </svg>
                                            My Order</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-9'>

                            <div className=''>
                                <p className='fs-52 ff-inter fw-600 text-d'>My Bookings</p>
                            </div>
                            <div>
                                <p className='ff-inter fs-28 fw-500 text-d'>Current Bookings</p>
                            </div>

                            <div className='d-flex py-4 gap-3'>
                                {
                                    currents.map((items) => {
                                        return (
                                            <>
                                                <div className='col-6 box-shadow p-3 ' key={items.id}>
                                                    <div>
                                                        <p className='fs-21 fw-500 ff-inter'>{items.bookno}</p>
                                                    </div>
                                                    <div className='d-flex align-items-center mb-3'>
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
                                                    <div className='row'>
                                                        <div className="col-6">
                                                            <Button
                                                                name="Cancel Booking"
                                                                batn="cancel-btn fs-18 ff-inter fw-400"
                                                            />
                                                        </div>
                                                        <div className="col-6 ">
                                                            <Button
                                                                name="View Details"
                                                                batn="details--btn"
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

                            <div className='d-flex py-4 gap-3'>
                                {
                                    previous.map((items) => {
                                        return (
                                            <>
                                                <div className='col-6 box-shadow p-3 ' key={items.id}>
                                                    <div className='d-flex justify-content-between '>
                                                        <div> <p className='fs-21 fw-500 ff-inter'>{items.bookno}</p></div>

                                                        <div>
                                                            <p className={`text-white m-0 p-0 ${items.bookingstats === 'Canceled' ? 'stats-cancel-bg' : 'stats-complete-bg'}`}>
                                                                {items.bookingstats}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex align-items-center mb-3'>
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
                                                    <div className='row'>
                                                        <div className="col-6">
                                                            <Button
                                                                name="Cancel Booking"
                                                                batn="cancel-btn fs-18 ff-inter fw-400"
                                                            />
                                                        </div>
                                                        <div className="col-6 ">
                                                            <Button
                                                                name="View Details"
                                                                batn="details--btn"
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

        </>
    )
}

export default MyBooking
