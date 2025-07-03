import React from 'react';
import { isLoginState } from '@/atoms/loginState';
import { useRecoilState } from 'recoil';
import FetchImageToBlob from '@/components/FetchImageToBlob';

function Home() {
	const [isLogin, setIsLogin] = useRecoilState(isLoginState);
	return (
		<div>
			{isLogin ? (
				<p>환영합니다! 이곳은 홈 페이지입니다.</p>
			) : (
				<p> 로그인 해주세요</p>
			)}
			<FetchImageToBlob />
		</div>
	);
}

export default Home;
