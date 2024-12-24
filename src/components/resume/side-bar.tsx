"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RESUME_NAV_LINKS } from '@src/resources/data/resume-nav-links'
import { isCurrentPath } from "@src/resources/util-functions";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RevealFromBottom } from "../motions/reveal-from-bottom";

export const ResumeSideBar: FC = () => {
  const sliderRef = useRef<Slider>(null);

  const currentPath = usePathname();

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(
        RESUME_NAV_LINKS.findIndex((item) =>
          isCurrentPath(currentPath, item.url, 2)
        )
      );
    }
  }, [currentPath]);

  return (
    <aside className={cn("w-full flex flex-col gap-5")}>
      <RevealFromBottom
        elt={"h1"}
        className={cn("scroll-m-20 text-4xl lg:text-5xl", "text-white")}
      >
        Pourquoi me choisir ?
      </RevealFromBottom>
      <RevealFromBottom elt={"p"} delay={0.1}>
        Parce que je suis très passionné de technologies et je m&apos;adapte
        très rapidement dans de nouveaux environnements.
      </RevealFromBottom>
      {/* Desktop nav version */}
      <ul className={cn("hidden w-full md:flex flex-col gap-3")}>
        {RESUME_NAV_LINKS.map((item, index) => (
          <RevealFromBottom delay={(index + 1) * 0.1} elt={"li"} key={item.url}>
            <Link href={item.url} className="block w-full">
              <Button
                variant={"default"}
                className={cn(
                  "w-full",
                  "justify-start transition duration-300",
                  "bg-accent text-muted-foreground",
                  "hover:text-accent-foreground hover:bg-accent",
                  isCurrentPath(currentPath, item.url, 2) &&
                    "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                )}
              >
                {item.icon}&nbsp;&nbsp;
                {item.label}
              </Button>
            </Link>
          </RevealFromBottom>
        ))}
      </ul>
      {/* Mobile nav version */}
      <div className={cn("md:hidden", "flex items-center")}>
        <Button
          onClick={() => sliderRef.current?.slickPrev()}
          size={"icon"}
          variant={"outline"}
          className={"flex-none rounded-none"}
        >
          <ChevronLeftIcon className="size-4" />
        </Button>
        <div style={{ width: "calc(100% - 80px)" }}>
          <Slider
            className="w-full"
            ref={sliderRef}
            slidesToShow={4}
            slidesToScroll={1}
            centerMode
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {RESUME_NAV_LINKS.map((item, index) => (
              <div key={item.url} className="px-3">
                <Link href={item.url}>
                  <Button
                    variant={"default"}
                    className={cn(
                      "w-full",
                      "justify-start transition duration-300",
                      "bg-accent text-muted-foreground",
                      "hover:text-accent-foreground hover:bg-accent",
                      isCurrentPath(currentPath, item.url, 2) &&
                        "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    )}
                  >
                    {item.icon}&nbsp;&nbsp;
                    {item.label}
                  </Button>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <Button
          onClick={() => sliderRef.current?.slickNext()}
          size={"icon"}
          variant={"outline"}
          className={"flex-none rounded-none"}
        >
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    </aside>
  );
};
