import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import MovieCardContainer from "./MovieCardContainer";

const MovieCardSkeleton = () => {
  return (
    <MovieCardContainer>
      <Card>
        <Skeleton height="300px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </MovieCardContainer>
  );
};

export default MovieCardSkeleton;
