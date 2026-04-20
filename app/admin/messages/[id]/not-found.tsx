import Link from "next/link";

export default function MessageNotFound() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-[6%]">
      <div className="max-w-xl mx-auto text-center bg-dark2 border border-primary/20 rounded-2xl p-8">
        <h1 className="text-2xl font-bold font-rajdhani mb-2">Message Not Found</h1>
        <p className="text-muted mb-6">
          The requested contact message does not exist or was deleted.
        </p>
        <Link
          href="/admin/messages"
          className="inline-flex px-4 py-2 rounded-lg bg-primary text-dark font-semibold"
        >
          Back to Messages
        </Link>
      </div>
    </main>
  );
}
