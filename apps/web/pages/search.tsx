import React from "react";
import {
  Button,
  DatePicker,
  format,
  Formik,
  SearchSelect,
  SvgIcon,
  TripCard,
} from "ui";

import { MainLayout } from "@/components/Layout";
import { Filter } from "@/container/Search";

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
      <Formik
        initialValues={{
          price: "",
        }}
        onSubmit={() => {}}
      >
        <div className="bg-gray-1">
          <div
            id="header"
            className="relative h-[300px] bg-[url(/images/cover.jpg)] bg-cover bg-center pt-[52px] md:h-[350px]"
          >
            <div className="container mx-auto max-w-screen-diveScreen px-10 pt-9 md:pt-[50px]">
              <p className="text-center text-body1 font-semibold text-white md:text-left md:text-header6">
                ค้นหาและจองทริปดำน้ำที่ <br />
                ใช่สำหรับคุณ
              </p>
              <p className="mt-[18px] hidden text-body2 text-white md:block">
                รับราคาที่ดีที่สุดจากสถาบันดำน้ำที่ได้รับมาตราฐาน <br /> กว่า
                13,000+ แห่งทั่วโลก
              </p>
            </div>

            <div className="absolute bottom-[-76px] w-full md:bottom-[-37px]">
              <div className="container mx-auto max-w-screen-diveScreen">
                <div className="sticky z-10 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-md md:flex-row">
                  <SearchSelect
                    className="flex-1"
                    icon="calendar"
                    noOptionsMessage="ไม่พบการค้นหา"
                    placeholder="โปรดเลือกสถานที่"
                  />
                  <DatePicker
                    className="flex-1"
                    name="test"
                    placeholder="เลือกเดือนที่ต้องการไป"
                    showMonthYearPicker
                    showFullMonthYearPicker
                    popperPlacement="bottom"
                    icon="calendar"
                  />
                  <Button
                    className="md:w-[180px]"
                    color="primary"
                    size="md"
                    // border="rounded"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <SvgIcon
                        className="h-5 w-5 bg-white"
                        mark
                        icon="search"
                      />
                      ค้นหา
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* <div className="absolute top-0 left-0 z-0 h-3/4 w-full bg-gray-2 bg-[url(https://www.sunrise-divers.com/wp-content/uploads/2017/02/manta-ray-at-koh-bon.jpg)] bg-cover bg-center"></div> */}
          </div>
          <div className="container mx-auto mt-32 max-w-screen-diveScreen flex-1 overflow-hidden md:mt-20">
            <div className="grid-cols-3 gap-8 md:grid">
              <Filter />
              <div className="md:col-span-2 lg:grid-cols-2">
                <div
                  id="search-result-header"
                  className="mb-6 flex rounded-xl bg-white p-4"
                >
                  <div className="flex-1">
                    <p className="text-body4 font-semibold text-gray-9 sm:text-body2">
                      ทริปดำน้ำ มิถุนายน 2565
                    </p>
                    <p className="text-body5 text-gray-6">
                      ผลการค้นหา 156 ทริป
                    </p>
                  </div>
                  <SearchSelect
                    className=""
                    icon="sort"
                    noOptionsMessage="ไม่พบการค้นหา"
                    placeholder="เรียงลำดับ"
                    options={[
                      {
                        label: "มากไปน้อย",
                        value: 0,
                      },
                      {
                        label: "น้อยไปมาก",
                        value: 1,
                      },
                    ]}
                  />
                </div>
                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {loading && <div>...Loading</div>}

                  {!loading &&
                    data?.trip.map(
                      ({
                        id,
                        name_th,
                        description_th,
                        boatByBoat: { name_th: boat_name_th },
                        allotments,
                        start_date,
                        end_date,
                      }) => (
                        <TripCard
                          key={id}
                          name={name_th}
                          description={description_th}
                          boat={boat_name_th}
                          price={
                            allotments.length > 0 &&
                            allotments.sort((a, b) => a.price - b.price)[0]
                              .price
                          }
                          available={allotments.length > 0}
                          date={`${format(
                            new Date(start_date),
                            "dd MMM"
                          )} - ${format(new Date(end_date), "dd MMM yyyy")}`}
                        />
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </MainLayout>
  );
};

export default SearchPage;
