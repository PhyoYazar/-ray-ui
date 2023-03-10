export interface BadgeProps {
	/** badge size */
	size?: 'sm' | 'md' | 'lg';

	/** container width */
	fullWidth?: boolean;

	/** badge background color */
	bgColor?: 'gray'
	| 'primary'
	| 'error'
	| 'warning'
	| 'success'
	| 'blue_gray'
	| 'blue_light'
	| 'blue'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'rose'
	| 'orange';

	/** badge text color */
	textColor?: 'gray'
	| 'primary'
	| 'error'
	| 'warning'
	| 'success'
	| 'blue_gray'
	| 'blue_light'
	| 'blue'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'rose'
	| 'orange';

	/** start Icon */
	leftIcon?: React.ReactElement;

	/** end Icon */
	rightIcon?: React.ReactElement;

	/** mostl badge text */
	children?: React.ReactNode;
}