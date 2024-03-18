import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { useContext, useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const Testimonials = () => {
  const { testimonialItems } = useContext(context);
  const [testimonials, setTestimonials] = useState([]);

  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: testimonialItems, spaceBetween: 25 },
    },
  };

  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();

    // Fetch testimonials from API
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await response.json();
        if (data.success) {
          setTestimonials(data.user.testimonials);
        } else {
          console.error("Failed to fetch testimonials:", data.message);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="iknow_tm_testimonials">
      <div className="iknow_tm_main_title">
        <span>Testimonials</span>
        <h3>What people say about me</h3>
      </div>
      <div
        className={`testimonials_list owl-theme ${
          testimonialItems === 1 ? "no-sadow" : ""
        }`}
      >
        <Swiper {...props}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id} className="list_inner">
              <div className="in">
                <div className="text">
                  <p>{testimonial.review}</p>
                </div>
                <div className="details">
                  <div className="left">
                    <div className="avatar">
                      <div
                        className="main"
                        data-img-url={testimonial.image.url}
                      />
                    </div>
                    <div className="info">
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                  <div className="right">
                    <img
                      className="svg"
                      src="/img/svg/left-quote.svg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="owl-dots" />
      </div>
    </div>
  );
};

export default Testimonials;
