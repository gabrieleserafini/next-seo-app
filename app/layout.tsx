import { ReactNode } from "react";
import "~/assets/styles/base.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
