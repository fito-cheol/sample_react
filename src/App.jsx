import React from 'react';
import './App.scss';
import '@/assets/style/common/reset.scss';
import '@/assets/style/transition.scss';

import AppRouter from '@/router/router';
import { BrowserRouter as Router } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import ScrollToTop from '@/modules/ScrollToTop';
import Header from '@/components/layout/Header';

function App() {
	return (
		<div className="wrap">
			<RecoilRoot>
				<Router>
					<Header />
					<ScrollToTop />

					<AppRouter />
				</Router>
			</RecoilRoot>
		</div>
	);
}

export default App;
