import useSWR from 'swr';

const fetcher = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) throw new Error('Failed to fetch');
	return response.json();
};

export const useFetchQuotes = () => {
	return useSWR('http://localhost:5001/quotes', fetcher);
};
