import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import FromTheCrates from "@/components/FromTheCrates";
import FeaturedCollections from "@/components/FeaturedCollections";
import SonicLineage from "@/components/SonicLineage";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Nav cartCount={2} currentPath="/" />
      <Hero />
      <NewArrivals />
      <FromTheCrates />
      <FeaturedCollections />
      <SonicLineage />
    </main>
  );
}
