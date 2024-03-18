import { context } from "@/context/context";
import { useContext, useState, useEffect } from "react";

const Service = () => {
  const { modalToggle, setServiceModal } = useContext(context);
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setServicesData(data.user.services);
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

  const services = [
    {
      id: 1,
      title: "Wireframing",
      icon: "squares",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/1.jpg",
    },
    {
      id: 2,
      title: "Prototype",
      icon: "physics",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/2.jpg",
    },
    {
      id: 3,
      title: "UI Design",
      icon: "web",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/3.jpg",
    },
    {
      id: 4,
      title: "Personal Creation",
      icon: "user",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/4.jpg",
    },
    {
      id: 5,
      title: "Case Study",
      icon: "briefcase",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/5.jpg",
    },
    {
      id: 6,
      title: "Experience Design",
      icon: "writing_2",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/6.jpg",
    },
  ];

  return (
    <div className="iknow_tm_services">
      <div className="iknow_tm_main_title">
        <span>Service</span>
        <h3>Never compromise with quality</h3>
      </div>
      <div className="service_list">
        <ul>
          {servicesData.map((service) => (
            service.enabled && (
              <li key={service._id}>
                <div className="list_inner">
                  <span className="icon">
                    <img
                      className="svg"
                      src={service.image.url}
                      alt={service.name}
                    />
                  </span>
                  <h3 className="title">{service.name}</h3>
                  <p className="text">{service.desc}</p>
                  <a
                    className="iknow_tm_full_link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setServiceModal(service);
                    }}
                  />
                </div>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
