import * as React from "react";
import { useState, useEffect } from "react";
import HomeCard from "../component/HomeCard";
import {IBlog} from "../utils/types";

const Home: React.FC<HomeProps> = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/blogs");
      let blogs = await res.json();
      setBlogs(blogs);
    })();
  }, []);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        {blogs.map(blog => (
          <HomeCard key={`blog-card-home-${blog.id}`} blog={blog} />
        ))}
      </section>
    </main>
  );
};

interface HomeProps {}

export default Home;
