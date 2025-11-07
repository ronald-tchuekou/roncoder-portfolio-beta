"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback } from "react";

type Props = {
  route?: string;
  withBackButton?: boolean;
  title: string;
  className?: string;
  children?: ReactNode;
  description?: string;
};

const PageTitle = ({
  withBackButton,
  title,
  children,
  className,
  route,
  description,
}: Props) => {
  const router = useRouter();

  const backHandler = useCallback(() => {
    if (route) router.replace(route);
    else router.back();
  }, [route, router]);

  return (
		<div className={cn('flex flex-col gap-2 lg:flex-row lg:items-center justify-between mb-4 flex-none', className)}>
			<div className={cn('flex items-center gap-3')}>
				{withBackButton && (
					<Button variant={'outline'} size='icon' onClick={backHandler} className={'rounded-full'}>
						<ArrowLeftIcon />
					</Button>
				)}
				<div className="space-y-3">
					<h1 className={'text-2xl lg:text-3xl font-bold tracking-tight line-clamp-1 font-mono'}>{title}</h1>
					{description && <p className='text-base md:text-lg text-muted-foreground'>{description}</p>}
				</div>
			</div>
			{children}
		</div>
  )
};

export default PageTitle;
