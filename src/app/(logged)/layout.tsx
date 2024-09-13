import { ReactNode } from "react";
import NavbarLogged from "../_components/NavbarLogged";

export default function LoggedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center bg-white dark:bg-black transition-colors duration-200">
      <NavbarLogged />
      {children}
    </main>
  );
}
