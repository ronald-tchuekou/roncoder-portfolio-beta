"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Project } from "@src/resources/util-types";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProjectTags } from "./project-tags";

export type ProjectItemProps = { item: Project };

export const ProjectItem: FC<ProjectItemProps> = ({ item }) => {
  return (
    <article
      className={cn(
        "bg-card rounded-xl border border-input",
        "size-full",
        "flex flex-col gap-5"
      )}
    >
      <div
        className={cn(
          "w-full h-auto aspect-video",
          "rounded-t-xl",
          "bg-secondary/10"
        )}
      >
        <Image
          priority
          unoptimized
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=="
          className={cn("w-full aspect-video", "rounded-t-xl")}
        />
      </div>
      <div className={cn("w-full px-5 pb-5 flex flex-col gap-5")}>
        <h2
          className={cn(
            "scroll-m-20 text-2xl font-normal tracking-tight",
            "text-white"
          )}
        >
          {item.title}
        </h2>
        <h3 className="text-primary uppercase font-semibold">{item.company}</h3>
        <p className="line-clamp-3 h-full">{item.description}</p>
        <ProjectTags tags={item.tags} />
        <div>
          <Link href={`/projects/${item.id}`}>
            <Button variant={"outline"} className={cn("rounded-full")}>
              Continuer
              <MoveRightIcon className="ml-3 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};
