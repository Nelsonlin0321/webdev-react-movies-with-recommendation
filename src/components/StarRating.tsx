import { HStack } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const halfStarNumber = halfStar ? 1 : 0;
  const emptyStar = 5 - fullStars - halfStarNumber;
  const style = { color: "gold" };
  const stars = [];
  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<AiFillStar key={i} style={style} />);
  }

  if (halfStar) {
    stars.push(<BsStarHalf key={fullStars} style={style} />);
  }

  for (let i = 0; i < emptyStar; i++) {
    stars.push(
      <AiOutlineStar key={i + halfStarNumber + fullStars} style={style} />
    );
  }

  return <HStack spacing="space-between">{stars.map((star) => star)}</HStack>;
};

export default StarRating;
