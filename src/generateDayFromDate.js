import React, { useState } from 'react';

function GenerateDay() {
  const [date, setDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCheckDay = () => {
    const inputDate = new Date(date);
    const options = { weekday: 'long' };
    const day = inputDate.toLocaleDateString('en-US', options);
    setDayOfWeek(day);
  };

  return (
    <div>
      <label>Enter a Date:</label>
      <input type="date" value={date} onChange={handleDateChange} />
      <button onClick={handleCheckDay}>Check Day</button>
      {dayOfWeek && <p>The day is: {dayOfWeek}</p>}
    </div>
  );
}

export default GenerateDay;
