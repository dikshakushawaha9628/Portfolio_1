// import React, { useState } from "react";
// import "./Skills.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import Button from "./Button";

// import SkillList from "./SkillList";

// const Skills = () => {
//     const [tabIndex, setTabIndex] = useState(0);

//     return (
//         <section className="resume container section" id="skill">
//             <h2 className="section__title">Skills</h2>

//             <div className="resume__container">
//                 <Tabs
//                     className="tabs"
//                     selectedIndex={tabIndex}
//                     onSelect={(index) => setTabIndex(index)}
//                     selectedTabClassName={"is-active"}
//                     selectedTabPanelClassName={"is-active"}
//                 >
//                     <TabList className="tab__list">
//                         {SkillList.map((experience, index) => {
//                             const { id, title } = experience;
//                             return (
//                                 <Tab className="tab" key={`company-${id}`}>
//                                     <Button>{title}</Button>
//                                 </Tab>
//                             );
//                         })}
//                     </TabList>

//                     {SkillList.map((experience) => {
//                         const { id, skill } = experience;
//                         return (
//                             <TabPanel className="tab__panel" key={`panel-${id}`}>
//                                 <div className="tab__panel-list">
//                                     {skill.map((info, index) => {
//                                         return <div className="info" >{info}</div>;
//                                     })}
//                                 </div>
//                             </TabPanel>
//                         );
//                     })}
//                 </Tabs>
//             </div>
//         </section>
//     );
// };

// export default Skills;



import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiMongodb, SiMysql, SiCplusplus, SiFigma } from "react-icons/si";
import Button from "./Button";
import SkillList from "./SkillList";
import "./Skills.css";

const skillIcons = {
  JavaScript: <SiJavascript size={28} />,
  HTML: <SiHtml5 size={28} />,
  CSS: <SiCss3 size={28} />,
  React: <SiReact size={28} />,
  TailwindCSS: <SiTailwindcss size={28} />,
  // NodeJS: <SiNodeDotJs size={28} />,
  MongoDB: <SiMongodb size={28} />,
  MySQL: <SiMysql size={28} />,
  "C++": <SiCplusplus size={28} />,
  Figma: <SiFigma size={28} />,
};

const Skills = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="resume container section" id="skill">
      <h2 className="section__title">Skills</h2>

      <div className="resume__container">
        <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={"is-active"}
          selectedTabPanelClassName={"is-active"}
        >
          <TabList className="tab__list">
            {SkillList.map(({ id, title }) => (
              <Tab className="tab" key={`tab-${id}`}>
                <Button>{title}</Button>
              </Tab>
            ))}
          </TabList>

          {SkillList.map(({ id, skill }) => (
            <TabPanel className="tab__panel" key={`panel-${id}`}>
              <div className="tab__panel-grid">
                {skill.map((info, index) => (
                  <div className="skill-card-glass" key={index}>
                    <div className="icon">{skillIcons[info] || null}</div>
                    <span>{info}</span>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
