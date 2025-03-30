import React, { ComponentType } from 'react';

type WithContainerProps = {
	className?: string;
};

const withContainer = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	const WithContainer: React.FC<P & WithContainerProps> = ({
		className = '',
		...props
	}) => (
		<div
			className={`container p-3 md:p-6 border rounded-12 border-gray-200 bg-white ${className}`}
		>
			<WrappedComponent {...(props as P)} />
		</div>
	);

	WithContainer.displayName = `withContainer(${
		WrappedComponent.displayName || WrappedComponent.name || 'Component'
	})`;

	return WithContainer;
};

export default withContainer;
