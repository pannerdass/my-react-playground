import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import uuid from "react-uuid";

import { postHabit, postWeather } from "./api";

export function NewWeather() {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();
  const { status, error, mutate } = useMutation({
    mutationFn: postHabit,
    onSuccess: (newPost) => {
      console.log(newPost);
      // queryClient.setQueryData(["get"], ["newPost"]);
      queryClient.invalidateQueries({ queryKey: ["get"] });
    },
  });

  function handleEvent() {
    let habit = { UserId: "1", HabitId: uuid(), HabitName: value };

    mutate(habit);
    //postWeather();
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <input type="button" value="click" onClick={handleEvent} />
    </>
  );
}
