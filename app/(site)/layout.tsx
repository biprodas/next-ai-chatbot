import { Footer2 } from "./_components/footer";
import { Header } from "./_components/header";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 flex flex-col min-h-screen w-full bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          // background: "linear-gradient(120deg, #d5c5ff 0%, #a7f3d0 50%, #f0f0f0 100%)",
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      <Header />
      <main className="flex-grow z-10">{children}</main>
      <Footer2 />
    </div>
  );
};

export default SiteLayout;
