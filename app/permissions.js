import { HeartRateSensor } from "heart-rate"
import { me as appbit } from "appbit"



function requestHR() {
  if(HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
    console.log("Heart Rate Sensor permission granted!")
    return true
    
  } else {
    throw Error("Permission Denied")
  }
}


export default { requestHR }