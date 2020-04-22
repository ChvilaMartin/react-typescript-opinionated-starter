import React from 'react';

import hi from 'assets/images/hi.png';
import styles from './index.module.scss';

type BaseProps = {};

type InjectedProps = {};

type Props = BaseProps & InjectedProps;

const Homepage: React.FC<Props> = props => {
	return (
		<div className={ styles.app }>
			<header className={ styles.appHeader }>
				<img
					src={ hi }
					className={ styles.appLogo }
					alt="logo"
				/>
				<a
					className={ styles.appLink }
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					About this package
				</a>
			</header>
		</div>
	);
};

export default Homepage;
