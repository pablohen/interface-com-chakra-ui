import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

interface Props {}

const Banner = (props: Props) => {
  return (
    <Flex
      w="100%"
      flexDir={['column', 'row']}
      justify="space-between"
      bgImage="/banner-background.png"
      bgPosition="center"
      bgSize="cover"
      px={['16px', '140px']}
      py={['28px', '80px']}
    >
      <Box>
        <Heading
          fontWeight="500"
          fontSize={['20px', '36px']}
          lineHeight={['30px', '54px']}
          color="light.text"
          mb="20px"
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text
          fontWeight="400"
          fontSize={['14px', '20px']}
          lineHeight={['21px', '30px']}
          color="light.info"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Box
        display={['none', 'none', 'none', 'none', 'flex']}
        w="417px"
        h="270px"
        bgImage="/airplane.png"
        bgPos="center"
        bgSize="cover"
        pos="absolute"
        top="150px"
        right="150px"
      />
    </Flex>
  );
};

export default Banner;
