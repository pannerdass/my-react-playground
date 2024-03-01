import { useEffect, useState } from "react";
import { Habit } from "./Habit";
import { getAllHabitsbyUser } from "./Api/habit-api";
import { isAuthenticate } from "./Api/utills";
import { Navigate } from "react-router-dom";

//Date format "2023-01-01" "YYYY-MM-DD"
export function AllHabits() {
  const dummyData = [
    {
      id: 1,
      title: "Workout 💪",
      startDate: "2023-05-01",
      endDate: "",
      checkInDates: ["2023-05-01", "2023-05-02", "2023-05-03"],
    },
    {
      id: 2,
      title: "Write ✍️",
      startDate: "2023-02-01",
      endDate: "",
      checkInDates: [],
    },
    {
      id: 3,
      title: "Read books 📚",
      startDate: "2023-03-01",
      endDate: "",
      checkInDates: [],
    },
    {
      id: 4,
      title: "Stretch 🙆‍♀️",
      startDate: "2023-04-01",
      endDate: "",
      checkInDates: [],
    },
  ];

  const [allHabits, setAllHabits] = useState(dummyData);

  useEffect(() => {
    async function getData() {
      try {
        const result = await getAllHabitsbyUser(1);
        console.log(result);
        // setAllHabits(result);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getData();
  }, []);

  function updateStates() {
    setAllHabits([
      ...allHabits,
      {
        id: allHabits.length + 1,
        startDate: "2023-05-01",
        endDate: "",
        checkInDates: [],
      },
    ]);
  }
  // updateStates();
  //  console.log(allHabits);

  return (
    <>
      <div className="p-1 m-2 text-black text-lg">
        Habits{" "}
        <a
          onClick={updateStates}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:cursor-pointer focus:outline-none focus:shadow-outline"
        >
          +
        </a>
      </div>
      <div className="flex flex-wrap">
        {allHabits.map((x) => (
          <Habit
            key={x.id}
            id={x.id}
            startDate={x.startDate}
            endDate={x.endDate}
            title={x.title}
            checkInDates={x.checkInDates}
          />
        ))}
      </div>
    </>
  );
}
