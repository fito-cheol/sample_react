import styles from './TestEnvVar.module.scss';

const TestEnvVar = () => {
	return (
		<>
			<h2> {import.meta.env.VITE_APP_TITLE}</h2>
			<span className="mode">Current Mode {import.meta.env.MODE} </span>
			<span className={styles['mode--moduled']}>
				Current Mode {import.meta.env.MODE}
			</span>
		</>
	);
};

export default TestEnvVar;
