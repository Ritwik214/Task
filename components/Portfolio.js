import { context } from "@/context/context";
import { useContext, useState, useEffect } from "react";

const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const [active, setActive] = useState("all");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const activeLi = (value) => (active === value ? "current" : "");
  const activeContent = (value) => (active === "all" || active === value ? "show" : "hidden");

  const handleActiveClick = (value, e) => {
    e.preventDefault();
    setActive(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data.user);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="iknow_tm_portfolio">
      <div className="iknow_tm_main_title">
        <span>Resume</span>
        <h3>My works that I did for clients</h3>
      </div>
      <div className="portfolio_filter">
        <ul>
          <li>
            <a
              href="#"
              className={activeLi("all")}
              onClick={(e) => handleActiveClick("all", e)}
              data-filter="*"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("vimeo")}
              onClick={(e) => handleActiveClick("vimeo", e)}
              data-filter=".vimeo"
            >
              Vimeo
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("youtube")}
              onClick={(e) => handleActiveClick("youtube", e)}
              data-filter=".youtube"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("soundcloud")}
              onClick={(e) => handleActiveClick("soundcloud", e)}
              data-filter=".soundcloud"
            >
              Soundcloud
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("detail")}
              onClick={(e) => handleActiveClick("detail", e)}
              data-filter=".detail"
            >
              Detail
            </a>
          </li>
        </ul>
      </div>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          {/* Vimeo */}
          {userData && userData.vimeo && userData.vimeo.length > 0 && userData.vimeo.map((item, index) => (
            <li key={index} className={`vimeo ${activeContent("vimeo")}`}>
              <div className="list_inner">
                <div className="image">
                  <img src={item.image || "/img/thumbs/1-1.jpg"} alt="image" />
                  <div className="main" data-img-url={`/img/portfolio/${index + 1}.jpg`} />
                </div>
                <div className="overlay" />
                <img className="svg" src="/img/svg/social/vimeo.svg" alt="image" />
                <div className="details">
                  <span>Vimeo</span>
                  <h3>{item.title}</h3>
                </div>
                <a className="iknow_tm_full_link popup-vimeo" href={item.link} />
              </div>
            </li>
          ))}
          {/* YouTube */}
          {userData && userData.youtube && userData.youtube.length > 0 && userData.youtube.map((item, index) => (
            <li key={index} className={`youtube ${activeContent("youtube")}`}>
              <div className="list_inner">
                <div className="image">
                  <img src={item.image || "/img/thumbs/1-1.jpg"} alt="image" />
                  <div className="main" data-img-url={`/img/portfolio/${index + 1}.jpg`} />
                </div>
                <div className="overlay" />
                <img className="svg" src="/img/svg/social/youtube-2.svg" alt="image" />
                <div className="details">
                  <span>Youtube</span>
                  <h3>{item.title}</h3>
                </div>
                <a className="iknow_tm_full_link popup-youtube" href={`https://www.youtube.com/watch?v=${item.embedId}`} />
              </div>
            </li>
          ))}
          {/* Soundcloud */}
          {userData && userData.soundcloud && userData.soundcloud.length > 0 && userData.soundcloud.map((item, index) => (
            <li key={index} className={`soundcloud ${activeContent("soundcloud")}`}>
              <div className="list_inner">
                <div className="image">
                  <img src={item.image || "/img/thumbs/1-1.jpg"} alt="image" />
                  <div className="main" data-img-url={`/img/portfolio/${index + 1}.jpg`} />
                </div>
                <div className="overlay" />
                <img className="svg" src="/img/svg/social/soundcloud.svg" alt="image" />
                <div className="details">
                  <span>Soundcloud</span>
                  <h3>{item.title}</h3>
                </div>
                <a className="iknow_tm_full_link soundcloude_link mfp-iframe audio" href={item.link} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
