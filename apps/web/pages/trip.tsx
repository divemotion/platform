import React from "react";

import { MainLayout } from "@/components/Layout";
import { CTA, Detail, Header, TripGallery } from "@/container/TripDetail";

const SearchPage = () => {
  return (
    <MainLayout fixed={false}>
      <Header />
      <TripGallery />
      <div className="container mx-auto mt-6 max-w-screen-diveScreen gap-[14px] md:mt-14 md:grid md:grid-cols-3">
        <div>
          <CTA />
        </div>
        <div className="col-span-2">
          <Detail />
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
