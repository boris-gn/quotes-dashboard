export interface Sidebar {
	id: number;
	label: string;
	className?: string;
	mobileClassName?: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	url: string;
}
