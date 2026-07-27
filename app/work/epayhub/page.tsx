import type { Metadata } from "next";
import { epayhub } from "@/data/case-studies/epayhub";
import { EditorialCaseStudy } from "@/components/case/editorial/EditorialCaseStudy";

export const metadata: Metadata = {
  title: epayhub.metaTitle,
  description: epayhub.metaDescription,
};

export default function EpayhubPage() {
  return <EditorialCaseStudy study={epayhub} />;
}
