import React, { useEffect, useState } from "react";
import axios from "axios";
function GetFeedback() {
  const [feed, setFeed] = useState([]);

  const getfeedback = async () => {
    const res = await axios.get("/fed/feedback");
    setFeed(res.data);
  };
  useEffect(() => {
    getfeedback();
  }, []);

  return {
    feed: [feed, setFeed],
  };
}
export default GetFeedback;
