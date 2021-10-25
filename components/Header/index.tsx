import React from 'react';
import { Flex } from '@chakra-ui/layout';

interface Props {}

const Header = (props: Props) => {
  return (
    <Flex w="100%" justify="center" my="20px">
      <img src="/logo.png" alt="logo" />
    </Flex>
  );
};

export default Header;
