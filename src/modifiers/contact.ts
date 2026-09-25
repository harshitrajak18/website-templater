import type { ContactMetadata } from "../type/type";

export function modifyContact(section: ContactMetadata) {
  return {
    title: section.title || "Contact Us",
    description: section.description || "",
    email: section.email || "",
    phone: section.phone || "",
    address: section.address || "",
    showForm: section.showForm !== false,
  };
}
