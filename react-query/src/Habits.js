import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getHabit } from "./api";

export function Habits() {
  const userId = 2;
  const result = useQuery({
    queryKey: ["getData", userId],
    queryFn: () => getHabit(userId),
  });

  if (result.isLoading) return <h1>Loading...</h1>;

  if (result.isError) return <h1>Error occured</h1>;

  //   if (result.data) return <h1>Value found</h1>;

  return (
    <>
      <div>
        {result.data.map((x) => (
          <div key={x.HabitId}>{x.HabitName}</div>
        ))}
      </div>
    </>
  );
}
