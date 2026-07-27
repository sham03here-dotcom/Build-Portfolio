import type { Metadata } from "next";
import { fitness } from "@/data/case-studies/fitness";
import { EditorialCaseStudy } from "@/components/case/editorial/EditorialCaseStudy";

export const metadata: Metadata = {
  title: fitness.metaTitle,
  description: fitness.metaDescription,
};

export default function FitnessPage() {
  return <EditorialCaseStudy study={fitness} />;
}
