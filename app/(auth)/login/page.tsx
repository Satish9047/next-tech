import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Login - Next Tech",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-[6%] flex items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(110,206,244,0.08),transparent_60%)] pointer-events-none" />
      <LoginForm />
    </div>
  );
}
