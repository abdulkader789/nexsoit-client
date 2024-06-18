import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturedServices = () => {
  const servicesData = [
    {
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
      title: "VR",
      slug: "vr",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000",
      title: "Tech",
      slug: "tech",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000",
      title: "Dev",
      slug: "dev",
    },
    {
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
      title: "Retro",
      slug: "retro",
    },
  ];
  return (
    <main className="pb-20">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className=" ">
          Special neural features <br />
          for your services
        </h2>

        <div class="grid  grid-cols-1 gap-4 relative sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* image - start  */}
          {servicesData.map((item) => (
            <div class="inverted-border-radius  group relative flex  items-end rounded-full relative  h-[500px]">
              <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
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
