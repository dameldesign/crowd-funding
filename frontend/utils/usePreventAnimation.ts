/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

/** This function just allows the laggy animation of the navbar while the window is being resized */
export default function useCheckWindowSize(
	navbarRef: React.RefObject<HTMLDivElement>
) {
	function checkWindowSize() {
		if (navbarRef.current === null) return;
		navbarRef.current.style.transitionDuration = '0ms';
		navbarRef.current.style.transitionTimingFunction = '';
		navbarRef.current.style.transitionProperty = '';

		setTimeout(() => {
			if (navbarRef.current === null) return;
			navbarRef.current.style.transitionDuration = '150ms';
			navbarRef.current.style.transitionTimingFunction =
				'cubic-bezier(0.4, 0, 0.2, 1)';
			navbarRef.current.style.transitionProperty = 'all';
		}, 250);
	}

	React.useEffect(() => {
		window.addEventListener('resize', () => checkWindowSize());
		return () =>
			window.removeEventListener('resize', () => checkWindowSize());
	}, []);
}
