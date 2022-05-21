import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import FetchItem from "./FetchItem";
function Fetchfeedback() {
  const state = useContext(GlobalState);
  const [feedback] = state.GetFeedback.feed;

  return (
    <div>
      {feedback.map((fback) => {
        return <FetchItem key={fback._id} fback={fback} />;
      })}
    </div>
  );
}
export default Fetchfeedback;
