import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

function ResultCard({ item }) {
  const dispatch = useDispatch();

  const collection = useSelector((state) => state.collection.items);

  const isSaved = collection.some((savedItem) => savedItem.id === item.id);

  const addToCollection = (item) => {
    if (isSaved) return;

    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">
      {/* Media */}
      <div className="relative h-72 overflow-hidden bg-gray-800 sm:h-80">
        {item.type === "photo" && (
          <img
            src={item.src}
            alt={item.title || "Photo"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}

        {item.type === "video" && (
          <video
            autoPlay
            muted
            loop
            playsInline
            src={item.src}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* Type badge */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {item.type === "photo" ? (
              <>
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Photo
              </>
            ) : (
              <>
                <svg
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Video
              </>
            )}
          </span>
        </div>

        {/* Save */}
        <button
          type="button"
          onClick={() => addToCollection(item)}
          disabled={isSaved}
          aria-label={isSaved ? "Saved" : "Save to collection"}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
            isSaved
              ? "border-blue-400/30 bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "border-white/10 bg-black/60 text-white hover:border-blue-400/30 hover:bg-blue-600 hover:text-white"
          }`}
        >
          <svg
            className="h-5 w-5"
            fill={isSaved ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
            />
          </svg>
        </button>

        {/* Saved label */}
        {isSaved && (
          <div className="absolute right-3 top-14 rounded-full bg-blue-600/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
            Saved
          </div>
        )}

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-white">
            {item.title || "Untitled"}
          </h2>
        </div>
      </div>

      {/* Footer */}
      <div className="flex min-h-[76px] items-center justify-between gap-4 px-4 py-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            {item.type}
          </p>

          <p className="mt-1 truncate text-sm text-gray-300">
            {item.author || "Unknown creator"}
          </p>
        </div>

        <div
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
            isSaved
              ? "bg-blue-600/10 text-blue-400"
              : "bg-white/5 text-gray-500"
          }`}
        >
          <svg
            className="h-4 w-4"
            fill={isSaved ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
            />
          </svg>
        </div>
      </div>
    </article>
  );
}

export default ResultCard;
