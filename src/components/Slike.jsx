import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Navbar from "./Navbar";

const AutoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true, // Ensures the loop is continuous
    speed: 10000, // Adjusted for slow smooth transition
    slidesToShow: 12,
    slidesToScroll: 12,
    autoplay: true,
    autoplaySpeed: 0, // Ensures continuous motion without stopping
    cssEase: "linear", // For continuous linear transition without interruptions
  };

  const techStacks = [
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "ThreeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    },
    {
      name: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    //{ name: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  return (
    <>
      <div
        className="relative isolate overflow-hidden py-12 sm:py-16"
        id="skills"
      >
        {/* Slider */}
        <div className="mt-16">
          <Slider {...settings}>
            {techStacks.map((tech, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#333",
                  height: "120px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{
                    height: "80px",
                    filter: "invert(0)",
                  }}
                />
                <span
                  style={{
                    color: "#000000",
                    fontSize: "1.2rem",
                    marginLeft: "1rem",
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AutoCarousel;
