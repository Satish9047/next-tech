import { redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import LogoutButton from "@/components/LogoutButton";

export const metadata = {
  title: "Profile - Next Tech",
};

export default async function ProfilePage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-[6%]">
      <div className="max-w-3xl mx-auto bg-dark2 border border-primary/20 rounded-2xl p-8">
        <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
          User Profile
        </p>
        <h1 className="text-3xl font-bold font-rajdhani mt-2 mb-6">
          Welcome, {currentUser.email}
        </h1>

        <div className="space-y-2 text-sm text-muted mb-6">
          <p>
            <strong>User ID:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Role:</strong> {currentUser.role}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {currentUser.role === "admin" && (
            <Link
              href="/admin"
              className="px-4 py-2 rounded-lg bg-primary text-dark text-sm font-semibold"
            >
              Open Admin
            </Link>
          )}
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
