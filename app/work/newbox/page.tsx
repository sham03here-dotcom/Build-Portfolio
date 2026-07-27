import type { Metadata } from "next";
import { newbox } from "@/data/case-studies/newbox";
import { EditorialCaseStudy } from "@/components/case/editorial/EditorialCaseStudy";

export const metadata: Metadata = {
  title: newbox.metaTitle,
  description: newbox.metaDescription,
};

export default function NewboxPage() {
  return <EditorialCaseStudy study={newbox} />;
}
