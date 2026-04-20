export default function MessageDetailsLoading() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-[6%]">
      <div className="max-w-4xl mx-auto bg-dark2 border border-primary/20 rounded-2xl p-8 space-y-5">
        <div className="h-8 w-48 bg-dark3 rounded animate-pulse" />
        <div className="h-5 w-full bg-dark3 rounded animate-pulse" />
        <div className="h-5 w-full bg-dark3 rounded animate-pulse" />
        <div className="h-5 w-3/4 bg-dark3 rounded animate-pulse" />
      </div>
    </main>
  );
}
