import { motion } from "framer-motion";
import PageFooter from "@/components/PageFooter";

const STATS = [
  { value: "7", color: "#f59e0b", desc: "Flights he took to prove it" },
  { value: "5", color: "#38bdf8", desc: "Years to become a citizen" },
  { value: "1", color: "#f87171", desc: "Voice. Unfiltered." },
];

const BIO = [
  "I'm originally from Iligan City. I moved to Dagupan City, Pangasinan in 2013 — one of seven kids in a family where survival came before everything else. I was working at thirteen. Not by choice. By necessity. That's what happens when your parents are too busy having children they can't fully take care of to notice that each one of you has to figure out life earlier than you should.",
  "I was baptized into the LDS church at eight years old. I didn't choose that — no eight year old chooses theology. I carried it for two decades. The rules, the community, the identity, the enforced silence around every question that didn't have a pre-approved answer. I left when I finally started asking those questions honestly and found that the answers had been kept from me on purpose.",
  "In 2015 my brother — who lived in Cebu City — called me. He'd met an American. Said he was the nicest guy, genuinely decent, looking for something real. My brother asked if I was open to just talk to him. The American had already flown home to the US. I sent one message. That message turned into every second, every minute, non-stop conversation across twelve time zones. He flew back to the Philippines to see me. Stayed 30 days. Left. Came back. Seven trips total over two years. We got married. I started the visa process. I landed in America in 2019.",
  "Three years after arriving I applied for citizenship. More paperwork, more interviews, more exams, more waiting rooms. Five years after landing I sat for the final interview and the civics exam. I passed. I became a citizen. It cost us time and money and energy we didn't always have. Every part of it was worth it.",
  "I took my Computer Science degree fully online — through the movement, through the uncertainty, through the years of building a life from scratch in a country that wasn't mine yet. We live on land in California. When the heat gets unbearable we take the RV and go — different states and across the border into Mexico, wherever the weather makes sense. The original dream was a sailboat. Life gave us something else. We kept moving anyway.",
  "I built NexCoresis Studio for my sisters. Two of them back in the Philippines — smart, capable women stuck in a system where survival consumes everything before ambition gets a turn. I made it out. Then I looked back and built something they could stand on too. Three people, two countries, one agency.",
  "Now I write. About tech, about culture, about the herd mentality that keeps entire generations from forming a single original thought. About what it costs to leave a system that was built to keep you inside it. About what you find on the other side when you finally stop apologizing for thinking for yourself.",
];

const PHOTOS = [
  { src: "/mech.jpg", label: "THE PERSON" },
  { src: "/mech1.jpg", label: "THE ROAD" },
  { src: "/mech2.jpg", label: "THE OFFICE" },
];

const AboutPage = () => (
  <motion.div
    className="min-h-screen"
    style={{ background: "#050507", padding: "80px 46px 140px" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div style={{ maxWidth: 860, margin: "0 auto" }}>

      {/* Eyebrow */}
      <p
        className="font-mono-label tracking-[0.38em] mb-5"
        style={{ fontSize: "11px", color: "#f87171" }}
      >
        THE PERSON BEHIND THE MAP
      </p>

      {/* Title */}
      <h1
        className="font-display leading-[0.9] mb-12"
        style={{ fontSize: "clamp(56px,9vw,110px)", color: "white" }}
      >
        WHO IS
        <br />
        MECH
      </h1>

      {/* Photo Gallery */}
      <motion.div
        style={{ marginBottom: 52 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 8,
          }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              {/* Accent border top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg, #f87171, transparent)",
                  zIndex: 2,
                }}
              />

              {/* Image */}
              <img
                src={photo.src}
                alt={photo.label}
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  filter:
                    "brightness(0.88) contrast(1.05) saturate(0.9)",
                }}
              />

              {/* Bottom gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background:
                    "linear-gradient(transparent, rgba(5,5,7,0.9))",
                  zIndex: 1,
                }}
              />

              {/* Label */}
              <p
                className="font-mono-label tracking-[0.25em]"
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 14,
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.5)",
                  zIndex: 2,
                }}
              >
                {photo.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <p
          className="font-mono-label tracking-[0.2em]"
          style={{
            fontSize: "9px",
            color: "rgba(255,255,255,0.2)",
            marginTop: 10,
            textAlign: "right",
          }}
        >
          CALIFORNIA · ON THE ROAD · THE WORK
        </p>
      </motion.div>

      {/* Stats */}
      <div
        className="flex gap-10 py-8 mb-14 flex-wrap"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {STATS.map((s) => (
          <div key={s.value + s.color}>
            <p
              className="font-display"
              style={{ fontSize: 56, color: s.color, lineHeight: 1 }}
            >
              {s.value}
            </p>
            <p
              className="font-mono-label tracking-[0.12em] mt-2"
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bio */}
      {BIO.map((p, i) => (
        <motion.p
          key={i}
          className="font-body mb-6"
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.9,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.1 }}
        >
          {p}
        </motion.p>
      ))}

      {/* Divider */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)",
          margin: "40px 0",
        }}
      />

      {/* Closing line */}
      <p
        className="font-display tracking-[0.04em]"
        style={{
          fontSize: "clamp(20px,2.5vw,34px)",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.3,
        }}
      >
        Atheist. Immigrant. Developer. Citizen.
        <br />
        I have a low tolerance for dishonesty.
        <br />
        <span style={{ color: "#f87171" }}>That's the whole story.</span>
      </p>
    </div>

    <PageFooter />
  </motion.div>
);

export default AboutPage;