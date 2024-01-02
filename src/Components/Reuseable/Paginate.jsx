import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import room1 from '../../Assets/Images/room1.png'
import room2 from '../../Assets/Images/room2.png'
import room3 from '../../Assets/Images/room3.png'
import room4 from '../../Assets/Images/room4.png'
import room5 from '../../Assets/Images/room5.png'
import room6 from '../../Assets/Images/room6.png'
import './Paginate.css';

import { useNavigate } from "react-router-dom";

const items = [
    {
      id: "1",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room1,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "2",
      typeroom: "Small Room",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room2,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "3",
      typeroom: "Premium King",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room3,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "4",
      typeroom: "Room Vip King",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room4,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "5",
      typeroom: "Royal Room",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room5,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "6",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room6,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    }, {
      id: "7",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room6,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "8",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room1,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "9",
      typeroom: "Small Room",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room2,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "10",
      typeroom: "Premium King",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room3,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "11",
      typeroom: "Room Vip King",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room4,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "12",
      typeroom: "Royal Room",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room5,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "13",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room6,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    }, {
      id: "14",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room6,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "15",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room1,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "16",
      typeroom: "Small Room",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room2,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "17",
      typeroom: "Premium King",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room3,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "18",
      typeroom: "Room Vip King",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room4,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "19",
      typeroom: "Royal Room",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room5,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    },
    {
      id: "20",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room6,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    }, {
      id: "21",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room6,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    }, {
      id: "22",
      typeroom: "Room View Sea",
      charges: "400$",
      size: "30ft",
      capacity: " Max person 5",
      bed: " King Beds",
      services: " Wi-Fi, Television, Bathroom",
      roomimg: room6,
      Ldescrip: [
        "If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their uniformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.",
        "Mauris molestie lectus in irdiet auctor.",
        "Dictum purus at blandit molestie.",
        "Neque non fermentum suscipit.",
        "Donec id dui ac massa malesuada.",
        "In sit amet sapien quis orci maximus.",
        "Vestibulum rutrum diam vel eros tristique.",
        "Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense."
      ]
    }
  ];

function Items({ currentItems }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="container w-xl">
                <div className="row py-5 d-flex justify-content-evenly">

                    {currentItems && currentItems.map((item) => (
                        <div className="col-sm-12 col-md-12 col-lg-6 row  py-5">
                            <div className="col-sm-12 col-md-6 ">
                                <div><img src={item?.roomimg} className='img-fluid rounded ' style={{ height: "270px" }} alt="." /></div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div>
                                    <p className='fs-29 ff-p text-d fw-500  m-0'>
                                        {item?.typeroom}
                                    </p>
                                </div>
                                <div>
                                    <p className='fs-20 fw-500 ff-p text--light '>
                                        <span className='fs-29 fw-500 ff-p text-prim'>{item?.charges}</span> <span className='fs-29'>/</span>Day
                                    </p>
                                </div>
                                <div >
                                    <div className='d-flex flex-wrap row'>
                                        <div className='col-5'>
                                            <p className='fs-15 fw-400 ff-p text--light m-0'>
                                                Size
                                            </p>
                                            <p className='fs-18 fw-500 ff-p text-d '>{item?.size}</p></div>
                                        <div className='col-7'>
                                            <p className='fs-15 fw-400 ff-p text--light m-0'>
                                                Capacity
                                            </p>
                                            <p className='fs-18 fw-500 ff-p text-d '>{item?.capacity}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-wrap row'>
                                        <div className=' col-5'>
                                            <p className='fs-15 fw-400 ff-p text--light m-0'>
                                                Bed
                                            </p>
                                            <p className='fs-18 fw-500 ff-p text-d '>{item?.bed}</p>
                                        </div>
                                        <div className=' col-7 px-1'>
                                            <p className='fs-15 fw-400 ff-p text--light m-0'>
                                                Services
                                            </p>
                                            <p className='elipses fs-18 fw-500 ff-p text-d '>{item?.services}</p></div>
                                    </div>
                                </div>

                                <button className='room-btn' onClick={() => navigate("/Rooms/RoomsDetail", { state: { items: item } })}>
                                    View Details <i className="fa-solid fa-chevron-right"></i>

                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}



function Pagination({ itemsPerPage }) {


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='custom_ul'
                breakClassName='custom_li'
                pageClassName='custom_li'
                breakLinkClassName='custom_a'
                pageLinkClassName='custom_A'
                nextClassName='custom_next'
                nextLinkClassName='custom_nextA'
                previousClassNameClassName='custom_previous'
                previousLinkClassName='custom_previousB'
                itemsPerPage={6}
            />
        </>
    );
}

export default Pagination;
