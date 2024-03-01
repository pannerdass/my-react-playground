import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getData, getWeather } from "./api";

export function Weather() {
  const result = useQuery({
    queryKey: ["get"],
    queryFn: getWeather,
  });

  if (result.isLoading) return <h1>Loading...</h1>;

  if (result.error) return <h1>Error occured</h1>;

  return (
    <>
      {result.data.map((x) => (
        <div key={x.HabitId}>{x.HabitName}</div>
      ))}
    </>
  );
}
