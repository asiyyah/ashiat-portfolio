"use client";

import { usePathname } from "next/navigation";
import ContactPanel from "./ContactPanel";

export default function FooterContactSection() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return <ContactPanel />;
}
