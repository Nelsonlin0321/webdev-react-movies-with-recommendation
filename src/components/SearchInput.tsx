import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string | undefined) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  // const debounce = <F extends (...args: any[]) => void>(
  //   func: F,
  //   delay: number
  // ) => {
  //   let timerId: NodeJS.Timeout;
  //   return (...args: Parameters<F>) => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(() => {
  //       func(...args);
  //     }, delay);
  //   };
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   onSearch(event.target.value);
  // };

  // const handleDebouncedChange = debounce(handleChange, 1000);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Movies..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
