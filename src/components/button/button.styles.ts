import { Variant } from "./button.types";

export const sizes = {
	sm: "py-2 px-3.5 text-text-sm",
	md: "py-2.5 px-4 text-text-sm",
	lg: "py-2.5 px-[18px] text-text-md",
	xl: "py-3.5 px-5 text-text-md",
	"2xl": "py-4 px-6 text-text-lg",
};

export const generateVariantType = (
	type: string,
	bgColor: string,
	textColor: string
): string => {
	const outlinedGhostColor = `text-${textColor}-600 hover:text-${textColor}-700 hover:bg-${textColor}-50`;

	switch (type) {
	case Variant.FILLED:
		return `text-white bg-${bgColor}-600 hover:bg-${bgColor}-700 border-${bgColor}-600`;

	case Variant.OUTLINED:
		return `${outlinedGhostColor}  bg-white border-${textColor}-300`;

	case Variant.GHOST:
		return `${outlinedGhostColor}  border-0 hover:border-${textColor}-50 drop-shadow-none`;

	case Variant.LINK:
		return "text-gray-600 hover:text-primary-600 border-0 underline underline-offset-1 drop-shadow-none";

	default:
		return "";
	}
};
