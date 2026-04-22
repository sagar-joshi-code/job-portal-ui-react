import React from "react";
import RiBookmarkLineIcon from "remixicon-react/BookmarkLineIcon";
const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <div className="top">
        <img src={props.img} alt="logo" />
        <div className="btn">
          <button>
            Save <RiBookmarkLineIcon size={10} color="" />
          </button>
        </div>
      </div>
      <div className="middle">
        <span className="firstspan">{props.companyName}</span>
        <span className="secondspan">{props.time}</span>
        <div className="heading">{props.jobType}</div>
      </div>

      <div className="jobtype">
        <span className="thirdspan">{props.status1}</span>
        <span className="fourthspan">{props.status2}</span>
      </div>

      <div className="lastdiv">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.city}</p>
        </div>
        <div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
