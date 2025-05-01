import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SectionProducts from "@/components/SectionProducts";
import SectionAbout from "@/components/SectionAbout";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>    
      <Header/>
      <main>
        <Banner/>
        <SectionProducts/>
        <SectionAbout/>
        <SectionContact/>
      </main>
      <Footer/>
    </>
  );
}