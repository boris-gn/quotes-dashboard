import withContainer from './Container';
import CustomCalendar from './Calendar';

const CalendarContainer: React.FC = () => {
	return <CustomCalendar />;
};

const QuotesCalendarContainer = withContainer(CalendarContainer);
export default QuotesCalendarContainer;
