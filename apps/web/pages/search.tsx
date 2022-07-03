import React from "react";
import { MainLayout, TripCard } from "ui";

const SearchPage = () => {
  return (
    <MainLayout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
          <TripCard key={key} />
        ))}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
