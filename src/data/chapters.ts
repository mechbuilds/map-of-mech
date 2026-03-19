export interface ChapterNode {
  id: number;
  label: string;
  sublabel: string;
  tag: string;
  color: string;
  left: string;
  top: string;
  headline: string;
  paragraphs: string[];
  pullquote: string;
  nextId: number | null;
  ctaLabel?: string;
  ctaRoute?: string;
}

export const NODES: ChapterNode[] = [
  {
    id: 1,
    label: "THE ORIGIN",
    sublabel: "Philippines",
    tag: "CHAPTER 01",
    color: "#f59e0b",
    left: "76%",
    top: "55%",
    headline: "I GREW UP WHERE\nDOUBT WAS A SIN",
    paragraphs: [
      "Growing up in the Philippines meant growing up inside a system. Church every Sunday. Prayers at every meal. Bible verses on the wall. The community, the family, the school — all one unified voice telling you how the world worked and who made it.",
      "Nobody asked if you believed. You just did. Belief wasn't a choice — it was the water you swam in. Questioning was not rebellion. Questioning simply didn't exist as a concept.",
      "And then I started reading. Not scripture. Books. Real ones. Science. History. Philosophy. The kind that ask questions nobody in my neighborhood was asking. That's when the cracks appeared — quietly, like water getting under old paint.",
    ],
    pullquote: "They gave me all the answers before I could ask the questions.",
    nextId: 2,
  },
  {
    id: 2,
    label: "THE SIGNAL",
    sublabel: "A Phone Call",
    tag: "CHAPTER 02",
    color: "#c084fc",
    left: "70%",
    top: "36%",
    headline: "WE TALKED EVERY\nSECOND. EVERY MINUTE.",
    paragraphs: [
  "I was single and I intended to stay that way until I had a reason not to. No drama, no distractions. I was working every day, taking care of myself, aware enough of my environment to know exactly what I didn't want — and getting pregnant and depending on someone who wasn't worth depending on was at the top of that list.",
  "Then my brother called. Not a text. A call. He lived in Cebu City, I was in Dagupan City, Pangasinan — different islands, different lives. He told me he'd met an American. Said he was the nicest guy, genuinely decent, looking for a good woman to build something real with. My brother asked if I was open to just talk to him. The American had already left and was back in the US by then. No pressure. Just — are you open?",
  "I sent a message. That message turned into every second, every minute, messages that never stopped. Weeks of that. Then he flew back to the Philippines — not to travel, not to look around — specifically to see me. He stayed 30 days. Then he left. And we kept talking. All the time. He came back a second time and we got married and started the paperwork. Seven trips total over two years. Visa process, medical exams, interviews, fees, waiting, more waiting. He showed up every single time."
],
pullquote: "I sent one message. He got on a plane. Seven times.",
    nextId: 3,
  },
  {
    id: 3,
    label: "THE PROOF",
    sublabel: "7 Flights · 2 Years",
    tag: "CHAPTER 03",
    color: "#38bdf8",
    left: "50%",
    top: "42%",
    headline: "SEVEN TIMES.\nTHAT'S NOT ROMANCE.\nTHAT'S EVIDENCE.",
    paragraphs: [
  "Seven trips. Two years. Let me tell you what that actually means. Every flight from the US to the Philippines costs real money. Every trip costs time away from his life, his work, his routine. Every goodbye at the airport was made without any guarantee that the visa would come through, that the paperwork would clear, that it would all work out in the end. He did it anyway. Every single time.",
  "People use the word effort like it's a feeling — like it means caring deeply or wanting something badly. It isn't a feeling. Effort is a record. It's what shows up in the data when you trace what someone actually did versus what they said they would do. His record has seven international flights on it. That's the data.",
  "The visa process alone would have ended most people. Medical exams, interviews, mountains of paperwork, fees that keep coming, waiting periods with no guaranteed outcome. The immigration system is not designed to make anything easy and it doesn't apologize for that. He went through every part of it without being asked twice. Not because it was easy. Because he had already decided and the difficulty of it didn't change the decision.",
],
pullquote: "Effort is not a feeling. It is a record. His record has seven flights on it.",
    nextId: 4,
  },
  {
    id: 4,
    label: "THE AMERICAN",
    sublabel: "United States",
    tag: "CHAPTER 04",
    color: "#3b82f6",
    left: "22%",
    top: "38%",
    headline: "AMERICA DIDN'T\nSHOCK ME.\nFREEDOM DID.",
    paragraphs: [
  "We got married in the Philippines and I started the visa process. Then came the waiting — the kind with no guaranteed end date. Forms, interviews, fees, more forms, more waiting. The immigration system doesn't care about your story. It processes documents. You are a file number until you aren't.",
  "I landed in 2019. The culture shock wasn't the food or the size of everything or the language. It was the freedom. The specific, quiet, completely ordinary freedom to think what you want, say what you think, question what you were told, and not apologize for any of it. In the Philippines there is a version of you that the community needs you to be. In America I slowly realized that version was optional. I could just be what I actually was. That felt illegal at first. Then it felt like oxygen.",
  "This is where everything started changing. Not because someone handed me a new belief system — because for the first time I was in an environment where I could find things out for myself. Read without a filter. Ask without consequence. Think without permission. Three years after arriving I applied for citizenship. More paperwork, more interviews, more exams, more waiting. Five years after landing I sat for the final interview and the civics exam. I passed. I became a citizen. It cost us time and money and energy we didn't always have. It was worth every single part of it.",
],
pullquote: "I didn't just cross an ocean. I crossed into the first place that ever let me think for myself.",
    nextId: 5,
  },
  {
    id: 5,
    label: "THE RESET",
    sublabel: "BSCS Degree",
    tag: "CHAPTER 05",
    color: "#4ade80",
    left: "28%",
    top: "58%",
    headline: "I STARTED OVER.\nON PURPOSE.",
    paragraphs: [
  "I took my Computer Science degree fully online. We have 23 acres in California but when the heat gets unbearable — and it does, to the point where staying isn't an option — we'd take the RV and go. Different states, into Mexico, wherever the weather made sense. I did coursework from all of it. Assignments submitted from campgrounds, exams taken on the road, lectures watched in places I'd never been before. The degree happened in the middle of a life that was already moving.",
  "I chose CS because technology always made sense to me in a way other things didn't. Systems. Logic. Something either works or it doesn't — no ambiguity, no 'bahala na', no 'it's God's will'. After a lifetime inside systems that ran entirely on vague answers and enforced certainty, the binary clarity of code felt like solid ground. I was already a fan of technology. This was just finally making it official.",
  "The imposter syndrome was real. The late nights were real. But nobody in my program knew the context — the land, the travel, the life happening around the studying. They just saw the work submitted on time. And the work was enough. The first time my code ran clean — no errors, no fixes, just working — nothing in my previous life came close to that feeling.",
],
pullquote: "Code doesn't care where you wrote it. It either works or it doesn't. I respect that.",
    nextId: 6,
  },
  {
    id: 6,
    label: "THE BUILD",
    sublabel: "NexCoresis Studio",
    tag: "CHAPTER 06",
    color: "#facc15",
    left: "18%",
    top: "72%",
    headline: "WE DIDN'T WAIT\nFOR PERMISSION.",
    paragraphs: [
  "There's a point you reach when life gets comfortable — genuinely, unexpectedly comfortable — and you realize you never actually planned for this moment. You just kept moving and one day you looked around and thought: this is it. This is the life I was working toward without knowing exactly what it looked like. I'm living in it.",
  "And then you think about the people you left behind. Not in a guilty way. In a practical way. I have sisters. Smart, capable women who are still in the Philippines where the first priority every single day is just survival. Not dreams, not goals, not building something — survival. The system doesn't give you time to think about what you actually want when what you need is already consuming everything you have.",
  "Two of my sisters have the potential to do real work in tech and design. I knew it. So I built NexCoresis Studio for the three of us. A website agency — developer, teacher, designer, two countries, one team. Not because I had the perfect plan or the right connections or enough experience according to anyone's algorithm. Because I had a stable foundation, I had skills, and I had sisters who deserved a seat at a table that didn't exist yet. So we built the table.",
],
pullquote: "I made it out. Then I looked back and built something my sisters could stand on too.",
    nextId: 7,
  },
  {
    id: 7,
    label: "THE VOICE",
    sublabel: "Raw Opinions",
    tag: "CHAPTER 07",
    color: "#f87171",
    left: "32%",
    top: "22%",
    headline: "NOW I SAY WHAT\nI THINK.\nALL OF IT.",
    paragraphs: [
  "I spent the first half of my life being told what to think. The church told me what was true. The culture told me how to behave. The community told me who to be. I followed all of it because that was the only option available to a girl from Dagupan City who grew up in a family of seven where survival was the first item on every day's agenda and asking questions was a luxury nobody had time for.",
  "Then everything changed. A phone call from my brother. An American who got on a plane seven times. A country that let me think out loud for the first time. A religion I finally examined and walked away from. A degree finished from the road. A studio built for sisters who deserved better than what the system offered them. A citizenship earned after five years of paperwork, exams, interviews, and waiting rooms.",
  "All of that happened. I lived every part of it. And what comes out the other side of a life like that is not gratitude for being polished or quiet or careful with other people's comfort. What comes out is a voice. Unfiltered. Built from actual experience. With zero tolerance for the kind of dishonesty that hides inside politeness, viral lies that travel faster than facts, and herd thinking that keeps entire generations from forming a single original thought. I know what silence costs. I paid for it for years. That chapter is closed.",
],
pullquote: "I didn't find my voice. I built it — out of every hard thing I refused to stay quiet about.",
    nextId: null,
    ctaLabel: "READ THE SIGNAL →",
    ctaRoute: "/blog",
  },
];
