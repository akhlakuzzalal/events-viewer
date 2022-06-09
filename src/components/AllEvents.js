import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import EventCard from './EventCard';

const AllEvents = ({ events, setEvents }) => {
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(
        `https://events-app-calender.herokuapp.com/getEvent?email=${user.email}`
      )
      .then((res) => setEvents(res.data));
  }, []);
  console.log(events);
  return (
    <div>
      {events?.length > 0 ? (
        <>
          <div className="flex justify-evenly flex-wrap">
            {events.map((event) => (
              <EventCard key={event._id} event={event} setEvents={setEvents} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>You have no events yet</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default AllEvents;
