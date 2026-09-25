import type { TeamMetadata } from "../type/type";

export function modifyTeam(section: TeamMetadata) {
  return {
    title: section.title || "Our Team",
    description: section.description || "",
    members: section.members.map((m) => ({
      name: m.name,
      role: m.role,
      image: m.image || "",
      bio: m.bio || "",
      socialLinks: (m.socialLinks || []).map((s) => ({
        platform: s.platform,
        url: s.url,
        label: s.label || s.platform,
      })),
    })),
  };
}
