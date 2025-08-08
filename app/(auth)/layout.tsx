import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center p-6 md:p-10">
      <div
        className="absolute inset-0 z-0"
        style={{
          // background: "linear-gradient(120deg, #d5c5ff 0%, #a7f3d0 50%, #f0f0f0 100%)",
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      <main className="w-full max-w-sm md:max-w-3xl z-10">
        <div className="flex items-center justify-center mb-3">
          <Link href="/" className="text-3xl font-bold text-center text-black">Dyno AI</Link>
        </div>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
