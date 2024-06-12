import Banner from "./components/Banner";
import Products from './components/Products';

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Banner />
      <Products />
    </div>
  );
}
