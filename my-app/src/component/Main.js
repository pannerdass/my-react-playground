import React from "react";
import Employee from "./Employee";

function List() {
  return (
    <ul>
      <li>1️⃣ First</li>
      <li>2️⃣ two</li>
      <li>3️⃣ Three</li>
    </ul>
  );
}

function Content() {
  return (
    <div>
      <p>Hi i am pannerdass 😎</p>
      <p>I have 🎱 years experience 🧪 in .net framework</p>
    </div>
  );
}
function DisplayDate() {
  const date = new Date();
  return <div>📅 current date:{date.toUTCString()}</div>;
}
function Main() {
  return (
    <>
      <Content />
      <List />

      <DisplayDate />
    </>
  );
}

export default Main;
