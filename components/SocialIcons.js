import React, { useState, useEffect } from "react";
import axios from "axios";

const SocialIcons = () => {
  const [socialHandles, setSocialHandles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const userData = response.data.user;
      setSocialHandles(userData.social_handles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="social">
      <ul>
        {socialHandles.map((handle) => (
          <li key={handle._id}>
            <a href={handle.url}>
              <img
                className="svg"
                src={handle.image.url}
                alt={handle.platform}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;

export const SocialIcons2 = () => {
  // Assuming you have a different set of social icons for SocialIcons2
  return (
    <div className="social">
      <ul>
        {/* Add your SocialIcons2 JSX here */}
      </ul>
    </div>
  );
};

export const SocialIcons3 = () => {
  // Assuming you have a different set of social icons for SocialIcons3
  return (
    <div className="social_list">
      <ul>
        {/* Add your SocialIcons3 JSX here */}
      </ul>
    </div>
  );
};
