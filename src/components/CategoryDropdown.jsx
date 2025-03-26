import React from "react";

function CategoryDropdown({ value, onChange }) {
  return (
    <div className="relative inline-block w-64">
      <select
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-neutral-900 text-white px-6 py-3 rounded-xl shadow-sm focus:outline-none"
      >
        <option value="All">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14.95 7.95l-5 5-5-5 1.41-1.41L10 9.17l3.54-3.54z" />
        </svg>
      </div>
    </div>
  );
}

export default CategoryDropdown;
