import React from 'react';

const ErrorPage: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
			<h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
			<h2 className="text-3xl font-bold text-gray-800 mb-2">
				Page Not Found
			</h2>
			<p className="text-lg text-gray-600 mb-6">
				Sorry, the page you are looking for does not exist or has been
				moved.
			</p>
			<a
				href="/"
				className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
			>
				Return to Dashboard
			</a>
		</div>
	);
};

export default ErrorPage;
