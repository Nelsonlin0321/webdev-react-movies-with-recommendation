import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  movie_id: number;
  removeMovie: (movie_id: number) => void;
}

const MovieCloseButton = ({ movie_id, removeMovie }: Props) => {
  return (
    <AiFillCloseCircle
      className="close-btn"
      size="25px"
      onClick={() => removeMovie(movie_id)}
      cursor="pointer"
    />
  );
};

export default MovieCloseButton;
