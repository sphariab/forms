import React from 'react'
import Icon from 'components/Icon';
import styled from 'styleguide/styled';
import days from './daysData';
const weekDays = () => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const Wrapper = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    height: 368px;
    background: #FFFFFF;
    box-shadow: 0px 18px 50px rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    text-align: center;
    margin-top: 8px;
  }
  @media (min-width: 1024px) {
    width: 300px;
  }
`;

const Title = styled.div`
  @media (min-width: 320px) {
    padding: 16px 16px 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const MonthName = styled.div`
  @media (min-width: 320px) {
    font-family: 'Inter-Regular';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }
`;

const MonthWeek = styled.div`
 @media (min-width: 320px) {
   display: flex;
   align-items: flex-start;
   justify-content: space-around;
   padding-bottom: 9px;
 }
`;

const MonthWeekLine = styled.div`
  @media (min-width: 320px) {
    margin: 0 14px;
    height: 1px;
    background: #CDCDCD;
  }
`;

const CalendarDaysContainer = styled.div`
  @media (min-width: 320px) {
    padding-top: 10px;
    text-align: left;
  }
`;

const CalendarNameDay = styled.span`
  @media (min-width: 320px) {
    width: 30px;
    height: 30px;
    margin: 6px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    font-family: 'Inter-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    padding: 4px;
    box-sizing: border-box;
 }
`;

const CalendarWeekNameDay = styled.span`
  @media (min-width: 320px) {
    color: #8D8D8D; 
  }
`;

const Calendar = () => {
  return (
    <Wrapper>
      <Title>
        <Icon name="prev" />
        <MonthName>June, 2019</MonthName>
        <Icon name="next" />
      </Title>
      <MonthWeek>
        {weekDays().map((day, index) =>
          <CalendarWeekNameDay
            key={index}
          >
            <CalendarNameDay>
              {day}
            </CalendarNameDay>
          </CalendarWeekNameDay>
        )}
      </MonthWeek>
      <MonthWeekLine></MonthWeekLine>
      <CalendarDaysContainer>
        {days.map((day, index) =>
          <CalendarNameDay
            key={index}
            className={`${day.status}`}
          >
            {day.dayNumber}
          </CalendarNameDay>)}
      </CalendarDaysContainer>
    </Wrapper>
  )
}

export default Calendar
