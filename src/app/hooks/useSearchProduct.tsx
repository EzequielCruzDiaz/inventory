import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useQueryParam = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateQueryParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(key, value);
    router.push(`${pathName}?${newParams.toString()}`);
  };

  return { searchParams, updateQueryParam };
};
