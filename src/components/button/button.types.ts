// import type { KlinkColor } from '~/common/KlinkColor';
// import type { KlinkSize } from '~/common/KlinkSize';

export enum Variant {
	FILLED = 'filled',
	OUTLINED = 'outlined',
	GHOST = 'ghost',
	LINK = 'link'
}

export type ButtonProps = {
	/** is loading or not */
	isLoading?: boolean;

	/** is disabled or not */
	isDisabled?: boolean;

	/** container width */
	fullWidth?: boolean;

	/** button size */
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';

	/** button variant different styles */
	variant?: 'filled' | 'outlined' | 'ghost' | 'link';

	/** button background color,
	bgColor only apply 'filled' variant */
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

	/** button text color,
	textColor only apply  'outlined' | 'ghost'  variant */
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

	/** type of the button,
	default -> 'button' */
	type?: 'button' | 'submit' | 'reset';

	/** start Icon */
	leftIcon?: React.ReactElement;

	/** end Icon */
	rightIcon?: React.ReactElement;

	/** loading indicator slot,
	default -> spinner */
	loadingIndicator?: React.ReactNode;

	/** loading indicator Icon position */
	spinnerPlacement?: 'start' | 'end';

	/** button label */
	children?: React.ReactNode;
} & Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size' | 'ref'>;
