import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { iirm } from "@/data/case-studies/iirm";
import { EditorialCaseStudy } from "@/components/case/editorial/EditorialCaseStudy";

export const metadata: Metadata = {
  title: iirm.metaTitle,
  description: iirm.metaDescription,
};

export default function IirmPage() {
  if (projects.find((p) => p.slug === "iirm")?.hidden) notFound();
  return <EditorialCaseStudy study={iirm} />;
}
