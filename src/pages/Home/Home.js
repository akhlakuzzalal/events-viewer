import React, { useState } from 'react';
import AddEvent from '../../components/AddEvent';
import AllEvents from '../../components/AllEvents';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { isLoading } = useAuth();
  const [events, setEvents] = useState([]);
  return (
    <div>
      {isLoading ? (
        <>
          <div>Please wait</div>
        </>
      ) : (
        <>
          {/* Header */}
          <Header />
          <div className="grid grid-cols-3 mt-10">
            <div className="col-span-1">
              <AddEvent setEvents={setEvents} />
            </div>
            <div className="col-span-2">
              <AllEvents events={events} setEvents={setEvents} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
