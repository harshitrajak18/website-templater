import type { RichTextMetadata } from "../type/type";

export function modifyRichText(section: RichTextMetadata) {
  return {
    title: section.title || "",
    content: section.content,
  };
}
