import { Badge, Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovie";
import ReleaseYear from "./ReleaseYear";
import StarRating from "./StarRating";
import MovieCardContainer from "./MovieCardContainer";
interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <MovieCardContainer>
      <Card>
        <Image src={movie.image_url} />
        <CardBody padding="10px">
          <ReleaseYear release_year={movie.release_year} />
          <Heading fontSize="md" marginBottom="5px">
            {movie.title}
          </Heading>

          <StarRating rating={movie.rating} />

          <Stack direction="row">
            {movie.genres.map((g) => (
              <Badge key={g} variant="outline">
                {g}
              </Badge>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </MovieCardContainer>
  );
};

export default MovieCard;
