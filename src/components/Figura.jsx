const Figura = ({ url, alt = 'Imagen sin descripcion' }) => {
	if (!url) return <p>No hay URL</p>;

	return (
		<img src={url} alt={alt} className='img-fluid rounded' loading='lazy' />
	);
};

export default Figura;
