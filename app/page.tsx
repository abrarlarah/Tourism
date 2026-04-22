// app/page.tsx
import HeroSection from '../components/HeroSection';
import Destinations from '../components/Destinations';
import Package from '../components/Packages';
import Reviews from '../components/reviews';
import Team from '../components/team';
import Services from '../components/services';
import Customers from '../components/customers';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Destinations />
      <Package />
      <Reviews />
      <Team />
      <Services />
      <Customers />
    </>
  );
}
