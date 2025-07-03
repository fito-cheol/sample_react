import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Path from '@/router/Path';

const Routes = [
	{ path: Path.index, element: <Home /> },
	{ path: Path.about, element: <About /> },
	{ path: Path.contact, element: <Contact /> },
];
export default Routes;
