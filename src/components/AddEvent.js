import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import EventCalender from './EventCalender';

const AddEvent = ({ setEvents }) => {
  const { user } = useAuth();
  const locale = 'en-US';
  const formatDay = (date) =>
    new Intl.DateTimeFormat(locale, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);

  const [value, onChange] = useState(new Date());

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const date = formatDay(value);
    const body = { ...data, date, email: user?.email };
    await axios.post(
      'https://events-app-calender.herokuapp.com/addEvent',
      body
    );
    await axios
      .get(
        `https://events-app-calender.herokuapp.com/getEvent?email=${user.email}`
      )
      .then((res) => setEvents(res.data));
  };

  return (
    <div className="mx-10 space-y-6">
      <EventCalender value={value} onChange={onChange} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 "
      >
        <input
          className="w-3/4 border-2 border-slate-700 rounded-md py-2 pl-6"
          placeholder="Event Name"
          {...register('name')}
        />
        <input
          className="w-3/4 border-2 border-slate-700 rounded-md py-2 pl-6"
          placeholder="Description"
          {...register('description')}
        />

        <input
          className="px-4 py-2 rounded-md bg-green-500 text-white w-28 cursor-pointer"
          type="submit"
          value={'Add Event'}
        />
      </form>
    </div>
  );
};

export default AddEvent;
