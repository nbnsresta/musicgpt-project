import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/musicgpt.png"
          alt="MusicGPT logo"
          width={180}
          height={38}
          priority
        />

        <div className="w-full max-w-md rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm p-6">
          <h2 className="text-2xl font-bold">MusicGPT Clone</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome to your music discovery app
          </p>
        </div>
      </main>
    </div>
  );
}
