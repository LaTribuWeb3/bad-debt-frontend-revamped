import ThemeSwitch from "./components/ui/ThemeSwitch";
import TopBar from "./components/ui/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <ThemeSwitch />
    <main className="flex bg-white dark:bg-darkThemeBg min-h-screen text-black dark:text-white flex-col items-center justify-between p-24">
      test
    </main>
    </div>
  )
}
