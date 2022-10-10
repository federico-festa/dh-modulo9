import ContentRowItem from './ContentRowItem';

function ContentRowMovies() {
    const moviesDataBase = {
        title: "Movies in Data Base",
        quantity: 21,
        icon: "fas fa-film fa-2x",
        color: "primary",
      };
    
      const totalAwards = {
        title: "Total awards",
        quantity: 79,
        icon: "fas fa-award fa-2x",
        color: "success",
      };
    
      const actorsQuantity = {
        title: "Actors quantity",
        quantity: 49,
        icon: "fas fa-user fa-2x",
        color: "warning",
      };
    
      const data = [moviesDataBase, totalAwards, actorsQuantity];

    return (
    <div className="row">
      {data.map((dato, index) => {
        return <ContentRowItem key={`${dato.title}-${index}`} {...dato} />;
      })}
    </div>
  );
}

export default ContentRowMovies;