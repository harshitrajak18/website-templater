import "../index.css";
import { ContactNavbar0 } from "../components/ContactNavbar0";
import { ContactHero1 } from "../components/ContactHero1";
import { ContactContact2 } from "../components/ContactContact2";
import { ContactNewsletter3 } from "../components/ContactNewsletter3";
import { ContactFooter4 } from "../components/ContactFooter4";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ContactNavbar0 />
      <ContactHero1 />
      <ContactContact2 />
      <ContactNewsletter3 />
      <ContactFooter4 />
    </div>
  );
}
