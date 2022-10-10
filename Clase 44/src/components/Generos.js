function Generos({generos}) {
    return (
        <ul>
            {generos.map((genero, i) => {
                return <li key={i}>{genero}</li>
            })}
        </ul>
    )
}

export default Generos;