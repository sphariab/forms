import React from 'react'
import Input from 'components/Input';
import Icon from 'components/Icon';

const CalendarPopup = () => {
  return (
    <div>
      <label className="input-label">Date</label>
      <div className="input-wrapper">
        <Input
          className="input-field"
          icon="calendar"
        />
        <Icon />
      </div>
    </div>
  )
}

export default CalendarPopup
