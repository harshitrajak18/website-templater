import "../index.css";
import { SigninNavbar0 } from "../components/SigninNavbar0";
import { SigninHero1 } from "../components/SigninHero1";
import { SigninLogoCloud2 } from "../components/SigninLogoCloud2";
import { SigninFeatures3 } from "../components/SigninFeatures3";
import { SigninStats4 } from "../components/SigninStats4";
import { SigninTestimonials5 } from "../components/SigninTestimonials5";
import { SigninCta6 } from "../components/SigninCta6";
import { SigninFooter7 } from "../components/SigninFooter7";

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SigninNavbar0 />
      <SigninHero1 />
      <SigninLogoCloud2 />
      <SigninFeatures3 />
      <SigninStats4 />
      <SigninTestimonials5 />
      <SigninCta6 />
      <SigninFooter7 />
    </div>
  );
}
