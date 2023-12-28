'use client';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const CalendarPage = ({ setNextAppt }: { setNextAppt: any }) => {
    const [date, setDate] = useState<any>(new Date());

    return (
        <div className='app'>
            <div className='calendar-container'>
                <Calendar
                    onChange={(e: any) => {
                        const selectedDate = e.toLocaleString().split(',')[0];
                        setNextAppt(selectedDate);
                        setDate(e);
                    }}
                    value={date}
                />
            </div>
            {/* <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p> */}
        </div>
    );
};

export default CalendarPage;
