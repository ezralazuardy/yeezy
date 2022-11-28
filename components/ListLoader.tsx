import LoaderProps from "@/types/LoaderProps";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ListLoader(props: LoaderProps) {
  return (
    <SkeletonTheme baseColor="#6b7280" highlightColor="#9ca3af">
      {[...Array(props.count)].map((_, i) => (
        <div className="lg:w-1/4 sm:w-1/2 p-4" key={i}>
          <Skeleton height={220} />
        </div>
      ))}
    </SkeletonTheme>
  );
}
