import React from "react";
import { FiSun, FiWifi } from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

//Contents

// subPages 23
// navOptions 59
// headerSlides 92
// phoneNumbers 118
// aboutUsMain 133
// aboutUs 144
// reviews 167
// projects 199

export const subPages = {
  residential: {
    headerTitle: "Residential Electrician Services in Kitsap County",
    headerText:
      "Based in Kitsap County, our business proudly serves the electrical needs of Western Washington.",
    bodyTitle: "Residential Services Include",
    bodyText:
      "At Pioneer Electrical, we understand that your home is your sanctuary, and ensuring its electrical systems are safe and efficient is our top priority. Our team of highly trained electricians specializes in a wide range of residential electrical services, from simple repairs and installations to comprehensive wiring and panel upgrades. Whether you're dealing with a flickering light, need to install new outlets, or want to enhance your home's energy efficiency, our professionals are here to provide reliable solutions tailored to your specific needs. With a commitment to quality, safety, and customer satisfaction, we're your trusted partner for all things electrical in your home. Experience the difference with Pioneer Electrical - where your electrical needs meet excellence.",
    seal: false,
  },
  commercial: {
    headerTitle: "Commercial Electrical Solutions",
    headerText:
      "Based in Kitsap County, our business proudly serves the electrical needs of Western Washington.",
    bodyTitle: "Commercial Services Include",
    bodyText:
      "At Pioneer Electrical, we understand the unique electrical demands of commercial enterprises, from small offices to large industrial facilities. Our dedicated team of skilled electricians is equipped to handle a wide range of commercial electrical needs, including installations, maintenance, energy-efficient solutions, and emergency repairs. With a commitment to minimizing downtime and maximizing productivity, we ensure that your business operations run smoothly and safely. Trust Pioneer Electrical to be your partner in keeping your commercial space electrified and efficient.",
    seal: false,
  },
  industrial: {
    headerTitle: "Industrial Electrician in Victoria",
    headerText:
      "Providing affordable electrical services in the beautiful city of Victoria",
    bodyTitle: "Industrial Services",
    bodyText:
      "Industrial electrical upgrades providing energy improvements will significantly decrease utility costs, and save a large part of your operating budget. Factories use a massive amount of energy. Research shows that manufacturing plants consume more than 1,000 times as much power as other industries. This level of consumption provides quick payback periods for electrical improvement costs. Electrical upgrades also add to the value of a facility with an average increased asset value of three dollars for every dollar spent.",
    seal: true,
  },
  government: {
    headerTitle: "Government",
    headerText:
      "Providing affordable electrical services in the beautiful city of Victoria",
    bodyTitle: "Quality Service and Installation",
    bodyText:
      "In today's modern houses, lighting systems are becoming more and more integrated and complex. Our electricians have a wealth of experience, knowledge, and commitment to staying up-to-date with the latest technology. You can always be assured of qualified, competent electricians attending your needs. Regardless of the complexity or size of your project, the professionals at Fake Electric will do it right the first time!",
    seal: true,
  },
  contact: {
    headerTitle: "Hire an Electrician in Victoria",
    headerText:
      "Providing affordable electrical services in the beautiful city of Victoria",
    // seal: true,
  },
  projects: {
    headerTitle: "Our Projects",
    headerText: "A small selection of our projects",
    // seal: true,
  },
};

export const navOptions = [
  {
    href: "/",
    title: "Home",
  },

  {
    href: "../residential",
    title: "Residential",
  },

  {
    href: "../commercial",
    title: "Commercial",
  },

  // {
  //     href: '../industrial',
  //     title: 'Industrial',
  // },

  // {
  //     href: '../government',
  //     title: 'Government',
  // },

  {
    href: "../contact",
    title: "Contact Us",
  },

  // {
  //     href: '../projects',
  //     title: 'Projects',
  // },
];

export const headerSlides = [
  // {
  //     //Return JSX for title & text so can change colors?
  //     img: "./imgs/Light-1200.webp",
  //     svg: <HiOutlineLightBulb  />,
  //     href: '../industrial',
  //     title: "Lighting Design",
  //     text: "Our electricians have a wealth of experience and knowledge with the latest technology!",
  // },
  {
    img: { lg: "/imgs/Bremerton-1000.webp", md: "/imgs/Bremerton-1000.webp", sm: "/imgs/Bremerton-600.webp" },
    svg: <FiSun />,
    href: "../residential",
    title: "Residential Services",
    text: "Service upgrades, renovations, new construction, and more!",
  },
  {
    img: { lg: "/imgs/Seattle-1200.webp", md: "/imgs/Seattle-900.webp", sm: "/imgs/Seattle-600.webp" },
    svg: <FiWifi />,
    href: "../commercial",
    title: "Commercial Services",
    text: "Data wiring, alarm systems, new construction, and much more!",
  },
];

export const aboutUsMain = {
  title: "Your Electrical Experts: Quality Service, Every Project.",
  text: "\
    We are your premier full-service electrical contractor, dedicated to providing top-notch solutions \
    for all your electrical needs. With years of industry experience, our skilled team is committed to \
    delivering excellence in every project we undertake. From installations and repairs to maintenance \
    and upgrades, we take pride in our attention to detail and customer-focused approach. At Pioneer \
    Electrical, your satisfaction and safety are our top priorities. Discover a brighter, more efficient \
    future with our expert electrical services.",
};

