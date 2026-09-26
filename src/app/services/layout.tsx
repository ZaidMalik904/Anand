import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the technical services, IT solutions, and examination support offered by ANAND SINDHU ENTERPRISES.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
