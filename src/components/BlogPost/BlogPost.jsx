import React from "react";

const BlogPost = () => {
  const BlogData = [
    {
      title: "Modernising our Talent Programmes",
      description:
        "The world of work has changed and the appetite for spending long periods of time...",
      author: "EMMA",
      date: "AUGUST 11, 2017",
      method: "POST",
      image: "./blog-01.jpg",
      authorIcon: "./author-icon.png",
      dateIcon: "./date-icon.png",
      methodIcon: "./post-icon.png",
    },
    {
      title: "Franki goes to... The Philippines & Indonesia",
      description:
        "In this blog series titled 'Franki goes to...' we follow her travels around the world...",
      author: "EMMA",
      date: "AUGUST 7, 2017",
      method: "POST",
      image: "./blog-02.jpg",
      authorIcon: "./author-icon.png",
      dateIcon: "./date-icon.png",
      methodIcon: "./post-icon.png",
    },
    {
      title: "Getting More For Your Money",
      description:
        "The majority of businesses will have a degree of reliance on recruitment suppliers...",
      author: "EMMA",
      date: "AUGUST 6, 2017",
      method: "POST",
      image: "./blog-03.jpg",
      authorIcon: "./author-icon.png",
      dateIcon: "./date-icon.png",
      methodIcon: "./post-icon.png",
    },
  ];

  return (
    <div>
      <p className="uppercase text-center text-gray-400">our</p>
      <h2 className="uppercase text-center text-2xl font-bold">Blog Posts</h2>
      <div className="max-w-6xl mx-auto my-8 px-2 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {BlogData.map((item, index) => (
          <div
            key={index}
            className="shadow-lg grid grid-rows-subgrid row-span-4 rounded overflow-hidden text-center"
          >
            <img
              src={item.image}
              alt="Blog Image"
              className="object-cover w-full max-h-full h-full aspect-video"
            />
            <h3 className="text-xl font-bold px-6">{item.title}</h3>
            <p className="mt-2 mb-4 px-6 text-gray-600">{item.description}</p>
            <div className="flex justify-between w-full gap-2 border-t border-solid border-gray-200">
              <p className="p-4 flex gap-2 w-1/4 flex-col items-center justify-center">
                <img src={item.authorIcon} className="w-4" alt="Icon" />
                <strong className="text-xs">{item.author}</strong>
              </p>
              <p className="p-4 flex gap-2 w-1/2 flex-col items-center justify-center">
                <img src={item.dateIcon} className="w-4" alt="Icon" />
                <strong className="text-xs">{item.date}</strong>
              </p>
              <p className="p-4 flex gap-2 w-1/4 flex-col items-center justify-center">
                <img src={item.methodIcon} className="w-4" alt="Icon" />
                <strong className="text-xs">{item.method}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
