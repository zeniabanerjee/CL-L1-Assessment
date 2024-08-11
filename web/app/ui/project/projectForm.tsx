import React from "react";
import { ImCross } from "react-icons/im";
import ProjectUserFilter from "./projectUserFilter";
import { FormProvider, useForm } from "react-hook-form";

type projectValuesType = {};

export default function ProjectForm({
  onClose,
}: {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="h-screen w-screen flex justify-center items-center backdrop-blur-sm fixed top-0 left-0 z-[20] bg-black/60">
      <div className="flex flex-col bg-white p-10 gap-5 w-fit">
        <div className="flex justify-between items-center">
          <h2>Create a new Project</h2>
          <button className="" onClick={() => onClose(false)}>
            <ImCross />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p>1. Enter a name for the project</p>
          <input
            className="outline-none p-2 border-[1px] border-[#F3F6F8]"
            type="text"
            placeholder="For ex. Web Development"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Select project members</p>
          <p className="text-gray-400">
            You need to select a contributor, reviewer and approver to be able
            to create the project{" "}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-between items-center">
              <div className="flex justify-start gap-2">
                <div className="h-12 w-12 rounded-full  overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/projects/profile2.svg"
                    alt="profile-img"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p>Lucian Grey</p>
                  <p className="text-gray-400">luciangrey02@gmail.com</p>
                </div>
              </div>
              <p>Admin</p>
            </div>
            <div className="flex flex-col gap-3">
              <ProjectUserFilter type="Contributer" />
              <ProjectUserFilter type="Reviewer" />
              <ProjectUserFilter type="Approver" />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="py-2 px-6 rounded-xl bg-[#D9D9D9] ">Create</button>
        </div>
      </div>
    </div>
  );
}
