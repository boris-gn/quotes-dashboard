const CardTitle = ({ title }: { title: string }) => {
	return (
		<div className="flex flex-col items-left justify-between mb-3">
			<h2 className="text-brand-primary font-bold text-base text-left">
				{title}
			</h2>
			<div className="w-[176px] mt-1 mb-3  border-grey-200 border-t border-gray-200" />
		</div>
	);
};

export default CardTitle;
