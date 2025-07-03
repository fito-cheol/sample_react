import usePopupCounter from 'modules/hook/usePopupCounter';
import { useEffect } from 'react';

const GlobalBodyScroll = () => {
	const { checkAnyPopup, popupCount } = usePopupCounter();
	const scrollPositionRef = useRef(0);

	useEffect(() => {
		const scrollPosition = window.scrollY;

		if (checkAnyPopup()) {
			document.body.classList.add('stop_scroll');
			document.body.style.top = `-${scrollPosition}px`;
			scrollPositionRef.current = scrollPosition;
		} else {
			document.body.style.removeProperty('top');
			document.body.classList.remove('stop_scroll');
			window.scrollTo(0, scrollPositionRef.current);
		}
	}, [popupCount]);

	return <></>;
};

export default GlobalBodyScroll;
