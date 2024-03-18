import { useEffect, useState } from "react";
import axios from "axios";

const Jessica = ({
  menus,
  setActiveNav,
  activeNav,
  shapes1,
  setCopyRightClass,
}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const userData = response.data.user;
      // Check if user data is present
      if (userData && Object.keys(userData).length > 0) {
        setUserData(userData);
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Render the component only if user data is present
  return (
    <>
      {userData && (
        <div className="iknow_tm_hero">
          <div className="background_shape" />
          <div className="hero_content">
            <div className="container">
              <div className="content_inner">
                <div className="main_info">
                  <div className="left">
                    <span className="subtitle">I'm</span>
                    <h3 className="name">{userData.about.name}</h3>
                    <p className="text">{userData.about.subTitle}</p>
                    {/* Add more details if needed */}
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src={userData.about.avatar.url} alt="img" />
                      {/* Use avatar URL from user data */}
                      <div
                        className="main"
                        data-img-url={userData.about.avatar.url}
                      />
                    </div>
                  </div>
                </div>
                <div className="main_menu">
                  <ul>
                    {menus.map(
                      (menu) =>
                        menu.id !== 0 && (
                          <li
                            className={activeNav === menu.href ? "active" : ""}
                            key={menu.id}
                          >
                            <img
                              className="svg"
                              src={`/img/svg/${menu.icon}.svg`}
                              alt="Svg"
                            />
                            <span>{menu.title}</span>
                            <a
                              className="iknow_tm_full_link"
                              href={`#${menu.href}`}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveNav(menu.href);
                                setCopyRightClass("hidden visible");
                              }}
                            />
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Shapes */}
          <div className="simple_shapes">
            {shapes1.map((shap) => (
              <span
                key={shap.id}
                className={`${shap.classname} ${shap.animationName}`}
              >
                <img
                  className="svg"
                  src={`/img/svg/shapes/${shap.shapeImg}.svg`}
                  alt="svg-icon"
                />
              </span>
            ))}
          </div>
          {/* /Hero Shapes */}
        </div>
      )}
    </>
  );
};

export default Jessica;
