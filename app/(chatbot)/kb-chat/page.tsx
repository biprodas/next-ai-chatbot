import { Container } from "~/components/container";
import ChatUI from "./_components/chat-ui";

const KbChatPage = () => {
  return (
    <Container className="flex justify-center">
      <div className="lg:w-[80%] p-5">
        <ChatUI botId="hrbot-80c9931c-BOT_HR" kbId="hrdata-04f05db5" />
      </div>
    </Container>
  );
};

export default KbChatPage;
