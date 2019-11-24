import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { HeartRateSensor } from "heart-rate"
import { me as appbit } from "appbit"
import permissions from "./permissions.js"


if(permissions.requestHR()) {
  const hrm = new HeartRateSensor({ frequency: 1})
  hrm.addEventListener("reading", () => {
    console.log(`Current heart rate: ${hrm.heartRate}`)
  })
  hrm.start()
}


// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}
