"use client";

import { ReactNode } from "react";

export interface ButtonProps {
	children: ReactNode;
	className?: string;
	appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
	return (
		<button
			className="px-3 py-2 rounded bg-black text-white hover:opacity-90 transition"
			onClick={() => alert(`Hello from your ${appName} app!`)}
		>
			{children}
		</button>
	);
};
