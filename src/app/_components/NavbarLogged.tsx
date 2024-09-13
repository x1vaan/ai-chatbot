"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function NavbarLogged() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="border-b w-full">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            AI Chatbot
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
