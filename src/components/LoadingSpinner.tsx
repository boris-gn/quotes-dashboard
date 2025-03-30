const LoadingSpinner: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 fixed top-0 right-0 w-full">
			<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
			<p className="ml-4 text-gray-700 font-medium">Loading...</p>
		</div>
	);
};

export default LoadingSpinner;
