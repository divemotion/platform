import React, { useState } from "react";
import { Badge, Button, Modal, RadioBox, SearchSelect, SvgIcon } from "ui";

export const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <div className="mb-4 hidden self-start rounded-xl border border-gray-2 bg-white p-6 md:block">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-body2 font-bold text-emerald-5">ตัวกรอง</p>
            <p className="text-body5 text-gray-6">Description</p>
          </div>
          <Badge size="lg">รีเซ็ต</Badge>
        </div>
        <hr className="my-6 -mx-6 border-gray-3" />
        <div>
          <p className="mb-4 text-body4 font-bold">ราคา</p>
          <div className="space-y-3.5">
            <RadioBox
              name="price"
              label="< 10,000 บาท"
              type="radio"
              value="0-10000"
            />
            <RadioBox
              name="price"
              label="10,001 - 15,000 บาท"
              type="radio"
              value="10001-15000"
            />
            <RadioBox
              name="price"
              label="15,001 - 20,000 บาท"
              type="radio"
              value="15001-20000"
            />
            <RadioBox
              name="price"
              label="> 20,000 บาท"
              type="radio"
              value="20000-100000000"
            />
          </div>
        </div>
        <hr className="my-6 border-gray-3" />
        <div>
          <p className="mb-4 text-body4 font-bold">ราคา</p>
          <SearchSelect
            className="flex-1"
            noOptionsMessage="ไม่พบการค้นหา"
            placeholder="เรือทั้งหมด"
          />
        </div>
      </div>
      <div
        className="fixed bottom-4 left-0 z-[2] flex w-full justify-center md:hidden"
        onClick={() => setIsFilterOpen(true)}
      >
        <div className="flex items-center gap-1 rounded-full bg-emerald-5 py-2 px-3 text-center">
          <SvgIcon className="h-3 w-3" icon="filter" />
          <p className="text-body5 text-white">ตัวกรอง</p>
        </div>
      </div>
      <Modal
        title="ตัวกรอง"
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        footer={
          <div className="border-t border-gray-4 py-4 px-[18px]">
            <Button
              fullWidth
              color="primary"
              border="rounded"
              onClick={() => setIsFilterOpen(false)}
            >
              ตกลง
            </Button>
          </div>
        }
      >
        <div>
          <div className="self-start">
            <div>
              <p className="mb-4 text-body4 font-bold">ราคา</p>
              <div className="space-y-3.5">
                <RadioBox
                  name="price"
                  label="< 10,000 บาท"
                  type="radio"
                  value="0-10000"
                />
                <RadioBox
                  name="price"
                  label="10,001 - 15,000 บาท"
                  type="radio"
                  value="10001-15000"
                />
                <RadioBox
                  name="price"
                  label="15,001 - 20,000 บาท"
                  type="radio"
                  value="15001-20000"
                />
                <RadioBox
                  name="price"
                  label="> 20,000 บาท"
                  type="radio"
                  value="20000-100000000"
                />
              </div>
            </div>
            <hr className="my-6 border-gray-3" />
            <div>
              <p className="mb-4 text-body4 font-bold">ราคา</p>
              <SearchSelect
                className="flex-1"
                noOptionsMessage="ไม่พบการค้นหา"
                placeholder="เรือทั้งหมด"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
