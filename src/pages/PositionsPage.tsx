import { motion } from "framer-motion";
import PageFooter from "@/components/PageFooter";

const ENTRIES = [
  {
    color: "#f59e0b",
    platform: "YOUTUBE",
    context: "Responding to: Bela Padilla — Disconnect To Reconnect",
    date: "2025",
    tags: ["HERD MENTALITY", "PHILIPPINES", "SOCIAL MEDIA", "IDENTITY"],
    body: [
      "What Bela said about Filipinos following the crowd is a real psychological phenomenon called herd mentality. When you grow up in a culture where fitting in matters more than thinking for yourself, you slowly stop forming your own opinions. You just absorb whatever the group believes — and the dangerous part is most people never even notice it's happening.",
      "Same mechanics as religion, same mechanics as politics, same mechanics as trend culture. Just tell people what to believe, repeat it enough times, and they'll defend it like it was their own idea.",
      "And this is getting worse, not better. Our country is one of the most overpopulated countries in the region, and we're producing generations of young people who were handed a smartphone before they were handed critical thinking skills.",
      "What they call 'social media' today is barely social. It's a pipeline of misinformation, propaganda, outrage, and noise. Kids are growing up measuring their worth in likes, forming their worldview through algorithm-fed content, and nobody's teaching them how to filter any of it.",
      "The result? A generation that is more connected than ever but more lost than ever. Drug addiction among the youth is rising. Suicide rates are climbing. And a huge part of that is identity collapse: young people who never learned who they actually are because they were too busy performing for an audience or numbing themselves from the chaos around them.",
      "Reality hits them and they have zero tools to handle it. Everything was filtered, everything was fast, everything was designed to make them feel something instantly — and now they don't know how to feel anything slowly.",
      "Here's the truth nobody wants to say out loud: life is survival. It always has been. There are no fairytales, no guaranteed happy endings, no one person or belief system that will save you from yourself. The sooner you understand that, the sooner you stop waiting to be rescued and start building something real.",
      "The only person you can fully trust to show up for you every single time is yourself. Not because people are bad — but because no one else lives inside your head, carries your experiences, or feels the weight of your specific life.",
      "Going offline, stepping back, and sitting in silence — that's not just self-care content. That's the beginning of self-awareness. And self-awareness is the only real survival skill that matters.",
      "I just hope the younger generation finds that before the world convinces them they don't need to look.",
    ],
    pullout: "Life is survival. It always has been. Stop waiting to be rescued.",
  },
  {
    color: "#4ade80",
    platform: "YOUTUBE",
    context: "Responding to: a viral reel claiming a swinging swing was paranormal activity",
    date: "2025",
    tags: ["CRITICAL THINKING", "PARANORMAL", "MISINFORMATION", "COMMON SENSE"],
    body: [
      "Three swings. One moves. You grab your phone and tell the internet it's a ghost.",
      "Did you check the swing? Did you look at the bolt on the side that's making it sit heavier than the others? Did you consider that one side being looser than the other would cause exactly this kind of movement in any light breeze?",
      "No. You didn't check anything. You decided first and filmed second. That's not open-mindedness. That's laziness with a spiritual aesthetic.",
      "The paranormal content genre runs entirely on this — people who see something they don't immediately understand and skip the thirty seconds of basic reasoning that would explain it. Because the ghost story gets more views than the maintenance issue. Because mystery feels better than the mundane truth.",
      "Here's the thing about 'I don't know what that is' — it does not mean 'therefore supernatural.' It means you don't know yet. Go find out. That's what curious people do. They investigate before they conclude.",
      "The swing was moving because physics exists. That's the whole story.",
    ],
    pullout: "You didn't investigate. You just decided. And then you filmed it and told everyone.",
  },
  {
    color: "#c084fc",
    platform: "YOUTUBE",
    context: "Responding to: comment section debate about whether immigrants should 'go back to their country'",
    date: "2025",
    tags: ["IMMIGRATION", "IDENTITY", "AMERICA", "FACTS"],
    body: [
      "I went through every single part of the legal immigration process. Medical exams. Background checks. Multiple interviews. Years of waiting with no guaranteed outcome. Fees that kept coming. Paperwork that never seemed to end.",
      "Then I applied for citizenship. More exams. More interviews. More waiting. Five years after landing I raised my right hand in a federal building and became a citizen of this country.",
      "So when someone tells me to 'go back to my country' — I want to be very clear about what they're actually saying. They're saying that no amount of process, no amount of investment, no amount of years and commitment and legal paperwork is ever going to be enough for them. Because what they actually mean is that I don't look like what they think an American looks like.",
      "That's not a policy position. That's just a feeling dressed up as one.",
      "America is a country of people who came from somewhere else. The ones who were here first didn't build the immigration system — the people who came later did, mostly to control who else could come. That history is not complicated. It's just inconvenient for a certain kind of argument.",
      "I did everything right. I earned this. And I'm not going anywhere.",
    ],
    pullout: "I did everything right. I earned this. And I'm not going anywhere.",
  },
];

