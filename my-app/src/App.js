import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Employee from "./component/Employee";
import { sampleData } from "./utlis/datasource";
import PlayButton from "./component/PlayButton";
import Quote from "./component/Quote";
import StateExample from "./component/StateExample";
import Parent from "./component/Parent";
import Form from "./component/Form";
import Counter from "./component/Counter";
import ApiCall from "./component/ApiCall";
import ApiTextBox from "./component/ApiTextBox";

function App() {
  console.log(1);
  // const arr = sampleData().map((x) => {
  //   return <Employee key={x.id} name={x.name} flag={x.flag} age={x.age} />;
  // });

  //sent object to props
  // const arr = sampleData().map((x) => {
  //   return <Employee key={x.id} item={x} />;
  // });

  //another way to pass object using spread operator
  const arr = sampleData().map((x) => {
    return <Employee key={x.id} {...x} />;
  });

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Header />
  //       <Main />
  //       {arr}

  //       {/* <Employee name="David" age={12} flag={true} arr={[1, 2, 3]} />
  //       <Employee name="Miller" age={33} flag={false} />
  //       <Employee name="Butler" age={44} flag={true} />
  //       <Employee name="Sam" age={33} flag={false} /> */}
  //       <Footer />
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
      <header className="App-header">
        {/*<PlayButton />

         <Employee name="David" age={12} flag={true} arr={[1, 2, 3]} />
        <Employee name="Miller" age={33} flag={false} />
        <Employee name="Butler" age={44} flag={true} />
        <Employee name="Sam" age={33} flag={false} /> 
        <Footer />
        <StateExample />
        <Parent />
        <Form />
        <Counter />
        <ApiCall />*/}
        <ApiTextBox />
      </header>
    </div>
  );
  // return (
  //   <div className="">
  //     <header className="">
  //       <Quote />
  //     </header>
  //   </div>
  // );
}

export default App;
