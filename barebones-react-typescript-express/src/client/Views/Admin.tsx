import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Admin: React.FC<AdminProps> = () => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setTitle(e.target.value);
const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
  setContent(e.target.value);

  const saveEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({title, content});
    	let res = await fetch(`/api/blogs/${id}`, {
    	  method: 'PUT',
    	  headers: {
    		'Content-Type': 'application/json'
    	  },
    	  body: JSON.stringify({ title, content })
    	})
    	if(res.ok) {
    	  history.push('/');
    	}else{
    	  console.log('something went wrong :(');
    	}
  };

  const deleteBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({title, content});
    	let res = await fetch(`/api/blogs/${id}`, {
    	  method: 'DELETE',
    	  headers: {
    		'Content-Type': 'application/json'
    	  },
    	  body: JSON.stringify({ title, content })
    	})
    	if(res.ok) {
    	  history.push('/');
    	}else{
    	  console.log('something went wrong :(');
    	}
  };

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/blogs/${id}`);
      let blog = await res.json();
      setTitle(blog.title);
      setContent(blog.content);
    })();
  }, [id]);

  return (
    <main className="container">
      <section className="row my-2 justify-content-center">
        <div className="col-md-8">
          <form className="form-group p-3 shadow border">
            <label htmlFor="username">@Pseudonym</label>
            <input
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter Pseudonym"
              id="username"
              type="text"
              className="form-control"
            />
            <label htmlFor="message">Blog</label>
            <textarea
              value={content}
              onChange={handleContentChange}
              rows={8}
              placeholder="Tell us your story..."
              name="message"
              className="form-control"
              id="message"
            ></textarea>
            <button
              onClick={saveEdit}
              className="btn btn-outline-warning btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              <FaEdit />
              Save It!
            </button>
            <button
              onClick={deleteBlog}
              className="btn btn-outline-warning btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              <MdDelete />
              
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

interface AdminProps {}

export default Admin;
