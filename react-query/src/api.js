import axios from "axios";

async function getHabit(userId) {
  console.log(userId);
  var result = await axios.get(
    `https://v5rijropa4.execute-api.ap-south-1.amazonaws.com/dev/users/${userId}/habits`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  console.log(result.data);
  return result.data;
}

async function postHabit(habit) {
  console.log(habit);
  var result = await axios.post(
    "https://v5rijropa4.execute-api.ap-south-1.amazonaws.com/dev/users",
    habit,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  console.log(result);
}

async function updateHabit(userId, habitId, checkInDates) {
  //  console.log(habit);
  var result = await axios.put(
    `https://v5rijropa4.execute-api.ap-south-1.amazonaws.com/dev/users/${userId}/habits/${habitId}`,
    checkInDates,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  console.log(result);
}

async function deleteHabit(userId, habitId) {
  // console.log(habit);
  var result = await axios.delete(
    `https://v5rijropa4.execute-api.ap-south-1.amazonaws.com/dev/users/${userId}/habits/${habitId}`
  );
  console.log(result);
}

// function getHabit() {
//   fetch(
//     "https://v5rijropa4.execute-api.ap-south-1.amazonaws.com/dev/habit?id=1"
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Success:", data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       return error;
//     });
//   // return "";
// }

async function postWeather(value) {
  var result = await axios.post(
    "http://localhost:28610/api/WeatherForecast/PostMe",
    value,
    {
      headers: {
        // 'application/json' is the modern content-type for JSON, but some
        // older servers may use 'text/json'.
        // See: http://bit.ly/text-json
        "content-type": "application/json",
      },
    }
  );
}

export { getHabit, postHabit, updateHabit, deleteHabit };
