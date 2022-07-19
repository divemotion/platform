import React from "react";

import { MainLayout } from "@/components/Layout";
import { CTA, Detail, Header, TripGallery } from "@/container/TripDetail";

const SearchPage = () => {
  return (
    <MainLayout fixed={false}>
      <div className="bg-white md:bg-transparent">
        <div className="hidden md:block">
          <Header />
        </div>
        <TripGallery />
        <div className="container mx-auto max-w-screen-diveScreen gap-[14px] md:mt-14 md:grid md:grid-cols-5  md:px-4 lg:grid-cols-3 diveScreen:px-0">
          <div className="md:col-span-2 lg:col-span-1">
            <CTA />
          </div>
          <div className="md:col-span-3 lg:col-span-2">
            <Detail />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
