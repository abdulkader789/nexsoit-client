import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { CreateAccountPromo } from "../components/CreateAccountPromo/CreateAccountPromo";
import Footer from "../components/Footer/Footer";
import TeamOverview from "../components/Team/TeamOverview";
import RectAnimation from "../components/RectAnimation/RectAnimation";

const TeamMemberCard = ({ name, designation, image, socialMediaLinks }) => {
  return (
    <div className="w-full xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative  mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 rounded overflow-hidden shadow-md bg-white">
      <div className="w-full">
        <img src={image} alt={name} className="w-full" />
      </div>
      <div className="text-center p-5">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
      <div className="social-media-links flex justify-evenly p-5">
        {socialMediaLinks.twitter && (
          <a
            href={socialMediaLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        )}
        {socialMediaLinks.linkedin && (
          <a
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        )}
        {socialMediaLinks.github && (
          <a
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        )}
        {socialMediaLinks.facebook && (
          <a
            href={socialMediaLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        )}
        {socialMediaLinks.instagram && (
          <a
            href={socialMediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

const AboutTeam = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg "
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

// const AboutTeamInovation = () => {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl flex lg:py-16 lg:px-6">
//         <section className="w-full lg:w-1/2 text-gray-500 sm:text-lg dark:text-gray-400">
//           <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
//             Powering innovation at{" "}
//             <span className="font-extrabold">200,000+</span> companies worldwide
//           </h2>
//           <p className="mb-4 font-light">
//             Track work across the enterprise through an open, collaborative
//             platform. Link issues across Jira and ingest data from other
//             software development tools, so your IT support and operations teams
//             have richer contextual information to rapidly respond to requests,
//             incidents, and changes.
//           </p>
//         </section>
//         <section className="w-full lg:w-1/2">
//           {/* Content */}
//           <div className="grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4  text-white">
//             {/* Item */}
//             <div className="relative p-8">
//               <h3 className="mb-4 text-3xl font-bold md:text-5xl">1.5M</h3>
//               <h3 className="text-sm ">Users Registered</h3>
//               <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
//             </div>
//             {/* Item */}
//             <div className="relative p-8">
//               <h3 className="mb-4 text-3xl font-bold md:text-5xl">41%</h3>
//               <h3 className="text-sm">Growth Rate</h3>
//               <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
//             </div>
//             {/* Item */}
//             <div className="p-8 ">
//               <h3 className="mb-4 text-3xl font-bold md:text-5xl">3657+</h3>
//               <h3 className="text-sm ">Projects Completed</h3>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

const AboutTeamInovation = () => {
  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden py-10">
      <div className="py-8  mx-auto max-w-screen-xl flex lg:py-16 lg:px-6 flex-col lg:flex-row">
        <section className="w-full lg:w-1/2 text-gray-500 sm:text-lg dark:text-gray-400 h-[300px] flex justify-center items-center lg:justify-start pl-10">
          <RectAnimation />
        </section>
        <section className="w-full lg:w-1/2 py-20">
          {/* Content */}
          <div className="flex lg:grid w-full   lg:grid-cols-3 lg:gap-4  text-white">
            {/* Item */}
            <div className="relative p-2">
              <h3 className="mb-4 text-3xl font-bold md:text-5xl">1.5M</h3>
              <h3 className="text-sm ">Users Registered</h3>
              <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
            </div>
            {/* Item */}
            <div className="relative p-2">
              <h3 className="mb-4 text-3xl font-bold md:text-5xl">41%</h3>
              <h3 className="text-sm">Growth Rate</h3>
              <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
            </div>
            {/* Item */}
            <div className="p-2">
              <h3 className="mb-4 text-3xl font-bold md:text-5xl">3657+</h3>
              <h3 className="text-sm ">Projects Completed</h3>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

const TeamHeader = () => {
  return (
    <div className="container flex justify-center mx-auto pt-16">
      <div>
        <p className="text-gray-500 text-lg text-center font-normal pb-3">
          BUILDING TEAM
        </p>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          The Talented People Behind the Scenes of the Organization
        </h1>
      </div>
    </div>
  );
};
const TeamPage = () => {
  const teamData = [
    {
      name: "John Doe",
      designation: "CEO",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      socialMediaLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
    },
    {
      name: "Jane Smith",
      designation: "CTO",
      image:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      socialMediaLinks: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
      },
    },
    {
      name: "John Doe",
      designation: "CEO",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      socialMediaLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
    },
    {
      name: "Jane Smith",
      designation: "CTO",
      image:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      socialMediaLinks: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
      },
    },
    {
      name: "John Doe",
      designation: "CEO",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      socialMediaLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
    },
    {
      name: "Jane Smith",
      designation: "CTO",
      image:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      socialMediaLinks: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
      },
    },
    // Add more team members as needed
  ];
  return (
    <div className="team-section pt-20">
      <TeamOverview />
      {/* <section className=" bg-gray-100">
        <TeamHeader />
        <div className="flex items-center justify-center  flex-wrap ">
          {teamData.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              designation={member.designation}
              image={member.image}
              socialMediaLinks={member.socialMediaLinks}
            />
          ))}
        </div>
      </section> */}
      <div>
        <AboutTeam />

        <AboutTeamInovation />
      </div>
    </div>
  );
};

export default TeamPage;
