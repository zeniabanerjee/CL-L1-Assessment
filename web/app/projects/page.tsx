import React from "react";

const componentData = [
  {
    projectName: "Web Development",
    numberOfTasks: 4,
    profileImage: "/projects/profile2.svg",
  },
  {
    projectName: "UI/UX Course",
    numberOfTasks: 2,
    profileImage: "/projects/profile3.svg",
  },
  {
    projectName: "AI and Machine Learning",
    numberOfTasks: 7,
    profileImage: "/projects/profile2.svg",
  },
  {
    projectName: "Front-End Development",
    numberOfTasks: 9,
    profileImage: "/projects/profile3.svg",
  },
  {
    projectName: "Web Development",
    numberOfTasks: 4,
    profileImage: "/projects/profile2.svg",
  },
  {
    projectName: "UI/UX Course",
    numberOfTasks: 2,
    profileImage: "/projects/profile3.svg",
  },
  {
    projectName: "AI and Machine Learning",
    numberOfTasks: 7,
    profileImage: "/projects/profile2.svg",
  },
  {
    projectName: "Front-End Development",
    numberOfTasks: 9,
    profileImage: "/projects/profile3.svg",
  },
  {
    projectName: "Web Development",
    numberOfTasks: 4,
    profileImage: "/projects/profile2.svg",
  },
  {
    projectName: "UI/UX Course",
    numberOfTasks: 2,
    profileImage: "/projects/profile3.svg",
  },
  {
    projectName: "AI and Machine Learning",
    numberOfTasks: 7,
    profileImage: "/projects/profile2.svg",
  },
  {
    projectName: "Front-End Development",
    numberOfTasks: 9,
    profileImage: "/projects/profile3.svg",
  },
];

export default function Projects() {
  return (
    <>
      {componentData.map((value, index) => {
        return (
          <div key={index} className="bg-white flex flex-col">
            <div className="px-8 py-4 flex flex-row justify-between items-center border-b-[#F3F6F8] border-b-[2px]">
              <p className="font-[500px]">{value.projectName}</p>
              <div className="flex flex-row gap-2">
                <img src="/projects/bookmark.svg" alt="bookmark-img" />
                <p>Bookmark</p>
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-4">
              <p>Progress</p>
              <p>{`${value.numberOfTasks}/10 Tasks`}</p>
            </div>

            <div className="flex flex-row px-8 py-4 gap-3">
              <div className="completion"></div>
              {/* <img src="/projects/tick.svg" alt="" /> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
