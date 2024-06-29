import { motion, useAnimation } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FeaturedServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const itemVariants = {
    hidden: { scale: 0.9 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const servicesData = [
    {
      image:
        "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000",
      title: "web development",
      slug: "web-development",
      description:
        "We ensure the development of high-quality, optimized, and responsive web applications that deliver seamless user experiences.",
      tools: ["React", "NextJS", "NodeJS", "MongoDB"],
    },
    {
      image:
        "https://img.freepik.com/premium-photo/teenager-boy-play-computer-video-game-dark-room-use-neon-colored-rgb-mechanical-keyboard-workplace-cybersport-gaming_77190-8378.jpg?size=626&ext=jpg",
      title: "design solutions",
      slug: "design-solutions",
      description:
        "We specialize in creating visually captivating and intuitive design solutions that elevate user interaction, engagement, and brand experience.",
      tools: ["Figma"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000",
      title: "mobile application",
      slug: "mobile-application",
      description:
        "With our expertise, we deliver cutting-edge mobile experiences designed to elevate user engagement through intuitive design and robust functionality.",

      tools: ["React Native", "FlutterJS"],
    },
    {
      image:
        "https://media.licdn.com/dms/image/D5612AQEzqbMlwdD9aA/article-cover_image-shrink_720_1280/0/1695249239875?e=2147483647&v=beta&t=CG_PVuvuJg3lI6aimHLNOUyT5kWqrxRPFYF10JMzWfs",
      title: "digital marketing",
      slug: "digital-marketing",
      description: "Enhancing your online presence and reach.",
      tools: ["Google Analytics", "SEO Tools", "Social Media Platforms"],
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/08/06/02/69/360_F_806026922_Wvdy7BfW4HOIhdi09ss9lWHNUqzZOdAW.jpg",
      title: "support & maintenance",
      slug: "support-maintenance",
      description:
        "Providing ongoing support and maintenance for your digital products.",
      tools: [],
    },
  ];

  return (
    <main className="pb-20 relative">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="bricolage-grotesque-regular text-2xl lg:text-6xl pb-5">
          Our special features <br />
          for your services
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {servicesData.map((item) => (
            <motion.div
              key={item.slug}
              className="inverted-border-radius group relative flex items-start h-[450px] rounded-xl"
              // ref={ref}
              // variants={itemVariants}
              // initial="hidden"
              // animate={controls}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col h-full justify-center p-4 hover:bg-white hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg rounded-xl">
                <span className="relative bricolage-grotesque-bold top-0 inline-block text-sm text-white md:text-3xl capitalize montserrat-medium  ">
                  {item.title}
                </span>
                <span className="relative top-4 inline-block text-xs text-white md:text-sm  montserrat-light transform -translate-x-10 opacity-0 transition-transform duration-300 group-hover:translate-x-0 group-hover:opacity-100 mb-5">
                  {item.description}
                </span>
                <div className="flex flex-wrap mt-4">
                  {item.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="relative text-xs text-white bg-black bg-opacity-50 px-4 py-2 mr-2 mb-2 rounded-md transform -translate-x-10 opacity-0 transition-transform duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <Link to={`services/${item.slug}`}>
                <div className="h-9 w-9 rounded-full bg-black border absolute -bottom-1 z-20 text-white flex justify-center items-center right-1 cursor-pointer group-hover:bg-opacity-75 ">
                  <FiChevronRight />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeaturedServices;
