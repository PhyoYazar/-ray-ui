import cn from "classnames";

interface ButtonGroupProps {
	groupType?: "separate" | "attached";

	className?: string;
}
const ButtonGroup = ({
	groupType = "separate",
	className,
	children,
}: React.PropsWithChildren<ButtonGroupProps>) => {
	return (
		<div
			className={cn(
				"flex",
				groupType === 'separate' && 'gap-2',
				{
					[`[&>button]:rounded-none [&>:first-child]:border-r-0 [&>:last-child]:border-l-0 [&>:first-child]:rounded-l-lg [&>:last-child]:rounded-r-lg`]:
            groupType === "attached",
				},
				className
			)}
		>
			{children}
		</div>
	);
};

export default ButtonGroup;