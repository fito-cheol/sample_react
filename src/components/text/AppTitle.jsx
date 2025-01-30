import { isLoginState } from '@/atoms/loginState';
import { useRecoilState } from 'recoil';

const AppTitle = () => {
	const [isLogin, setIsLogin] = useRecoilState(isLoginState);

	const onClickLogin = () => {
		setIsLogin(true);
	};

	const onClickLogout = () => {
		setIsLogin(false);
	};

	return (
		<>
			{isLogin ? (
				<button onClick={onClickLogout}> 로그아웃</button>
			) : (
				<button onClick={onClickLogin}> 로그인 </button>
			)}

			<span className="mode"> Follow Parent Style </span>
			<span className="mode--moduled"> Follow Child Style</span>
		</>
	);
};

export default AppTitle;
