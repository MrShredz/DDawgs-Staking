import React from 'react';
import HomeSection from './HomeSection';
import StakingSection from './StakingSection'
import BuyDDawgsSection from './BuyDDawgsSection';
import ExchangeSection from './ExchangeSection'
import Footer from '../../components/Footer';
import ScrollFab from '../../components/ScrollFab';

export default function Home() {
  return (
    <>
      <HomeSection />
      <StakingSection />
      <BuyDDawgsSection />
      {/* <ExchangeSection /> */}
      <Footer />
      <ScrollFab />
    </>
  );
}