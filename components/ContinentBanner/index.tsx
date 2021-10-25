import { Center, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';

interface Props {}

const ContinentBanner = (props: Props) => {
  return (
    <Flex
      w="100%"
      h={['150px', '500px']}
      bgImage="/continents/europe.jpg"
      bgSize="cover"
      bgPosition="center"
    >
      <Center w="100%">
        <Heading
          fontWeight="600"
          fontSize={['28px', '48px']}
          lineHeight={['42px', '72px']}
          color="light.text"
        >
          Europa
        </Heading>
      </Center>
    </Flex>
  );
};

export default ContinentBanner;
