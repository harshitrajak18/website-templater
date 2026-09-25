import "../index.css";
import { AboutNavbar0 } from "../components/AboutNavbar0";
import { AboutHero1 } from "../components/AboutHero1";
import { AboutImageText2 } from "../components/AboutImageText2";
import { AboutTeam3 } from "../components/AboutTeam3";
import { AboutSteps4 } from "../components/AboutSteps4";
import { AboutFooter5 } from "../components/AboutFooter5";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <AboutNavbar0 />
      <AboutHero1 />
      <AboutImageText2 />
      <AboutTeam3 />
      <AboutSteps4 />
      <AboutFooter5 />
    </div>
  );
}
