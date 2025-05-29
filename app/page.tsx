// import Camp from "@/components/Camp";
// import Features from "@/components/Features";
import Footer from "@/components/Footer";
// import GetApp from "@/components/GetApp";
// import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PrivacySecuritySection from "@/components/PrivacySec";
import SdkSection from "@/components/sdksection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PrivacySecuritySection />
      <SdkSection />
      <Footer />
    </>
  );
}
