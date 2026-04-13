import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import FromTheCrates from "@/components/FromTheCrates";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Nav cartCount={2} currentPath="/" />
      <Hero />
      <NewArrivals />
      <FromTheCrates />
      <div className="pt-24 px-8 max-w-content mx-auto">
        <h1 className="font-serif italic text-4xl text-slabs-text">Previewing Components</h1>
        <p className="mt-4 font-sans text-slabs-text-muted">Scroll down to see the header effects.</p>
        <div className="h-[200vh]"></div>
      </div>
    </main>
  );
}