"use client";

import { createContext, useState } from "react";

const TransitionContext = createContext({
	isAnimating: false,
	setAnimating: (value: boolean) => { },
});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
	const [isAnimating, setAnimating] = useState(false);

	return (
		<TransitionContext.Provider value={{ isAnimating, setAnimating }}>
			{children}
		</TransitionContext.Provider>
	);
}

export default TransitionContext;