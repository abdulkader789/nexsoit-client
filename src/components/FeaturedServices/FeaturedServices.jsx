import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import WaveSVG from "../WaveSVG/WaveSVG";

const FeaturedServices = () => {
  const servicesData = [
    {
      image:
        "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000",
      title: "development",
      slug: "development",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/teenager-boy-play-computer-video-game-dark-room-use-neon-colored-rgb-mechanical-keyboard-workplace-cybersport-gaming_77190-8378.jpg?size=626&ext=jpg",
      title: "design",
      slug: "design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000",
      title: "mobile application",
      slug: "mobile-application",
    },
    {
      image:
        "https://media.licdn.com/dms/image/D5612AQEzqbMlwdD9aA/article-cover_image-shrink_720_1280/0/1695249239875?e=2147483647&v=beta&t=CG_PVuvuJg3lI6aimHLNOUyT5kWqrxRPFYF10JMzWfs",
      title: "digital marketing",
      slug: "digital-marketing",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/08/06/02/69/360_F_806026922_Wvdy7BfW4HOIhdi09ss9lWHNUqzZOdAW.jpg",
      title: "support & maintanance",
      slug: "support-maintanance",
    },
  ];

  return (
    <main className="pb-20 relative">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="bricolage-grotesque-regular text-2xl lg:text-5xl pb-5">
          Special neural features <br />
          for your services
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {servicesData.map((item) => (
            <div
              key={item.slug}
              className="inverted-border-radius group relative flex items-end h-[450px] rounded-xl"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col h-full justify-center">
                <span className="relative top-20 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg capitalize montserrat-medium transform -translate-x-10 opacity-0 transition-transform duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  {item.title}
                </span>
              </div>
              <div className="h-9 w-9 rounded-full bg-black border absolute -bottom-1 z-20 text-white flex justify-center items-center right-1 cursor-pointer">
                <FiChevronRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeaturedServices;