export const aboutUs = [
  // Animations in tailwind.config.cjs
  {
    svg: (
      <IoCheckmark className="h-20 w-20 text-text mx-auto group-hover:animate-checkmark-animation" />
    ),
    href: "../contact",
    title: "Quality Guarantee",
    text: "Reliable service is what every customer gets when they have a Pioneer Electrical electrician handling their electrical problems",
  },
  {
    svg: (
      <FiPhoneCall className="h-20 w-20 pt-3 text-accent mx-auto group-hover:animate-phone-animation" />
    ),
    href: "../contact",
    title: "24/7 Service",
    text: "Our technicians are available 24/7 for any emergency calls, helping with all that life can throw at you",
  },
  {
    svg: (
      <HiOutlineShieldCheck className="h-20 w-20 text-text mx-auto group-hover:animate-shield-animation" />
    ),
    href: "../contact",
    title: "Insured, Bonded, Licensed",
    text: "Our licensed electricians come fully equipped to address all your electrical needs.",
  },
];

export const reviews = [
  {
    text: "G Pants",
    title:
      "We had an emergency - in the middle of winter. He came right away, on his day off. Gave us a verbal estimate, got the job done A.S.A.P and under budget. Actually saved our lives. I want to adopt him. Thank you so, so much Chris. I will recommend Pioneer Electric to every and anyone who need electrical work done.",
  },
  {
    text: "Greg Haeffele",
    title:
      "I highly recommend Pioneer Electrical for your electrical work. Chris and Dillon quickly and expertly rewired my woodshop to add a sub panel and all of the circuits needed for my equipment, even ensuring future growth was available. Courteous and respectful, they answered and, more importantly, asked all the right questions to ensure the job was done exactly as needed. Great communications from initial site visit/pricing through final closeout/cleanup.",
  },
  {
    text: "Robert Pry",
    title:
      "As manager of Silverdale Meineke Car Care our sign had been out over a year with one phone call these guys were out that week and our sign was fixed soon after in the rain, around our customers and Chris and his guy stayed until it was done. Great work guys will definitely recommend.",
  },
  {
    text: "Mary Lou Teske",
    title:
      "Unbelievable customer service along side knowledgeable and efficient work. Our HVAC was not running heat. Called Pioneer after 5pm & Chris slid us in the same day, at the end of a long work day for him. Dark and rain and flashlights ... problem fixed while there. Will be hiring him again for another job.\
        I failed to mention, he called back the next day to check that all was okay. \n \
        Recommend highly - without reservations.\n \
        Mary Lou Teske\n \
        Bainbridge homeowner \n \
        12/23/2023",
  },
  {
    text: "scott tracy",
    title:
      "Chris did a great job of planning the project, communicating status throughout and delivering as promised at the end. He’s professional, easy to work with and keeps his commitments. I won’t hesitate to do more projects with him in the future - highly recommend.",
  },
  {
    text: "santaluces01",
    title:
      "Hands down the best interaction I’ve ever had with an electrictian. Chris came the same day I called with some issues I was having around the house for several months and showed up an hour early. He worked on our house the following night and early next morning until he found the issue and fixed it. Chris is absolutely amazing and priced more than fair. We would recommend him to anyone in the area. 10/10 dedicated professional! ",
  },
  {
    text: "Katie Gallegos",
    title:
      "Pioneer is a wonderful small business to work with. They helped us with a whole home rewire on an old house we purchased. There ended up being a lot of unique features that required creativity and troubleshooting on their part, and which they handled expertly. The team kept us informed of status, timelines, and took the time to explain things to us. They were respectful, clean, organized, and communicated very well. Their pricing was also very reasonable. I highly recommend Pioneer to anyone for their electrical needs.",
  },
  {
    text: "Peter Bradrick",
    title:
      "Chris and Pioneer Electrical are phenomenal. I run one of the top real estate teams in Kitsap county and they are the first people I will always refer to all of my clients. I’ve been so impressed with every single interaction I’ve had with this company and wish there were 10 stars to give them.",
  },
  // {
  //     text: "Mike Smith",
  //     img: "",
  //     svg: "",
  //     href: "",
  //     title: "Sean and team completely re-did the electrical in our apartment complex before upgrading us to a 400 amp service. The care, time, and expertise that Fake Electric brought to the jobsite was something that I have never seen before. Thanks to the Fake Electric for being true electrical professionals.",
  // },
];

export const projects = [
  {
    img: ["./imgs/City-Skyline-1200.webp", "./imgs/Light-1200.webp"],
    title: "TEST1",
    location: "Two Images",
    text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
  },
  {
    img: [
      "./imgs/Office-Interior-1200.webp",
      "./imgs/Light-1200.webp",
      "./imgs/City-Skyline-1200.webp",
    ],
    title: "TEST2",
    location: "Three Images",
    text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
  },
  {
    img: ["./imgs/Light-1200.webp"],
    title: "TEST3",
    location: "One Image",
    text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
  },
  {
    img: [
      "./imgs/Scaffolding-1200.webp",
      "./imgs/Light-1200.webp",
      "./imgs/City-Skyline-1200.webp",
      "./imgs/Scaffolding-1200.webp",
      "./imgs/Light-1200.webp",
      "./imgs/City-Skyline-1200.webp",
      "./imgs/Scaffolding-1200.webp",
      "./imgs/Light-1200.webp",
      "./imgs/City-Skyline-1200.webp",
    ],
    title: "TEST4",
    location: "Nine Images",
    text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
  },
];

export const contactInfo = {
  phone: "360-447-8137",
  hours: {
    weekday: "8:00am - 6:00pm",
    sat: "8:00am - 6:00pm",
    sun: "By appointment",
  },
  email: "inquiries@pioneerelectric.net",
  address: "",
};

export const phoneNumbers = [
  {
    title: "Cell Number",
    text: contactInfo.phone,
  },
  {
    title: "Mon-Sat Hours",
    text: contactInfo.hours.weekday,
  },
  {
    title: "Sunday Hours",
    text: contactInfo.hours.sun,
  },
];
