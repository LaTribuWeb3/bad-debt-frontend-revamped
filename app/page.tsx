import Image from "next/image";
import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";
import TopBar from "./TopBar";
import MarketDataTable from "./badDebtTable/BadDebtTable";

export default function Home() {
  return (
    <div>
      <TopBar />
      <ThemeSwitch />
    <main className="flex bg-white dark:bg-darkThemeBg min-h-screen text-black dark:text-white flex-col items-center justify-between p-24 pb-0">
    <Image src={"/images/white-wordmark.png"} alt={"Risk DAO logo"} width={637} height={134} />
      <MarketDataTable />
    <Footer />
    </main>
    </div>
  )
}
