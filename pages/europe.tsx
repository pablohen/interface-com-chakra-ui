import React from 'react';
import ContinentBanner from '../components/ContinentBanner';
import Header from '../components/Header';
import { Flex, Heading, Text, Stack } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import CityCard from '../components/CityCard';

interface Props {}

const EuropePage = (props: Props) => {
  return (
    <>
      <Header />
      <ContinentBanner />

      <Flex flexDir="column" p="16px">
        <Text
          color="dark.text"
          fontWeight="400"
          fontSize="14px"
          lineHeight="21px"
          align="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex justify="space-between" pt="16px">
          <Flex flexDir="column">
            <Heading color="highlight">50</Heading>
            <Text color="dark.text">países</Text>
          </Flex>
          <Flex flexDir="column">
            <Heading color="highlight">60</Heading>
            <Text color="dark.text">línguas</Text>
          </Flex>
          <Flex flexDir="column">
            <Heading color="highlight">24</Heading>
            <Text color="dark.text">cidades +100</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" pt="32px">
          <Heading
            fontWeight="500"
            fontSize="24px"
            lineHeight="36px"
            color="dark.text"
          >
            Cidades +100
          </Heading>

          <Stack
            direction="column"
            w="100%"
            justify="center"
            align="center"
            wrap="wrap"
            pt="20px"
            spacing="20px"
          >
            <CityCard
              imagePath="/continents/europe.jpg"
              city="City"
              country="Country"
            />
            <CityCard
              imagePath="/continents/europe.jpg"
              city="City"
              country="Country"
            />
            <CityCard
              imagePath="/continents/europe.jpg"
              city="City"
              country="Country"
            />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default EuropePage;
