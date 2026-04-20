import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register - Next Tech",
  description: "Create an account",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-[6%] flex items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(110,206,244,0.08),transparent_60%)] pointer-events-none" />
      <RegisterForm />
    </div>
  );
}
