"use client";

import { createContext, useState, ReactNode } from "react";

interface TransitionContextProps {
	isAnimating: boolean;
	setAnimating: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextProps>({
	isAnimating: false, // Initial value
	setAnimating: () => { }, // Placeholder function
});

export function TransitionProvider({ children }: { children: ReactNode }) {
	const [isAnimating, setAnimating] = useState(false); // ✅ This updates the state!

	return (
		<TransitionContext.Provider value={{ isAnimating, setAnimating }}>
			{children}
		</TransitionContext.Provider>
	);
}

export default TransitionContext;