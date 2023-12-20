import ThemeSwitch from "./components/ui/ThemeSwitch";
import TopBar from "./components/ui/TopBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitch />
      <TopBar />
      test
    </main>
  )
}
