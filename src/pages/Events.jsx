import React, { useState } from "react";
import Header from "../components/Header";
import EventList from "../components/EventList";
import ComboBox from "../components/comboBox";

function Events() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Conference", "Workshop", "Seminar", "Webinar"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("Selected Option:", option);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <Header />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Find Events</h1>
        <div className="w-full max-w-md">
          <ComboBox options={options} onSelect={handleSelect} />
        </div>
      </div>
      <div className="mt-10">
        <EventList />
      </div>
    </div>
  );
}

export default Events;