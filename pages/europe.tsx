import React from 'react';
import ContinentBanner from '../components/ContinentBanner';
import Header from '../components/Header';
import { Flex, Heading, Text, Stack, Box } from '@chakra-ui/layout';
import CityCard from '../components/CityCard';

interface Props {}

const EuropePage = (props: Props) => {
  return (
    <>
      <Header />
      <ContinentBanner />

      <Box w="100%" px="140px">
        <Flex flexDir={['column', 'row']} p="16px">
          <Text
            fontWeight="400"
            fontSize={['14px', '24px']}
            lineHeight={['21px', '36px']}
            align="justify"
            color="dark.text"
            w={['100%', '50%']}
            mr={['0', '70px']}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex w={['100%', '50%']} justify="space-between" pt="16px">
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
        </Flex>

        <Flex flexDir="column" p="16px">
          <Flex flexDir="column" pt="32px">
            <Heading
              fontWeight="500"
              fontSize={['24px', '36px']}
              lineHeight={['36px', '54px']}
              color="dark.text"
            >
              Cidades +100
            </Heading>

            <Stack
              direction={['column', 'row']}
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
      </Box>
    </>
  );
};

export default EuropePage;
