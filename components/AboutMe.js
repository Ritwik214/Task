import { useContext, useEffect, useState } from "react";
import { context } from "@/context/context";

const AboutMe = () => {
  const { aboutData } = useContext(context);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => setUserData(data.user.about));
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/thumbs/35-44.jpg" alt="image" />
            <div className="main" data-img-url={userData.avatar.url} />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>{userData.name}</span>
              </li>
              <li>
                <h3>Mail</h3>
                <span>portfolio3@gmail.com</span>
              </li>
              <li>
                <h3>Phone</h3>
                <span>{userData.phoneNumber}</span>
              </li>
              <li>
                <h3>Address</h3>
                <span>{userData.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="iknow_tm_main_title">
          <span>About Me</span>
          <h3>{userData.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{userData.subTitle}</p>
        </div>
        <div className="text">
          <p>{userData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
