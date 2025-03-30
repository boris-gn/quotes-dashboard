import { useAppSelector } from '../hooks/useRedux';
import { RootState } from '../store/store';

export const useQuoteListSelector = () =>
	useAppSelector((state: RootState) => state.quote.list);

export const useQuoteDataSelector = () =>
	useAppSelector((state: RootState) => state.quote.data);

export const usePersonalDetailsSelector = () =>
	useAppSelector((state) => state.quote.data?.personalDetails);
