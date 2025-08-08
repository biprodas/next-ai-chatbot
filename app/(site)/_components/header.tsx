import Link from "next/link";
import { Container } from "~/components/container";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full h-16 border-b z-30 backdrop-blur-2xl transition-all duration-100">
      <Container className="h-full flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-stone-900 dark:text-stone-100">
          Next-AI-ChatBot
        </Link>
        <nav className="flex items-center space-x-3">
          <Button variant="link" asChild>
            <Link href="/chat">Playground</Link>
          </Button>
          {/* <DropdownMenu>
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
          </DropdownMenu> */}
          <Button size="md" variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="md" asChild>
            <Link href="/signup">Signup</Link>
          </Button>
          {/* <ModeToggle /> */}
        </nav>
      </Container>
    </header>
  );
};
