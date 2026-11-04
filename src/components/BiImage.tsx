"use client";
import Image, { type ImageProps } from "next/image";
import { useLang } from "./Lang";

/** next/image whose alt text follows the active language. */
export function BiImage({ alt, ...rest }: Omit<ImageProps, "alt"> & { alt: { cs: string; en: string } }) {
  const { lang } = useLang();
  return <Image alt={alt[lang]} {...rest} />;
}
