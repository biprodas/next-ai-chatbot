"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiMenuKebab } from "react-icons/ci";
import Container from "~/components/container";

import { ModeToggle } from "~/components/mode-toggle";
import NavLink from "~/components/nav-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 w-full h-14 border-b z-30 backdrop-blur-2xl transition-all duration-100">
      <Container className="h-full flex justify-between items-center">
        <Link href="/">
          <strong>Next-AI-ChatBot</strong>
        </Link>
        <nav className="flex items-center space-x-3">
          <NavLink href="/chat">
            <small>Playground</small>
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="p-1 border rounded-full hover:bg-stone-50">
                <CiMenuKebab size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push("/chat-1")}>
                Chat: Vercel AI
              </DropdownMenuItem>
              <DropdownMenuItem>Chat: Montelo</DropdownMenuItem>
              <DropdownMenuItem>Chat: Custom</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
