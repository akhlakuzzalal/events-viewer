import axios from 'axios';
import React from 'react';

const EventCard = ({ event, setEvents }) => {
  const { name, date, description, _id, email } = event;
  const handleDelete = async (id) => {
    await axios.delete(
      `https://events-app-calender.herokuapp.com/deleteEvent/${id}`
    );
    await axios
      .get(`https://events-app-calender.herokuapp.com/getEvent?email=${email}`)
      .then((res) => setEvents(res.data));
  };
  return (
    <div class="p-6 h-60 max-w-sm bg-white relative rounded-lg border border-gray-200 shadow-md">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {name}
      </h5>
      <h5 class="mb-2 text-lg font-bold tracking-tight text-green-500">
        {date}
      </h5>
      <p class="mb-3 font-normal text-gray-700">{description}</p>
      <button
        onClick={() => handleDelete(_id)}
        href="#"
        class="absolute bottom-7 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Delete
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default EventCard;
