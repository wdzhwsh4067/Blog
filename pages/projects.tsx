import { Ad } from '@/components/Ad';
import { Container } from 'layouts/Container';
import Image from 'next/legacy/image';

function ButtonLink({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transitionbg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700 bg-midnight no-underline`}
    >
      {text}
      <svg
        className={`mt-0.5 ml-2 -mr-1 stroke-2 stroke-white dark:stroke-midnight`}
        fill="none"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="transition opacity-0 group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </a>
  );
}

export default function Projects() {
  return (
    <Container title="Projects - Dana Wang">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A selection of my favorite works.
        </span>
      </h1>

      <div className="space-y-12">
        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-indigo-900 to-indigo-200 dark:border-slate-700 border-slate-100">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
            <div className="self-end col-span-1 m-8 text-center md:text-left">
              <h2 className="mt-0">Modular Three-in-one Car Design</h2>
              <p>
                Automobiles adopt a modular design concept, with the vehicle 
                divided into two parts: the seat and the carriage. The two parts 
                can be connected through interfaces. The car seat is divided into 
                three parts: a detachable chassis, a flying car seat, and a waterborne 
                car seat. Different carriages can be replaced to meet different needs.
              </p>
              <ButtonLink
                text="Visit CSS Art Challenge"
                href="https://www.cssartchallenge.com/"
              />
            </div>
            <div className="md:absolute md:top-4 md:right-[-200px] md:w-[800px]">
              <Image
                objectFit="fill"
                src="https://pic.imgdb.cn/item/6412cad5ebf10e5d53ae1e6a.png"
                placeholder="blur"
                blurDataURL="https://pic.imgdb.cn/item/6412cad5ebf10e5d53ae1e6a.png"
                width={900}
                height={552}
                layout="intrinsic"
                alt={'CSS Art Challenge on a Macbook Pro'}
              />
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* <div className="flex justify-center">
          <Ad />
        </div> */}

        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-purple-50 dark:from-purple-900/50 dark:to-fuchsia-700 to-fuchsia-300 dark:border-slate-700 border-slate-100">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-300 dark:via-fuchsia-600 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[400px] max-h-[500px] md:grid-cols-2">
            <div className="md:w-[550px] max-h-[500px]">
              <Image
                className="absolute bottom-20 md:bottom-0 md:-left-0"
                objectFit="fill"
                src="https://pic.imgdb.cn/item/6412d8edebf10e5d53dd5acd.png"
                placeholder="blur"
                blurDataURL="https://pic.imgdb.cn/item/6412d8edebf10e5d53dd5acd.png"
                width={1978}
                height={1513}
                layout="intrinsic"
                alt={'NgLimeade on an iPad'}
              />
            </div>
            <div className="self-end order-first col-span-1 m-8 text-center md:order-last md:text-right">
              <h2 className="mt-0">Wheel Hub Motor Design</h2>
              <p>
                The land car seat is the foundation of Mercedes on land 
                and achieves automatic driving through a series of sensors. 
                It is powered purely by electricity, with four wheels independently 
                driven by hub motors, eliminating the traditional car's series of 
                driving and transmission devices, reducing the weight of the car, 
                and saving resources.
              </p>
              <ButtonLink
                text="Visit Pomegradient"
                href="https://www.pomegradient.com"
              />
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-blue-900 to-blue-300 dark:border-slate-700 border-slate-100">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
          <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2">
            <div className="self-end col-span-1 m-8 text-center md:text-left">
              <h2 className="mt-0">Electric Vehicle Chassis Design</h2>
              <p>
                The land car seat is the foundation of Mercedes on land 
                and achieves automatic driving through a series of sensors. 
                It is powered purely by electricity, with four wheels independently 
                driven by hub motors, eliminating the traditional car's series of 
                driving and transmission devices, reducing the weight of the car, 
                and saving resources.
              </p>
              <ButtonLink
                text="Visit Bundle"
                href="https://www.bundleapps.io"
              />
            </div>
            <div className="md:absolute md:top-4 md:right-[-150px] md:w-[800px]">
              <Image
                objectFit="fill"
                src="https://pic.imgdb.cn/item/6412d2d2ebf10e5d53c376bb.png"
                placeholder="blur"
                blurDataURL="https://pic.imgdb.cn/item/6412d2d2ebf10e5d53c376bb.png"
                width={900}
                height={552}
                layout="intrinsic"
                alt={'Bundle, LLC on a Macbook Pro'}
              />
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}
