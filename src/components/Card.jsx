import React from "react";

function Card({
  title,
  content,
  image,
  bgColor = "bg-white",
  shadow = "shadow-lg",
  height = "h-auto",
  width = "w-full",
}) {
  return (
    <div
      className={`${bgColor} ${shadow} ${height} ${width} rounded-4xl hover:shadow-2xl bg-white shadow-neutral-950 `}
    >
      <div className=" flex justify-center items-center">
        {image && (
          <img
            src={image}
            alt="card-image"
            className="w-50 h-50 rounded-t-4xl p-10"
          />
        )}
      </div>

      <div className=" content-center ">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
          {title}
        </h2>
        <p className="text-gray-600 text-center pl-6 pr-6">{content}</p>
      </div>
    </div>
  );
}

export default Card;
