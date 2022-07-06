import React from "react";
import { SearchSelect, TripCard } from "ui";

import { MainLayout } from "@/components/Layout";

import { useSearchQuery } from "../graphql/__generated__";

const SearchPage = () => {
  const { data, loading, error } = useSearchQuery({
    variables: {
      keyword: "%%",
    },
  });

  if (error) return <div>...error</div>;
  return (
    <MainLayout>
      <div>
        <div className="p-4">
          <SearchSelect icon="calendar" noOptionsMessage="ไม่พบการค้นหา" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading && <div>...Loading</div>}
          {!loading &&
            data?.trip.map(({ id, name_th, description_th }) => (
              <TripCard key={id} name={name_th} description={description_th} />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;
