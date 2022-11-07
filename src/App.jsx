import React from "react";
import Text from "./components/Text";
import Trybox from "./components/Trybox";
import Form from "./components/Form";

function App() {
  return (
    <main className="min-h-screen px-12 pt-16 leading-7 pb-14 bg-red md:flex">
      <div className="md:w-1/2">
      <Text />
      </div>
      <div className="md:w-1/2 md:pt-10 md:pr-32 md:pl-10">
        <Trybox />
        <Form />
      </div>
    </main>
  );
}

export default App;
