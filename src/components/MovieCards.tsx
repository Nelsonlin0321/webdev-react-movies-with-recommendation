import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovie";
import ReleaseYear from "./releaseYear";
import StarRating from "./StarRating";
interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={movie.image_url} />
      <CardBody padding="10px">
        <ReleaseYear release_year={movie.release_year} />
        <Heading fontSize="md">{movie.title}</Heading>
        <StarRating rating={movie.rating} />
      </CardBody>
    </Card>
  );
};

export default MovieCard;
