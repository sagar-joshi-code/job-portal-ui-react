import React from "react";
import Card from "./component/Card";

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      companyName: "Google",
      img: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      time: "2 days ago",
      post: "Staff Software Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$185/hr",
      city: "Mountain View, CA",
    },
    {
      id: 2,
      companyName: "Amazon",
      img: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      time: "5 days ago",
      post: "AWS Solutions Architect",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$145/hr",
      city: "Seattle, WA",
    },
    {
      id: 3,
      companyName: "Microsoft",
      img: "https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png",
      time: "1 day ago",
      post: "Azure Cloud Engineer",
      tag1: "Contract",
      tag2: "Senior level",
      pay: "$160/hr",
      city: "Redmond, WA",
    },
    {
      id: 4,
      companyName: "Meta",
      img: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      time: "3 days ago",
      post: "Product Designer",
      tag1: "Full-time",
      tag2: "Junior level",
      pay: "$110/hr",
      city: "Menlo Park, CA",
    },
    {
      id: 5,
      companyName: "Apple",
      img: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      time: "6 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$175/hr",
      city: "Cupertino, CA",
    },
    {
      id: 6,
      companyName: "Netflix",
      img: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      time: "10 days ago",
      post: "Backend Engineer (Java)",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$210/hr",
      city: "Los Gatos, CA",
    },
    {
      id: 7,
      companyName: "Tesla",
      img: "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      time: "4 days ago",
      post: "Autopilot Software Lead",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$195/hr",
      city: "Austin, TX",
    },
    {
      id: 8,
      companyName: "Adobe",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////+9fX+9/b96+vpAAD4xsXyjYrqEADqAADuVlL2s7HyhoPsNS/61tb2rq3wbGjrIxzrLyn1pqTzmJb60tHvZmP3vLv4wcDzk5HtRkL73t3xeXb97ezsQTzuWlb62djqGQ+7TL0FAAAAwElEQVR4AbWQVQLDMAxDF06GZab7n3KxyvBblWy9gNLH/WLci10zISF1CbU0XtZdQmkgKS7Yc4avC/i2ZqJn9pFmht8T/NHEd0CRwiNjNFFGMT7JAY4uE/Sx6QHayXQWg3Ysm5fLURQ7WFpvBfMSxm5ZNcahskCZbWANh1PZIFK7Mg5Wj02HSNUCI8Bv//l4T00jZw2GJEm+GxsOgrGzZD7/jwgIB59l0ymSGeZzbMV8JBQZoPj0qz4eNmRQtpv0B4L4C2q5kuOCAAAAAElFTkSuQmCC",
      time: "8 days ago",
      post: "UX/UI Designer",
      tag1: "Part-time",
      tag2: "Junior level",
      pay: "$95/hr",
      city: "San Jose, CA",
    },
    {
      id: 9,
      companyName: "NVIDIA",
      img: "https://iprsoftwaremedia.com/219/files/202512/692f50633d6332b6efbbc605_nvidia-logo-vert-wht/nvidia-logo-vert-wht_prv.png",
      time: "12 days ago",
      post: "AI Research Scientist",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: "$230/hr",
      city: "Santa Clara, CA",
    },
    {
      id: 10,
      companyName: "Uber",
      img: "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small/uber-transparent-icon-free-png.png",
      time: "7 days ago",
      post: "Site Reliability Engineer",
      tag1: "Contract",
      tag2: "Mid-level",
      pay: "$130/hr",
      city: "San Francisco, CA",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map((elem, idx) => {
        console.log(idx);

        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              img={elem.img}
              time={elem.time}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              city={elem.city}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
