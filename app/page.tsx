"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const handleShopClick = () => {
    window.open(
      "https://smartstore.naver.com/riumlabs",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // 초기값 설정
    window.addEventListener("resize", handleResize); // 창 크기 변경 이벤트 등록

    return () => {
      window.removeEventListener("resize", handleResize); // 이벤트 제거
    };
  }, []);
  return (
    <div className="">
      <div
        onClick={handleShopClick} // onClick 이벤트에 함수를 연결
        className="z-10 cursor-pointer absolute top-[3%] md:top-[10%] 
                  right-0 bg-black text-white font-semibold text-2xl 
                  md:text-4xl p-4 md:p-10 rounded-tl-[60px] rounded-bl-[60px] font-body"
      >
        SHOP
      </div>

      <div className="w-full overflow-hidden">
        <video
          src={isMobile ? "mo_images/movie_mo.mp4" : "images/movie_pc.mp4"}
          muted
          loop
          playsInline
          width="100%"
          autoPlay
        ></video>
      </div>
      {/* whoweqre */}
      <div className="">
        <ul className="list-none md:w-[75%] w-[82%] mx-auto">
          {/* title */}
          <li className="relative flex md:pt-32 pt-12 gap-2 items-center">
            <div className="relative md:w-3 w-1.5 md:h-12 h-6">
              <Image alt="" src={`/images/title_bar.png`} fill />
            </div>
            <span className="md:text-[3.375rem] font-bold text-3xl font-title">
              WHO WE ARE
            </span>
          </li>
          {/* word */}
          <li className="md:text-2xl text-sm mt-10 line md:leading-9 font-body">
            <span className="text-amber-800 font-semibold">
              리움랩스(RIUM LABS)
            </span>
            는 당신의 일상공간에
            <br />
            실용적인 디자인과 기능적 가치를 더하는
            {isMobile ? <br /> : ""}
            <span className="font-semibold">
              “생활용품 전문 제조&amp;유통 기업”
            </span>
            입니다.
            <br />
            제품의 시작부터 고객에게 전달되는 마지막 순간까지
            {isMobile ? <br /> : ""}
            모든 과정을 {isMobile ? "" : <br />}직접 제조, 직접 생산, 직접공급을
            통해
            {isMobile ? <br /> : ""}
            가격의 거품을 빼고, {isMobile ? "" : <br />}삶의 효율과 감성을
            동시에 담은
            {isMobile ? <br /> : ""}
            제품을 연구하고 제안합니다.
          </li>
        </ul>
      </div>
      {/* image */}
      {!isMobile ? (
        <div className="w-[65%] mx-auto py-14 hidden md:block">
          <Image
            src="/images/about_img.png"
            alt="리움랩스의 One Stop Solution"
            width={840}
            height={850}
            className="h-auto w-full"
          />
        </div>
      ) : (
        <div className="w-[85%] mx-auto py-14 md:hidden">
          <Image
            src="/mo_images/about_img.png"
            alt="리움랩스의 One Stop Solution"
            width={840}
            height={850}
            className="h-auto w-full"
          />
        </div>
      )}

      {/* ouR story */}
      <div className="md:py-32 bg-[url('/images/story_bg.png')] bg-no-repeat bg-center bg-cover pb-10">
        <ul className="list-none md:w-[75%] w-[82%] mx-auto">
          {/* title */}
          <li className="relative flex md:pt-32 pt-12 gap-2 items-center">
            <div className="relative md:w-3 w-1.5 md:h-12 h-6">
              <Image alt="" src={`/images/title_bar.png`} fill />
            </div>
            <span className="md:text-[3.375rem] font-bold text-3xl font-title">
              OUR STORY
            </span>
          </li>
          {/* word */}
          <li className="md:text-2xl text-sm my-5 line md:leading-9 font-body">
            <span className="text-amber-800 font-bold">
              리움랩스(RIUM LABS)
            </span>
            는 공간의 개념을 확장한 {isMobile ? <br /> : ""}RIUM과 지속적인
            연구개발의 LABS의 합성어로{<br />} 공간을 더욱 편리하고 아름답게
            변화하는 경험을{isMobile ? <br /> : ""} 만들어 가겠습니다.
          </li>
        </ul>
        <div className="relative md:w-[70%] w-[95%] aspect-[2/1] mx-auto">
          <Image
            fill
            className="object-contain"
            alt=""
            src={`/images/story_img.png`}
          />
        </div>
      </div>
      {/* our value pc*/}
      {!isMobile ? (
        <div className="">
          <ul className="list-none md:w-[75%] w-[82%] mx-auto">
            {/* title */}
            <li className="relative flex md:pt-32 pt-12 gap-2 items-center">
              <div className="relative md:w-3 w-1.5 md:h-12 h-6">
                <Image alt="" src={`/images/title_bar.png`} fill />
              </div>
              <span className="md:text-[3.375rem] font-bold text-3xl font-title">
                OUR VALUE
              </span>
            </li>
            {/* word */}
            <li className="md:text-2xl text-sm my-5 line md:leading-9 font-body">
              <span className="text-amber-800 font-bold">
                민경 X 리움랩스의 완벽 시너지:{<br />}
              </span>
              “깊이 있는 제조”와 “폭넓은 유통“으로 고객에게
              {isMobile ? <br /> : ""}
              최고의 품질과 가치를 선사합니다.
            </li>
          </ul>
          {/* our value */}
          {/* 40년 제조~ */}
          <div className="relative w-[75%] mx-auto my-4">
            <div className="flex bg-[#F9F7F1] p-[24px] items-center gap-6">
              <div className="mx-4 flex-shrink-0">
                {/* 모바일용 작은 이미지 (md 이상에서 숨김) */}
                <Image
                  className="md:hidden"
                  src="/images/value_icon01.png"
                  alt="제조 전문성 아이콘"
                  width={40}
                  height={40}
                />
                {/* 데스크탑용 큰 이미지 (md 미만에서 숨김) */}
                <Image
                  className="hidden md:block"
                  src="/images/value_icon01.png"
                  alt="제조 전문성 아이콘"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex items-center">
                <p className="pl-2 flex flex-center font-bold text-[clamp(1rem,1.3vw,2rem)] text-gray-950 leading-relaxed w-12 md:w-[220px] font-body">
                  40년 제조 전문성 <br />
                  ㈜민경의 기술
                </p>
                <p className="pl-16 text-[clamp(0.7rem,1.1vw,2rem)] text-gray-600 leading-relaxed whitespace-pre-line font-body">
                  모회사 (주)민경의 40여 년{" "}
                  <span className="text-amber-800 font-bold">
                    플라스틱 제조 노하우
                  </span>
                  를 계승하여 설립된
                  <br />
                  리움랩스를 통해 정밀 사출 기술, 생산 관리까지,
                  <br />
                  플라스틱 전문성의 정수를 경험하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          {/* 국내 생산~ */}
          <div className="relative w-[75%] mx-auto my-4">
            <div className="flex bg-[#faf3ed] p-[24px] items-center gap-6">
              <div className="mx-4 flex-shrink-0">
                {/* 모바일용 작은 이미지 (md 이상에서 숨김) */}
                <Image
                  className="md:hidden"
                  src="/images/value_icon02.png"
                  alt="제조 전문성 아이콘"
                  width={40}
                  height={40}
                />
                {/* 데스크탑용 큰 이미지 (md 미만에서 숨김) */}
                <Image
                  className="hidden md:block"
                  src="/images/value_icon02.png"
                  alt="제조 전문성 아이콘"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex items-center">
                <p className="pl-2 flex flex-center font-bold text-[clamp(1rem,1.3vw,2rem)] text-gray-950 leading-relaxed w-12 md:w-[220px] font-body ">
                  국내생산 <br />
                  최첨단 품질의 약속
                </p>
                <p className="pl-16 text-[clamp(0.7em,1.1vw,2rem)] text-gray-600 leading-relaxed whitespace-pre-line font-body">
                  설계부터 제조, 유통까지{" "}
                  <span className="text-amber-800 font-bold">
                    100% 국내 자체 생산 시스템
                  </span>
                  으로 이뤄집니다.
                  <br />
                  엄선된{" "}
                  <span className="text-amber-800 font-bold">
                    국내산 최고급 PP 소재와 최신 자동화 설비, 엄격한 품질 관리
                  </span>
                  를 통해 견고하고
                  <br />
                  균일한 프리미엄 제품을 완성합니다.
                </p>
              </div>
            </div>
          </div>
          {/* 고객 신뢰~ */}
          <div className="relative w-[75%] mx-auto my-4">
            <div className="flex bg-[#F9F7F1] p-[24px] items-center gap-6">
              <div className="mx-4 flex-shrink-0">
                {/* 모바일용 작은 이미지 (md 이상에서 숨김) */}
                <Image
                  className="md:hidden"
                  src="/images/value_icon03.png"
                  alt="고객신뢰"
                  width={40}
                  height={40}
                />
                {/* 데스크탑용 큰 이미지 (md 미만에서 숨김) */}
                <Image
                  className="hidden md:block"
                  src="/images/value_icon03.png"
                  alt="고객신뢰"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex items-center">
                <p className="pl-2 flex flex-center font-bold text-[clamp(1rem,1.3vw,2rem)] text-gray-950 leading-relaxed w-12 md:w-[220px] font-body">
                  고객신뢰 <br />
                  투명한 경영
                </p>
                <p className="pl-16 text-[clamp(0.7rem,1.1vw,2rem)] text-gray-600 leading-relaxed whitespace-pre-line font-body">
                  제품의 기획부터 당신의 손에 닿기까지 모든 과정에서 고객 신뢰를
                  최우선으로 추구합니다.
                  <br />
                  (주)민경의 오랜 역사와 정직하고 투명한 기업 철학을 바탕으로{" "}
                  <span className="text-amber-800 font-bold">
                    불필요한 유통 마진을
                  </span>
                  <br />
                  <span className="text-amber-800 font-bold">최소화 </span>하여
                  변함없는 만족과 감동을 선사합니다.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* 모바일 */}
          <div className="md:hidden">
            <ul className="list-none md:w-[75%] w-[82%] mx-auto">
              <li className="relative flex md:pt-32 pt-12 gap-2 items-center">
                <div className="relative md:w-3 w-1.5 md:h-12 h-6">
                  <Image alt="" src={`/images/title_bar.png`} fill />
                </div>
                <span className="md:text-[3.375rem] font-bold text-3xl font-title">
                  OUR VALUE
                </span>
              </li>
              <li className="md:text-2xl text-sm md:my-5 my-8 line md:leading-9 font-body">
                <span className="text-amber-800 font-bold">
                  민경 X 리움랩스의 완벽 시너지 :
                </span>
                <br />
                {`${'"'}깊이 있는 제조${'"'}와 ${'"'}폭넓은 유통${'"'} 으로 고객에게`}
                <br />
                최고의 품질과 가치를 선사합니다.
                <br />
              </li>
            </ul>
            {/* our value 밑에 4개 컨테이너 */}
            {/* 40년 제조~ */}
            <div className="relative w-[85%] mx-auto my-4">
              <div className="bg-[#F9F7F1] p-[18px]">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/mo_images/value_icon01.png"
                      alt="제조 전문성 아이콘"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-2xl text-gray-950 leading-tight font-body">
                      40년 제조 전문성 <br />
                      ㈜민경의 기술
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-600 break-keep">
                    모회사 (주)민경의 40여 년{" "}
                    <span className="text-amber-800 font-bold">
                      플라스틱 제조 노하우
                    </span>
                    를
                    <br />
                    계승하여 설립된 리움랩스를 통해 정밀 사출 기술,
                    <br />
                    생산 관리까지, 플라스틱 전문성의 정수를
                    <br />
                    경험하실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            {/* 국내 생산~ */}
            <div className="relative w-[85%] mx-auto my-4">
              <div className="bg-[#faf3ed] p-[18px]">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/mo_images/value_icon02.png"
                      alt="제조 전문성 아이콘"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-2xl text-gray-950 leading-tight font-body">
                      국내생산 <br />
                      최첨단 품질의 약속
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-600 break-keep">
                    설계부터 제조, 유통까지{" "}
                    <span className="text-amber-800 font-bold">
                      100% 국내 자체 생산 시스템
                      <br />
                    </span>
                    으로 이뤄집니다. 엄선된{" "}
                    <span className="text-amber-800 font-bold">
                      국내산 최고급 PP 소재와
                      <br />
                      최신 자동화 설비, 엄격한 품질 관리
                    </span>
                    를 통해 견고하고
                    <br />
                    균일한 프리미엄 제품을 완성합니다.
                  </p>
                </div>
              </div>
            </div>
            {/* 고객 신뢰~ */}
            <div className="relative w-[85%] mx-auto my-4">
              <div className="bg-[#F9F7F1] p-[18px]">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/mo_images/value_icon03.png"
                      alt="제조 전문성 아이콘"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-2xl text-gray-950 leading-tight font-body">
                      고객신뢰
                      <br />
                      투명한 경영
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-600 break-keep">
                    제품의 기획부터 당신의 손에 닿기까지 모든 과정에서
                    <br />
                    고객 신뢰를 최우선으로 추구합니다.
                    <br />
                    (주)민경의 오랜 역사와 정직하고 투명한 기업 철학을
                    <br />
                    바탕으로{" "}
                    <span className="text-amber-800 font-bold">
                      불필요한 유통 마진을 최소화{" "}
                    </span>
                    하여 변함없는
                    <br />
                    만족과 감동을 선사합니다.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* 원료부터~ */}

      {!isMobile ? (
        <div className="md:block hidden">
          <div className="relative">
            <Image src={`/images/story_bg.png`} alt={"story_bg"} fill />
          </div>
          <div className="relative w-full aspect-[6/4]">
            <Image
              src={`/images/minkyung_bg.png`}
              alt={"story_bg"}
              fill
              className="object-contain"
            />

            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-white text-center -translate-y-1/2 leading-tight">
              <p className="text-[clamp(1rem,2.2vw,4rem)] whitespace-nowrap font-semibold font-body">
                “원료부터 기술까지, 국내 생산의 완벽함”_민경
                <br />
                <span className="text-[#F5EEDB]">100% Made in Korea</span>
              </p>
            </div>
            <div className="absolute bottom-[15%] left-[30%] -translate-x-1/2 w-[30vw] max-w-[650px] aspect-square">
              <Image
                src="/images/minkyung_img01.png"
                alt="민경 이미지 1"
                fill
                className="object-contain"
              />
            </div>

            {/* 이미지 2 */}
            <div className="absolute bottom-[15%] left-[45%] -translate-x-1/2 w-[30vw] max-w-[650px] aspect-square">
              <Image
                src="/images/minkyung_img02.png"
                alt="민경 이미지 2"
                fill
                className="object-contain"
              />
            </div>

            {/* 이미지 3 */}
            <div className="absolute bottom-[15%] left-[60%] -translate-x-1/2 w-[30vw] max-w-[650px] aspect-square">
              <Image
                src="/images/minkyung_img03.png"
                alt="민경 이미지 3"
                fill
                className="object-contain"
              />
            </div>

            {/* 이미지 4 */}
            <div className="absolute bottom-[15%] left-[75%] -translate-x-1/2 w-[30vw] max-w-[650px] aspect-square">
              <Image
                src="/images/minkyung_img04.png"
                alt="민경 이미지 4"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="md:hidden">
          <div className="relative">
            <Image src={`/mo_images/story_bg.png`} alt={"story_bg"} fill />
          </div>
          <div className="relative w-full aspect-[4/10]">
            <Image
              src={`/mo_images/minkyung_bg.png`}
              alt={"story_bg"}
              fill
              className="object-contain"
            />

            <div className="absolute top-[18.5%] left-1/2 -translate-x-1/2 text-white text-center -translate-y-1/2 leading-tight">
              <p className="text-[4.5vw] md:text-xl whitespace-nowrap font-semibold w-full font-body">
                “원료부터 기술까지, 국내 생산의 완벽함”_민경
                <br />
                <span className="text-[#F5EEDB]">100% Made in Korea</span>
              </p>
            </div>
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/3 w-[85vw] max-w-2xl">
              <div className="flex justify-center">
                <div className="w-1/2">
                  <Image
                    src="/mo_images/minkyung_img05.png"
                    alt="민경 이미지 1"
                    width={313}
                    height={638}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-1/2">
                  <Image
                    src="/mo_images/minkyung_img06.png"
                    alt="민경 이미지 2"
                    width={313}
                    height={638}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex justify-centermt-4 pb-10">
                <div className="w-1/2">
                  <Image
                    src="/mo_images/minkyung_img03.png"
                    alt="민경 이미지 3"
                    width={313}
                    height={638}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-1/2">
                  <Image
                    src="/mo_images/minkyung_img04.png"
                    alt="민경 이미지 4"
                    width={313}
                    height={638}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isMobile ? (
        <>
          {/* MAINPRODUCTS */}
          <div className="">
            <ul className="list-none md:w-[75%] w-[85%] mx-auto">
              <li className="relative flex gap-2 items-center">
                <div className="relative w-3 h-12">
                  <Image alt="" src={`/images/title_bar.png`} fill />
                </div>
                <span className="text-[3.375rem] font-bold font-title">
                  MAIN PRODUCTS
                </span>
              </li>
              <li className="md:text-2xl text-base mt-10 line leading-9 px-5 font-body">
                <span className="">
                  100여개 이상의 제품생산 노하우로 자체 브랜드 및 OEM 상품을
                  제조하는 원스탑 솔루션을 제공합니다.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-[75%] mx-auto py-16">
            <div className="flex flex-col md:flex-row items-start">
              {/* 1. 자체 브랜드 스페이스 에디터*/}
              <div className="w-2/4 md:w-1/4">
                <Image
                  src="/images/product_title01.png"
                  alt="스페이스 에디터 브랜드 로고"
                  width={312}
                  height={472}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full md:w-4/5 mt-2">
                <Image
                  src="/images/product_img01.png"
                  alt="스페이스 에디터 제품 목록"
                  width={1158}
                  height={859}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[75%] mx-auto h-[1px] bg-[#E9E2D9] my-4"></div>
          {/* 2. 자체 브랜드 캠핑 바이고스 */}
          <div className="w-[75%] mx-auto py-16">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-2/4 md:w-1/4">
                <Image
                  src="/images/product_title02.png"
                  alt="캠핑 바이고스 로고"
                  width={312}
                  height={472}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full md:w-4/5 mt-2">
                <Image
                  src="/images/product_img02.png"
                  alt="스페이스 에디터 제품 목록"
                  width={1158}
                  height={859}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block w-[75%] mx-auto h-[1px] bg-[#E9E2D9] my-4"></div>
          {/* 3. OEM 제품 대형 제휴사 */}
          <div className="w-[75%] mx-auto py-16">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-2/4 md:w-1/4">
                <Image
                  src="/images/product_title03.png"
                  alt="캠핑 바이고스 로고"
                  width={312}
                  height={472}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full md:w-4/5 mt-2">
                <Image
                  src="/images/product_img03.png"
                  alt="스페이스 에디터 제품 목록"
                  width={1158}
                  height={859}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* MAINPRODUCTS */}
          <div className="">
            <ul className="list-none md:w-[75%] w-[82%] mx-auto">
              {/* title */}
              <li className="relative flex md:pt-32 pt-12 gap-2 items-center">
                <div className="relative md:w-3 w-1.5 md:h-12 h-6">
                  <Image alt="" src={`/images/title_bar.png`} fill />
                </div>
                <span className="md:text-[3.375rem] font-bold text-3xl font-title">
                  MAIN PRODUCTS
                </span>
              </li>
              {/* word */}
              <li className="md:text-2xl text-sm my-5 line md:leading-9 font-body">
                100여개 이상의 제품생산 노하우로 자체 브랜드 및{" "}
                {isMobile ? <br /> : ""}
                OEM 상품을 제조하는 원스탑 솔루션을 제공합니다.
              </li>
            </ul>
          </div>
          <div className="w-[90%] mx-auto pt-4">
            <div className="flex flex-col md:flex-row items-start gap-20">
              {/* 1. 자체 브랜드 스페이스 에디터*/}
              <div>
                <div className="w-full md:w-1/4">
                  <Image
                    src="/mo_images/product_title01.png"
                    alt="스페이스 에디터 브랜드 로고"
                    width={312}
                    height={472}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-4/5 mt-2 flex flex-col gap-8">
                  <Image
                    src="/mo_images/product_img01_1.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img01_2.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img01_3.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* 2.자체 브랜드 캠핑 바이브스 */}
              <div>
                <div className="w-full md:w-1/4">
                  <Image
                    src="/mo_images/product_title02.png"
                    alt="자체 브랜드 캠핑 바이브스"
                    width={312}
                    height={472}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-4/5 mt-2 flex flex-col gap-8">
                  <Image
                    src="/mo_images/product_img02_1.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img02_2.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* 3.OEM 제품 대형 제휴사 */}
              <div>
                <div className="w-full md:w-1/4">
                  <Image
                    src="/mo_images/product_title03.png"
                    alt="자체 브랜드 캠핑 바이브스"
                    width={312}
                    height={472}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-4/5 mt-2 flex flex-col gap-8 pb-20">
                  <Image
                    src="/mo_images/product_img03_1.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img03_2.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img03_3.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img03_4.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img03_5.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/mo_images/product_img03_6.png"
                    alt="스페이스 에디터 제품 목록"
                    width={1158}
                    height={859}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!isMobile ? (
        <div className="relative">
          <Image
            src={`/images/contact_bg.png`}
            alt="contact img"
            width={1920}
            height={545}
          />
          <div className="absolute top-[38%] left-0 right-0 -translate-y-1/2">
            <ul className="list-none w-[75%] mx-auto">
              <li className="about_pb2 relative flex gap-2 items-center">
                <div className="relative w-3 h-12">
                  <Image alt="" src={`/images/title_bar.png`} fill />
                </div>
                <span className="text-[3.375rem] font-bold font-title">
                  CONTACT US
                </span>
              </li>
              <li className="text-2xl mt-5 line leading-9 px-5 font-body">
                <span>
                  플라스틱 생활용품 제작 및 견적 & 제휴 문의는 언제든
                  환영합니다.
                  <br />
                  최대한 신속히 답변드리겠습니다.
                </span>
              </li>
            </ul>

            {/* 문의 버튼 컨테이너 */}
            <div className="absolute inset-0 top-[100%] mt-5 left-[13.7%]">
              <div className="w-[85%] md:w-[75%]">
                <div className="flex flex-row md:flex-row gap-6 md:gap-8">
                  {/* 버튼 1: 이메일 문의 */}
                  <a
                    href="mailto:riumlabs@naver.com"
                    className="flex justify-center items-center w-full md:w-64 bg-[#913010] hover:bg-amber-700 transition-colors p-2"
                  >
                    <div className="text-center">
                      <strong className="flex flex-col text-2xl text-white font-title">
                        <div>E-mail 문의</div>
                        <div className="text-base">riumlabs@naver.com</div>
                      </strong>
                    </div>
                  </a>

                  {/* 버튼 2: 유선 문의 */}
                  <a
                    href="tel:010-9250-0990"
                    className="flex w-full justify-center items-center  md:w-64 bg-[#913010] hover:bg-amber-700 transition-colors p-2"
                  >
                    <div className="text-center">
                      <strong className="flex flex-col text-2xl text-white font-title">
                        <div>전화 문의</div>
                        <div className="text-base">010-9250-0990</div>
                      </strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Image
            src={`/mo_images/contact_bg.png`}
            alt="contact img"
            width={1920}
            height={545}
          />
          <div className="absolute top-[38%] left-0 right-0 -translate-y-1/2">
            <ul className="list-none md:w-[75%] w-[82%] mx-auto">
              {/* title */}
              <li className="relative flex md:pt-32 pt-[3%] gap-2 items-center">
                <div className="relative md:w-3 w-1.5 md:h-12 h-6">
                  <Image alt="" src={`/images/title_bar.png`} fill />
                </div>
                <span className="md:text-[3.375rem] font-bold text-3xl">
                  CONTACT US
                </span>
              </li>
              {/* word */}
              <li className="md:text-2xl text-[3.5vw] mt-[1%] line md:leading-9 font-body">
                플라스틱 생화용품 제작 및 견적 & 제휴 문의는
                {isMobile ? <br /> : ""}
                언제든 환영합니다.{isMobile ? <br /> : ""}
                최대한 신속히 답변드리겠습니다.
              </li>
            </ul>
            {/* 문의 버튼 컨테이너 */}
            <div className="absolute inset-0 top-[100%] mt-5">
              <div className="w-[80%] md:w-[75%] mx-auto">
                <div className="flex flex-row md:flex-row gap-6 md:gap-8">
                  {/* 버튼 1: 이메일 문의 */}
                  <a
                    href="mailto:riumlabs@naver.com"
                    className="flex justify-center items-center w-full md:w-64 bg-[#913010] hover:bg-amber-700 transition-colors p-2"
                  >
                    <div className="text-center">
                      <strong className=" text-[4vw] text-white">
                        E-mail 문의
                      </strong>
                    </div>
                  </a>

                  {/* 버튼 2: 유선 문의 */}
                  <a
                    href="tel:010-9250-0990"
                    className="flex w-full justify-center items-center  md:w-64 bg-[#913010] hover:bg-amber-700 transition-colors p-2"
                  >
                    <div className="text-center">
                      <strong className="flex text-[4vw] text-white">
                        전화 문의
                      </strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      {!isMobile ? (
        <>
          <div className="relative">
            <Image
              src={`/images/footer_bg.png`}
              alt="footer"
              width={1920}
              height={263}
            />

            <p className="absolute  top-[33%] left-[28%] text-[clamp(0.7rem,1.1vw,2rem)] text-white font-body">
              경기도 광주시 초월읍 산수로 622번길 34 <br />
              사업자 등록번호 : 852-87-03409 /  법인 등록번호 : 134211-0030980{" "}
              <br />
              대표이사 : 조성현 Copyright ⓒ RIUM LABS Co., Ltd. All Rights
              Reserved.
            </p>
          </div>
        </>
      ) : (
        <div className="relative">
          <Image
            src={`/mo_images/footer_bg.png`}
            alt="footer"
            width={1920}
            height={263}
          />
          <div className="w-[18vw] h-[50px] absolute top-[2vw] left-1/2 -translate-x-1/2">
            <Image
              src={`/mo_images/footer_logo.png`}
              alt="footer"
              fill
              className="object-contain"
            />
          </div>

          <p className="absolute  top-[43%] left-[50%] text-[2.3vw] text-white -translate-x-1/2 w-[85%] mt-[2%] font-body font-semibold">
            경기도 광주시 초월읍 산수로 622번길 34 <br />
            사업자 등록번호 : 852-87-03409 /  법인 등록번호 : 134211-0030980{" "}
            <br />
            대표이사 : 조성현 Copyright ⓒ RIUM LABS Co., Ltd. All Rights
            Reserved.
          </p>
        </div>
      )}
    </div>
  );
}
