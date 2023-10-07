import genres from "../data/genres";

const GenresList = () => {
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  );
};

export default GenresList;
