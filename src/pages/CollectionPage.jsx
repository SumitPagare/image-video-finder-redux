import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

function CollectionPage() {
  const collection = useSelector((state) => state.collection.items);

  const dispatach = useDispatch()

  const handleClearAll = () => {
    dispatach(clearCollection())
  }

  return (
    <main className="min-h-[calc(100vh-73px)] bg-gray-950">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Your Library
            </p>

            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              My Collection
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              See your saved photos and videos in one place.
            </p>

          
          </div>

          {collection.length > 0 && (
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                <span className="font-semibold text-white">
                  {collection.length}
                </span>{" "}
                saved item{collection.length !== 1 ? "s" : ""}
              </div>

              <button
                onClick={handleClearAll}
                className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500 hover:text-white active:scale-95"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-8 0h10"
                  />
                </svg>
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Collection */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        {collection.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
              <svg
                className="h-10 w-10 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
                />
              </svg>
            </div>

            <h2 className="text-xl font-semibold text-white">
              Your collection is empty
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Search for photos or videos and click the save icon to add them to
              your collection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {collection.map((item) => (
              <CollectionCard item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default CollectionPage;
