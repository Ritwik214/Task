import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    title: "",
    subTitle: "",
    description: "",
    quote: "",
    exp_year: "",
    address: "",
    some_total: "",
    phoneNumber: "",
    avatarUrl: "",
    email: "", // Add email to the initial state
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await response.json();
        if (data.success) {
          const {
            name,
            title,
            subTitle,
            description,
            quote,
            exp_year,
            address,
            some_total,
            phoneNumber,
            avatar,
            email, // Extract email from user information
          } = data.user.about;
          setUserInfo({
            name,
            title,
            subTitle,
            description,
            quote,
            exp_year,
            address,
            some_total,
            phoneNumber,
            avatarUrl: avatar.url,
            email: "portfolio3@gmail.com", // Set email in the state
          });
        } else {
          console.error("Failed to fetch user information:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const infos = [
    { id: 1, icon: "smartphone", title: "Call Me", value: userInfo.phoneNumber },
    { id: 2, icon: "letter", title: "Email Us", value: `<a href="mailto:${userInfo.email}">${userInfo.email}</a>` }, // Use userInfo.email
    { id: 3, icon: "placeholder", title: "Address", value: userInfo.address },
  ];

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { name, email, phone, subject, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({
              name: "",
              email: "",
              message: "",
              phone: "",
              subject: "",
            });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="iknow_tm_contact">
      <div className="iknow_tm_main_title">
        <span>Contact Me</span>
        <h3>Contact me to get your work done</h3>
      </div>
      <div className="wrapper">
        <div className="left">
          <ul>
            {infos.map((info) => (
              <li key={info.id}>
                <div className="list_inner">
                  <span className="icon">
                    <img
                      className="svg"
                      src={`/img/svg/${info.icon}.svg`}
                      alt="image"
                    />
                  </span>
                  <div className="short">
                    <h3>{info.title}</h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: info.value,
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <div className="fields">
            <form
              className="contact_form"
              autoComplete="off"
              onSubmit={(e) => onSubmit(e)}
            >
              <div
                className={error ? "empty_notice" : "returnmessage"}
                style={{ display: error == null ? "none" : "block" }}
              >
                <span>
                  {error
                    ? "Please Fill Required Fields"
                    : "Your message has been received, We will contact you soon."}
                </span>
              </div>
              <div className="input_list">
                <ul>
                  <li>
                    <input
                      id="name"
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      type="text"
                      placeholder="Your Name"
                    />
                  </li>
                  <li>
                    <input
                      id="email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      type="text"
                      placeholder="Your Email"
                    />
                  </li>
                  <li>
                    <input
                      id="phone"
                      name="phone"
                      onChange={(e) => onChange(e)}
                      value={phone}
                      type="number"
                      placeholder="Your Phone"
                    />
                  </li>
                  <li>
                    <input
                      id="subject"
                      name="subject"
                      onChange={(e) => onChange(e)}
                      value={subject}
                      type="text"
                      placeholder="Subject"
                    />
                  </li>
                </ul>
              </div>
              <div className="message_area">
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => onChange(e)}
                  value={message}
                  placeholder="Your message here"
                  defaultValue={""}
                />
              </div>
              <div className="iknow_tm_button">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit(e);
                  }}
                  id="send_message"
                  href="#"
                >
                  Submit Now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
