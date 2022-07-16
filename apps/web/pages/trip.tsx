import React from "react";

import { MainLayout } from "@/components/Layout";
import { CTA, TripGallery } from "@/container/TripDetail";

const SearchPage = () => {
  return (
    <MainLayout>
      <TripGallery />
      <div className="container mx-auto grid grid-cols-3">
        <div>
          <CTA />
        </div>
        <div className="col-span-2">body</div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
