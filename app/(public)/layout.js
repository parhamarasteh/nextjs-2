import { Geist, Geist_Mono } from "next/font/google";
import HeaderPublic from "./_components/Header";



export default function PublicLayout({ children }) {
  return (
    <>
    <HeaderPublic/>
    {children}
    </>
  );
}
