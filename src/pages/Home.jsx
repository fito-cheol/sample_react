import React from 'react';
import { isLoginState } from '@/atoms/loginState';
import { useRecoilState } from 'recoil';

function Home() {
	const [isLogin, setIsLogin] = useRecoilState(isLoginState);
	return (
		<div>
			<h1>홈 페이지</h1>
			{isLogin ? (
				<p>환영합니다! 이곳은 홈 페이지입니다.</p>
			) : (
				<p> 로그인 해주세요</p>
			)}
		</div>
	);
}

export default Home;
