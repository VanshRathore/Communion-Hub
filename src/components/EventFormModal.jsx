import React, { useState } from "react";
import EventForm from "./EventForm";

function EventFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <div>
      <div className="">
        <button
          onClick={openForm}
          className="bg-stone-900 text-white round px-4 py-2 rounded-2xl"
        >
          Add Event
        </button>
      </div>

      {isOpen && (
        <div className=" fixed inset-0 z-50 flex justify-center items-center bg-transparent opacity-100 max-h-screen h-220 pt-20 pb-20 backdrop-blur-3xl">
          <div className="bg-stone-800 p-6 rounded-xl shadow-lg  max-w-full w-lg h-180 overflow-y-auto">
            <EventForm onClose={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventFormModal;
