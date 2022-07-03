import React from "react";
import { MainLayout, TripCard } from "ui";

import { useSearchQuery } from "../graphql/__generated__";

const SearchPage = () => {
  const { data, loading, error } = useSearchQuery({
    variables: {
      keyword: "%%",
    },
  });
  console.log("data", data);
  if (error) return <div>...error</div>;
  return (
    <MainLayout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loading && <div>...Loading</div>}
        {!loading &&
          data?.trip.map(({ id, name_th, description_th }) => (
            <TripCard key={id} name={name_th} description={description_th} />
          ))}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
