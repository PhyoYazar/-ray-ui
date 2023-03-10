import cn from 'classnames';
import type { ButtonProps } from './button.types';

type ButtonContentProps = Pick<
ButtonProps,
'leftIcon' | 'rightIcon' | 'children' | 'size'
>;

function ButtonContent(props: ButtonContentProps) {
	const { leftIcon, rightIcon, children, size } = props;
	return (
		<span
			className={cn(
				'flex items-center justify-center',
				size === '2xl' ? 'gap-3' : 'gap-2',
			)}
		>
			{leftIcon && leftIcon}
			{children}
			{rightIcon && rightIcon}
		</span>
	);
}

export default ButtonContent;
