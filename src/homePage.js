import React from "react";
import { useState } from "react";
import NavBar from "./components/navbar";
import { isEditable } from "@testing-library/user-event/dist/utils";

const Home = () => {
  const [active, setActive] = useState(true);
  const isLoggedIn = true;

  const handleMeetingClick = () => {
    if (active) {
      // if the user is undefined
      //{ return }
      try {
        const id = crypto.randomUUID();
        console.log(id);
      } catch (error) {
        // console.log();
        alert("Something went Wrong");
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center text-2xl font-bold">Welcome UserName</h1>
      <div className="w-80 mx-auto space-y-6 rounded-md bg-slate-200 p-5">
        <h2 className="text-xl font-bold">Create a new meeting</h2>
        <div className="space-y-2">
          <div className="font-medium">Meeting info</div>
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
          ></input>
          <span> Start Meeting immediately </span>
          <div className="flex flex-col items-center rounded bg-blue-400">
            <button
              onClick={handleMeetingClick}
              className={active ? "font-medium" : "cursor-not-allowed"}
            >
              Create Meeting
            </button>
            {active ? null : (
              <span>{`Please click on checkbox to start`} </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
