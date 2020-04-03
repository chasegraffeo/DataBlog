import * as React from "react";
import { IBlog } from "../utils/types";
import { useHistory } from "react-router-dom";


const HomeChirpCard: React.FC<HomeCardProps> = props => {
  const history = useHistory()
  
    return (
        <React.Fragment>    
          <img alt="Blog" src="https://lh3.googleusercontent.com/proxy/uq5If_lw_9F0azyVljikaHzJ_KUykhhNRD2SMhD8cCntB2R7zqppUqOTT2yawGkQe42BSoE4nADMH4N5JFOqORto1F6KWUCFUhhOPz57hkG0jRL9POmpchbx1czh" width="500" height="200"></img>
          
    <div className="col-md-5 mx-1" >
      <div onClick={() => history.push(`/details/${props.blog.id}`)} className="card my-2 shadow">
        <div className="card-body text-center">
          <h4 className="card-title">@{props.blog.name}</h4>
          <p className="card-text">{props.blog.title}</p>   
        </div>
      </div>
    </div>
    
    </React.Fragment>
  );
};

interface HomeCardProps {
  blog: IBlog;
}

export default HomeChirpCard;
