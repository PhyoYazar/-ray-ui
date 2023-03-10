import React from 'react'
import cn from 'classnames'
import { badgeSize } from './Badge.styles'
import { BadgeProps } from './Badge.types'

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	(
		{
			size = 'md',
			bgColor = 'primary',
			textColor = 'gray',
			fullWidth,
			leftIcon,
			rightIcon,
			children
		},
		ref
	) => {
		return (
			<div
				className={cn(
					"inline-block rounded-2xl font-medium",

					children ? badgeSize[size] : 'p-1',

					fullWidth && 'w-full',

					`bg-${bgColor}-50 text-${textColor}-700`
				)}
				ref={ref}
			>
				<span className={cn('flex items-center justify-center', children && 'gap-1')}>
					{leftIcon && leftIcon}
					<span>{children}</span>
					{rightIcon && rightIcon}
				</span>
			</div>
		)
	})

Badge.displayName = 'Badge';

export default Badge