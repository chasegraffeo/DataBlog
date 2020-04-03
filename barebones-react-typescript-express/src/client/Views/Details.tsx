import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { IoIosSkipBackward } from "react-icons/Io";
import { FaExpeditedssl } from "react-icons/fa";

const Details: React.FC<DetailsProps> = () => {
  const { id } = useParams();
  const history = useHistory();

  const [blog, setBlogs] = useState([]);
  console.log(blog);

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/blogs/${id}`);
      let blogs = await res.json();
      setBlogs(blogs);
    })();
  }, [id]);

  if (blog.length <= 0) {
    return null;
  } else {
    return (
      <main className="container">
        <section className="row my-2 justify-content-center">
          <div className="col-md-12">
            <div className="card shadow">
              <div className="card-body text-center">
                <h4 className="card-title">{blog[0].title}</h4>
                <p className="card-text">{blog[0].content}</p>
                <div className="d-flex justify-content-end align-items-center">
                  <button
                    onClick={() => history.push("/")}
                    className="btn btn-outline-warning mx-1"
                  >
                    <IoIosSkipBackward />
                  </button>
                  <Link
                    className="btn btn-outline-warning mx-1"
                    to={`/admin/${blog[0].id}`}
                  >
                    <FaExpeditedssl />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
};

interface DetailsProps {}

export default Details;
