import { useRouter } from "next/router";
import React, { useState } from "react";
import { BgImg, BoatCard, Button, Modal, SvgIcon } from "ui";

interface Props {
  step: number;
}

export const SummerySection = ({ step }: Props) => {
  const router = useRouter();
  const { query } = router;
  const [isOpen, setIsOpen] = useState(false);
  const nextStep = Number(query.step || "1") + 1;
  return (
    <>
      {step !== 3 && (
        <div className="mb-6 hidden md:block">
          <BoatCard
            name="อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ"
            organizer="Dive Eat Sleep Thailand"
            date="21-23 ตุลาคม 65  (5 วัน/4 คืน, 11 ไดฟ์)"
            boatName="MV Koon 9"
          />
        </div>
      )}
      <div className="hidden rounded-xl bg-white p-4 shadow-sm md:block">
        <p className="mb-4 text-body4 font-semibold text-gray-9">
          สรุปการชำระเงิน
        </p>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-6 border-b border-gray-3 pb-4">
            <p className="col-span-3 text-body5 text-gray-9">
              ห้องนอนดีลักซ์ ไซท์คิง (King Bed)
            </p>
            <p className="col-span-1 text-body5 text-gray-9">x2</p>
            <p className="col-span-2 text-body5 text-gray-9">฿ 14,000 / คน</p>
          </div>
          <div className="grid grid-cols-6 border-b border-gray-3 pb-4">
            <p className="col-span-3 text-body5 text-gray-9">
              ห้องนอนดีลักซ์ ไซท์คิง (King Bed)
            </p>
            <p className="col-span-1 text-body5 text-gray-9">x2</p>
            <p className="col-span-2 text-body5 text-gray-9">฿ 14,000 / คน</p>
          </div>
        </div>
        {step > 1 && (
          <div className="mt-4 flex flex-col gap-1">
            <div className="flex">
              <p className="col-span-3 flex-1 text-body5 text-gray-9">รวม</p>
              <p className="col-span-2 text-body5 text-gray-9">฿ 2,800 / คน</p>
            </div>
            <div className="flex">
              <p className="col-span-3 flex-1 text-body5 text-gray-9">ส่วนลด</p>
              <p className="col-span-2 text-body5 text-gray-9">฿ 2,000 / คน</p>
            </div>
            <div className="flex">
              <p className="col-span-3 flex-1 text-body5 text-gray-9">
                ภาษีมูลค่าเพิ่ม
              </p>
              <p className="col-span-2 text-body5 text-gray-9">฿ 0</p>
            </div>
          </div>
        )}
        <div className="mt-4 flex justify-between text-body4 font-semibold">
          <p className="text-gray-9">ราคารวม</p>
          <p className="text-emerald-5">฿ 2,8000</p>
        </div>
        {step === 3 && (
          <p className="mt-4 text-body7 text-gray-7">
            หมายเหตุ:
            ท่านยังไม่ต้องชำระเงินในขั้นตอนนี้จนกว่าจะมีเจ้าหน้าที่ยืนยันอีกครั้ง
          </p>
        )}
      </div>
      <div className="fixed bottom-0 left-0 z-10 w-full border-t border-gray-4 bg-white p-4 md:relative md:border-none md:bg-transparent md:p-0">
        <div
          className="flex items-center md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex-1">
            <p className="text-body6 font-semibold text-gray-10">
              อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ
            </p>
            <div className="flex gap-2 text-body6 font-semibold">
              <p className="text-gray-10">ราคารวม</p>
              <p className="text-emerald-5">฿ 28,000</p>
            </div>
          </div>
          <div>
            <p className="text-body7 text-gray-6 underline">ดูรายละเอียด</p>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <Button
            className="hidden md:block md:flex-1"
            border="rounded"
            color="secondary"
            size="lg"
            onClick={() => {
              router.push({
                pathname: "/booking/create",
                query: {
                  step: step - 1,
                },
              });
            }}
          >
            <p className="text-body4">ย้อนกลับ</p>
          </Button>
          <div
            onClick={() => {
              router.push({
                pathname: "/booking/create",
                query: {
                  step: step - 1,
                },
              });
            }}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gray-4 md:hidden md:flex-1"
          >
            <SvgIcon icon="chevronLeft" mark className="h-5 w-5 bg-gray-10" />
          </div>
          {step !== 3 && (
            <Button
              className="flex-1"
              border="rounded"
              color="primary"
              size="lg"
              onClick={() => {
                router.push({
                  pathname: "/booking/create",
                  query: {
                    step: step + 1,
                  },
                });
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <p className="text-body4">ถัดไป</p>
                <SvgIcon
                  icon="arrowNarrowRight"
                  mark
                  className="hidden h-5 w-5 bg-white md:block"
                />
              </div>
            </Button>
          )}
          {step === 3 && (
            <Button
              className="flex-1"
              border="rounded"
              color="primary"
              size="lg"
            >
              <div className="flex items-center justify-center gap-2">
                <p className="text-body4">จองทริปดำน้ำ</p>
              </div>
            </Button>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="รายละเอียดการจอง"
      >
        <div>
          <div className="flex flex-col overflow-hidden">
            <div className="relative flex-1 overflow-hidden rounded-xl">
              <BgImg
                className="h-[225px] w-full bg-cover bg-center"
                src="https://picsum.photos/500/500"
              />
            </div>
            <div className="mt-4 flex flex-1 flex-col">
              <p className="text-body4 font-bold text-gray-9 line-clamp-2">
                อันดามันเหนือ-ใต้ เกาะหลีเป๊ะ
              </p>
              <div className="flex gap-1">
                <p className="mt-1 text-body5 text-gray-6">hosted by</p>
                <p className="mt-1 text-body5 text-emerald-5">
                  Dive Eat Sleep Thailand
                </p>
              </div>
              <div className="mt-2 flex gap-2">
                <SvgIcon icon="calendar" mark className="h-5 w-5 bg-gray-7" />
                <p className="text-body5 text-gray-9">
                  21-23 ตุลาคม 65 (5 วัน/4 คืน, 11 ไดฟ์)
                </p>
              </div>
              <div className="mt-2 flex gap-2">
                <SvgIcon icon="boat" mark className="h-5 w-5 bg-gray-7" />
                <p className="text-body5 text-gray-9">MV Koon 9</p>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <div className="grid grid-cols-6 border-t border-gray-3 pt-2">
              <p className="col-span-3 text-body5 text-gray-9">
                ห้องนอนดีลักซ์ ไซท์คิง (King Bed)
              </p>
              <p className="col-span-1 text-body5 text-gray-9">x2</p>
              <p className="col-span-2 text-body5 text-gray-9">฿ 14,000 / คน</p>
            </div>
            <div className="grid grid-cols-6 border-t border-gray-3 pt-2">
              <p className="col-span-3 text-body5 text-gray-9">
                ห้องนอนดีลักซ์ ไซท์คิง (King Bed)
              </p>
              <p className="col-span-1 text-body5 text-gray-9">x2</p>
              <p className="col-span-2 text-body5 text-gray-9">฿ 14,000 / คน</p>
            </div>
          </div>
          <Button
            color="primary"
            size="md"
            border="rounded"
            className="mt-8"
            fullWidth
          >
            ตกลง
          </Button>
        </div>
      </Modal>
    </>
  );
};
