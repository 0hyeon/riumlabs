'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <div
        onClick={() => alert('이동')}
        className="z-10 cursor-pointer absolute top-[10%] right-0 bg-black text-white font-semibold text-4xl p-10 rounded-tl-[60px] rounded-bl-[60px]"
      >
        SHOP
      </div>
      <div className="w-full overflow-hidden">
        <video
          src="images/movie_pc.mp4"
          muted
          loop
          width="100%"
          autoPlay
        ></video>
      </div>
      {/* whoweqre */}
      <div className="">
        <ul className="list-none w-[75%] mx-auto">
          <li className="about_pb2 relative flex pt-32 gap-2 items-center">
            <div className="relative w-3 h-12">
              <Image alt="" src={`/images/title_bar.png`} fill />
            </div>
            <span className="text-7xl font-bold">WHO WE ARE</span>
          </li>
          <li className="text-2xl mt-10 line leading-9">
            <span className="text-amber-800 font-bold">
              리움랩스(RIUM LABS)
            </span>{' '}
            당신의 일상공간에
            <br />
            실용적인 디자인과 기능적 가치를 더하는 “생활용품 전문 제조&amp;유통
            기업”입니다.
            <br />
            제품의 시작부터 고객에게 전달되는 마지막 순간까지 모든 과정을 직접
            <br />
            직접 제조, 직접 생산, 직접공급을 통해 가격의 거품을 빼고,
            <br />
            삶의 효율과 감성을 동시에 담은 제품을 연구하고 제안합니다.
          </li>
        </ul>
      </div>
      {/* 리움랩스의 one stop solution */}
      <div
        id="about_img"
        className="my-40  rounded-[30px] w-[70%] mx-auto border border-amber-600 px-10 py-16"
      >
        <ul className="text-center text-3xl font-bold text-amber-800 pb-6">
          리움랩스의 One Stop Solution
        </ul>
        <ul className="flex w-[90%] mx-auto items-center gap-3 justify-center">
          <li className="relative w-[23%] aspect-[4/4]">
            <Image
              fill
              className="object-contain"
              alt=""
              src="/images/about_01.png"
            />
          </li>
          <li className="relative w-[21px] h-[20px]">
            <Image fill alt="" src="/images/about_00.png" />
          </li>
          <li className="relative w-[23%] aspect-[4/4]">
            <Image
              fill
              className="object-contain"
              alt=""
              src="/images/about_02.png"
            />
          </li>
          <li className="relative w-[21px] h-[20px]">
            <Image fill alt="" src="/images/about_00.png" />
          </li>
          <li className="relative w-[23%] aspect-[4/4]">
            <Image
              fill
              className="object-contain"
              alt=""
              src="/images/about_03.png"
            />
          </li>
          <li className="relative w-[21px] h-[20px]">
            <Image fill alt="" src="/images/about_00.png" />
          </li>
          <li className="relative w-[23%] aspect-[4/4]">
            <Image
              fill
              className="object-contain"
              alt=""
              src="/images/about_04.png"
            />
          </li>
        </ul>
      </div>
      {/* out story */}
      <div className="py-32 bg-[url('/images/story_bg.jpg')] bg-no-repeat bg-center bg-cover">
        <ul className="list-none w-[75%] mx-auto">
          <li className="about_pb2 relative flex pt-32 gap-2 items-center">
            <div className="relative w-3 h-12">
              <Image alt="" src={`/images/title_bar.png`} fill />
            </div>
            <span className="text-7xl font-bold">OUR STORY</span>
          </li>
          <li className="text-2xl mt-10 line leading-9">
            <span className="text-amber-800 font-bold">
              리움랩스(RIUM LABS)
            </span>
            는 공간의 개념을 확장한 RIUM과 지속적인 연구개발의 LABS의 합성어로
            <br />
            공간을 더욱 편리하고 아름답게 변화하는 경험을 만들어 가겠습니다.
            <br />
          </li>
        </ul>
        <div className="relative w-[85%] aspect-[4/1] mx-auto my-20">
          <Image
            fill
            className="object-contain"
            alt=""
            src={`/images/story_img.png`}
          />
        </div>
      </div>
      {/* our value */}
      <div className="py-32 ">
        <ul className="list-none w-[75%] mx-auto">
          <li className="about_pb2 relative flex pt-32 gap-2 items-center">
            <div className="relative w-3 h-12">
              <Image alt="" src={`/images/title_bar.png`} fill />
            </div>
            <span className="text-7xl font-bold">OUR VALUE</span>
          </li>
          <li className="text-2xl mt-10 line leading-9">
            <span className="text-amber-800 font-bold">
              민경 X 리움랩스의 완벽 시너지:
            </span>
            <br />
            {`${'"'}깊이 있는 제조${'"'}와 ${'"'}폭넓은 유통${'"'} 으로 고객에게 최고의 품질과 가치를
            선사합니다.`}
            <br />
          </li>
        </ul>
        <div className="relative w-[85%] aspect-[4/1] mx-auto my-20">
          <Image
            fill
            className="object-contain"
            alt=""
            src={`/images/story_img.png`}
          />
        </div>
      </div>
      <div className="relative">
        <Image src={`/images/story_bg.jpg`} alt={'story_bg'} fill />
      </div>
      <div className="relative w-full aspect-[1/1]">
        <Image
          src={`/images/mk_bg.jpg`}
          alt={'story_bg'}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
