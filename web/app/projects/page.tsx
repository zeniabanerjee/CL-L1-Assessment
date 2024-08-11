import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const componentData = [
  {
    projectName: "Web Development",
    numberOfTasks: 4,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "UI/UX Course",
    numberOfTasks: 2,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "AI and Machine Learning",
    numberOfTasks: 7,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "Front-End Development",
    numberOfTasks: 9,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "Web Development",
    numberOfTasks: 4,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "UI/UX Course",
    numberOfTasks: 2,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "AI and Machine Learning",
    numberOfTasks: 7,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "Front-End Development",
    numberOfTasks: 9,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "Web Development",
    numberOfTasks: 4,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "UI/UX Course",
    numberOfTasks: 2,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "AI and Machine Learning",
    numberOfTasks: 7,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
  {
    projectName: "Front-End Development",
    numberOfTasks: 9,
    profileImage: [
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
      "/projects/profile2.svg",
      "/projects/profile3.png",
      "/projects/profile3.png",
    ],
  },
];

export default function Projects() {
  return (
    <>
      {componentData.map((value, index) => {
        return (
          <div key={index} className="bg-white flex flex-col">
            <div className="px-8 py-4 flex flex-row justify-between items-center border-b-[#F3F6F8] border-b-[2px]">
              <p className="font-medium">{value.projectName}</p>
              <div className="flex flex-row gap-2">
                <img src="/projects/bookmark.svg" alt="bookmark-img" />
                <p>Bookmark</p>
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-4">
              <p>Progress</p>
              <p>{`${value.numberOfTasks}/10 Tasks`}</p>
            </div>

            <div className="flex  px-8 py-4 gap-3">
              <div className="completion"></div>
              {/* <img src="/projects/tick.svg" alt="" /> */}
            </div>
            <div className="flex px-8 py-4 ">
              {value.profileImage.slice(0, 4).map((data, index) => {
                return (
                  <img
                    src={data}
                    key={index}
                    height="40px"
                    width="40px"
                    className="rounded-full"
                  />
                );
              })}
            </div>
            <div className="flex w-full  justify-center items-center">
              <button className="w-1/2 flex justify-center p-3 items-center border-t-2 border-t-[#F3F6F8]  border-r-2 border-r-[#F3F6F8] ">
                <RiEdit2Fill className="text-2xl" />
              </button>
              <button className="w-1/2 flex justify-center p-3 items-center border-t-2 border-t-[#F3F6F8] ">
                <MdOutlineDelete className="text-2xl" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
