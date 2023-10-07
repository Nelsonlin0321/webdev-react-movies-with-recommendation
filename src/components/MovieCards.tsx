import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovie";
import ReleaseYear from "./releaseYear";
interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={movie.image_url} />
      <CardBody>
        <ReleaseYear release_year={movie.release_year} />
        <Heading fontSize="lg">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
