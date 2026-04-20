export default function AdminMessagesLoading() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div className="h-8 w-64 bg-dark2 rounded animate-pulse mb-6" />
        <div className="bg-dark2 border border-primary/20 rounded-2xl p-6 space-y-4">
          <div className="h-6 w-full bg-dark3 rounded animate-pulse" />
          <div className="h-6 w-full bg-dark3 rounded animate-pulse" />
          <div className="h-6 w-full bg-dark3 rounded animate-pulse" />
        </div>
      </div>
    </main>
  );
}
