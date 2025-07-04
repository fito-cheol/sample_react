import { useLocation, useNavigationType, useRoutes } from 'react-router-dom';
import Routes from './Routes';
import { useState, useRef } from 'react';
import React from 'react';

import '@/assets/style/components/transition.scss';

function AnimatedRouter() {
	const location = useLocation();
	const navigationType = useNavigationType();
	const transitionClass = navigationType === 'POP' ? 'backward' : 'forward';

	const [rerenderTrigger, setRerenderTrigger] = useState(true);

	const mainRef = useRef('A');
	const prevLocationRef = useRef(location);
	const tranLocationRef = useRef(location);
	const transitioningRef = useRef(false);
	const canRenderRef = useRef(false);
	const timeout = useRef(null);

	const switchMain = () => {
		const newMain = mainRef.current === 'A' ? 'B' : 'A';
		mainRef.current = newMain;
	};

	if (location.key !== prevLocationRef.current.key) {
		tranLocationRef.current = { ...prevLocationRef.current };
		prevLocationRef.current = { ...location };
		switchMain();
		transitioningRef.current = true;
		canRenderRef.current = true;
	}

	if (timeout.current) {
		clearTimeout(timeout.current);
		timeout.current = setTimeout(() => {
			transitioningRef.current = false;
			setRerenderTrigger((prev) => !prev);
		}, 1000);
	}

	const transitioning = transitioningRef.current;
	const canRenderB = canRenderRef.current;

	const mainElement = useRoutes(Routes(), location);
	const subElement = useRoutes(Routes(), tranLocationRef.current);

	const isAMain = mainRef.current === 'A';
	const isBMain = mainRef.current === 'B';

	const elementA = isAMain ? mainElement : subElement;
	const elementB = isBMain ? mainElement : subElement;

	const showA = transitioning || isAMain;
	const showB = transitioning || isBMain;

	const keyA = isAMain ? location.key : tranLocationRef.current.key;
	const keyB = isBMain ? location.key : tranLocationRef.current.key;

	return (
		<div className="transition_wrap">
			{showA && (
				<div
					className={
						transitioning
							? `${isAMain ? 'slidein' : 'slideout'} ${transitionClass}`
							: ''
					}
					key={keyA}
				>
					{elementA}
				</div>
			)}
			{showB && canRenderB && (
				<div
					className={
						transitioning
							? `${isBMain ? 'slidein' : 'slideout'} ${transitionClass}`
							: ''
					}
					key={keyB}
				>
					{elementB}
				</div>
			)}
		</div>
	);
}

export default AnimatedRouter;
