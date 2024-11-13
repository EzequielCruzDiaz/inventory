import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useQueryParam = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateQueryParam = (
    key: string,
    value: string | ((currentValue: string | null) => string)
  ) => {
    const newParams = new URLSearchParams(searchParams.toString());
    const currentValue = newParams.get(key);

    const newValue = typeof value === "function" ? value(currentValue) : value;

    if (newValue) {
      newParams.set(key, newValue);
    } else {
      newParams.delete(key);
    }

    router.push(`${pathName}?${newParams.toString()}`);
  };

  return { searchParams, updateQueryParam };
};