const PositionsPage = () => {
  return (
    <motion.div
      className="min-h-screen"
      style={{ background: "#050507", padding: "62px 46px 140px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            marginBottom: 52,
            paddingBottom: 40,
          }}
        >
          <p
            className="font-mono-label tracking-[0.35em] mb-[14px]"
            style={{ fontSize: "11px", color: "#c084fc" }}
          >
            ARGUMENTS I'VE MADE IN OTHER PEOPLE'S SPACES
          </p>
          <h1
            className="font-display leading-[0.9] mb-4"
            style={{ fontSize: "clamp(52px,9vw,120px)" }}
          >
            THE POSITION
            <br />
            LOG
          </h1>
          <p
            className="font-body mb-10"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)" }}
          >
            Every argument has a paper trail. These are mine.
          </p>
        </div>

        {ENTRIES.map((entry, idx) => (
          <motion.div
            key={idx}
            className="relative mb-5"
            style={{
              background: "#0c0c10",
              border: "1px solid rgba(255,255,255,0.06)",
              borderLeft: `3px solid ${entry.color}`,
              padding: "40px 44px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
          >
            {/* Top meta row */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <span
                  className="font-mono-label tracking-[0.3em]"
                  style={{ fontSize: "11px", color: entry.color }}
                >
                  {entry.platform}
                </span>
                <span
                  style={{
                    width: 1,
                    height: 12,
                    background: "rgba(255,255,255,0.15)",
                    display: "inline-block",
                  }}
                />
                <span
                  className="font-mono-label tracking-[0.2em]"
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}
                >
                  IN RESPONSE TO:
                </span>
              </div>
              <span
                className="font-mono-label tracking-[0.2em]"
                style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}
              >
                {entry.date}
              </span>
            </div>

            {/* Context line */}
            <p
              className="font-body italic mb-8"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                paddingBottom: 20,
              }}
            >
              {entry.context}
            </p>

            {/* First paragraph larger as opener */}
            <p
              className="font-body mb-6"
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              {entry.body[0]}
            </p>

            {/* Middle paragraphs */}
            {entry.body.slice(1, Math.floor(entry.body.length / 2) + 1).map((p, i) => (
              <p
                key={i}
                className="font-body mb-5"
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.9,
                }}
              >
                {p}
              </p>
            ))}

            {/* Mid-article visual break */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                margin: "32px 0",
              }}
            />

            {/* Second half paragraphs */}
            {entry.body.slice(Math.floor(entry.body.length / 2) + 1).map((p, i) => (
              <p
                key={i}
                className="font-body mb-5"
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.9,
                }}
              >
                {p}
              </p>
            ))}

            {/* Pullquote */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "28px 0",
                margin: "32px 0",
              }}
            >
              <p
                className="font-display tracking-[0.04em]"
                style={{
                  fontSize: "clamp(20px,2.5vw,32px)",
                  color: entry.color,
                  lineHeight: 1.2,
                }}
              >
                "{entry.pullout}"
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-display tracking-[0.2em]"
                  style={{
                    fontSize: "11px",
                    border: `1px solid ${entry.color}`,
                    color: entry.color,
                    padding: "4px 12px",
                    borderRadius: 2,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* More coming placeholder */}
        <div
          className="text-center"
          style={{
            border: "1px dashed rgba(255,255,255,0.1)",
            padding: 40,
            marginTop: 20,
          }}
        >
          <p
            className="font-mono-label tracking-[0.3em]"
            style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}
          >
            More positions being archived.
          </p>
          <p
            className="font-mono-label tracking-[0.2em] mt-2"
            style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}
          >
            Every argument has a paper trail.
          </p>
        </div>
      </div>

      <PageFooter />
    </motion.div>
  );
};

export default PositionsPage;