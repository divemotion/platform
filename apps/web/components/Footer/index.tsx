import Link from "next/link";
import React from "react";
import { SvgIcon } from "ui";

import { FullLogo } from "../FullLogo";

export const Footer = () => {
  return (
    <div className="bg-emerald-5 pt-6 pb-12">
      <div className="container mx-auto max-w-screen-diveScreen px-4">
        <div className="grid-cols-3 text-body4 text-white md:grid">
          <div>
            <div className="flex flex-col items-center md:items-start">
              <FullLogo light />
              <div className="mt-4 text-center md:text-left">
                “เพื่อให้ผู้คนได้ค้นพบความหัศจรรย์ของโลกใต้น้ำและ
                <br />
                ส่งมอบประสบการณ์การดำน้ำที่ไม่มีที่สิ้นสุด”
              </div>
            </div>
            <hr className="my-4 border-emerald-4 md:hidden" />
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-2 md:mt-7">
                <SvgIcon icon="phone" mark className="h-5 w-5 bg-white" />
                <p>088-987-4693</p>
              </div>
              <div className="mt-2 flex gap-2 md:mt-4">
                <SvgIcon icon="mail" mark className="h-5 w-5 bg-white" />
                <p>hello@divemotion.com</p>
              </div>
            </div>
          </div>
          <hr className="my-4 border-emerald-4 md:hidden" />
          <div className="flex items-center md:justify-center">
            <div className="flex w-full justify-around gap-4 md:w-[150px] md:flex-col">
              <Link href="/" passHref>
                <a>
                  <div>ค้นหาทริปดำน้ำ</div>
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <div>เกี่ยวกับเรา</div>
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <div>แจ้งปัญหา/แนะนำ</div>
                </a>
              </Link>
            </div>
          </div>
          <hr className="my-4 border-emerald-4 md:hidden" />
          <div className="flex items-center md:justify-center">
            <div className="flex w-full justify-around gap-4 md:w-[150px] md:flex-col">
              <a className="flex items-center gap-2">
                <SvgIcon
                  icon="facebookIcon"
                  mark
                  className="mt-0.5 h-5 w-5  bg-white"
                />
                <div>Divemotion</div>
              </a>

              <a className="flex items-center gap-2">
                <SvgIcon
                  icon="instagramIcon"
                  mark
                  className="mt-0.5 h-5 w-5  bg-white"
                />
                <div>@Divemotion</div>
              </a>

              <a className="flex items-center gap-2">
                <SvgIcon icon="lineIcon" className="mt-0.5 h-5 w-5" />
                <div>@Divemotion</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
