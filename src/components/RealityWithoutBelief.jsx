import React from 'react';

const RealityWithoutBelief = () => {
  const amazonOrange = '#FF9900';
  const amazonDarkBlue = '#232F3E';
  const amazonLightBlue = '#37475A';
  const accentTeal = '#00A8CC';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: '#f8f9fa',
      color: '#1a1a1a',
      lineHeight: 1.7
    }}>

      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${amazonDarkBlue} 0%, ${amazonLightBlue} 100%)`,
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '18px', color: amazonOrange, fontWeight: 600, marginBottom: '15px', letterSpacing: '2px' }}>
            ⚡ A RADICAL NEW PHILOSOPHY ⚡
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            margin: '20px 0',
            lineHeight: 1.1,
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
          }}>
            REALITY WITHOUT BELIEF
          </h1>
          <p style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            margin: '30px auto',
            maxWidth: '700px',
            fontWeight: 500,
            color: '#f0f0f0'
          }}>
            Stop believing. Stop disbelieving. Start dealing with what is.
          </p>

          {/* Video Placeholder */}
          <div style={{
            backgroundColor: '#000',
            borderRadius: '12px',
            overflow: 'hidden',
            margin: '40px auto',
            maxWidth: '800px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            border: `3px solid ${amazonOrange}`
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              backgroundColor: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#888'
              }}>
                <div style={{ fontSize: '80px', marginBottom: '10px' }}>▶️</div>
                <div style={{ fontSize: '18px', fontWeight: 600 }}>VIDEO PLACEHOLDER</div>
                <div style={{ fontSize: '14px', marginTop: '5px' }}>Discover What This Book Is All About</div>
              </div>
            </div>
          </div>

          {/* First CTA */}
          <a
            href="AMAZON_LINK_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: amazonOrange,
              color: amazonDarkBlue,
              padding: '20px 50px',
              fontSize: '22px',
              fontWeight: 700,
              borderRadius: '8px',
              textDecoration: 'none',
              marginTop: '20px',
              boxShadow: '0 10px 30px rgba(255,153,0,0.4)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#FFB84D';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = amazonOrange;
              e.target.style.transform = 'scale(1)';
            }}
          >
            📖 GET YOUR COPY ON AMAZON
          </a>
          <div style={{ marginTop: '15px', fontSize: '14px', color: '#ccc' }}>
            ⭐⭐⭐⭐⭐ Join thousands of readers who've exited the belief trap
          </div>
        </div>
      </section>

      {/* Wake Up Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: amazonDarkBlue,
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          🔥 You've Been Lied To Your Entire Life
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Not by some conspiracy. Not by evil forces. But by the single most dangerous assumption you've ever made:
        </p>
        <p style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: accentTeal,
          padding: '30px',
          backgroundColor: '#e8f8f5',
          borderLeft: `6px solid ${accentTeal}`,
          margin: '30px 0',
          borderRadius: '4px'
        }}>
          💭 That you need to <em>believe</em> in something.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Your beliefs are costing you your life. Not metaphorically. <strong>Literally.</strong>
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Every moment you spend defending what you believe, arguing against what you disbelieve, protecting your worldview, justifying your positions—that's time spent playing a game that <strong>cannot be won</strong>.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Because here's the truth most people never realize:
        </p>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: amazonDarkBlue,
          textAlign: 'center',
          margin: '40px 0',
          padding: '20px',
          backgroundColor: '#fff3cd',
          borderRadius: '8px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          ⚠️ Reality does not require belief to function. Neither do you.
        </p>
      </section>

      {/* What This Book Is Section */}
      <section style={{
        backgroundColor: amazonDarkBlue,
        color: 'white',
        padding: '80px 20px',
        margin: '60px 0'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '40px',
            textAlign: 'center',
            color: amazonOrange
          }}>
            🎯 What Is "Reality Without Belief"?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            <div style={{
              padding: '30px',
              backgroundColor: amazonLightBlue,
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🚪</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px', color: amazonOrange }}>
                A Complete Exit
              </h3>
              <p style={{ fontSize: '1.05rem' }}>
                This is not another philosophy asking you to swap beliefs. It's a total exit from the belief-disbelief game itself.
              </p>
            </div>

            <div style={{
              padding: '30px',
              backgroundColor: amazonLightBlue,
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎭</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px', color: amazonOrange }}>
                Beyond Atheism & Theism
              </h3>
              <p style={{ fontSize: '1.05rem' }}>
                Not atheism. Not agnosticism. Not skepticism. This position refuses both belief AND disbelief as organizing principles.
              </p>
            </div>

            <div style={{
              padding: '30px',
              backgroundColor: amazonLightBlue,
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>💎</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px', color: amazonOrange }}>
                Uncomfortably Honest
              </h3>
              <p style={{ fontSize: '1.05rem' }}>
                No comfort. No reassurance. No validation. Only clarity and direct engagement with what's actually so.
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '1.3rem',
            textAlign: 'center',
            fontStyle: 'italic',
            color: '#e0e0e0',
            marginTop: '40px'
          }}>
            "This book will make every other self-help and philosophy book obsolete."
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: amazonDarkBlue,
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          ⚔️ The Belief-Disbelief Theater
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Watch any debate. Any comment section. Any argument between believers and skeptics.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Notice something? <strong>Nothing ever gets resolved.</strong>
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          That's because both sides are playing the same game—defending identity, not discovering truth.
        </p>

        <div style={{
          backgroundColor: '#fff5f5',
          border: '3px solid #dc3545',
          borderRadius: '8px',
          padding: '30px',
          margin: '40px 0'
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#dc3545', marginBottom: '20px' }}>
            ❌ The Trap Most People Never Escape:
          </h3>
          <ul style={{ fontSize: '1.15rem', lineHeight: 2, paddingLeft: '20px' }}>
            <li><strong>Belief is not a virtue</strong>—it's psychological comfort disguised as strength</li>
            <li><strong>Disbelief is not intelligence</strong>—it's the same comfort, inverted</li>
            <li><strong>Your certainty proves nothing</strong> except your need to feel certain</li>
            <li><strong>Conviction is addiction</strong> to being right</li>
            <li><strong>Identity becomes a belief trap</strong> you cannot escape</li>
          </ul>
        </div>

        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Believers and skeptics are mirror images. Same psychology. Different jerseys.
        </p>
        <p style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: accentTeal,
          textAlign: 'center',
          margin: '40px 0',
          padding: '25px',
          backgroundColor: '#e8f8f5',
          borderRadius: '8px'
        }}>
          💡 This book walks off the field entirely.
        </p>
      </section>

      {/* CTA Section 2 */}
      <section style={{
        backgroundColor: amazonOrange,
        padding: '60px 20px',
        textAlign: 'center',
        margin: '60px 0'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 800,
          color: amazonDarkBlue,
          marginBottom: '20px'
        }}>
          Ready to Exit the Game?
        </h3>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#2c2c2c' }}>
          Join the thousands who've already discovered freedom beyond belief and disbelief
        </p>
        <a
          href="AMAZON_LINK_PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: amazonDarkBlue,
            color: 'white',
            padding: '20px 50px',
            fontSize: '20px',
            fontWeight: 700,
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = amazonLightBlue;
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = amazonDarkBlue;
            e.target.style.transform = 'scale(1)';
          }}
        >
          🛒 ORDER NOW ON AMAZON
        </a>
      </section>

      {/* What's So Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: amazonDarkBlue,
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          🌍 What's So: The Foundation
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          This book is built on one unshakable principle, drawn from Werner Erhard's transformative work:
        </p>
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: amazonDarkBlue,
          padding: '30px',
          backgroundColor: '#f0f8ff',
          borderLeft: `6px solid ${accentTeal}`,
          margin: '30px 0',
          borderRadius: '4px',
          fontStyle: 'italic'
        }}>
          "What's so is just what's so. It doesn't care what you think, feel, intend, wish, want, or don't want."
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Reality proceeds without permission. Facts do not negotiate with preferences. Consequences are indifferent to your moral judgments.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Most human suffering comes not from what's so—but from the refusal to accept what's so.
        </p>

        <div style={{
          backgroundColor: '#f0fff4',
          border: '3px solid #28a745',
          borderRadius: '8px',
          padding: '30px',
          margin: '40px 0'
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#28a745', marginBottom: '20px' }}>
            ✅ What You'll Discover:
          </h3>
          <ul style={{ fontSize: '1.15rem', lineHeight: 2, paddingLeft: '20px' }}>
            <li>How to see without interpretation</li>
            <li>How to listen without agenda</li>
            <li>How to decide without narrative</li>
            <li>How to act without ideology</li>
            <li>How to let reality correct you</li>
          </ul>
        </div>

        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          When you stop arguing with reality, life becomes possible.
        </p>
      </section>

      {/* 50 Chapters Section */}
      <section style={{
        backgroundColor: '#f8f9fa',
        padding: '80px 20px',
        margin: '60px 0'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: amazonDarkBlue,
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            📚 50 Chapters. Complete Transformation.
          </h2>
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#555'
          }}>
            A comprehensive guide from theory to practice—covering every domain of human belief
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              { icon: '💔', title: 'Part I', subtitle: 'The Failure of Belief', desc: 'Why belief is not a virtue and conviction proves nothing' },
              { icon: '🎯', title: 'Part II', subtitle: "What's So", desc: 'Reality without interpretation, narrative, or emotional coloring' },
              { icon: '🎭', title: 'Part III', subtitle: 'The Belief-Disbelief Theater', desc: 'How believers and skeptics play the same broken game' },
              { icon: '⚡', title: 'Part IV', subtitle: 'Responsibility Without Comfort', desc: 'Action without certainty, hope, or fear' },
              { icon: '🌅', title: 'Part V', subtitle: 'A Different Way of Living', desc: 'Seeing, listening, and acting without belief' },
              { icon: '🚪', title: 'Part VI', subtitle: 'The Quiet Exit', desc: 'Freedom without identity. Peace without meaning.' }
            ].map((part, idx) => (
              <div key={idx} style={{
                padding: '25px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: `2px solid ${amazonOrange}`,
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>{part.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: accentTeal, marginBottom: '5px' }}>
                  {part.title}
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: amazonDarkBlue, marginBottom: '10px' }}>
                  {part.subtitle}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>
                  {part.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: amazonDarkBlue,
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          🎯 Is This Book For You?
        </h2>

        <div style={{
          backgroundColor: '#e8f8f5',
          border: `3px solid ${accentTeal}`,
          borderRadius: '8px',
          padding: '30px',
          margin: '30px 0'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: accentTeal, marginBottom: '20px' }}>
            ✅ This Book Is Perfect For You If:
          </h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: 2, paddingLeft: '20px' }}>
            <li>You're exhausted by belief systems and endless debates that resolve nothing</li>
            <li>You're tired of defending positions you're not even sure you hold anymore</li>
            <li>You sense that both theism and atheism miss the point entirely</li>
            <li>You're ready for clarity over comfort</li>
            <li>You can handle uncertainty without psychological collapse</li>
            <li>You want to exit the belief-disbelief game completely</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#fff5f5',
          border: '3px solid #dc3545',
          borderRadius: '8px',
          padding: '30px',
          margin: '30px 0'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc3545', marginBottom: '20px' }}>
            ⚠️ This Book Is NOT For You If:
          </h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: 2, paddingLeft: '20px' }}>
            <li>You need your beliefs for psychological stability</li>
            <li>You're seeking reassurance, validation, or comfort</li>
            <li>You want a new belief system to replace your old one</li>
            <li>You expect hand-holding or gentle persuasion</li>
            <li>You're not willing to question everything</li>
          </ul>
        </div>

        <p style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          textAlign: 'center',
          color: amazonDarkBlue,
          margin: '40px 0',
          fontStyle: 'italic'
        }}>
          "Some readers will find this threatening. Good. Beliefs don't like being examined."
        </p>
      </section>

      {/* CTA Section 3 */}
      <section style={{
        background: `linear-gradient(135deg, ${amazonDarkBlue} 0%, ${amazonLightBlue} 100%)`,
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        margin: '60px 0'
      }}>
        <h3 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          marginBottom: '20px',
          color: amazonOrange
        }}>
          🔥 Stop Defending. Start Living.
        </h3>
        <p style={{ fontSize: '1.3rem', marginBottom: '15px', maxWidth: '700px', margin: '0 auto 30px' }}>
          Freedom without identity. Peace without meaning. Nothing left to defend.
        </p>
        <a
          href="AMAZON_LINK_PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: amazonOrange,
            color: amazonDarkBlue,
            padding: '22px 60px',
            fontSize: '22px',
            fontWeight: 700,
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 10px 30px rgba(255,153,0,0.4)',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#FFB84D';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = amazonOrange;
            e.target.style.transform = 'scale(1)';
          }}
        >
          📖 GET THE BOOK NOW
        </a>
        <div style={{ marginTop: '20px', fontSize: '15px', color: '#ddd' }}>
          Available now on Amazon • Start reading today
        </div>
      </section>

      {/* About the Author Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: amazonDarkBlue,
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          ✍️ About Ketan Shukla
        </h2>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontSize: '1.15rem', marginBottom: '20px', lineHeight: 1.8 }}>
            <strong>Ketan Shukla</strong> is a passionate advocate for critical thinking, rational analysis, and evidence-based understanding. A lover of philosophy and dedicated deep thinker, he delves into the core of every issue to extract meaningful, transformative insights.
          </p>
          <p style={{ fontSize: '1.15rem', marginBottom: '20px', lineHeight: 1.8 }}>
            With relentless drive to uncover truth and challenge conventional wisdom, Ketan has authored multiple groundbreaking works including:
          </p>
          <ul style={{ fontSize: '1.1rem', lineHeight: 2, paddingLeft: '25px', marginBottom: '20px' }}>
            <li><em>"Destroy Your Beliefs - By Using Your Intelligence"</em></li>
            <li><em>"Repetition - Mother of Mastery"</em></li>
            <li><em>"The Clarity of Reality: Embracing What Is"</em></li>
          </ul>
          <p style={{ fontSize: '1.15rem', marginBottom: '20px', lineHeight: 1.8 }}>
            <em>"Reality Without Belief"</em> represents the culmination of decades of deep thinking about belief, reality, and what it means to truly see what's so. This is not a position arrived at easily—it required years of questioning and confronting uncomfortable truths.
          </p>
          <p style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            color: accentTeal,
            fontStyle: 'italic',
            textAlign: 'center',
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#e8f8f5',
            borderRadius: '8px'
          }}>
            "I wrote this book for those ready to question everything—including the very framework of questioning itself."
          </p>
        </div>
      </section>

      {/* Final Powerful Statement Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: amazonDarkBlue,
          marginBottom: '30px'
        }}>
          💎 The Choice Is Simple
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          margin: '40px 0'
        }}>
          <div style={{
            padding: '40px',
            backgroundColor: '#fff5f5',
            borderRadius: '12px',
            border: '3px solid #dc3545'
          }}>
            <div style={{ fontSize: '60px', marginBottom: '15px' }}>❌</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc3545', marginBottom: '15px' }}>
              Keep Playing the Game
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7 }}>
              Defend beliefs. Attack disbelievers. Feel certain. Stay trapped. Never resolve anything. Waste your life arguing.
            </p>
          </div>

          <div style={{
            padding: '40px',
            backgroundColor: '#f0fff4',
            borderRadius: '12px',
            border: '3px solid #28a745'
          }}>
            <div style={{ fontSize: '60px', marginBottom: '15px' }}>✅</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#28a745', marginBottom: '15px' }}>
              Walk Off the Field
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7 }}>
              Exit the belief-disbelief trap. Align with what's so. Act without certainty. Live without defending. Be free.
            </p>
          </div>
        </div>

        <p style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          color: amazonDarkBlue,
          margin: '50px 0 30px',
          lineHeight: 1.3
        }}>
          Reality does not require belief to function.<br/>
          <span style={{ color: accentTeal }}>Neither do you.</span>
        </p>
      </section>

      {/* Final CTA Section */}
      <section style={{
        backgroundColor: amazonOrange,
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            color: amazonDarkBlue,
            marginBottom: '20px',
            lineHeight: 1.1
          }}>
            Your Exit Awaits
          </h2>
          <p style={{
            fontSize: '1.4rem',
            marginBottom: '40px',
            color: '#2c2c2c',
            fontWeight: 500
          }}>
            Join thousands who've discovered what lies beyond belief and disbelief
          </p>
          <a
            href="AMAZON_LINK_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: amazonDarkBlue,
              color: 'white',
              padding: '25px 70px',
              fontSize: '24px',
              fontWeight: 700,
              borderRadius: '10px',
              textDecoration: 'none',
              boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = amazonLightBlue;
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = amazonDarkBlue;
              e.target.style.transform = 'scale(1)';
            }}
          >
            🚀 ORDER YOUR COPY NOW
          </a>
          <div style={{ marginTop: '25px', fontSize: '16px', color: '#333', fontWeight: 600 }}>
            ⚡ Available Immediately on Amazon
          </div>
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
            📦 Free delivery for Prime members
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: amazonDarkBlue,
        color: '#999',
        padding: '40px 20px',
        textAlign: 'center',
        fontSize: '14px'
      }}>
        <p style={{ marginBottom: '10px' }}>
          © {new Date().getFullYear()} Ketan Shukla. All rights reserved.
        </p>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          <em>Reality Without Belief</em> • A philosophical breakthrough
        </p>
        <button
          onClick={scrollToTop}
          style={{
            backgroundColor: amazonOrange,
            color: amazonDarkBlue,
            border: 'none',
            padding: '12px 30px',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#FFB84D'}
          onMouseOut={(e) => e.target.style.backgroundColor = amazonOrange}
        >
          ↑ Back to Top
        </button>
      </footer>

    </div>
  );
};

export default RealityWithoutBelief;