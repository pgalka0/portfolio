import type { NextPage } from 'next';
import Head from 'next/head';
import Vim from '../components/vim';
import { MenuChoice } from '../types/components/bar';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Technologies</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Vim defaultView={MenuChoice.Technologies} />
		</div>
	);
};

export default Home;