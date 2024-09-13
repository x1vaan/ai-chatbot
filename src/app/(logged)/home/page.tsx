import Chat from "@/app/_components/Chat";

export default function Home() {
  return (
    <div className="w-full flex-grow max-w-4xl border border-gray-200 dark:border-none rounded-lg overflow-hidden flex flex-col bg-white dark:bg-black">
      <Chat />
    </div>
  );
}
