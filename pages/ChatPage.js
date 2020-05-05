import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Paper, Avatar } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

import ChatList from "../components/chat/ChatList";
import ChatListHeader from "../components/chat/ChatListHeader";
import ChatDetails from "../components/chat/ChatDetails";

const items = [
  {
    id: "1",
    name: "Sundaramoorthi SNS",
    lastText: "You sent a photo • 1:05 PM",
    imgUrl: "https://i.pravatar.cc/300?img=100",
    status: { read: true, responded: true, online: true }
  },
  {
    id: "2",
    name: "Rathna Rajendran",
    lastText: "Where r u? • 1:54 PM",
    imgUrl: "https://i.pravatar.cc/300?img=100",
    status: { read: true, responded: true, online: true }
  },
  {
    id: "3",
    name: "Jagadeesh Palaniappan",
    lastText: "You sent a photo • 1:05 PM",
    imgUrl:
      "https://avatars2.githubusercontent.com/u/2826368?s=460&u=fa549158be45516110cbf9f0306eb28e5fd42e9e&v=4",
    status: { read: true, responded: true, online: true }
  },
  {
    id: "4",
    name: "Sangeeth P",
    lastText: "You sent a photo • 1:05 PM",
    imgUrl: "https://i.pravatar.cc/300?img=100",
    status: { read: true, responded: true, online: true }
  },
  {
    id: "5",
    name: "Manikavasagam",
    lastText: "You sent a photo • 1:05 PM",
    imgUrl: "https://i.pravatar.cc/300?img=100",
    status: { read: true, responded: true, online: true }
  },
  {
    id: "6",
    name: "Moheith",
    lastText: "He sent a photo • 1:05 PM",
    imgUrl: "https://i.pravatar.cc/300?img=100",
    status: { read: true, responded: true, online: true }
  }
];

function ChatContainer(props) {
  
  let history = useHistory();  // TODO: not working

  const [selectedItem, setSelectedItem] = useState(false);
  const handleClick = (e, item) => {
    console.log("handleClick: item:", item);
    setSelectedItem(item);
  };

  return (
    <Box display="flex" flexGrow={1} style={{ overflowY: "hidden" }}>
      <Box
        width="300px"
        flexShrink={0}
        bgcolor="background.paper"
        style={{ overflowY: "auto" }}
      >
        <ChatListHeader />
        <ChatList
          items={items}
          selectedItem={selectedItem}
          onClick={handleClick}
        />
      </Box>
      <Box flexGrow={1}>
        <ChatDetails />
      </Box>
    </Box>
  );
}

export default ChatContainer;
