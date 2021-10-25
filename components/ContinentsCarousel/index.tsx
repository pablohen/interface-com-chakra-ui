import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';
import { Flex, Center, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import Item from './Item';

interface Props {}

const ContinentsCarousel = (props: Props) => {
  return (
    <Box mx={['0', '100px']} mb={['0', '36px']}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            bgImage="/continents/europe.jpg"
            h={['250px', '450px']}
            bgPosition="center"
            bgSize="cover"
          >
            <Center w="100%" flexDir="column">
              <Heading
                color="light.text"
                fontWeight="700"
                size="24px"
                lineHeight="36px"
                pb="14px"
              >
                Europa
              </Heading>
              <Text
                color="light.info"
                fontWeight="700"
                fontSize="14px"
                lineHeight="21px"
              >
                O continente mais antigo
              </Text>
            </Center>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            bgImage="/continents/south-america.jpg"
            h="250px"
            bgPosition="center"
            bgSize="cover"
          >
            <Center w="100%" flexDir="column">
              <Heading
                color="light.text"
                fontWeight="700"
                size="24px"
                lineHeight="36px"
                pb="14px"
              >
                América do Sul
              </Heading>
              <Text
                color="light.info"
                fontWeight="700"
                fontSize="14px"
                lineHeight="21px"
              >
                ...
              </Text>
            </Center>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ContinentsCarousel;
