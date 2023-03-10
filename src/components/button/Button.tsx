import React from "react";
import cn from "classnames";

import ButtonContent from "./ButtonContent";
import { generateVariantType, sizes } from "./button.styles";
import { ButtonProps } from "./button.types";
import { LoadingSpinnerIcon } from "~/assets/icons";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			loadingIndicator = <LoadingSpinnerIcon />,
			type = "button",
			size = "md",
			variant = "filled",
			fullWidth = false,
			isLoading = false,
			isDisabled = false,
			bgColor = "primary",
			textColor = "primary",
			leftIcon,
			rightIcon,
			spinnerPlacement,
			className,
			children,
			...props
		},
		ref
	) => {
		const contentProps = { rightIcon, leftIcon, children, size };

		return (
			<button
				{...props}
				type={type}
				disabled={isDisabled || isLoading}
				className={cn(
					`relative disabled:pointer-events-none rounded-lg font-medium border drop-shadow-xs duration-200`,

					/** only keyboard focus state */
					` focus-visible:outline-none focus-visible:outline-${bgColor}-100
					focus-visible:ring focus-visible:ring-${bgColor}-100`,

					/** 100% parent full width */
					fullWidth && "w-full",

					/** disabled button style*/
					// isDisabled && "opacity-75 text-gray-400 hover:bg-error",

					/** if disabled or loading, remove click animation*/
					isDisabled || isLoading
						? `disabled:opacity-50` //cursor-not-allowed
						: "transform active:scale-105",

					/** variant button style  */
					generateVariantType(variant, bgColor, textColor),

					/** size of button 'sm | md | lg | xl | 2xl'*/
					sizes[size],

					/** customize style from component className*/
					className
				)}
				ref={ref}
			>
				{isLoading ? (
					<span className="opacity-50">
						{spinnerPlacement ? (
						// the loading indicator place 'start | end' with the original button content
							<span className="flex items-center justify-center space-x-2">
								{spinnerPlacement === "start" && loadingIndicator}
								<ButtonContent {...contentProps} />
								{spinnerPlacement === "end" && loadingIndicator}
							</span>
						) : (
						// overlay the loading indicator to not disturb the original content
							<>
								<span className="opacity-0">
									<ButtonContent {...contentProps} />
								</span>
								<span className="absolute inset-0 grid place-items-center opacity-1">
									{loadingIndicator}
								</span>
							</>
						)}
					</span>
				) : (
					<>
						<ButtonContent {...contentProps} />
					</>
				)}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;