import React from "react";
import trending from "../assets/mocks/trending";
import { PostMasonry } from "../components/common/index";
import featured from "../assets/mocks/featured";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};
const featuredConfig = {};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const Home = () => {
  return (
    <section className="container home">
      <div className="row">
        <h2>Trending Post</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  );
};

export default Home;
