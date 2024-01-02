import React from 'react';
import '../../Assets/Styles/Signup.css';
import { Link } from 'react-router-dom';
import InputFields from '../Reuseable/InputFeilds';
import Button from '../Reuseable/Button';

function Signup() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 bg-img2 py-5 px-4">
                        <p className='Setlogo text-white py-2 fw-500'><span className='logo fw-400'>Mal</span><span className='fnt-set7 fw-400'>d</span>ives</p>
                        <div className="text py-5 my-4 text-start">
                            <p className='text-white fnt-set1 pt-5 fw-700'>Welcome to Maldives</p>
                            <p className='text-white fnt-set2 pb-5 fw-500'>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit. Vulputate ut laoreet velit ma.</p>
                        </div>
                    </div>
                        <div className="col-md-12 col-lg-6 pt-2">
                            <div className="text-start login-box">
                                <p className='fnt-set3 text-dark py-1 fw-600 m-0'>Create your account</p>
                                <p className='fnt-set4 fw-400 mb-5'>It’s free and easy</p>
                                <form>
                                    <InputFields
                                        labelclass="fw-500"
                                        name="Full name"
                                        type="text"
                                        placeholder="Enter your name"
                                        inputStyle='inputStyle fw-400 mb-1'
                                    />
                                    <InputFields
                                        labelclass="fw-500"
                                        name="E-mail or phone number"
                                        type="email"
                                        placeholder="Type your e-mail or phone number"
                                        inputStyle='inputStyle fw-400 mb-1'
                                    />
                                    <InputFields
                                        labelclass="fw-500"
                                        name="Password"
                                        type="password"
                                        placeholder="Type your password"
                                        inputStyle='inputStyle fw-400 mb-1'
                                    />
                                    <p className='text-start hotel-grey fs-14 fw-400 m-1'>Must be 8 characters at least</p>
                                    <div className='d-flex w-100 justify-content-between'>
                                        <div >
                                            <input type="checkbox" className='outline_checkbox' />
                                        </div>
                                        <div className='w-95' >
                                            <p className='fnt-set8 fw-400 m-0'>By creating an account means you agree to the  <span className='text-dar fw-700'>Terms and Conditions</span>, and our <span className='text-dar fw-700'>Privacy Policy</span></p>
                                        </div>
                                    </div>
                                    <div className='py-3 m-0'>
                                        <Button
                                            batn="batn fw-700"
                                            type="submit"
                                            name="Sign Up"
                                        />
                                    </div>
                                    <div className="center-line-text-container">
                                        <div className="center-line"></div>
                                        <p className="centered-text py-3 px-3 fw-500">or do it via other accounts</p>
                                    </div>
                                </form>
                                <div className="ico d-flex">
                                    <div className="google"> <Link to="https://www.google.com/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                                            <g filter="url(#filter0_dd_1_1665)">
                                                <rect x="4" y="2.66675" width="69.3333" height="69.3333" rx="34.6667" fill="white" />
                                            </g>
                                            <path d="M53.7082 34.3957H52.5V34.3335H39V40.3335H47.4772C46.2405 43.8262 42.9172 46.3335 39 46.3335C34.0297 46.3335 30 42.3037 30 37.3335C30 32.3632 34.0297 28.3335 39 28.3335C41.2942 28.3335 43.3815 29.199 44.9707 30.6127L49.2135 26.37C46.5345 23.8732 42.951 22.3335 39 22.3335C30.7162 22.3335 24 29.0497 24 37.3335C24 45.6172 30.7162 52.3335 39 52.3335C47.2837 52.3335 54 45.6172 54 37.3335C54 36.3277 53.8965 35.346 53.7082 34.3957Z" fill="#FBC02D" />
                                            <path d="M25.7295 30.3517L30.6577 33.966C31.9912 30.6645 35.2207 28.3335 39 28.3335C41.2942 28.3335 43.3815 29.199 44.9707 30.6127L49.2135 26.37C46.5345 23.8732 42.951 22.3335 39 22.3335C33.2385 22.3335 28.242 25.5862 25.7295 30.3517Z" fill="#E53935" />
                                            <path d="M39.0002 52.3335C42.8747 52.3335 46.3952 50.8508 49.057 48.4395L44.4145 44.511C42.9085 45.6518 41.0365 46.3335 39.0002 46.3335C35.0987 46.3335 31.786 43.8458 30.538 40.374L25.6465 44.1428C28.129 49.0005 33.1705 52.3335 39.0002 52.3335Z" fill="#00A57F" />
                                            <path d="M53.7082 34.3957L53.6962 34.3335H52.5H39V40.3335H47.4773C46.8833 42.0112 45.804 43.458 44.412 44.5117L44.4142 44.5102L49.0567 48.4387C48.7282 48.7372 54 44.8335 54 37.3335C54 36.3277 53.8965 35.346 53.7082 34.3957Z" fill="#1565C0" />
                                            <defs>
                                                <filter id="filter0_dd_1_1665" x="0" y="8.14199e-05" width="77.333" height="77.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="1.33333" />
                                                    <feGaussianBlur stdDeviation="2" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.278431 0 0 0 0.1 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1665" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset />
                                                    <feGaussianBlur stdDeviation="0.666667" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.101961 0 0 0 0 0.294118 0 0 0 0.2 0" />
                                                    <feBlend mode="normal" in2="effect1_dropShadow_1_1665" result="effect2_dropShadow_1_1665" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_1665" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg></Link></div>
                                    <div className="apple"><Link to="https://www.apple.com/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                                        <g filter="url(#filter0_dd_1_1672)">
                                            <rect x="4" y="2.66675" width="69.3333" height="69.3333" rx="34.6667" fill="white" />
                                        </g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.9632 25.7481C45.2242 24.2271 46.0708 22.1075 45.8397 20C44.0263 20.0735 41.8316 21.2075 40.5331 22.7285C39.3668 24.0756 38.346 26.2311 38.6222 28.2966C40.6427 28.4541 42.7083 27.2706 43.9662 25.7481H43.9632ZM48.4997 39.1253C48.5507 44.5734 53.2823 46.3869 53.3333 46.4109C53.2958 46.5384 52.5798 48.994 50.8414 51.5305C49.3403 53.7236 47.7821 55.9091 45.3263 55.9541C42.9139 55.9976 42.1394 54.5246 39.3803 54.5246C36.6242 54.5246 35.7625 55.9091 33.4778 55.9976C31.109 56.0876 29.3046 53.6261 27.7885 51.442C24.6961 46.972 22.3318 38.8118 25.5068 33.3037C27.0814 30.5677 29.9006 28.8351 32.9599 28.7916C35.2867 28.7466 37.4828 30.3562 38.9044 30.3562C40.3275 30.3562 42.9965 28.4211 45.8021 28.7046C46.9775 28.7541 50.274 29.1787 52.3921 32.2762C52.221 32.3812 48.4576 34.5712 48.4982 39.1253" fill="#2A303B" />
                                        <defs>
                                            <filter id="filter0_dd_1_1672" x="0" y="8.14199e-05" width="77.333" height="77.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="1.33333" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.278431 0 0 0 0.1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1672" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="0.666667" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.101961 0 0 0 0 0.294118 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_1_1672" result="effect2_dropShadow_1_1672" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_1672" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg></Link></div>
                                    <div className="fb"> <Link to="https://www.facebook.com/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                                        <g filter="url(#filter0_dd_1_1676)">
                                            <rect x="4" y="2.66675" width="69.3333" height="69.3333" rx="34.6667" fill="white" />
                                        </g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6091 54.6668V39.9435H30.667V33.8085H35.6091V28.9002C35.6091 23.8285 38.8411 21.3335 43.3956 21.3335C45.5771 21.3335 47.4533 21.4952 48.0003 21.5668V26.8668H44.8404C42.3635 26.8668 41.7862 28.0385 41.7862 29.7535V33.8085H47.9617L46.7266 39.9418H41.7862L41.8852 54.6668" fill="#0F5DA2" />
                                        <defs>
                                            <filter id="filter0_dd_1_1676" x="0" y="8.14199e-05" width="77.333" height="77.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="1.33333" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.278431 0 0 0 0.1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1676" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="0.666667" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.101961 0 0 0 0 0.294118 0 0 0 0.2 0" />
                                                <feBlend mode="normal" in2="effect1_dropShadow_1_1676" result="effect2_dropShadow_1_1676" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_1676" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg></Link></div>
                                </div>
                                <div className='text-center'>
                                    <p className='fnt-set6 fw-500 pt-3'>Already have an account? <Link to="/login" className='fw-600 ff-inter'>Sign In</Link></p></div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
