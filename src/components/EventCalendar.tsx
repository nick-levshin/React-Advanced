import { Calendar } from 'antd';
import React, { FC } from 'react';
import { IEvent } from '../models/Event';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = () => {
  return <Calendar />;
};

export default EventCalendar;
