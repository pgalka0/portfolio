import Head from 'next/head';
import Vim from '../components/vim';
import { MenuChoice } from '../types/components/bar';

export default function ContactPage() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Vim defaultView={MenuChoice.Contact} />
		</div>
	);
}
