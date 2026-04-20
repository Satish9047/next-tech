import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import dbConnect from "@/lib/db";
import { ContactMessage } from "@/models/ContactMessage";
import { deleteContactMessage, markContactMessageAsRead } from "@/actions/contact";

type PageProps = Promise<{ id: string }>;

export const metadata = {
  title: "Message Details - Next Tech",
};

export default async function MessageDetailsPage(props: { params: PageProps }) {
  const { id } = await props.params;
  await dbConnect();

  const message = await ContactMessage.findById(id).lean();
  if (!message) notFound();
  const displayContact = message.contact?.trim() || "N/A";
  const phoneHref =
    displayContact !== "N/A"
      ? `tel:${displayContact.replace(/[^\d+]/g, "")}`
      : null;

  return (
    <main className="min-h-screen pt-32 pb-20 px-[6%]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">
              Admin
            </p>
            <h1 className="text-3xl font-bold font-rajdhani mt-1">Message Details</h1>
          </div>
          <Link
            href="/admin/messages"
            className="text-sm bg-dark2 border border-primary/20 px-4 py-2 rounded-lg hover:border-primary/40 transition-colors"
          >
            Back to Messages
          </Link>
        </div>

        <article className="bg-dark2 border border-primary/20 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">Full Name</p>
              <p className="mt-1 text-lg font-semibold">{message.fullName}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">Email</p>
              <p className="mt-1 text-lg font-semibold">{message.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">Service Required</p>
              <p className="mt-1 text-lg font-semibold">{message.serviceRequired}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">Contact</p>
              {phoneHref ? (
                <a href={phoneHref} className="mt-1 inline-block text-lg font-semibold text-primary hover:underline">
                  {displayContact}
                </a>
              ) : (
                <p className="mt-1 text-lg font-semibold">{displayContact}</p>
              )}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">Submitted Date</p>
              <p className="mt-1 text-lg font-semibold">
                {new Date(message.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Message</p>
            <p className="mt-2 whitespace-pre-wrap leading-relaxed text-text/95">
              {message.message}
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            {!message.isRead && (
              <form
                action={async () => {
                  "use server";
                  await markContactMessageAsRead(id);
                }}
              >
                <button
                  type="submit"
                  className="text-sm px-4 py-2 rounded-lg border border-primary/25 hover:border-primary/50"
                >
                  Mark as Read
                </button>
              </form>
            )}

            <form
              action={async () => {
                "use server";
                await deleteContactMessage(id);
                redirect("/admin/messages");
              }}
            >
              <button
                type="submit"
                className="text-sm px-4 py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-500/10"
              >
                Delete Message
              </button>
            </form>
          </div>
        </article>
      </div>
    </main>
  );
}
