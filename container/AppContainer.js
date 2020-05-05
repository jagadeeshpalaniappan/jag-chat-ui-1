import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Paper, Avatar, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LogoIcon from "@material-ui/icons/GroupWork";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatIcon from "@material-ui/icons/Chat";
import SettingsIcon from "@material-ui/icons/Settings";
import MeetingIcon from "@material-ui/icons/RecordVoiceOver";


import { useHistory, useParams } from "react-router-dom";

import AppSidebar from "../components/app/AppSidebar";
import AppRouteContainer from "./AppRouteContainer";

import UserModal from "../components/user/UserModal";
import SettingsModal from "../components/settings/SettingsModal";

const useStyles = makeStyles(theme => ({
  appContainer: {
    flexGrow: 1,
    display: "flex",
    height: "100vh"
    // backgroundColor: theme.palette.background.paper,
    // border: `1px solid ${theme.palette.divider}`
    // margin: 30
  }
}));

const user = {
  id: "3",
  name: "Jagadeesh Palaniappan",
  lastText: "You sent a photo • 1:05 PM",
  imgUrl:
    "https://avatars2.githubusercontent.com/u/24218022?s=460&u=7cc625db65a7effc54069e28432432bd1fc89c44&v=4",
  status: { read: true, responded: true, online: true }
};

const items = [
  { id: "logo", name: "JagChat", icon: <LogoIcon />, iconOnly: true },
  {
    id: "chat",
    name: "Chat",
    route: "/chat",
    icon: (
      <Badge badgeContent={4} color="secondary">
        <ChatIcon />
      </Badge>
    )
  },
  { id: "meet", name: "Meeting", route: "/meet", icon: <MeetingIcon /> },
  {
    id: "setting",
    name: "Settings",
    icon: <SettingsIcon />,
    iconOnly: true,
    endItem: true
  },
  {
    id: "user",
    name: "JagChat",
    icon: <Avatar alt={user.name} src={user.imgUrl} edge="start" />,
    iconOnly: true
  }
];

const AppContainer = () => {
  const classes = useStyles();

  let history = useHistory();  // TODO: not working
  // let { slug } = useParams();

  const [selectedIdx, setSelectedIdx] = useState(1);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const handleChange = (event, idx) => {
    const newSelectedItem = items[idx];
    console.log("Inbox: selectedMenu", newSelectedItem.name);
    switch (newSelectedItem.id) {
      case "logo":
        console.log("Inbox: logo", newSelectedItem);
        break;
      case "setting":
        console.log("Inbox: setting", newSelectedItem);
        setSettingsOpen(true);
        break;
      case "user":
        console.log("Inbox: user", newSelectedItem);
        setUserOpen(true);
        break;
      default:
        console.log("Inbox: default", newSelectedItem);
        setSelectedIdx(idx); // change route
    }
  };

  const openPage = item => {
    history.push(item.route);
  };

  useEffect(() => {
    const selectedItem = items[selectedIdx];
    openPage(selectedItem);
  }, [selectedIdx]);

  const handleSettingsOk = () => {
    setSettingsOpen(false);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleUsersOk = () => {
    setUserOpen(false);
  };

  const handleUeserClose = () => {
    setUserOpen(false);
  };

  return (
    <div className={classes.appContainer}>
      <AppSidebar
        items={items}
        selectedIdx={selectedIdx}
        onChange={handleChange}
      />
      {/* based on the selectedRoute display container */}
      <AppRouteContainer />

      <UserModal
        open={userOpen}
        onOk={handleUsersOk}
        onClose={handleUeserClose}
      />

      <SettingsModal
        open={settingsOpen}
        onOk={handleSettingsOk}
        onClose={handleSettingsClose}
      />
    </div>
  );
};

export default AppContainer;
