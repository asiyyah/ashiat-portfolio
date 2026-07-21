export default function CaseStudyLoading() {
  return (
    <section className="px-6 section-pad">
      <div className="max-w-3xl mx-auto animate-pulse">
        <div className="h-4 w-24 bg-surface rounded" />

        <div className="mt-8 mb-16 space-y-4">
          <div className="h-3 w-32 bg-surface rounded" />
          <div className="h-10 w-full bg-surface rounded" />
          <div className="h-5 w-2/3 bg-surface rounded" />
          <div className="flex gap-6">
            <div className="h-4 w-40 bg-surface rounded" />
            <div className="h-4 w-24 bg-surface rounded" />
          </div>
        </div>

        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="mb-8 space-y-3">
            <div className="h-7 w-48 bg-surface rounded" />
            <div className="h-4 w-full bg-surface rounded" />
            <div className="h-4 w-5/6 bg-surface rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
