import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { Container } from "~/components/container";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <Container>
        <div className="h-10 flex justify-between items-center">
          <small>
            <strong>&copy; {year} AI-Chatbot</strong>. All rights reserved.
          </small>
          <small>
            Developed with{" "}
            <FaHeart size={12} className="inline-block text-red-500" /> by{" "}
            <Link href="" className="hover:underline hover:text-blue-700">
              biprodas.ry
            </Link>
          </small>
        </div>
      </Container>
    </footer>
  );
};

export const Footer2 = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-sm text-muted-foreground p-3">
      <Container className="flex flex-col items-center justify-center">
        <div>&copy; {year} Multimodal AI Chatbot. All rights reserved.</div>
        <small>
          Developed with{" "}
          <FaHeart size={12} className="inline-block text-red-500" /> by{" "}
          <Link href="" className="hover:underline hover:text-blue-700">
            biprodas.ry
          </Link>
        </small>
      </Container>
      
    </footer>
  )
}