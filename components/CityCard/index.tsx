import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  imagePath: string;
  city: string;
  country: string;
}

const CityCard = ({ city, country, imagePath }: Props) => {
  return (
    <Flex
      flexDir="column"
      w="256px"
      border="1px"
      borderColor="highlight"
      borderRadius="md"
    >
      <Flex
        w="100%"
        h="173px"
        bgImage={imagePath}
        bgPosition="center"
        bgSize="cover"
      ></Flex>
      <Flex w="100%" p="24px" justifyContent="space-between" align="center">
        <Flex flexDir="column">
          <Text
            fontWeight="600"
            fontSize="20px"
            lineHeight="25px"
            color="dark.text"
            fontFamily="Barlow"
          >
            {city}
          </Text>
          <Text
            fontWeight="500"
            fontSize="16px"
            lineHeight="26px"
            color="dark.info"
            fontFamily="Barlow"
          >
            {country}
          </Text>
        </Flex>

        <Avatar name={country} />
      </Flex>
    </Flex>
  );
};

export default CityCard;
