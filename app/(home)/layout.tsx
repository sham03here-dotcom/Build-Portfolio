import { SiteHeader } from "@/components/layout/SiteHeader";

/** Marketing chrome: the Home "RESUME ↗" header sits above the page. */
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
