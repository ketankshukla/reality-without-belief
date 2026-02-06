"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { BOOKS, COLORS } from "../data/bookData";

const BookSeriesPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const book = BOOKS[activeTab];

  const handleTabClick = useCallback((index) => {
    setActiveTab(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily:
          "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: COLORS.midnight,
        color: COLORS.textPrimary,
        lineHeight: 1.7,
        minHeight: "100vh",
      }}
    >
      {/* Sticky Series Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: COLORS.midnight,
          borderBottom: `1px solid ${COLORS.slateBlue}`,
          padding: "0 20px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: "14px",
            letterSpacing: "2px",
            color: COLORS.amazonOrange,
            textTransform: "uppercase",
          }}
        >
          Reality Without Belief
        </div>
        <div
          style={{
            fontSize: "13px",
            color: COLORS.textMuted,
          }}
        >
          A 5-Book Series by Ketan Shukla
        </div>
      </header>

      {/* Tab Navigation */}
      <nav
        style={{
          position: "sticky",
          top: "50px",
          zIndex: 99,
          backgroundColor: COLORS.charcoalBlue,
          display: "flex",
          justifyContent: "center",
          borderBottom: `1px solid ${COLORS.slateBlue}`,
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "700px",
            width: "100%",
          }}
        >
          {BOOKS.map((b, index) => (
            <button
              key={b.id}
              onClick={() => handleTabClick(index)}
              style={{
                flex: 1,
                padding: "16px 12px",
                background: "none",
                border: "none",
                borderBottom:
                  activeTab === index
                    ? `3px solid ${b.accent}`
                    : "3px solid transparent",
                color:
                  activeTab === index
                    ? COLORS.textPrimary
                    : COLORS.textMuted,
                fontSize: "15px",
                fontWeight: activeTab === index ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
              onMouseOver={(e) => {
                if (activeTab !== index) {
                  e.target.style.color = COLORS.textSecondary;
                  e.target.style.backgroundColor = "rgba(255,255,255,0.03)";
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== index) {
                  e.target.style.color = COLORS.textMuted;
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              {b.tabLabel}
            </button>
          ))}
        </div>
      </nav>

      {/* ===== BOOK CONTENT ===== */}

      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(180deg, ${COLORS.midnight} 0%, ${COLORS.darkSlate} 50%, ${COLORS.charcoalBlue} 100%)`,
          padding: "60px 20px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent glow behind book cover */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "25%",
            width: "500px",
            height: "500px",
            background: `radial-gradient(circle, ${book.glow} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Book number label */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              style={{
                display: "inline-block",
                background: `linear-gradient(90deg, ${book.accent}, ${book.accentLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Book {book.numeral} of V
            </span>
          </div>

          {/* Two-column: Book Cover + Video */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            {/* Book Cover */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  boxShadow: `0 25px 80px ${book.glow}, 0 10px 30px rgba(0,0,0,0.5)`,
                  borderRadius: "8px",
                  overflow: "hidden",
                  transform: "perspective(1000px) rotateY(-5deg)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <Image
                  src={book.image}
                  alt={`${book.title} Book Cover`}
                  width={350}
                  height={525}
                  style={{ display: "block" }}
                  priority
                />
              </div>
            </div>

            {/* Video Placeholder */}
            <div
              style={{
                backgroundColor: "#000",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                border: `2px solid ${COLORS.slateBlue}`,
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  backgroundColor: COLORS.midnight,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: COLORS.textMuted,
                  }}
                >
                  <div style={{ fontSize: "64px", marginBottom: "10px" }}>
                    ▶
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 600 }}>
                    Watch the Introduction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title, Subtitle, Hook */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 900,
                margin: "0 0 15px",
                lineHeight: 1.1,
                color: COLORS.textPrimary,
              }}
            >
              {book.title}
            </h1>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                color: book.accent,
                fontWeight: 600,
                margin: "0 0 20px",
              }}
            >
              {book.subtitle}
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                color: COLORS.textSecondary,
                fontStyle: "italic",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {book.hook}
            </p>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center" }}>
            <a
              href="AMAZON_LINK_PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: COLORS.amazonOrange,
                color: COLORS.midnight,
                padding: "18px 50px",
                fontSize: "18px",
                fontWeight: 700,
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(255,153,0,0.4)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = COLORS.amazonOrangeHover;
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = COLORS.amazonOrange;
                e.target.style.transform = "translateY(0)";
              }}
            >
              Buy Now on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section
        style={{
          backgroundColor: COLORS.darkSlate,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: COLORS.amazonOrange,
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            About This Book
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              marginBottom: "30px",
              color: COLORS.textSecondary,
              lineHeight: 1.8,
            }}
          >
            {book.descriptionIntro}
          </p>

          <div
            style={{
              backgroundColor: COLORS.charcoalBlue,
              borderLeft: `4px solid ${book.accent}`,
              padding: "30px 30px 30px 35px",
              borderRadius: "0 10px 10px 0",
              marginBottom: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: COLORS.textPrimary,
                marginBottom: "20px",
              }}
            >
              {book.discoveryHeading}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {book.discoveryPoints.map((point, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: "1.05rem",
                    color: COLORS.textSecondary,
                    lineHeight: 1.7,
                    padding: "8px 0",
                    paddingLeft: "24px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: book.accent,
                      fontWeight: 700,
                    }}
                  >
                    &#x2192;
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: "1.15rem",
              color: COLORS.textSecondary,
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            {book.descriptionClosing}
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section
        style={{
          backgroundColor: COLORS.midnight,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: COLORS.textPrimary,
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            The Full Story
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: `linear-gradient(90deg, ${book.accent}, ${book.accentLight})`,
              margin: "0 auto 40px",
              borderRadius: "2px",
            }}
          />

          {book.summaryParagraphs.map((para, idx) => {
            const isShortPunch = para.length < 80;

            if (isShortPunch) {
              return (
                <p
                  key={idx}
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: book.accent,
                    textAlign: "center",
                    margin: "40px 0",
                    lineHeight: 1.4,
                  }}
                >
                  {para}
                </p>
              );
            }

            return (
              <p
                key={idx}
                style={{
                  fontSize: "1.1rem",
                  color: COLORS.textSecondary,
                  marginBottom: "25px",
                  lineHeight: 1.8,
                }}
              >
                {para}
              </p>
            );
          })}
        </div>
      </section>

      {/* Chapters Section */}
      <section
        style={{
          backgroundColor: COLORS.darkSlate,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: COLORS.amazonOrange,
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Inside This Book
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {book.chapters.map((ch) => (
              <div
                key={ch.number}
                style={{
                  backgroundColor: COLORS.charcoalBlue,
                  padding: "20px 24px",
                  borderRadius: "8px",
                  borderTop: `3px solid ${book.accent}`,
                  transition: "transform 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: book.accent,
                    letterSpacing: "1px",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  Chapter {ch.number}
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: COLORS.textPrimary,
                    lineHeight: 1.4,
                  }}
                >
                  {ch.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: `linear-gradient(135deg, ${COLORS.amazonOrange} 0%, ${COLORS.amazonOrangeHover} 100%)`,
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: COLORS.midnight,
              marginBottom: "15px",
              lineHeight: 1.2,
            }}
          >
            {activeTab === 0 ? "Ready to Begin?" : "Continue the Journey"}
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: COLORS.darkSlate,
              marginBottom: "35px",
              fontWeight: 500,
            }}
          >
            {book.ctaSubtext}
          </p>
          <a
            href="AMAZON_LINK_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: COLORS.midnight,
              color: COLORS.textPrimary,
              padding: "20px 60px",
              fontSize: "20px",
              fontWeight: 700,
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = COLORS.darkSlate;
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = COLORS.midnight;
              e.target.style.transform = "translateY(0)";
            }}
          >
            Buy Now on Amazon
          </a>
          <p
            style={{
              marginTop: "20px",
              fontSize: "14px",
              color: "rgba(15, 20, 25, 0.6)",
              fontWeight: 500,
            }}
          >
            Available immediately on Amazon
          </p>
        </div>
      </section>

      {/* Series Navigator */}
      <section
        style={{
          backgroundColor: COLORS.midnight,
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: COLORS.textPrimary,
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            The Complete Series
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
            }}
          >
            {BOOKS.map((b, index) => (
              <button
                key={b.id}
                onClick={() => handleTabClick(index)}
                style={{
                  background:
                    activeTab === index
                      ? COLORS.charcoalBlue
                      : COLORS.darkSlate,
                  border:
                    activeTab === index
                      ? `2px solid ${b.accent}`
                      : `1px solid ${COLORS.slateBlue}`,
                  borderRadius: "10px",
                  padding: "16px 10px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                }}
                onMouseOver={(e) => {
                  if (activeTab !== index) {
                    e.currentTarget.style.borderColor = b.accent;
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== index) {
                    e.currentTarget.style.borderColor = COLORS.slateBlue;
                  }
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: b.accent,
                    letterSpacing: "1px",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  Book {b.numeral}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color:
                      activeTab === index
                        ? COLORS.textPrimary
                        : COLORS.textSecondary,
                    lineHeight: 1.3,
                  }}
                >
                  {b.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section
        style={{
          backgroundColor: COLORS.darkSlate,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: COLORS.textPrimary,
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            About Ketan Shukla
          </h2>

          <div
            style={{
              backgroundColor: COLORS.charcoalBlue,
              padding: "40px",
              borderRadius: "12px",
              border: `1px solid ${COLORS.slateBlue}`,
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "20px",
                color: COLORS.textSecondary,
                lineHeight: 1.8,
              }}
            >
              Ketan Shukla doesn&apos;t write self-help books. He writes
              demolition manuals.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "20px",
                color: COLORS.textSecondary,
                lineHeight: 1.8,
              }}
            >
              A relentless thinker who has spent decades questioning the
              frameworks most people never examine, Ketan has authored works
              including <em>&ldquo;Destroy Your Beliefs Using Intelligence&rdquo;</em>,{" "}
              <em>&ldquo;Repetition &mdash; Mother of Mastery&rdquo;</em>, and{" "}
              <em>&ldquo;The Clarity of Reality: Embracing What Is&rdquo;</em>.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "20px",
                color: COLORS.textSecondary,
                lineHeight: 1.8,
              }}
            >
              The <em>Reality Without Belief</em> series represents the
              culmination of decades of deep thinking about belief, reality, and
              what it means to truly see what&apos;s so. This is not a position
              arrived at easily &mdash; it required years of questioning and
              confronting uncomfortable truths.
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: COLORS.amazonOrange,
                fontStyle: "italic",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: 0,
              }}
            >
              &ldquo;I wrote this series for those ready to stop arguing with
              reality &mdash; and start living in it.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          backgroundColor: COLORS.midnight,
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: COLORS.textPrimary,
              marginBottom: "15px",
              lineHeight: 1.3,
            }}
          >
            Reality does not require belief to function.
          </p>
          <p
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: COLORS.amazonOrange,
              marginBottom: "40px",
            }}
          >
            Neither do you.
          </p>
          <a
            href="AMAZON_LINK_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: COLORS.amazonOrange,
              color: COLORS.midnight,
              padding: "20px 60px",
              fontSize: "20px",
              fontWeight: 700,
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(255,153,0,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = COLORS.amazonOrangeHover;
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = COLORS.amazonOrange;
              e.target.style.transform = "translateY(0)";
            }}
          >
            Get the Series on Amazon
          </a>
          <p
            style={{
              marginTop: "20px",
              fontSize: "14px",
              color: COLORS.textMuted,
            }}
          >
            Available immediately on Amazon
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: COLORS.midnight,
          borderTop: `1px solid ${COLORS.slateBlue}`,
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: COLORS.textMuted,
            marginBottom: "10px",
            fontSize: "14px",
          }}
        >
          &copy; {new Date().getFullYear()} Ketan Shukla. All rights reserved.
        </p>
        <p
          style={{
            color: COLORS.textMuted,
            marginBottom: "20px",
            fontSize: "13px",
          }}
        >
          <em>Reality Without Belief</em> &mdash; A Five-Book Series
        </p>
        <button
          onClick={scrollToTop}
          style={{
            backgroundColor: "transparent",
            color: COLORS.amazonOrange,
            border: `1px solid ${COLORS.amazonOrange}`,
            padding: "10px 25px",
            fontSize: "14px",
            fontWeight: 600,
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontFamily: "inherit",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = COLORS.amazonOrange;
            e.target.style.color = COLORS.midnight;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = COLORS.amazonOrange;
          }}
        >
          Back to Top
        </button>
      </footer>
    </div>
  );
};

export default BookSeriesPage;
