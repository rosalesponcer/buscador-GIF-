import './App.css';

import Header from './components/header/Header';
import GiphList from './components/giph-list/GiphList';

import { Route, Link } from 'wouter';
const APP = () => {
	return (
		<>
			<Header></Header>
			<section className='container'>
				<div className='row my-2 gap-2 mx-0'>
					<Link href='/gif/peru' className='btn btn-primary'>
						Peru
					</Link>
					<Link href='/gif/chile' className='btn btn-secondary'>
						Chile
					</Link>
					<Link href='/gif/argentina' className='btn btn-danger'>
						Argentina
					</Link>
				</div>

				<Route path='/gif/:keyword' component={GiphList} />
			</section>
		</>
	);
};

export default APP;
