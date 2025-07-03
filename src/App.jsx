import React from 'react';
import './App.scss';
import './assets/reset.scss';

import AppRouter from '@/router/router';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import ScrollTotTop from '@/modules/ScrollToTop';
import Header from '@/components/layout/Header';

function App() {
	return (
		<div className="wrap">
			<RecoilRoot>
				<Router>
					<Header />
					<ScrollTotTop />
					<AppRouter />
				</Router>
			</RecoilRoot>
		</div>
	);
}

export default App;
