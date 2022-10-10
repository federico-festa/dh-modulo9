import Generos from './Generos';

function MoviesTableRows ({titulo, duracion, rating, genero, premios}) {
    return (
            <tr>
                <td>{titulo}</td>
                <td>{duracion}</td>
                <td>{rating}</td>
                <td><Generos generos={genero} /></td>
                <td>{premios}</td>
            </tr>
    );
}



export default MoviesTableRows;