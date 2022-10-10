import MoviesTableRows from "./MoviesTableRows";

const movies = [
    {
        titulo: 'Billy Elliot',
        duracion: 123,
        rating: 5,
        genero: ['Drama ', 'Comedia'],
        premios: 2
    },
    {
        titulo: 'Alicia en el pais de las maravillas',
        duracion: 142,
        rating: 4.8,
        genero: ['Drama ', 'Accion ', 'Comedia'],
        premios: 3
    }
];

function MoviesTable () {
    return (
        <div className="table">
            <table>
                <tr>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Rating</th>
                    <th>Genero</th>
                    <th>Premios</th>
                </tr>
                {movies.map((movie, i) => {
                    return <MoviesTableRows key={`${movie}-${i}`} {...movie} />
                })}
            </table>
        </div>
    )
}

export default MoviesTable;