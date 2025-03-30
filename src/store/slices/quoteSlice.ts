import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuotesData } from 'db/QuoteTypes';

interface QuoteState {
	data: IQuotesData | null;
	list: IQuotesData[];
	isLoading: boolean;
	error: string | null;
}

const initialState: QuoteState = {
	data: null,
	list: [],
	isLoading: false,
	error: null,
};

const quotesSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},

		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},

		setQuotes: (state, action: PayloadAction<IQuotesData>) => {
			state.data = action.payload;
			state.isLoading = false;
			state.error = null;
		},

		setQuotesList: (state, action: PayloadAction<IQuotesData[]>) => {
			state.list = action.payload;
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const { setLoading, setError, setQuotes, setQuotesList } =
	quotesSlice.actions;
export default quotesSlice.reducer;
