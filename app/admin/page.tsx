import Link from "next/link";
import { getCurrentUser } from "@/lib/session";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminDashboard() {
  const currentUser = await getCurrentUser();

  return (
    <div className="min-h-screen pt-32 pb-20 px-[6%]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold font-rajdhani text-primary mb-4">
          Dashboard
        </h1>

        <div className="bg-dark2 border border-primary/20 p-6 rounded-2xl shadow-lg mb-6 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Welcome, {currentUser?.email}
            </h2>
            <p className="text-muted text-sm space-y-1">
              <strong>User ID:</strong> {currentUser?.id} <br />
              <strong>Role:</strong>{" "}
              <span className="text-primary">
                {currentUser?.role ?? "admin"}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/profile"
              className="px-4 py-2 rounded-lg border border-primary/25 text-sm hover:border-primary/50 transition-colors"
            >
              Profile
            </Link>
            <LogoutButton />
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-primary mb-2">
            🛡️ Admin Controls
          </h3>
          <p className="text-sm text-muted">
            You have access to privileged administrative actions.
          </p>
          <Link
            href="/admin/messages"
            className="inline-flex mt-4 bg-primary text-dark px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Manage Contact Messages
          </Link>
        </div>
      </div>
    </div>
  );
}
