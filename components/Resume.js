import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Resume = () => {
  const [timeline, setTimeline] = useState([]);
  const [skills, setSkills] = useState([]);
  const [personalSkills, setPersonalSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        
        // Convert dates to Date objects and sort them
        const sortedTimeline = data.user.timeline.map(entry => ({
          ...entry,
          startDate: new Date(entry.startDate),
          endDate: new Date(entry.endDate)
        })).sort((a, b) => b.startDate - a.startDate);
        
        setTimeline(sortedTimeline);
        setSkills(data.user.skills);
        if (data.user.about.some_total) {
          setPersonalSkills(data.user.about.some_total);
        }
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

  const educations = timeline.filter((entry) => entry.forEducation);
  const experiences = timeline.filter((entry) => !entry.forEducation);

  return (
    <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Resume</span>
        <h3>Combination of Skill & Experience</h3>
      </div>
      <div className="resume_inner">
        <div className="left">
          {educations.length > 0 && (
            <div className="info_list">
              <div className="iknow_tm_resume_title">
                <h3>Education</h3>
                <span className="shape" />
              </div>
              <ul>
                {educations.map((education) => (
                  <li key={education._id}>
                    <div className="list_inner">
                      <div className="short">
                        <div className="job">
                          <h3>{education.jobTitle}</h3>
                          <span>{education.company_name}</span>
                        </div>
                        <div className="year">
                          <span>
                            {education.startDate.toLocaleDateString()} - {education.endDate.toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="text">
                        <p>{education.summary}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {experiences.length > 0 && (
            <div className="info_list">
              <div className="iknow_tm_resume_title">
                <h3>Experience</h3>
                <span className="shape" />
              </div>
              <ul>
                {experiences.map((experience) => (
                  <li key={experience._id}>
                    <div className="list_inner">
                      <div className="short">
                        <div className="job">
                          <h3>{experience.jobTitle}</h3>
                          <span>{experience.company_name}</span>
                        </div>
                        <div className="year">
                          <span>
                            {experience.startDate.toLocaleDateString()} - {experience.endDate.toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="text">
                        <p>{experience.summary}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="right">
          {/* {personalSkills !== null && personalSkills !== 0 && (
            <div className="skills_list">
              <div className="iknow_tm_resume_title">
                <h3>Personal Skills</h3>
                <span className="shape" />
              </div>
              <div className="personal">
                <div className="dodo_progress">
                  <div className="progress_outer">
                    <div className="progress_inner" data-value={personalSkills}>
                      <span>
                        <span className="label">Total</span>
                        <span className="number">{personalSkills}%</span>
                      </span>
                      <div className="background">
                        <div className="bar" style={{ width: `${personalSkills}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
          {skills.length > 0 && (
            <div className="skills_list">
              <div className="iknow_tm_resume_title">
                <h3>Software Skills</h3>
                <span className="shape" />
              </div>
              <div className="software">
                <div className="circular_progress_bar">
                  <ul>
                    {skills.map((skill) => (
                      <li key={skill._id}>
                        <div className="list_inner">
                          <div className="myCircle" data-value="0.95">
                            <CircularProgressbar
                              value={skill.percentage}
                              strokeWidth={4}
                              styles={buildStyles({
                                // Colors
                                pathColor: "#ff451b",
                              })}
                            />
                            <h3 className="number">{skill.percentage}%</h3>
                          </div>
                          <div className="title">
                            <h3>{skill.name}</h3>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
