import { logoutAction } from "@/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg border border-red-500/30 text-red-300 text-sm hover:bg-red-500/10 transition-colors"
      >
        Logout
      </button>
    </form>
  );
}
