import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type Props = {
  text: string;
  href: string;
}

const style = {
  color: "#0070f3",
  textDecoration: "underline"
};

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
