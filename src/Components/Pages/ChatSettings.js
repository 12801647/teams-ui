import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./ChatSettings.scss";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

//import SHA1 from "../../services/sha1";

import { db } from "../../services/firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: "35%",
    minWidth: "620px",
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: "0px, 0px 0px 0px",
    borderRadius: "10px",
    boxShadow:
      "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
    overflow: "auto",
    maxHeight: "100%",
  },
}));

export default function ChatSettings(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [savingGroup, setSavingGroup] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");

  // const [participants, setParticipants] = useState([]);
  // const [leaders, setLeaders] = useState([]);

  //const [groups, setGroups] = useState(new Map());

  // useEffect(() => {
  //   try {
  //     db.ref("groups").on("value", (snapshot) => {
  //       let groups_temp = new Map();
  //       snapshot.forEach((snap) => {
  //         groups_temp.set(snap.key, snap.val());
  //       });
  //
  //       setGroups(groups_temp);
  //     });
  //   } catch (error) {
  //     setSaveError(error.message);
  //   }
  //   return () => {
  //     db.ref("groups").off("value");
  //   };
  // }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleDescChange = (event) => {
    setGroupDesc(event.target.value);
  };

  // const handleLeaderChange = (event) => {};

  const handleSaveGroup = (event) => {
    setSavingGroup(true);
    setSaveError(null);

    try {
      //let groupID = SHA1.hash(groupName);
      db.ref("groups/" + props.groupId).update({
        name: groupName,
        description: groupDesc,
        //id: groupID,
      });

      /* Template db call for storing chats to a group
        db.ref("groups/6c48a6eadfed63a0af3e39eb36911e24b4e356de/chats/").push({
          content: this.state.content,
          timestamp: Date.now(),
          uid: this.state.user.uid,
        });
        */
      //
      // for (let i = 0; i < participants.length; ++i) {
      //   if (
      //     participants[i].registered === true &&
      //     participants[i].checked === true
      //   ) {
      //     let displayName = props.users.get(participants[i].uid).name;
      //
      //     if (props.users.get(participants[i].uid).name === undefined) {
      //       displayName = props.users.get(participants[i].uid).email;
      //     }
      //
      //     db.ref(`groups/${groupID}/members/${participants[i].uid}`).update({
      //       displayName: displayName,
      //       groupAccess: "member",
      //     });
      //
      //     db.ref(`users/${participants[i].uid}/groups/${groupID}`).update({
      //       displayName: displayName,
      //       groupAccess: "member",
      //     });
      //   }
      // }
      //
      // for (let i = 0; i < leaders.length; ++i) {
      //   if (leaders[i].registered === true && leaders[i].checked === true) {
      //     let displayName = props.users.get(leaders[i].uid).name;
      //
      //     if (props.users.get(leaders[i].uid).name === undefined) {
      //       displayName = props.users.get(leaders[i].uid).email;
      //     }
      //     db.ref(`groups/${groupID}/members/${leaders[i].uid}`).update({
      //       displayName: displayName,
      //       groupAccess: "leader",
      //     });
      //     db.ref(`users/${leaders[i].uid}/groups/${groupID}`).update({
      //       displayName: displayName,
      //       groupAccess: "leader",
      //     });
      //   }
      // }
      setSavingGroup(false);
      setOpen(false);
      // setParticipants([]);
      // setLeaders([]);
    } catch (error) {
      setSaveError(error);
    }
  };

  return (
    <div id="chat-settings-container">
      <div className="chat-settings">
        <Button onClick={handleOpen}>{"Settings"}</Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form className={classes.paper}>
            <div className="new_group_header">
              <h2 className="header">Update Group Settings</h2>
            </div>
            <div className="new_group_details">
              <h6 className="update_details_headers">Update Group Name: </h6>
              <TextField
                className="new_group_name"
                onChange={handleNameChange}
              ></TextField>
              <h6 className="update_details_headers">
                {" "}
                Update Group Description:
              </h6>
              <TextField
                className="new_group_description"
                onChange={handleDescChange}
                fullWidth={true}
              ></TextField>
              <h6 className="update_details_headers">
                {" "}
                Update Group Leader(s){" "}
              </h6>
            </div>

            <div className="current-group-leader-container">
              <label for="textarea"> Current Group Leader(s) </label>
              <textarea
                className="leader-txtarea"
                id="textarea"
                placeholder="Current Group Leader"
                rows="1"
                disabled
              ></textarea>

              <div className="dropdown-container">
                <label for="textarea"> New Group Leader(s) </label>
                <DropdownButton
                  className="leader-txtarea"
                  id="dropdown-item-button"
                  title="Members"
                  size="sm"
                >
                  <Dropdown.Item as="button">person 1</Dropdown.Item>
                  <Dropdown.Item as="button">person 2</Dropdown.Item>
                  <Dropdown.Item as="button">person 3</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>

            {savingGroup ? (
              <div
                className="spinner-border text-success"
                role="status"
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "1em",
                  marginBottom: "1em",
                }}
              >
                <span className="sr-only" style={{}}>
                  Saving...
                </span>
              </div>
            ) : (
              ""
            )}
            {saveError !== null && saveError !== "null" ? (
              <div
                className=""
                style={{ textAlign: "center", marginTop: "2em" }}
              >
                {saveError}
              </div>
            ) : (
              ""
            )}
            <div
              className="create_new_group_button"
              style={{
                display: "flex",
                padding: "0px 95px 0px 95px",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "1em",
                marginTop: "2.5em",
              }}
            >
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleSaveGroup}
                style={{
                  backgroundColor: "#05728f",
                  color: "#fff",
                  fontWeight: "bold",
                  height: "45px",
                  width: "10em",
                  border: "2px solid",
                  borderRadius: 20,
                  borderColor: "#05728f",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                }}
              >
                Save
              </Button>
              <Button
                autoFocus
                onClick={handleClose}
                variant="outlined"
                color="inherit"
                style={{
                  backgroundColor: "#05728f",
                  color: "#fff",
                  fontWeight: "bold",
                  height: "45px",
                  width: "10em",
                  border: "2px solid",
                  borderRadius: 20,
                  borderColor: "#05728f",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
