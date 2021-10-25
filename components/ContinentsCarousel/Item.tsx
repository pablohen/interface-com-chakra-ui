import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  imagePath: string;
  heading: string;
  description: string;
}

const Item = ({ imagePath, heading, description }: Props) => {
  return (
    <SwiperSlide>
      <Flex
        w="100%"
        bgImage={imagePath}
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
            {heading}
          </Heading>
          <Text
            color="light.info"
            fontWeight="700"
            fontSize="14px"
            lineHeight="21px"
          >
            {description}
          </Text>
        </Center>
      </Flex>
    </SwiperSlide>
  );
};

export default Item;
