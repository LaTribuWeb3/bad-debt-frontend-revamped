import ThemeSwitch from "./components/ui/ThemeSwitch";
import TopBar from "./components/ui/TopBar";

export default function Home() {
  return (
    <div>
      <ThemeSwitch />

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBar />
      test
    </main>
    </div>
  )
}
