const skeletonCards = Array.from({ length: 6 });

export default function BlogLoading() {
  return (
    <>
      <section className="border-b border-[#E9E9E9] bg-[#FAFAF8] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl animate-pulse px-5 lg:px-8">
          <div className="h-4 w-28 rounded-full bg-[#E8E8E5]" />

          <div className="mt-6 h-12 max-w-3xl rounded-xl bg-[#E8E8E5]" />

          <div className="mt-4 h-12 max-w-2xl rounded-xl bg-[#E8E8E5]" />

          <div className="mt-7 h-5 max-w-xl rounded-full bg-[#EEEEEB]" />
        </div>
      </section>

      <section
        aria-label="Chargement des articles"
        aria-busy="true"
        className="bg-[#FAFAF8] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 w-36 rounded-full bg-[#E2E2DF]" />
            <div className="mt-5 h-10 max-w-xl rounded-lg bg-[#E2E2DF]" />
            <div className="mt-4 h-5 max-w-2xl rounded-full bg-[#EAEAE7]" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skeletonCards.map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl border border-[#E9E9E9] bg-white p-7"
              >
                <div className="flex justify-between border-b border-[#EEEEEE] pb-5">
                  <div className="h-4 w-24 rounded-full bg-[#E5E5E5]" />
                  <div className="h-4 w-20 rounded-full bg-[#F0F0F0]" />
                </div>

                <div className="mt-7 h-6 w-full rounded bg-[#E5E5E5]" />
                <div className="mt-3 h-6 w-4/5 rounded bg-[#E5E5E5]" />

                <div className="mt-7 space-y-3">
                  <div className="h-4 w-full rounded bg-[#F0F0F0]" />
                  <div className="h-4 w-full rounded bg-[#F0F0F0]" />
                  <div className="h-4 w-3/4 rounded bg-[#F0F0F0]" />
                </div>

                <div className="mt-8 h-4 w-28 rounded bg-[#E5E5E5]" />
              </div>
            ))}
          </div>

          <p className="sr-only">Chargement des articles en cours.</p>
        </div>
      </section>
    </>
  );
}