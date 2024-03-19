import Image from "next/image"
import logo from "@/app/images/logo.png";
import Logo from "../../../../components/logo";

export const metadata = {
  title: 'login admin dashboard crystal royal logistics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Logo/>
        {children}
        </body>
    </html>
  )
}
