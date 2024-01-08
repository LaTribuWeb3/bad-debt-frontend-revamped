'use client'
import Image from "next/image";
import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";
import TopBar from "./TopBar";
import MarketDataTable from "./badDebtTable/BadDebtTable";
import { DatePicker } from "./DatePicker";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date);
  return (
    <div>
      <TopBar />
      <ThemeSwitch />
    <main className="flex bg-white dark:bg-darkThemeBg min-h-screen text-black dark:text-white flex-col items-center justify-between px-72 py-24 pb-0">
    <Image src={"/images/white-wordmark.png"} alt={"Risk DAO logo"} width={637} height={134} />
    <DatePicker date={date} setDate={setDate} />
      <MarketDataTable date={date} />
    <Footer />
    </main>
    </div>
  )
}  
