import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import DeleteIcon from '@mui/icons-material/Delete';

function Experiences() {
  return (
    <div className="experience " name="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white"
          date="Sep 2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          //   icon={<DeleteIcon/>
          // }
        >
          <h3 className="vertical-timeline-element-title text-black">
            Full Stack Engineer - NanoSoft
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Dhaka,Bangladesh
          </h4>
          <p className="text-black">
            Helped the team launch major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white"
          date="Jan 2022 - Sep 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Front-End Developer - Xuan-Tong (BD) Co. Ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Dhaka.
          </h4>
          <p className="text-black">
            Developed the frontend infrastructure for 1 projects.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education text-white"
          date=" 2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            My Cool University, Daffodil International University, Dhaka
          </h3>

          <h4 className="vertical-timeline-element-subtitle text-black">
            Bachelor's Degree
          </h4>

          <p className="text-black"> Computer Science & Engineering </p>
          <p className="text-black"> CGPA : 3.63 </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education text-white"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            My Random High School, Random Place, Random State
          </h3>
          <p className="text-black"> High School Diploma</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;
