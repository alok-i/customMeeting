import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Redirect, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import uuid library
import Meeting from "./Meeting";

const Home = () => {
  const [active, setActive] = useState(true);
  const [meetingId, setMeetingId] = useState(null);
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleMeetingClick = () => {
    if (active) {
      try {
        const id = uuidv4(); // Generate UUID
        setMeetingId(id);
        navigate(`/meeting/${id}`); // Navigate to the meeting room page
      } catch (error) {
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
          />
          <span> Start Meeting immediately </span>
          <div className="flex flex-col items-center rounded bg-blue-400">
            <button
              onClick={handleMeetingClick}
              className={active ? "font-medium" : "cursor-not-allowed"}
            >
              Create Meeting
            </button>
            {!active && <span>{`Please click on checkbox to start`} </span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
