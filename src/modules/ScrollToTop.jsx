import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollTotTop = (props) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{props.children}</>;
};

export default ScrollTotTop;
