import PropTypes from "prop-types";

function GenreCard({ genre, index }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{`${index + 1}-${genre}`}</div>
      </div>
    </div>
  );
}

GenreCard.defaultProps = {
  genre: "Sin genero",
};

GenreCard.propTypes = {
  genre: PropTypes.string,
};

export default GenreCard;
