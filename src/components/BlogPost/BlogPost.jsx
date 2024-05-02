import React from "react";

const BlogData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

const Blog = ({ item }) => {
  return (
    <div className="shadow-lg max-w-[30%]">
      <img src={item.image} className="object-cover w-full" alt="Blog Image" />
      <h3 className="text-xl font-semibold text-center w-3/4 mx-auto my-5">
        {item.title}
      </h3>
      <p className="text-center text-gray-600 mb-10 mx-auto w-3/4">
        {item.description}
      </p>
      <div className="flex justify-between px-2 border-t border-solid border-gray-200">
        <p className="text-center p-4 flex gap-2 flex-col items-center justify-center">
          <img src={item.authorIcon} className="w-5" alt="" />
          <strong className="text-sm">{item.author}</strong>
        </p>
        <p className="text-center p-4 flex gap-2 flex-col items-center justify-center">
          <img src={item.dateIcon} className="w-5" alt="" />
          <strong className="text-sm">{item.date}</strong>
        </p>
        <p className="text-center p-4 flex gap-2 flex-col items-center justify-center">
          <img src={item.methodIcon} className="w-5" alt="" />
          <strong className="text-sm">{item.method}</strong>
        </p>
      </div>
    </div>
  );
};

const BlogPost = () => {
  return (
    <div>
      <p className="uppercase text-center text-gray-400">our</p>
      <h2 className="uppercase text-center text-2xl font-bold">Blog Posts</h2>
      <div className="max-w-6xl mx-auto my-8 px-2 flex justify-center flex-wrap gap-4">
        {BlogData.map((item) => (
          <Blog item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
