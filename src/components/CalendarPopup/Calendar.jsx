import React from 'react'
import Icon from 'components/Icon';
import '../../styleguide/components/calendarStyles.scss';
import days from './daysData';
const weekDays = () => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-title">
        <Icon name="prev" />
        <span className="month-name">June, 2019</span>
        <Icon name="next" />
      </div>
      <div className="month-week">
        {weekDays().map((day, index) =>
          <span
            key={index}
            className="calendar-day-name">
            {day}
          </span>
        )}
      </div>
      <div className="month-week-line"></div>
      <div className="calendar-days-container">
        {days.map((day, index) =>
          <div
            key={index}
            className={`calendar-day-name + " " + ${day.status}`}>
          {day.dayNumber}
          </div>)}
      </div>
    </div>
  )
}

export default Calendar
