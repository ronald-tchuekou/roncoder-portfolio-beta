import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@src/resources/util-data";
import { isCurrentPath } from "@src/resources/util-functions";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useState } from "react";
import { Container } from "../container";
import { LocaleButton } from "./locale-button";

export const PhoneNavVersion: FC<{ currentPath: string }> = ({
  currentPath,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Button
        onClick={toggleMenu}
        size={"icon"}
        variant={"outline"}
        className="rounded-full md:hidden"
      >
        <MenuIcon className="size-6" />
      </Button>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn("fixed top-0 left-0 right-0", "bg-card")}
        >
          <Container
            className={cn("flex justify-between items-center", "pt-5 pb-3")}
          >
            <Link href={"/"} arial-label="Ronald Tchuekou">
              <Image
                src={"/line-logo.png"}
                alt="Ronald Tchuekou"
                height={232}
                width={692}
                className={cn("w-20 lg:w-32 h-auto aspect-auto")}
              />
            </Link>
            <div className={cn("flex items-center gap-3")}>
              <LocaleButton />
              <Button
                onClick={toggleMenu}
                size={"icon"}
                variant={"outline"}
                className="rounded-full"
              >
                <XIcon className="size-6" />
              </Button>
            </div>
          </Container>
          <nav className={cn("flex flex-col items-center")}>
            {NAV_LINKS.map(({ url, label }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                key={url}
              >
                <Link
                  href={url}
                  onClick={toggleMenu}
                  className={cn(
                    "nav-link",
                    isCurrentPath(currentPath, url) && "active"
                  )}
                >
                  <span className="nav-link-label">{label}</span>
                  <span className={"nav-link-indicator"}></span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.section>
      )}
    </>
  );
};
