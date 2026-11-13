import { Button as ChakraButton } from '@chakra-ui/react';

interface IButton {
  onClick: () => void;
  title?: string;
}

export const Button = ({ onClick, title = 'Entrar' }: IButton) => {
  return (
    <ChakraButton onClick={onClick} colorScheme="teal" size="sm" width="100%" marginTop="5px">
      {title}
    </ChakraButton>
  );
};