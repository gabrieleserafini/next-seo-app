import { Skeleton } from "@nextui-org/react";

export default function LogoBannerSkeleton() {
  return (
    <div className="overflow-hidden whitespace-nowrap flex justify-between">
        {Array.from({ length: 11 }).map((_, index) => (
        <div key={`skeleton-${index}`} className="inline-flex w-[150px] justify-center items-center">
            <Skeleton className="h-[50px] w-28 rounded-full" />
        </div>
      ))}
        
    </div>
  );
};

