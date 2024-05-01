import React from "react";

const BlogPost = () => {
  const items = [
    {
      title: "Modernising our Talent Programmes",
      description:
        "The world of work has changed and the appetite for spending long periods of time...",
      author: "EMMA",
      date: "AUGUST 11, 2017",
      method: "POST",
      image: "./blog-01.jpg",
    },
    {
      title: "Franki goes to... The Philippines & Indonesia",
      description:
        "In this blog series titled 'Franki goes to...' we follow her travels around the world...",
      author: "EMMA",
      date: "AUGUST 7, 2017",
      method: "POST",
      image: "./blog-02.jpg",
    },
    {
      title: "Getting More For Your Money",
      description:
        "The majority of businesses will have a degree of reliance on recruitment suppliers...",
      author: "EMMA",
      date: "AUGUST 6, 2017",
      method: "POST",
      image: "./blog-03.jpg",
    },
  ];

  return (
    <div>
      <p className="uppercase text-center">our</p>
      <h2 className="uppercase text-center text-2xl font-semibold">
        Blog Posts
      </h2>
      <div className="max-w-6xl mx-auto my-8 px-2"></div>
    </div>
  );
};

export default BlogPost;
