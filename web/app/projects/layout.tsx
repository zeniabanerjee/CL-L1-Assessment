"use client";
import React, { useState } from "react";
import { roboto } from "../helper/fonts";
import { TreeSelect } from "antd";
import "./projects.scss";
import type { TreeSelectProps } from "antd";

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1",
          },
          {
            value: "leaf2",
            title: "leaf2",
          },
          {
            value: "leaf3",
            title: "leaf3",
          },
          {
            value: "leaf4",
            title: "leaf4",
          },
          {
            value: "leaf5",
            title: "leaf5",
          },
          {
            value: "leaf6",
            title: "leaf6",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf11",
            title: <b style={{ color: "#08c" }}>leaf11</b>,
          },
        ],
      },
    ],
  },
];

const ProjectsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll: TreeSelectProps["onPopupScroll"] = (e) => {
    console.log("onPopupScroll", e);
  };

  return (
    <div className={`flex flex-col gap-1 ${roboto.className}`}>
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
              <TreeSelect
                showSearch
                style={{ width: "100%" }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Search for a project"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
                treeData={treeData}
                onPopupScroll={onPopupScroll}
              />
            </div>
            <button className="p-[0.4rem]  rounded-xl bg-[#1890FF] text-white hover:bg-[#327bbe]">
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
