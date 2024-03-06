"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { locales } from "~/i18n";
import { useRouter, usePathname } from "~/navigation";
import it from "~/assets/icons/flags/it.svg";
import en from "~/assets/icons/flags/gb.svg";
import es from "~/assets/icons/flags/es.svg";
import Image from "next/image";

export default function LocaleSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        //@ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Select
      aria-label="Language selector"
      items={locales}
      selectedKeys={[locale]}
      disabled={isPending}
      onChange={onSelectChange}
      variant="underlined"
      autoFocus={false}
      classNames={{
        mainWrapper: "p-0 m-0 w-auto min-w-[70px] max-w-[70px] border-transparent",
        trigger:
          "flex items-center justify-center border-inherit hover:border-currentColor rounded-full p-0 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700",
        innerWrapper: "w-auto",
        value: "pr-2",
        listbox: "w-[70px]",
        selectorIcon: "right-0",
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="w-5 h-6 mt-2">
            <Image
              priority
              src={locale === "it" ? it : locale === "es" ? es : en}
              alt={`${locale} flag`}
              title={locale}
            />
          </div>
        ));
      }}
    >
      {locales.map((cur) => (
        <SelectItem value={cur} key={cur} textValue={cur} className="p-0 pr-1">
          <Image
            src={cur === "it" ? it : cur === "es" ? es : en}
            alt={`${cur} flag`}
            title={cur}
          />
        </SelectItem>
      ))}
    </Select>
  );
}
