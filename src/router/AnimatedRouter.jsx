import { useLocation, useNavigationType, useRoutes } from 'react-router-dom';
import Routes from './Routes';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import React from 'react';

import '@/assets/style/components/transition.scss';

function AnimatedRouter() {
	const location = useLocation();
	const navigationType = useNavigationType();
	const transitionClass = navigationType === 'POP' ? 'Backward' : 'Forward';
	const [prevLocation, setPrevLocation] = useState(location);
	const [transitioning, setTransitioning] = useState(false);
	const mainRef = useRef('A');
	const prevLocationRef = useRef(location);
	const tranLocationRef = useRef(location);
	const switchMain = () => {
		const newMain = mainRef.current === 'A' ? 'B' : 'A';
		mainRef.current = newMain;
	};

	if (location.key !== prevLocationRef.current.key) {
		tranLocationRef.current = { ...prevLocationRef.current };
		prevLocationRef.current = { ...location };
		switchMain();
	}

	const mainElement = useRoutes(Routes(), location);
	const subElement = useRoutes(Routes(), tranLocationRef.current);

	const isAMain = mainRef.current === 'A';
	const isBMain = mainRef.current === 'B';
	const elementA = isAMain ? mainElement : subElement;
	const elementB = isBMain ? mainElement : subElement;

	const showA = transitioning || isAMain;
	const showB = transitioning || isBMain;

	useEffect(() => {
		let timer = null;
		if (location.key !== prevLocation.key) {
			setTransitioning(true);
			// setTimeout(() => {
			// 	debugger;
			// }, 500);
			timer = setTimeout(() => {
				setTransitioning(false);
				setPrevLocation(location);
			}, 1000);
		}
		return () => {
			if (timer) {
				clearTimeout(timer);
				setTransitioning(false);
			}
		};
	}, [location, prevLocation, setPrevLocation]);

	const customStyle = (isMain, show) => {
		if (!isMain) {
			return { display: show ? '' : 'none' };
		} else {
			return {
				position: transitioning ? 'fixed' : 'relative',
				display: show ? '' : 'none',
				color: isMain ? 'red' : '',
			};
		}
	};

	return (
		<div className="transition_wrap">
			<div
				className={
					transitioning
						? `${isAMain ? 'slideIn' : 'slideOut'}${transitionClass}`
						: ''
				}
				style={customStyle(isAMain, showA)}
			>
				{elementA}
			</div>
			<div
				className={
					transitioning
						? `${isBMain ? 'slideIn' : 'slideOut'}${transitionClass}`
						: ''
				}
				style={customStyle(isBMain, showB)}
			>
				{elementB}
			</div>
		</div>
	);
}

export default AnimatedRouter;
