'use client'

import { Suspense } from "react";
import Menu from "@/components/Menu/Menu";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function portfolio() {

  return (
    <Suspense>
      <Menu css="portfolio">
        <Portfolio />
      </Menu>
    </Suspense>
  );
}
