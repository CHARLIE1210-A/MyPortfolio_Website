import {
    mobile,
    backend,
    creator,
    web,
    robot,
    data,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    robo,
    sandrover,
    hackathon,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Enginner",
      icon: robot,
    },
    {
      title: "Data Enginner",
      icon: data,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Project Development Competition",
      company_name: "AICTE IDEA LAB",
      icon: robo,
      iconBg: "#383E56",
      date: "Aug 2022",
      points: [
        "Securing 1st rank",
        "In this competition, we used esp32 models to create a robot that could monitor locations where it was difficult for a person to reach.",
        "We sent the data from our camera to the phone through wifi network so that the user can monitor and control everything from his phone.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Sand Rover Competition",
      company_name: "Kshitij 2023,IIT Kharaghpur",
      icon: sandrover,
      iconBg: "#E6DEDD",
      date: "Jan 2023",
      points: [
        "Securing 2nd rank",
        "In this, a rover had to be made and it had to be driven on a path which was full of some difficulties.",
        "There were three rounds in this, idea submission was to be done in the first round. responsive design and ensuring cross-browser compatibility.",
        "Then we had to send a prototype design, then in the last round we completed the path in less time by picking up sand.",
      ],
    },
    {
      title: "Hackathon (Software Edition)",
      company_name: "Smart India Hackathon,2023",
      icon: hackathon,
      iconBg: "#383E56",
      date: "Nov 2023",
      points: [
        "Securing 1st rank",
        "This is a national level hackath event which is organized by the Government of India every year.",
        "In this competition we solved the problem statement of Coal Ministry.",
        "The statement was that we have to reduce demerge charges.For which we had created a website which analyzed the railway movement and informed the users accordingly.For this we used a lot of technology stacks",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Project development program (with IoT sensors and Arduino/ESP-32/NodeMCU)",
      name: "AICTE IDEA LAB",
      designation: "in",
      company: "2022",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "Drone Design and Development ",
      name: "AICTE IDEA LAB",
      designation: "in ",
      company: "2022",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Raspberry Pi (Using Python ) ",
      name: "AICTE IDEA LAB",
      designation: "in",
      company: "2023",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };