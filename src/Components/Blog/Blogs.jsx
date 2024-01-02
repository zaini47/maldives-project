import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Reuseable/Hero'
import blogBg from "../../Assets/Images/blogBg.png"
import "./blog.css"
import "../Reuseable/Reuseable.css"
import blogimg1 from "../../Assets/Images/blogp-1.png"
import blogimg2 from "../../Assets/Images/blogp-2.png"
import blogimg3 from "../../Assets/Images/blogp-3.png"
import blogimg4 from "../../Assets/Images/blogp-4.png"
import blogimg5 from "../../Assets/Images/blogp-5.png"
import { useNavigate } from 'react-router-dom'
import Recent from '../Reuseable/Recent'
import Footer from '../Footer/Footer'
import Banners from "../Reuseable/Banner";
// import Paginate from '../Reuseable/Paginate'
function Blogs() {
    const Blogsdata = [
        {
            id: "1",
            date: "Jan 02, 2023 / Event",
            title: "Cdc Issues Health Alert Notice For Travelers To Usa From Hon",
            blogimg: blogimg1,
            Sdescrip: "A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research",
            Ldescrip: ['“IT” (otherwise known as HD 36405.b) isn’t your average “oddball” exo-solar planet made of rock that wobbles on its end & zips around a nearby star in less than 2.46 days.',
                'Seeking a spot of serenity somewhere in the universe, I recently booked a deep-discount dodgy berth on the ‘White Elephant Express Space Shuttle’, to a little known place in a galaxy far, far away.',
                `"If truth be told, (after reading random excerpts from “The Itty Bitty Bunkum Book About Life, the Universe & Practically Everything Under the Sun Not To Mention Stuff Going On In Remote Galaxies), I was basically delirious. According to its noted author, Dr. Jar Laffer, “IT is a ‘must-see’ for those with little time on their hands & a passionate interest in Innocuous Things.”"`,
                "Most linear thinkers have a great deal of difficulty even comprehending why on  earth someone in their “right mind” would be interested in visiting a planet called “IT”. Not being a linear thinker with an investment in the “right” answer, I didn’t give a hoot. After all, what does one (who walks on water & listens to miffed mortals all day long) do for a frigging night off, now I ask you?",
                '“Before you took that first cruise, your thoughts about cruise ships and cruise vacations consisted of flashbacks to Love Boat re-runs. Cruising was all about sunny, tropical destinations like Bermuda”',
                "The city of southern California, san Diego is locally known as ‘America’s Finest City’. It’s located on San Diego Bay, an inlet of the Pacific Ocean near the Mexican border. San Diego is the second largest city in California and the seventh largest in the United States. It is also nicknamed as ‘America’s biggest small town’."]
        }, {
            id: "2",
            date: "Mar 04, 2023 / Event",
            title: "How To Boost Your Traffic Of Your Blog And Destroy The Competition",
            blogimg: blogimg2,
            Sdescrip: "Businesses such as Guide Me Green and the co-op offer a real alternative for people concerned with these issues and with businesses.",
            Ldescrip: ['“IT” (otherwise known as HD 36405.b) isn’t your average “oddball” exo-solar planet made of rock that wobbles on its end & zips around a nearby star in less than 2.46 days.',
                'Seeking a spot of serenity somewhere in the universe, I recently booked a deep-discount dodgy berth on the ‘White Elephant Express Space Shuttle’, to a little known place in a galaxy far, far away.',
                `"If truth be told, (after reading random excerpts from “The Itty Bitty Bunkum Book About Life, the Universe & Practically Everything Under the Sun Not To Mention Stuff Going On In Remote Galaxies), I was basically delirious. According to its noted author, Dr. Jar Laffer, “IT is a ‘must-see’ for those with little time on their hands & a passionate interest in Innocuous Things.”"`,
                "Most linear thinkers have a great deal of difficulty even comprehending why on  earth someone in their “right mind” would be interested in visiting a planet called “IT”. Not being a linear thinker with an investment in the “right” answer, I didn’t give a hoot. After all, what does one (who walks on water & listens to miffed mortals all day long) do for a frigging night off, now I ask you?",
                '“Before you took that first cruise, your thoughts about cruise ships and cruise vacations consisted of flashbacks to Love Boat re-runs. Cruising was all about sunny, tropical destinations like Bermuda”',
                "The city of southern California, san Diego is locally known as ‘America’s Finest City’. It’s located on San Diego Bay, an inlet of the Pacific Ocean near the Mexican border. San Diego is the second largest city in California and the seventh largest in the United States. It is also nicknamed as ‘America’s biggest small town’."]
        }, {
            id: "3",
            date: "Apr 06, 2023 / Event",
            title: "Global Travel And Vacations Luxury Travel On A Tight Budget",
            blogimg: blogimg3,
            Sdescrip: "Life is hectic; it’s true. There are so many things that demand your time and attention. Between work, kids, family & household chores, there is precious little time left over for you.",
            Ldescrip: ['“IT” (otherwise known as HD 36405.b) isn’t your average “oddball” exo-solar planet made of rock that wobbles on its end & zips around a nearby star in less than 2.46 days.',
                'Seeking a spot of serenity somewhere in the universe, I recently booked a deep-discount dodgy berth on the ‘White Elephant Express Space Shuttle’, to a little known place in a galaxy far, far away.',
                `"If truth be told, (after reading random excerpts from “The Itty Bitty Bunkum Book About Life, the Universe & Practically Everything Under the Sun Not To Mention Stuff Going On In Remote Galaxies), I was basically delirious. According to its noted author, Dr. Jar Laffer, “IT is a ‘must-see’ for those with little time on their hands & a passionate interest in Innocuous Things.”"`,
                "Most linear thinkers have a great deal of difficulty even comprehending why on  earth someone in their “right mind” would be interested in visiting a planet called “IT”. Not being a linear thinker with an investment in the “right” answer, I didn’t give a hoot. After all, what does one (who walks on water & listens to miffed mortals all day long) do for a frigging night off, now I ask you?",
                '“Before you took that first cruise, your thoughts about cruise ships and cruise vacations consisted of flashbacks to Love Boat re-runs. Cruising was all about sunny, tropical destinations like Bermuda”',
                "The city of southern California, san Diego is locally known as ‘America’s Finest City’. It’s located on San Diego Bay, an inlet of the Pacific Ocean near the Mexican border. San Diego is the second largest city in California and the seventh largest in the United States. It is also nicknamed as ‘America’s biggest small town’."]
        }, {
            id: "4",
            date: "May 08, 2023 / Event",
            title: "Will The Democrats Be Able To Reverse The Online Gambling Ban",
            blogimg: blogimg4,
            Sdescrip: "Everyone loves good, old fashioned charcoal grilling. Aside from being cheaper than other grilling methods, it adds a raw, distinctive taste to your sausages.",
            Ldescrip: ['“IT” (otherwise known as HD 36405.b) isn’t your average “oddball” exo-solar planet made of rock that wobbles on its end & zips around a nearby star in less than 2.46 days.',
                'Seeking a spot of serenity somewhere in the universe, I recently booked a deep-discount dodgy berth on the ‘White Elephant Express Space Shuttle’, to a little known place in a galaxy far, far away.',
                `"If truth be told, (after reading random excerpts from “The Itty Bitty Bunkum Book About Life, the Universe & Practically Everything Under the Sun Not To Mention Stuff Going On In Remote Galaxies), I was basically delirious. According to its noted author, Dr. Jar Laffer, “IT is a ‘must-see’ for those with little time on their hands & a passionate interest in Innocuous Things.”"`,
                "Most linear thinkers have a great deal of difficulty even comprehending why on  earth someone in their “right mind” would be interested in visiting a planet called “IT”. Not being a linear thinker with an investment in the “right” answer, I didn’t give a hoot. After all, what does one (who walks on water & listens to miffed mortals all day long) do for a frigging night off, now I ask you?",
                '“Before you took that first cruise, your thoughts about cruise ships and cruise vacations consisted of flashbacks to Love Boat re-runs. Cruising was all about sunny, tropical destinations like Bermuda”',
                "The city of southern California, san Diego is locally known as ‘America’s Finest City’. It’s located on San Diego Bay, an inlet of the Pacific Ocean near the Mexican border. San Diego is the second largest city in California and the seventh largest in the United States. It is also nicknamed as ‘America’s biggest small town’."]
        }, {
            id: "5",
            date: "Jun 10, 2023 / Event",
            title: "Les Houches The Hidden Gem Of The Chamonix Valley",
            blogimg: blogimg5,
            Sdescrip: "Las Vegas has more than 100,000 hotel rooms to choose from. There is something for every budget, and enough entertainment.",
            Ldescrip: ['“IT” (otherwise known as HD 36405.b) isn’t your average “oddball” exo-solar planet made of rock that wobbles on its end & zips around a nearby star in less than 2.46 days.',
                'Seeking a spot of serenity somewhere in the universe, I recently booked a deep-discount dodgy berth on the ‘White Elephant Express Space Shuttle’, to a little known place in a galaxy far, far away.',
                `"If truth be told, (after reading random excerpts from “The Itty Bitty Bunkum Book About Life, the Universe & Practically Everything Under the Sun Not To Mention Stuff Going On In Remote Galaxies), I was basically delirious. According to its noted author, Dr. Jar Laffer, “IT is a ‘must-see’ for those with little time on their hands & a passionate interest in Innocuous Things.”"`,
                "Most linear thinkers have a great deal of difficulty even comprehending why on  earth someone in their “right mind” would be interested in visiting a planet called “IT”. Not being a linear thinker with an investment in the “right” answer, I didn’t give a hoot. After all, what does one (who walks on water & listens to miffed mortals all day long) do for a frigging night off, now I ask you?",
                '“Before you took that first cruise, your thoughts about cruise ships and cruise vacations consisted of flashbacks to Love Boat re-runs. Cruising was all about sunny, tropical destinations like Bermuda”',
                "The city of southern California, san Diego is locally known as ‘America’s Finest City’. It’s located on San Diego Bay, an inlet of the Pacific Ocean near the Mexican border. San Diego is the second largest city in California and the seventh largest in the United States. It is also nicknamed as ‘America’s biggest small town’."]
        }
    ];

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Hero
                image={blogBg}
                title='Hotels Blogs'
                locat='Home / Blogs'
                height="80vh"
            />

            <div className="container-fluid">
            <div className="container pad-sm">
                    <div className="row py-5  m-sm pad-sm ">
                        <div className="col-sm-12 col-md-12 col-lg-8  m-sm h-50 pad-sm" >
                            {Blogsdata.map((item) => (
                                <div className="row m-sm d-flex py-3 w-100" key={item.id}>
                                    <div className="col-6 w-sm">
                                        <img src={item.blogimg} className='img-fluid rounded-3 w-100 h-100 ' alt="" />
                                    </div>
                                    <div className="col-6  w-sm">
                                        <div>
                                            <p className='fs-24 ff-p fw-400 text-d my-1'>
                                                {item.date}
                                            </p>
                                        </div>
                                        <div>
                                            <p className='fs-28 ff-p fw-500 text-d m-0'>
                                                {item.title}
                                            </p>
                                        </div>
                                        <div>
                                            <p className='fs-16 fw-400 ff-p text--light'>
                                                {item.Sdescrip}
                                            </p>
                                        </div>
                                        <button
                                            className='blog-detail text-white fs-13'
                                            onClick={() =>
                                                navigate("/Blogs/Blogdetail", { state: { items: item } })
                                            }
                                        >
                                            Read More <i className="fa-solid fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-4'>
                            <Recent />
                        </div>
                    </div>
            </div>
            </div>
            <Banners/>
            <Footer/>
        </>
    )
}

export default Blogs