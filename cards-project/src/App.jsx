import React from "react";
import Card from "./component/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        companyName="Amazon"
        time="5 days ago"
        jobType="Senior UI/UX Designer"
        status1="Part-time"
        status2="Senior level"
        pay="$120/hr"
        city="San Francisco,CA"
        img="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg"
      />
      <Card
        companyName="Google"
        time="30 days ago"
        jobType="Graphic Designer"
        status1="Full-time"
        status2="Flexible Schedule"
        pay="$140/hr"
        city="Mountain View,CA"
        img="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
      />
      <Card
        companyName="Dribbble"
        time="18 days ago"
        jobType="Senior Motion Designer"
        status1="Contract"
        status2="Remote"
        pay="$190/hr"
        city="San Francisco,CA"
        img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEX/q+fYe72zSJS3T5m4UJq1TJfkisr/r+v/sezafsD6peHBXaSyR5T/rOjTdbj/renGY6nnjs3fhMTwmdf0ntv/ruq/WqLPcLTslNO8VZ7La69lEsuzAAABPklEQVR4AWWRB5aFMAhFI4Ehk2rU6Nf9L3TANt/js+Klay51YBGRfvi03S/hDdkHEBo7p1biDHhDtbsoFDqJLakXdkMVV6VxYDciIVprHnQEja1Z61uazENtp0R6m30xraS7amE3KJCwuOj37uPZOWbHbap5PRl+WN0JgObQ92EFebO4i3wzqt1xFx5BWpEy7/ByPgDEvv4KjT4pXGZNp2ekkKtxrUlJ6lghu+LHj2jyze2tN+2YGrdjhFRE6R6pKNx6BPNScr7XBcn1QjxucPT4gm7qIx2E4Jm2FF35kZIWX54/ZSVFsG4WaeNHyiFaRXN1I6GdvyEvoJWwckleXql8sU0ZLElnb/IeTfpnpCmrOyz18xfkDNrk1E5ztQjTCXlQhtr8C5ZJmb3ZI20TR/E82bOh1hEiVb7ZMUozf5iDED8WsD32AAAAAElFTkSuQmCC"
      />
      <Card
        companyName="Meta"
        time="3 months ago"
        jobType="UX Designer"
        status1="Full-time"
        status2="In office"
        pay="$160/hr"
        city="New York,NY"
        img="https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80"
      />
      <Card
        companyName="Airbnb"
        time="1 days ago"
        jobType="Junior UX/UI Designer"
        status1="Contract"
        status2="Remote"
        pay="$110/hr"
        city="San Francisco,CA"
        img="https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png"
      />
      <Card
        companyName="Apple"
        time="6 days ago"
        jobType="Graphic Designer"
        status1="Full-time"
        status2="Flexible Schedule"
        pay="$140/hr"
        city="Cupertino,CA"
        img="https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png"
      />
    </div>
  );
};

export default App;
