import { useState } from 'react';
import Calendar from 'react-calendar';

import LeftArrow from '@/assets/icons/arrow-left.svg?react';
import RightArrow from '@/assets/icons/arrow-right.svg?react';

import EventForm from './EventForm';
import { initialEvents } from '@/features/calendar/dummyEventsData';
import { Value, EventsData, Event } from '@/features/calendar/eventTypes';

import './CustomCalendar.css';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
	const [value, setValue] = useState<Value>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [events, setEvents] = useState<EventsData>(initialEvents);

	const tileClassName = ({ date, view }: { date: Date; view: string }) => {
		if (view === 'month') {
			const isoDate = date.toISOString().split('T')[0];
			const event = Object.values(events)
				.flat()
				.find((e) => e.for_date === isoDate);

			if (event) {
				return `${event.event_name}`;
			}
		}
		return '';
	};

	const handleDateClick = (date: Date) => {
		setSelectedDate(date);
	};

	const handleEventSubmit = (
		eventType: string,
		eventOccasion: string = ''
	) => {
		if (selectedDate && eventType) {
			const isoDate = selectedDate.toISOString().split('T')[0];
			const newEvent: Event = {
				id: Date.now(),
				occasion: eventOccasion,
				for_date: isoDate,
				event_name: eventType,
				is_restricted: true,
			};

			setEvents((prevEvents) => {
				const updatedEvents = { ...prevEvents };
				updatedEvents[eventType as keyof EventsData].push(newEvent);
				return updatedEvents;
			});
			setSelectedDate(null);
		}
	};

	const handleCloseForm = () => {
		setSelectedDate(null);
	};

	return (
		<div className="relative">
			<Calendar
				tileClassName={tileClassName}
				onChange={setValue}
				value={value}
				prevLabel={<LeftArrow />}
				nextLabel={<RightArrow />}
				onClickDay={handleDateClick}
			/>
			{selectedDate && (
				<EventForm
					selectedDate={selectedDate}
					onSubmit={handleEventSubmit}
					onClose={handleCloseForm}
				/>
			)}
			<div className="flex gap-2 justify-center mt-[10px]">
				<div className="text-gray-500 text-12 flex gap-[10px] items-center">
					<div className="w-4 h-4 bg-neutral-50 rounded-full" />
					Meetings
				</div>
				<div className="text-gray-500 text-12 flex gap-[10px] items-center">
					<div className="w-4 h-4 bg-error-200 rounded-full" />
					Deadlines
				</div>
				<div className="text-gray-500 text-12 flex gap-[10px] items-center">
					<div className="w-4 h-4 bg-warning-200 rounded-full" />
					Renewals
				</div>
			</div>
		</div>
	);
};

export default CustomCalendar;
