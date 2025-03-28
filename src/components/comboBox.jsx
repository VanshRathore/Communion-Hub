import React, { useState, useEffect, useRef } from "react";

const ComboBox = ({ onSelect, placeholder = "Search Events" }) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([
    "Conference",
    "Workshop",
    "Seminar",
    "Webinar",
    "Meetup",
    "Hackathon",
    "Networking",
    "Training",
    "Charity Event",
    "Music Festival",
    "Art Exhibition",
    "Startup Pitch",
    "Book Launch",
    "Community Gathering",
    "Tech Talk",
    "Sports Event",
    "Cultural Festival",
    "Food Tasting",
    "Photography Walk",
    "Coding Bootcamp",
    "Film Screening",
    "Dance Performance",
    "Yoga Retreat",
    "Meditation Session",
    "Career Fair",
    "Product Launch",
    "Volunteer Drive",
    "Gaming Tournament",
    "Science Fair",
    "Open Mic Night",
    "Stand-Up Comedy",
    "Poetry Slam",
    "Cooking Class",
    "Language Exchange",
    "Historical Tour",
    "Environmental Cleanup",
    "Charity Auction",
    "Pet Adoption Drive",
    "Fitness Bootcamp",
    "Virtual Reality Experience"
  ]); 
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const comboBoxRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsOpen(true); 
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        setHighlightedIndex((prevIndex) =>
          prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        if (highlightedIndex >= 0) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false); 
        break;
      default:
        break;
    }
  };

  const handleSelect = (option) => {
    setInputValue(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100); 
  };

  return (
    <div
      className="combo-box relative"
      ref={comboBoxRef}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls="combo-box-list"
        aria-activedescendant={
          highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined
        }
        className="border p-3 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isOpen && (
        <ul
          id="combo-box-list"
          role="listbox"
          className="absolute z-10 border rounded-lg mt-1 max-h-40 overflow-y-auto bg-white shadow-lg w-full"
        >
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              id={`option-${index}`}
              role="option"
              className={`p-2 cursor-pointer ${
                highlightedIndex === index ? "bg-blue-100" : ""
              } hover:bg-blue-50`}
              onMouseDown={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
