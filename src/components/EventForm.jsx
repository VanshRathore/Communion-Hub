import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/eventSlice";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const compressImage = (file, quality = 0.7, maxWidth = 800, maxHeight = 800) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;
    img.onload = () => {
      let { width, height } = img;
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = width * ratio;
        height = height * ratio;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg", quality);
      resolve(dataUrl);
      URL.revokeObjectURL(url);
    };
    img.onerror = (err) => reject(err);
  });

function EventForm({ onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "Religious",
    location: "",
    description: "",
    fees: "FREE",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (formData.image) {
      try {
        imageUrl = await compressImage(formData.image);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }

    const eventData = {
      title: formData.title,
      date: formData.date,
      category: formData.category,
      location: formData.location,
      description: formData.description,
      fees: formData.fees,
      image: imageUrl,
    };

    try {
      const docRef = await addDoc(collection(db, "events"), eventData);
      eventData.id = docRef.id;
      console.log("Document written with ID: ", docRef.id);

      onClose && onClose();
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div style={{ fontFamily: "roboto" }} className="p-8 ">
      <h1 className="text-4xl text-white text-center font-semibold">
        Event Details
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="block text-gray-50 font-medium">Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
            className="w-full bg-white border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row py-4">
          <div className="w-full sm:w-1/2 sm:pr-4 mb-4 sm:mb-0">
            <label className="block text-gray-50 font-medium">Date:</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={formData.date}
              className="w-full border bg-white border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 sm:pl-4">
            <label className="block text-gray-50 font-medium">Category:</label>
            <select
              name="category"
              onChange={handleChange}
              value={formData.category}
              className="w-full border bg-white border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>
        </div>
        <div className="space-y-1 pb-4">
          <label className="block text-gray-50 font-medium">Location:</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={formData.location}
            className="w-full border bg-white border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-1 pb-2">
          <label className="block text-gray-50 font-medium">Description:</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            className="w-full border bg-white border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="space-y-1 pb-4">
          <label className="block text-gray-50 font-medium">Fee:</label>
          <select
            name="fees"
            onChange={handleChange}
            value={formData.fees}
            className="w-full border bg-white border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="FREE">FREE</option>
            <option value="PAID">PAID</option>
          </select>
        </div>
        <div className="space-y-1 pb-4">
          <label className="block text-gray-50 font-medium">Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept="image/*"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-6">
          <button
            type="submit"
            className="flex-1 bg-amber-400 text-white py-3 rounded-2xl hover:bg-amber-200 transition"
          >
            Add Event
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-500 text-white py-3 rounded-2xl hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
