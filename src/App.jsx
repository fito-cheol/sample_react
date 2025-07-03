import React from 'react';
import './App.scss';
import '@/assets/style/common/reset.scss';

import { BrowserRouter as Router } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import ScrollToTop from '@/modules/ScrollToTop';
import Header from '@/components/layout/Header';
import AnimatedRouter from '@/router/AnimatedRouter';

function App() {
	return (
		<div className="wrap">
			<RecoilRoot>
				<Router>
					<Header />
					<ScrollToTop />
					<AnimatedRouter />
					{/* <AppRouter /> */}
				</Router>
			</RecoilRoot>
		</div>
	);
}

export default App;
