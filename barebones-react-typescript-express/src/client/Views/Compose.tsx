import * as React from "react";
import { useState } from "react";
import { GiFeatherWound } from "react-icons/gi";
import { useHistory } from "react-router";

const Compose: React.FC<ComposeProps> = () => {
  
  const history = useHistory();
  
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorid, setAuthorid] = useState<number>();


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  

  const submitBlog = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAuthorid(1);
    console.log({title, content, authorid});
    let res = await fetch(`/api/blogs/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content,  authorid })
    })
    if(res.ok) {
      history.push('/');
    }else{
      console.log('something went wrong :(');      
    }
  };

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
              onClick={submitBlog}
              className="btn btn-outline-warning btn-block mt-3 w-75 mx-auto shadow-sm"
            >
              <GiFeatherWound />
              Submit Blog!
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

interface ComposeProps {}

export default Compose;
