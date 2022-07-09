import React from "react";
import { Button, TripCard } from "ui";

import { MainLayout } from "@/components/Layout";
import { Gallery } from "@/container/TripDetail";

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
      <Gallery />
    </MainLayout>
  );
};

export default SearchPage;
