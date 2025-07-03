import { popupCountAtom } from '@/atoms/popupCountState';
import { generateKey } from 'modules/Number';
import { useRecoilState } from 'recoil';
import _ from 'underscore';

const usePopupCounter = (uniqueKey = generateKey()) => {
	const [popupCount, setPopupCount] = useRecoilState(popupCountAtom);

	const addPopupCounter = () => {
		setPopupCount((prev) => {
			return { ...prev, [uniqueKey]: true };
		});
	};

	const removePopupCounter = () => {
		setPopupCount((prev) => {
			// 기존에 키가 없는데 삭제 요청이 들어오는 경우 rerender 하지 않도록 처리
			if (prev[uniqueKey]) {
				const copy = { ...prev };
				delete copy[uniqueKey];
				return copy;
			} else {
				return prev;
			}
		});
	};

	const checkAnyPopup = () => {
		let existAnyPopup = false;
		_.keys(popupCount).forEach((key) => {
			if (popupCount[key]) {
				existAnyPopup = true;
			}
		});
		return existAnyPopup;
	};

	return { addPopupCounter, removePopupCounter, checkAnyPopup, popupCount };
};

export default usePopupCounter;
