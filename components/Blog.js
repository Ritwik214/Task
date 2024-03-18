import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { context } from "@/context/context";

const Blog = () => {
  const { modalToggle, setBlogModal } = useContext(context);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const userData = response.data.user;
      if (userData.blogs && userData.blogs.length > 0) {
        setBlogs(userData.blogs);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {blogs.length > 0 && (
        <div className="iknow_tm_news">
          <div className="iknow_tm_main_title">
            <span>Blog</span>
            <h3>Latest tips, tricks &amp; Updates</h3>
          </div>
          <div className="news_list">
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <div className="list_inner">
                    <div className="image">
                      <img src="/img/thumbs/37-27.jpg" alt="image" />
                      <div className="main" data-img-url={blog.img} />
                      <a
                        className="iknow_tm_full_link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setBlogModal(blog);
                        }}
                      />
                    </div>
                    <div className="details">
                      <span className="category">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            modalToggle(true);
                            setBlogModal(blog);
                          }}
                        >
                          {blog.category}
                        </a>
                      </span>
                      <h3 className="title">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            modalToggle(true);
                            setBlogModal(blog);
                          }}
                        >
                          {blog.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
