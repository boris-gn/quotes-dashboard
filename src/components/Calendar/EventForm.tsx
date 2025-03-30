import { useState, useRef, useEffect } from 'react';

type EventFormProps = {
	selectedDate: Date | null;
	onSubmit: (eventType: string, eventOccasion: string) => void;
	onClose: () => void;
};

const EventForm = ({ selectedDate, onSubmit, onClose }: EventFormProps) => {
	const [eventType, setEventType] = useState<string>('');
	const [eventOccasion, setEventOccasion] = useState<string>('');
	const formRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				formRef.current &&
				!formRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, [onClose]);

	const handleEventSubmit = () => {
		if (selectedDate && eventType) {
			onSubmit(eventType, eventOccasion);
			setEventType('');
			setEventOccasion('');
		}
	};

	return (
		<div
			ref={formRef}
			className="z-10 absolute -bottom-[25] left-0 bg-brand-primary/80 p-2 text-white rounded-8 min-w-[320px]"
		>
			<h3 className="flex justify-between">
				Choose event for:
				<span>{selectedDate?.toDateString()}</span>
			</h3>
			<div className="flex justify-between">
				<label>Event Type:</label>
				<select
					value={eventType}
					onChange={(e) => setEventType(e.target.value)}
				>
					<option value="meetings">Meeting</option>
					<option value="deadlines">Deadline</option>
					<option value="renewals">Renewal</option>
				</select>
			</div>
			<div className="flex justify-between mb-2">
				<label>Event Occasion:</label>
				<input
					type="text"
					value={eventOccasion}
					onChange={(e) => setEventOccasion(e.target.value)}
					placeholder="Enter occasion"
				/>
			</div>
			<button
				className="text-12 mr-4 cursor-pointer border border-gray-200 rounded-8 px-2"
				onClick={handleEventSubmit}
			>
				Submit
			</button>
			<button
				className="text-12 cursor-pointer border border-gray-200 rounded-8 px-2"
				onClick={onClose}
			>
				Close
			</button>
		</div>
	);
};

export default EventForm;
