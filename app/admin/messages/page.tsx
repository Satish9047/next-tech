import Link from "next/link";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/db";
import { ContactMessage } from "@/models/ContactMessage";
import {
  deleteContactMessage,
  markContactMessageAsRead,
} from "@/actions/contact";

const PAGE_SIZE = 10;

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

interface SerializedMessage {
  _id: string;
  fullName: string;
  email: string;
  contact: string | null;
  serviceRequired: string;
  isRead: boolean;
  createdAt: string | null;
}

function parsePage(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number.parseInt(raw ?? "1", 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return parsed;
}

function buildPageHref(
  searchParams: Record<string, string | string[] | undefined>,
  page: number,
) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (key === "page" || value == null) continue;
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, item);
      continue;
    }
    params.set(key, value);
  }
  params.set("page", String(page));
  return `/admin/messages?${params.toString()}`;
}

export const metadata = {
  title: "Admin Messages - Next Tech",
};

export default async function AdminMessagesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const page = parsePage(searchParams.page);
  const skip = (page - 1) * PAGE_SIZE;

  await dbConnect();

  const [messages, total] = await Promise.all([
    ContactMessage.find({})
      .select("fullName email contact serviceRequired isRead createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(PAGE_SIZE)
      .lean(),
    ContactMessage.countDocuments(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (total > 0 && page > totalPages) {
    redirect(buildPageHref(searchParams, totalPages));
  }

  const safeMessages: SerializedMessage[] = messages.map((msg) => ({
    _id: msg._id.toString(),
    fullName: msg.fullName ?? "Unknown",
    email: msg.email ?? "N/A",
    contact: msg.contact ?? null,
    serviceRequired: msg.serviceRequired ?? "N/A",
    isRead: Boolean(msg.isRead),
    createdAt: msg.createdAt ? msg.createdAt.toISOString() : null,
  }));

  return (
    <main className="min-h-screen pt-32 pb-20 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
              Admin
            </p>
            <h1 className="text-3xl font-bold font-rajdhani mt-1">
              Contact Messages
            </h1>
            <p className="text-muted text-sm mt-1">
              Showing {safeMessages.length} of {total} messages
            </p>
          </div>
          <Link
            href="/admin"
            className="text-sm bg-dark2 border border-primary/20 px-4 py-2 rounded-lg hover:border-primary/40 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>

        {safeMessages.length === 0 ? (
          <div className="bg-dark2 border border-primary/20 rounded-2xl p-8 text-center text-muted">
            No contact messages found yet.
          </div>
        ) : (
          <div className="bg-dark2 border border-primary/20 rounded-2xl overflow-x-auto">
            <table className="w-full text-left min-w-[850px]">
              <thead className="border-b border-primary/10">
                <tr className="text-xs uppercase tracking-[0.12em] text-muted">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Submitted</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {safeMessages.map((message) => (
                  <tr
                    key={String(message._id)}
                    className="border-b border-primary/5 hover:bg-primary/5"
                  >
                    <td className="px-4 py-4 font-medium">
                      {message.fullName}
                    </td>
                    <td className="px-4 py-4 text-muted">{message.email}</td>
                    <td className="px-4 py-4 text-muted">
                      {message.contact?.trim() || "N/A"}
                    </td>
                    <td className="px-4 py-4">{message.serviceRequired}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs border ${
                          message.isRead
                            ? "text-emerald-300 border-emerald-500/30 bg-emerald-500/10"
                            : "text-amber-300 border-amber-500/30 bg-amber-500/10"
                        }`}
                      >
                        {message.isRead ? "Read" : "Unread"}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-muted">
                      {message.createdAt
                        ? new Date(message.createdAt).toLocaleString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/messages/${String(message._id)}`}
                          className="text-xs px-3 py-1.5 rounded-lg bg-primary text-dark font-semibold hover:bg-primary/90"
                        >
                          View Details
                        </Link>

                        {!message.isRead && (
                          <form
                            action={async () => {
                              "use server";
                              await markContactMessageAsRead(
                                String(message._id),
                              );
                            }}
                          >
                            <button
                              type="submit"
                              className="text-xs px-3 py-1.5 rounded-lg border border-primary/25 hover:border-primary/50"
                            >
                              Mark Read
                            </button>
                          </form>
                        )}

                        <form
                          action={async () => {
                            "use server";
                            await deleteContactMessage(String(message._id));
                          }}
                        >
                          <button
                            type="submit"
                            className="text-xs px-3 py-1.5 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-500/10"
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <Link
              href={buildPageHref(searchParams, Math.max(1, page - 1))}
              className={`px-4 py-2 rounded-lg border ${
                page === 1
                  ? "pointer-events-none opacity-50 border-primary/10"
                  : "border-primary/20 hover:border-primary/40"
              }`}
            >
              Prev
            </Link>
            <span className="text-sm text-muted">
              Page {page} of {totalPages}
            </span>
            <Link
              href={buildPageHref(searchParams, Math.min(totalPages, page + 1))}
              className={`px-4 py-2 rounded-lg border ${
                page === totalPages
                  ? "pointer-events-none opacity-50 border-primary/10"
                  : "border-primary/20 hover:border-primary/40"
              }`}
            >
              Next
            </Link>
            <Link
              href={buildPageHref(searchParams, 1)}
              className={`px-4 py-2 rounded-lg border ${
                page === 1
                  ? "pointer-events-none opacity-50 border-primary/10"
                  : "border-primary/20 hover:border-primary/40"
              }`}
            >
              First
            </Link>
            <Link
              href={buildPageHref(searchParams, totalPages)}
              className={`px-4 py-2 rounded-lg border ${
                page === totalPages
                  ? "pointer-events-none opacity-50 border-primary/10"
                  : "border-primary/20 hover:border-primary/40"
              }`}
            >
              Last
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
