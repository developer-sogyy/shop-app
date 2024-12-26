import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  //TODO: Check if user is authenticated and display appropriate layout

  return <>{children}</>;
}
