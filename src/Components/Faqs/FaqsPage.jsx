import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Reuseable/Hero'
import Faqs from '../Reuseable/Faqs'
import Faqsimg from '../../Assets/Images/faqs.png'
import Footer from '../Footer/Footer'
import "../Reuseable/Reuseable.css"
import Banners from "../Reuseable/Banner";

function FaqsPage() {

  const seaview = [
    { id: "1", question: "Is there an additional cost for a sea view room?" },
    { id: "2", question: "Can I guarantee a specific sea view from my room?" },
    { id: "3", question: "Are all sea view rooms the same, or do they vary in terms of view quality?" },
    { id: "4", question: "Are there any rooms with a partial sea view at a lower cost?" }
  ]

  const royalroom = [
    { id: "5", question: "What distinguishes a `royal room` from other room types?" },
    { id: "6", question: "Is there a minimum stay requirement for booking a royal room?" },
    { id: "7", question: "Do royal room bookings come with any special perks or services?" }
  ]

  const kingroom = [
    { id: "8", question: "What distinguishes a `premium king room` from a standard room?" },
    { id: "9", question: "Is breakfast included in the booking of a premium king room?" },
    { id: "10", question: "Are premium king rooms available with a view, and is there an extra charge for this?" },
    { id: "11", question: "Can I request additional amenities or services for my premium king room, such as a crib or late check-out?" },
    { id: "12", question: "Do premium king rooms come with access to exclusive facilities or lounges?" }
  ]


  const viproom = [
    { id: "13", question: "What amenities and features are included in a VIP room?" },
    { id: "14", question: "Is there a minimum stay requirement or special criteria for booking a VIP room?" },
    { id: "15", question: "Are VIP room bookings customizable to specific preferences or needs?" },
    { id: "16", question: "Do VIP room bookings come with complimentary services or access to exclusive areas?" },
  ]
  return (
    <>
      <Navbar />
      <Hero
        title='FAQs'
        locat='Home / FAQs'
        image={Faqsimg}
      />
      <div className="container">
        <div className="row">

          {/* /////////////////////////////////////FIRST PORTION END//////////////////////////// */}

          <div className="text  m-auto text-center py-4">
            <div>
              <p className='fnt-set13 '>Frequently Asked Questions</p>
            </div>
            <p className='fnt-set24'>Room Sea View</p>
          </div>

          {
            seaview.map((item) => {
              return (
                <Faqs
                  question={item.question}
                  item={item.id}
                />
              )
            })
          }


          {/* //////////////////////////////////SECOND  Royal Room/////////////////////////// */}

          <div className='py-4 text-center'>
            <p className='fnt-set24'>Room Sea View</p>
          </div>

          {
            royalroom.map((item) => {
              return (
                <Faqs
                  question={item.question}
                  item={item.id}
                />
              )
            })
          }

          {/* //////////////////////////////////THIRD  Royal Room/////////////////////////// */}

          <div className='py-4 text-center'>
            <p className='fnt-set24'>Premium King Room</p>
          </div>


          {
            kingroom.map((item) => {
              return (
                <Faqs
                  question={item.question}
                  item={item.id}
                />
              )
            })
          }
          
          {/* //////////////////////////////////FOURTH  Royal Room/////////////////////////// */}


          <div className='py-4 text-center'>
            <p className='fnt-set24'>Vip Room</p>
          </div>
          {
            viproom.map((item) => {
              return (
                <Faqs
                  question={item.question}
                  item={item.id}
                />
              )
            })
          }
        </div>
      </div>
      <Banners/>
      <Footer />
    </>
  )
}

export default FaqsPage
