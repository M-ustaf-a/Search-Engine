"use client";

import {
  BookOpenText,
  CircleAlert,
  Home,
  Search,
  Settings,
  SquareIcon,
} from "lucide-react";
import Layout from "./Layout";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import SettingsDialog from "./SettingsDialog";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const segments = useSelectedLayoutSegments();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-20 lg:flex-col">
        <div className="flex grow flex-col items-center justify-between gap-y-5 overflow-y-auto bg-[#111111] px-2 py-8">
          <a href="/">
            <SquareIcon className="text-white cursor-pointer" />
          </a>
          <Settings
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="text-white cursor-pointer"
          />
          <SettingsDialog
            isOpen={isSettingsOpen}
            setIsOpen={setIsSettingsOpen}
          />
        </div>
      </div>
      <Layout>{children}</Layout>
    </div>
  );
};

export default Sidebar;
