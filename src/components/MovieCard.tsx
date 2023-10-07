import { Badge, Card, CardBody, Heading, Image, Wrap } from "@chakra-ui/react";
import ReleaseYear from "./ReleaseYear";
import StarRating from "./StarRating";
import MovieCardContainer from "./MovieCardContainer";
import "./MovieCard.css";
import { Movie } from "../hooks/useMovie";

interface Props {
  movie: Movie;
  addMovie: (movie: Movie) => void;
}

const MovieCard = ({ movie, addMovie }: Props) => {
  return (
    <MovieCardContainer>
      <Card
        boxShadow="md"
        rounded="md"
        marginBottom={"5px"}
        className="image-card"
        onClick={() => addMovie(movie)}
      >
        <Image src={movie.image_url} />
        <CardBody padding="10px">
          <ReleaseYear release_year={movie.release_year} />
          <Heading fontSize="md" marginBottom="5px">
            {movie.title}
          </Heading>

          <StarRating rating={movie.rating} />

          <Wrap>
            {movie.genres.map((g) => (
              <Badge key={g} variant="outline" fontSize="10px">
                {g}
              </Badge>
            ))}
          </Wrap>
        </CardBody>
      </Card>
    </MovieCardContainer>
  );
};

export default MovieCard;
