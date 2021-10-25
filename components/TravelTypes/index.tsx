import { Divider, Flex, Heading, VStack } from '@chakra-ui/layout';
import React from 'react';
import Item from './Item';

interface Props {}

const TravelTypes = (props: Props) => {
  return (
    <VStack w="100%" spacing="50px" p="36px">
      <Flex w="100%" justify="space-around" align="center" wrap="wrap">
        <Item imagePath="/icons/cocktail.png" text="vida noturna" />
        <Item imagePath="/icons/surf.png" text="praia" />
        <Item imagePath="/icons/building.png" text="moderno" />
        <Item imagePath="/icons/museum.png" text="clássico" />
        <Item imagePath="/icons/earth.png" text="e mais..." />
      </Flex>

      <Flex w="100%" justify="center">
        <Divider w="20%" color="#47585B" />
      </Flex>

      <Heading
        fontWeight="500"
        fontSize={['20px', '36px']}
        lineHeight={['30px', '54px']}
        textAlign="center"
        color="dark.text"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </VStack>
  );
};

export default TravelTypes;
