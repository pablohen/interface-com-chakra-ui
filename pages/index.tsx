import type { NextPage } from 'next';
import Banner from '../components/Banner';
import ContinentsCarousel from '../components/ContinentsCarousel';
import Header from '../components/Header';
import TravelTypes from '../components/TravelTypes';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <ContinentsCarousel />
    </>
  );
};

export default Home;
