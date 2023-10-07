import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={movie.image_url} />
      <CardBody>
        <Heading fontSize="xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
