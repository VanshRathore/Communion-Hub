import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setEvents } from "../redux/eventSlice";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import CategoryDropdown from "./CategoryDropdown";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function EventList() {
  const events = useSelector((state) => state.events.list);
  const filter = useSelector((state) => state.events.filter);
  const dispatch = useDispatch();

  const eventRef = useRef();
  const btnRef = useRef();
  const cardRef = useRef();

  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.from(eventRef.current, {
      delay: 0.5,
      opacity: 0,
      y: -50,
    }),
      t1.from(btnRef.current, {
        opacity: 0,
        y: -50,
      });

    gsap.utils.toArray(cardRef.current.children).forEach((card) => {
      gsap.from(card, {
        duration: 1,
        scale: 0,
        ease: "elastic.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: card,
          scroller: "body",
          start: "top 130%",
        },
      });
    });
  });
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "events"), (snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setEvents(eventsData));
    });
    return () => unsubscribe();
  }, [dispatch]);

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);

  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div
      style={{ fontFamily: "roboto" }}
      className="min-h-screen py-10 px-4 md:px-10"
    >
      <div className="max-w-full">
        <h2
          ref={eventRef}
          className="text-6xl font-bold text-center text-neutral-900 mb-6"
        >
          Upcoming Events
        </h2>
        <div ref={btnRef} className="flex justify-center pt-6 pb-6 mb-6">
          <CategoryDropdown
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
          />
        </div>
        <div
          ref={cardRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 rounded-lg shadow-lg transition-shadow w-full h-[550px] hover:shadow-2xl"
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-md w-full h-55 vintage-filterx object-cover"
                />
              )}
              <div className="mt-5">
                <span
                  className={`inline-block px-3 py-1 text-sm tracking-widest font-semibold rounded-lg ${
                    event.fees === "FREE"
                      ? "bg-green-200 text-emerald-900"
                      : "bg-red-200 text-red-900"
                  }`}
                >
                  {event.fees}
                </span>
              </div>
              <h3 className="text-2xl pt-7 font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-600 text-s pt-2 mb-2">
                {event.date} | {event.location}
              </p>
              <p className="text-gray-700 text-[15px]">{event.description}</p>
              <div className="mt-5">
                <div className="inline-block px-6 py-3 text-sm tracking-widest font-semibold rounded-lg bg-blue-100 text-neutral-800">
                  {event.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventList;
