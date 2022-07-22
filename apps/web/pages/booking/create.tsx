import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { MainLayout } from "@/components/Layout";
import { ConfirmStep, InfoStep, RoomStep } from "@/container/CreateBooking";

const SearchPage = () => {
  const router = useRouter();
  const { step: queryStep } = router.query;
  const [step, setStep] = useState(1);

  useEffect(() => {
    setStep(Number(queryStep));
  }, [queryStep]);

  return (
    <MainLayout fixed={false}>
      <div className="bg-white md:bg-transparent">
        {step === 1 && <RoomStep step={step} />}
        {step === 2 && <InfoStep step={step} />}
        {step === 3 && <ConfirmStep step={step} />}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
