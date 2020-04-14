import React from 'react'
import Input from 'components/Input';
import Calendar from 'components/CalendarPopup/Calendar';

const CalendarPopup = () => {
  return (
    <>
      <Input
        label="Date"
        icon="calendar"
        placeholder="Choose"
      />
      <Calendar />
    </>
  )
}

export default CalendarPopup
