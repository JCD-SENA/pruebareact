function Ejemplo(propiedades) {
    let repeticiones = []

    for (let i = 0; i < propiedades.cantidad; i++) {
        repeticiones.push(<span>{propiedades.children}</span>)
    }

	return (
		<div>
			{repeticiones}
		</div>
	);
}

export default Ejemplo;