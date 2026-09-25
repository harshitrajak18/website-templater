import "../index.css";
import { HomeNavbar0 } from "../components/HomeNavbar0";
import { HomeHero1 } from "../components/HomeHero1";
import { HomeLogoCloud2 } from "../components/HomeLogoCloud2";
import { HomeFeatures3 } from "../components/HomeFeatures3";
import { HomeStats4 } from "../components/HomeStats4";
import { HomeTestimonials5 } from "../components/HomeTestimonials5";
import { HomeCta6 } from "../components/HomeCta6";
import { HomeFooter7 } from "../components/HomeFooter7";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HomeNavbar0 />
      <HomeHero1 />
      <HomeLogoCloud2 />
      <HomeFeatures3 />
      <HomeStats4 />
      <HomeTestimonials5 />
      <HomeCta6 />
      <HomeFooter7 />
    </div>
  );
}
