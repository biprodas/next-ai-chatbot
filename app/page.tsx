import Link from "next/link";
import Container from "~/components/container";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <Container>
      <div className="flex justify-center items-center py-24">
        <Link href="/chat">
          <Button>Get Started</Button>
        </Link>
      </div>
    </Container>
  );
}
