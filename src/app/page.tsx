import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="absolute top-0">
      <Hero />
      <About />
      <Footer />
    </main>
  )
}
