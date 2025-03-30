export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Event = {
	id: number;
	occasion: string;
	for_date: string;
	event_name: string;
	is_restricted: boolean;
};

export type EventsData = {
	meetings: Event[];
	deadlines: Event[];
	renewals: Event[];
};
