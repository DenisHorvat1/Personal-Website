import React from "react";
import {
  VerticalTimeline, 
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2020 - 2023'
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "Alexandru Ioan Cuza" University of Iaşi 
          </h3>
          <p>
            Bachelor Degree in Mathematics and Computer Sciences
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2023'
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Continental, Iasi
          </h3>
          <p>
            Internship, Image Processing and Computer Vision.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2023 - 2025'
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tehnical University of Cluj-Napoca
          </h3>
          <p>
            Master's Degree in Software Engineering.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience