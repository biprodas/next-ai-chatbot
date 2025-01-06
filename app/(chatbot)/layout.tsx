import ChatbotHeader from "./_components/header";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <ChatbotHeader />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default SiteLayout;
