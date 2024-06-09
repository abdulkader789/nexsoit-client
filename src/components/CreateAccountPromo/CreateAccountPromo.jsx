export const CreateAccountPromo = () => {
  return (
    <main className="bg-gray-100 ">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg marcellus-regular uppercase mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Stay Updated with Nexsoit!
              </h2>
              <p className="text-base text-gray-700 md:text-lg montserrat-regular">
                Want to stay informed about our latest job openings and special
                offers? Create an account with us to receive the latest updates
                and never miss an opportunity.
              </p>
            </div>
            <hr className="mb-6 border-gray-300" />
          </div>
          <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
            <div className="mb-5 text-xl marcellus-regular uppercase">
              Create an account
            </div>
            <div className="flex justify-center w-full mb-3">
              <a
                href="/"
                className="inline-flex text-sm poppins-regular items-center justify-center w-full h-12 px-6  transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none "
              >
                Login with Google
              </a>
            </div>
            <p className="max-w-md montserrat-regular  px-5 mb-3  text-gray-600 text-md md:mb-5">
              Discover new career opportunities and receive updates tailored to
              your preferences.
            </p>
            <div className="flex items-center w-full mb-5">
              <hr className="flex-1 border-gray-300" />
              <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
              <hr className="flex-1 border-gray-300" />
            </div>
            <a
              href="/"
              className="inline-flex text-sm items-center poppins-regular justify-center w-full h-12 px-6  transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
            >
              Sign Up with Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
