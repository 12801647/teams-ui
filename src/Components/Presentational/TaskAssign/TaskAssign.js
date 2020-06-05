import React, { useState } from "react";
import "./TaskAssign.scss";
import { assignMember } from "../../../helpers/db";
import { Typography, Button } from "@material-ui/core";
// eslint-disable-next-line
const TaskAssign = ({ columnId, taskDetails }) => {
  const [newMember, setNewMember] = useState("");
  // const [members, setMembers] = useState([]);
  const handleAssignMember = async (e) => {
    e.preventDefault();
    try {
      await assignMember(columnId, taskDetails.id, newMember);
      console.log(
        "Assign pressed" + columnId + " " + taskDetails.id + " " + newMember
      );
      setNewMember("");
    } catch (err) {
      console.log("An error occured when assigning member");
    }
  };

  const handleUpdateMemberText = (e) => {
    setNewMember(e.target.value);
  };

  return (
    <div className="task-assign">
      <div className="title-lockup">
        <Typography variant="h5" component="h2">
          Members:
        </Typography>
      </div>
      <div className="assign-member-lockup">
        <form onSubmit={handleAssignMember}>
          <input
            onChange={handleUpdateMemberText}
            value={newMember}
            placeholder="Add member..."
          />
          <Button type="submit">Assign</Button>
        </form>
      </div>
    </div>
  );
};

export default TaskAssign;
