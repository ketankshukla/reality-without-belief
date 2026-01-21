import React from "react";
import Image from "next/image";

const RealityWithoutBeliefNew = () => {
  const colors = {
    amazonOrange: "#FF9900",
    amazonOrangeHover: "#FFB84D",
    darkBlue: "#0F1419",
    darkBlueMid: "#1A2332",
    darkBlueLight: "#232F3E",
    slateBlue: "#37475A",
    accentTeal: "#00A8CC",
    textPrimary: "#F0F0F0",
    textSecondary: "#B8C5D0",
    textMuted: "#8899A6",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily:
          "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: colors.darkBlue,
        color: colors.textPrimary,
        lineHeight: 1.7,
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(180deg, ${colors.darkBlue} 0%, ${colors.darkBlueMid} 50%, ${colors.darkBlueLight} 100%)`,
          padding: "60px 20px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Tagline */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: `linear-gradient(90deg, ${colors.amazonOrange}, #FFD700)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              The Book That Ends All Arguments
            </span>
          </div>

          {/* Hero Content: Book Cover + Video */}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  boxShadow: `0 25px 80px rgba(255, 153, 0, 0.3), 0 10px 30px rgba(0,0,0,0.5)`,
                  borderRadius: "8px",
                  overflow: "hidden",
                  transform: "perspective(1000px) rotateY(-5deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <Image
                  src="/images/book-cover.png"
                  alt="Reality Without Belief Book Cover"
                  width={350}
                  height={525}
                  style={{ display: "block" }}
                  priority
                />
              </div>
            </div>

            {/* Video */}
            <div
              style={{
                backgroundColor: "#000",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                border: `2px solid ${colors.slateBlue}`,
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  backgroundColor: colors.darkBlue,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: colors.textMuted,
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

          {/* Title & Subtitle */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                margin: "0 0 20px",
                lineHeight: 1.1,
                color: colors.textPrimary,
              }}
            >
              REALITY WITHOUT BELIEF
            </h1>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                color: colors.amazonOrange,
                fontWeight: 600,
                margin: "0 0 30px",
              }}
            >
              What if everything you believe is costing you your life?
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <a
              href="AMAZON_LINK_PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: colors.amazonOrange,
                color: colors.darkBlue,
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
                e.target.style.backgroundColor = colors.amazonOrangeHover;
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colors.amazonOrange;
                e.target.style.transform = "translateY(0)";
              }}
            >
              Get Your Copy on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section
        style={{
          backgroundColor: colors.darkBlueMid,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: colors.amazonOrange,
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            You're Trapped. And You Don't Even Know It.
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              marginBottom: "25px",
              color: colors.textSecondary,
            }}
          >
            Every day you wake up and defend ideas you've never examined. You
            argue positions you inherited. You attack people who threaten your
            worldview—not because you're right, but because being wrong feels
            like death.
          </p>

          <p
            style={{
              fontSize: "1.15rem",
              marginBottom: "25px",
              color: colors.textSecondary,
            }}
          >
            This isn't strength.{" "}
            <strong style={{ color: colors.textPrimary }}>
              This is prison.
            </strong>
          </p>

          <div
            style={{
              backgroundColor: colors.darkBlueLight,
              borderLeft: `4px solid ${colors.amazonOrange}`,
              padding: "25px 30px",
              borderRadius: "0 8px 8px 0",
              margin: "40px 0",
            }}
          >
            <p
              style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                color: colors.textPrimary,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              "The believer and the skeptic are playing the same game. Different
              jerseys. Same addiction."
            </p>
          </div>

          <p style={{ fontSize: "1.15rem", color: colors.textSecondary }}>
            Believers cling to certainty. Skeptics cling to doubt. Both are
            terrified of the same thing:{" "}
            <strong style={{ color: colors.amazonOrange }}>not knowing.</strong>
          </p>
        </div>
      </section>

      {/* What This Book Does Section */}
      <section
        style={{
          backgroundColor: colors.darkBlue,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: colors.textPrimary,
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            This Book Doesn't Give You New Beliefs.
            <br />
            <span style={{ color: colors.amazonOrange }}>
              It Takes Them Away.
            </span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                title: "No Comfort",
                desc: "This book won't make you feel good. It will make you see clearly.",
              },
              {
                title: "No Ideology",
                desc: "Not atheism. Not spirituality. Not skepticism. Something else entirely.",
              },
              {
                title: "No Escape",
                desc: "Once you see what's here, you can't unsee it. That's the price of clarity.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.darkBlueMid,
                  padding: "30px",
                  borderRadius: "10px",
                  border: `1px solid ${colors.slateBlue}`,
                  transition: "border-color 0.3s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: colors.amazonOrange,
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: colors.textSecondary,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Core Insight Section */}
      <section
        style={{
          backgroundColor: colors.darkBlueMid,
          padding: "80px 20px",
        }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: colors.textPrimary,
              marginBottom: "30px",
            }}
          >
            The Core Insight
          </h2>

          <div
            style={{
              backgroundColor: colors.darkBlueLight,
              padding: "40px",
              borderRadius: "12px",
              border: `2px solid ${colors.amazonOrange}`,
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                fontWeight: 700,
                color: colors.textPrimary,
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Reality does not require your belief to function.
              <br />
              <span style={{ color: colors.amazonOrange }}>
                Neither do you.
              </span>
            </p>
          </div>

          <p style={{ fontSize: "1.15rem", color: colors.textSecondary }}>
            Facts don't negotiate. Consequences don't care about your
            intentions. What's so is just what's so—whether you like it or not.
          </p>
        </div>
      </section>

      {/* What You'll Discover Section */}
      <section
        style={{
          backgroundColor: colors.darkBlue,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: colors.amazonOrange,
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            50 Chapters. One Exit.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {[
              {
                part: "Part I",
                title: "The Failure of Belief",
                desc: "Why conviction is addiction, not virtue",
              },
              {
                part: "Part II",
                title: "What's So",
                desc: "Reality without your interpretations layered on top",
              },
              {
                part: "Part III",
                title: "The Theater",
                desc: "How believers and skeptics are mirror images",
              },
              {
                part: "Part IV",
                title: "Responsibility",
                desc: "Action without certainty, hope, or fear",
              },
              {
                part: "Part V",
                title: "A Different Life",
                desc: "Seeing, listening, deciding without narrative",
              },
              {
                part: "Part VI",
                title: "The Exit",
                desc: "Freedom without identity. Nothing left to defend.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: colors.darkBlueMid,
                  padding: "25px",
                  borderRadius: "8px",
                  borderTop: `3px solid ${colors.amazonOrange}`,
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: colors.accentTeal,
                    letterSpacing: "1px",
                    marginBottom: "8px",
                  }}
                >
                  {item.part}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: colors.textPrimary,
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.textMuted,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section
        style={{
          backgroundColor: colors.darkBlueMid,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: colors.textPrimary,
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            This Book Will Destroy You.
            <br />
            <span style={{ color: colors.amazonOrange }}>If You Let It.</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                backgroundColor: colors.darkBlueLight,
                padding: "30px",
                borderRadius: "10px",
                border: `1px solid ${colors.accentTeal}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: colors.accentTeal,
                  marginBottom: "20px",
                }}
              >
                Read This If You're:
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "1rem",
                  color: colors.textSecondary,
                  lineHeight: 2,
                }}
              >
                <li>→ Exhausted by endless debates that resolve nothing</li>
                <li>→ Tired of defending positions you're not sure you hold</li>
                <li>→ Ready for clarity over comfort</li>
                <li>→ Able to handle uncertainty without collapse</li>
              </ul>
            </div>

            <div
              style={{
                backgroundColor: colors.darkBlueLight,
                padding: "30px",
                borderRadius: "10px",
                border: `1px solid #dc3545`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#dc3545",
                  marginBottom: "20px",
                }}
              >
                Don't Read This If You:
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "1rem",
                  color: colors.textSecondary,
                  lineHeight: 2,
                }}
              >
                <li>→ Need beliefs for psychological stability</li>
                <li>→ Want validation or reassurance</li>
                <li>→ Expect gentle persuasion</li>
                <li>→ Aren't willing to question everything</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.amazonOrange} 0%, #FFB84D 100%)`,
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: colors.darkBlue,
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Stop Defending.
            <br />
            Start Living.
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: colors.darkBlueMid,
              marginBottom: "35px",
              fontWeight: 500,
            }}
          >
            The exit is here. The only question is whether you'll take it.
          </p>
          <a
            href="AMAZON_LINK_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: colors.darkBlue,
              color: colors.textPrimary,
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
              e.target.style.backgroundColor = colors.darkBlueMid;
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.darkBlue;
              e.target.style.transform = "translateY(0)";
            }}
          >
            Order Now on Amazon
          </a>
        </div>
      </section>

      {/* About Author Section */}
      <section
        style={{
          backgroundColor: colors.darkBlue,
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: colors.textPrimary,
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            About Ketan Shukla
          </h2>

          <div
            style={{
              backgroundColor: colors.darkBlueMid,
              padding: "40px",
              borderRadius: "12px",
              border: `1px solid ${colors.slateBlue}`,
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "20px",
                color: colors.textSecondary,
                lineHeight: 1.8,
              }}
            >
              Ketan Shukla doesn't write self-help books. He writes demolition
              manuals.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "20px",
                color: colors.textSecondary,
                lineHeight: 1.8,
              }}
            >
              A relentless thinker who has spent decades questioning the
              frameworks most people never examine, Ketan has authored works
              including <em>"Destroy Your Beliefs"</em> and{" "}
              <em>"The Clarity of Reality."</em>
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: colors.amazonOrange,
                fontStyle: "italic",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: 0,
              }}
            >
              "I wrote this book for those ready to stop arguing with
              reality—and start living in it."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          backgroundColor: colors.darkBlueMid,
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: colors.textPrimary,
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
              color: colors.amazonOrange,
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
              backgroundColor: colors.amazonOrange,
              color: colors.darkBlue,
              padding: "20px 60px",
              fontSize: "20px",
              fontWeight: 700,
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(255,153,0,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colors.amazonOrangeHover;
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colors.amazonOrange;
              e.target.style.transform = "translateY(0)";
            }}
          >
            Get the Book Now
          </a>
          <p
            style={{
              marginTop: "20px",
              fontSize: "14px",
              color: colors.textMuted,
            }}
          >
            Available immediately on Amazon
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: colors.darkBlue,
          borderTop: `1px solid ${colors.slateBlue}`,
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: colors.textMuted,
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} Ketan Shukla. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          style={{
            backgroundColor: "transparent",
            color: colors.amazonOrange,
            border: `1px solid ${colors.amazonOrange}`,
            padding: "10px 25px",
            fontSize: "14px",
            fontWeight: 600,
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = colors.amazonOrange;
            e.target.style.color = colors.darkBlue;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = colors.amazonOrange;
          }}
        >
          Back to Top
        </button>
      </footer>
    </div>
  );
};

export default RealityWithoutBeliefNew;
