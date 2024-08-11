"use client";
import React, { useState } from "react";
import { roboto } from "../helper/fonts";
import { Select } from "antd";
import "./projects.scss";
import ProjectForm from "../ui/project/projectForm";

const ProjectsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [createProjectPopup, setCreateProjectPopup] = useState<boolean>(false);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className={`flex flex-col gap-1 ${roboto.className}`}>
      {createProjectPopup && <ProjectForm onClose={setCreateProjectPopup} />}
      <nav className="flex flex-row justify-between items-center py-4  px-5 md:px-[4.3rem] md:py-[1.3rem] w-full">
        <div className="flex flex-row gap-1 ">
          <img src="/projects/home.svg" className="w-6 h-6" alt="home-image" />
          <p className="text-[1.2rem]">Projects</p>
        </div>
        <div className="flex flex-row gap-3">
          <img
            src="/projects/notification.svg"
            className="w-6 h-6 cursor-pointer"
            alt="notification-icon"
          />
          <div className="cursor-pointer flex flex-row gap-3">
            <img
              src="/projects/profile.svg"
              className="w-6 h-6"
              alt="profile-icon"
            />
            <p className="text-[1.2rem]">Lucian Grey</p>
          </div>
        </div>
      </nav>
      <div className="bg-[#F3F6F8] h-screen  px-5 md:px-[4.3rem] py-4 md:py-[1.3rem]">
        <h2 className="text-3xl font-[112px]]">Projects</h2>
        <div className="py-[2rem] flex flex-row justify-between">
          <ul className="flex flex-row gap-5 max-w-[18rem] border-b  border-b-[#a8a8a8]">
            {Array.from(["All", "Assigned to Me", " Bookmarked"]).map(
              (data) => (
                <li className="py-3  projects-type hover:text-[#1890FF]">
                  {data}
                </li>
              )
            )}
          </ul>
          <div className="flex flex-row justify-between items-center gap-5">
            <div className="w-[14rem]">
              <Select
                showSearch
                className="w-full"
                placeholder="Select a person"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </div>
            <button
              onClick={() => {
                setCreateProjectPopup(true);
              }}
              className="p-[0.4rem]  rounded-xl bg-[#1890FF] text-white hover:bg-[#327bbe]"
            >
              + New Project
            </button>
          </div>
        </div>
        <div className="p-3  project-grid">{children}</div>
      </div>
    </div>
  );
};

export default ProjectsLayout;
