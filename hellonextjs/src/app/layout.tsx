import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import '../styles/style.css';
import Link from "next/link";
import UserInfo from "@/components/userinfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Next Js",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar>
        <UserInfo name="John Doe" email="jhon@test.com" />
        <ul> 
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/contactus">Contact Us</Link>
                </li>
            </ul>
        </Navbar>
        {children}</body>
    </html>
  );
}
