import { useState, useEffect } from 'react';

import usePopupCounter from '@/modules/hook/usePopupCounter';

import '@/assets/style/components/layerPopup.scss';

const LayerPopup = (props) => {
	const { open, layerHeader, children, onClose, buttons } = props;

	const [isOpen, setIsOpen] = useState(open);

	const { addPopupCounter, removePopupCounter } = usePopupCounter();

	useEffect(() => {
		if (isOpen) {
			addPopupCounter();
		} else {
			removePopupCounter();
		}
		return () => removePopupCounter();
	}, [isOpen]);

	const handleClose = () => {
		if (onClose) {
			onClose();
		}
		if (manualClose) {
			setIsOpen(false);
		}
	};

	return (
		<div id={id} className={`layer_popup ${isOpen && 'active'} ${className}`}>
			<div className="layer_popup_container">
				{layerBackButton ? (
					<Button
						type="button"
						className="layer_popup_back_button"
						aria-label="이전화면으로 이동"
					>
						{layerBackButton}
					</Button>
				) : null}
				{layerHeader}
				<button
					type="button"
					className="layer_popup_close_button"
					aria-label="팝업 닫기"
					onClick={handleClose}
				/>
				<div className="layer_popup_container_contents">{children}</div>
				{buttons?.length && (
					<div className="buttonArea_bottom">
						{buttons.map((button) => (
							<Button
								className={button.className}
								onClick={button.onClick}
								id={button.id}
								key={button.id}
							>
								{button.label}
							</Button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default LayerPopup;
