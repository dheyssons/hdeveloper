"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "pt", "fr", "nl"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const restOfPath = pathname.split("/").slice(2).join("/");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPath = `/${newLocale}/${restOfPath}`;
    router.push(newPath);
  };

  return (
    <select
      onChange={handleChange}
      value={currentLocale}
      className=" rounded-full bg-[#1e1e1e] p-4"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase() == "FR" ? "FRANÇAIS" : ""}
          {locale.toUpperCase() == "PT" ? "PORTUGUÊS" : ""}
          {locale.toUpperCase() == "EN" ? "ENGLISH" : ""}
          {locale.toUpperCase() == "NL" ? "NEDERLANDS" : ""}
        </option>
      ))}
    </select>
  );
}
