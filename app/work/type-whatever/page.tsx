import type { Metadata } from "next";
import { typeWhatever } from "@/data/case-studies/type-whatever";
import { EditorialCaseStudy } from "@/components/case/editorial/EditorialCaseStudy";

export const metadata: Metadata = {
  title: typeWhatever.metaTitle,
  description: typeWhatever.metaDescription,
};

export default function TypeWhateverPage() {
  return <EditorialCaseStudy study={typeWhatever} />;
}
