import { Heading } from "@chakra-ui/react";

interface Props {
  text: string;
}

const SectionHeading = ({ text }: Props) => {
  return (
    <Heading size="lg" paddingBottom="15px">
      {text}
    </Heading>
  );
};

export default SectionHeading;
