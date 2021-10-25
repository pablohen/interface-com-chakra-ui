import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

interface Props {
  imagePath: string;
  text: string;
}

const Item = ({ imagePath, text }: Props) => {
  return (
    <Flex flexDir="column" justify="center" align="center">
      <Box
        bgImage={imagePath}
        w="85px"
        h="85px"
        mb="20px"
        display={['none', 'none', 'none', 'flex']}
      />
      <Text fontWeight="500" fontSize="18px" lineHeight="27px">
        {text}
      </Text>
    </Flex>
  );
};

export default Item;
