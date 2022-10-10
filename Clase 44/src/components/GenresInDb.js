import GenreCard from "./GenreCard";

function GenresInDb() {
  const genres = [
    "Acción",
    "Animación",
    "Aventura",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasia",
    "Musical",
    "Ciencia Ficción",
    "Infantiles",
  ];

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres.map((genre, index) => {
              return (
                <GenreCard
                  key={`${genre}-${index}`}
                  genre={genre}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
