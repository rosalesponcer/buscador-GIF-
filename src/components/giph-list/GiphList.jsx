import { useEffect, useState } from 'react';
import { getGifs } from '../../services/getGifs';

import Figura from '../Figura';

const GiphList = ({ params }) => {
	const keyword = params.keyword;

	const [gifs, setGifs] = useState([]);

	const fechData = (name) => {
		getGifs(name)
			.then(({ data }) => {
				setGifs(data);
			})
			.catch((error) => {
				console.error(error);
				setGifs([]);
			});
	};

	useEffect(() => {
		console.log('GiphList');
		fechData(keyword);
	}, [keyword]);

	return (
		<>
			{gifs.map(
				({
					images: {
						original: { url },
					},
					id,
				}) => {
					return (
						<div className='row' key={id}>
							<Figura url={url}></Figura>
						</div>
					);
				}
			)}
		</>
	);
};

export default GiphList;
