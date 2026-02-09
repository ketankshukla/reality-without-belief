"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";

export default function Footer() {
  const { openBook } = useBook();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-turquoise/30 bg-black/80 backdrop-blur-sm text-turquoise transition-all hover:border-turquoise hover:shadow-turquoise"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      <footer className="border-t border-turquoise/15 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Brand */}
            <p className="font-serif text-sm tracking-[0.3em] uppercase text-turquoise/70">
              Reality Without Belief
            </p>

            {/* Book Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {books.map((book, i) => (
                <button
                  key={i}
                  onClick={() => openBook(i)}
                  className="text-xs text-foreground/40 hover:text-turquoise transition-colors"
                >
                  <span className="text-turquoise/50 font-medium">
                    Book {book.roman}:
                  </span>{" "}
                  {book.title}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-turquoise/30" />
              <span className="text-turquoise/40 text-xs">&#10022;</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-turquoise/30" />
            </div>

            {/* Copyright */}
            <div className="space-y-1">
              <p className="text-xs text-foreground/35">
                &copy; {new Date().getFullYear()} Ketan Shukla. All rights
                reserved.
              </p>
              <p className="font-serif text-xs text-foreground/25 italic">
                A five-book journey from the failure of belief to the freedom of
                reality.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
