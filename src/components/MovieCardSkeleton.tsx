import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width="170px">
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
