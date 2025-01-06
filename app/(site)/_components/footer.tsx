import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Container from "~/components/container";

const Footer = () => {
  // const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <Container>
        <div className="h-10 flex justify-between items-center">
          <small>
            <strong>AI-Chatbot</strong> @Playground
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

export default Footer;
