import type { Metadata } from "next";
import { iirm } from "@/data/case-studies/iirm";
import { EditorialCaseStudy } from "@/components/case/editorial/EditorialCaseStudy";

export const metadata: Metadata = {
  title: iirm.metaTitle,
  description: iirm.metaDescription,
};

export default function IirmPage() {
  return <EditorialCaseStudy study={iirm} />;
}
