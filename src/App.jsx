import React from 'react';
import './App.css';
import './App.scss';
import AppTitle from '@/components/text/AppTitle';

import AppRouter from '@/router/router';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import TestEnvVar from '@/components/TestEnvVar';

function App() {
	return (
		<RecoilRoot>
			<TestEnvVar />
			<AppTitle />
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">홈</Link>
							</li>
							<li>
								<Link to="/about">소개</Link>
							</li>
							<li>
								<Link to="/contact">연락처</Link>
							</li>
						</ul>
					</nav>

					<AppRouter />
				</div>
			</Router>
		</RecoilRoot>
	);
}

export default App;
