interface SkeletonProps {
  type?: string;
  count?: number;
  direction?: "column" | "row";
}

export const Skeleton = ({ type, count, direction = "row" }: SkeletonProps) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column"
              ? "flex flex-col gap-[12px]"
              : "banners-list w-full gap-[12px]"
          }
        >
          {[...Array(count)].map((_, index) => {
            return (
              <li
                key={index}
                className={"h-[80px] skeleton bg-gray-600 rounded-lg"}
              ></li>
            );
          })}
        </ul>
      ) : (
        <li
          className={
            type === "banner"
              ? "pt-[100%] relative skeleton"
              : "h-[80px] skeleton"
          }
        ></li>
      )}
    </>
  );
};
