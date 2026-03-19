export interface BlogPost {
  id: number;
  pillar: string;
  pillarColor: string;
  headline: string;
  teaser: string;
  readTime: string;
  wide: boolean;
  author: string;
  date: string;
  pullquote: string;
  content: string[];
}

export const PILLARS = ["ALL", "THE HERD", "THE VERDICT", "THE CODE", "THE CROSSING", "NO FILTER", "THE LAND"];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    pillar: "THE HERD",
    pillarColor: "#f59e0b",
    headline: "Why Filipinos Follow The Crowd And Why It's Getting Worse",
    teaser: "Herd mentality isn't a flaw in the system. It is the system.",
    readTime: "7 min",
    wide: true,
    author: "Mech",
    date: "Mar 10, 2026",
    pullquote: "You stop noticing you're doing it. It becomes automatic. It becomes you.",
    content: [
      "Here's how it starts. You're born into a country where the group is not just important — it's everything. The family. The church. The neighborhood. Every institution around you is running the same program: don't stand out, don't question, don't be the one who thinks differently. Fitting in isn't a preference. It's survival.",
      "So you adapt. You learn to read the room before you speak. You learn to agree even when you disagree. You learn that the safest answer is always the one everyone else already gave. And here's the part nobody warns you about — you stop noticing you're doing it. It becomes automatic. It becomes you.",
      "That's herd mentality. Not stupidity. Not weakness. A survival mechanism that outlived its usefulness by about fifty years.",
      "Now put that same wiring on a smartphone with unlimited data and an algorithm that knows exactly which emotion makes you stay on the app longer. You're not just following the herd anymore. You're following a herd that was hand-picked for you by a machine that profits every time you react.",
      "And we wonder why political discourse in the Philippines looks the way it does. We wonder why a demonstrably corrupt politician gets defended by the exact people who suffered most under that corruption. Facts stopped mattering because facts were never the currency. Belonging is the currency. And belonging means agreeing with your group — even when your group is wrong, even when your group is hurting you.",
      "I grew up inside this system. I know the warmth of shared belief. I also know the exact price of it. It costs you your ability to think independently. And once that's gone, it takes years to get back — if you get it back at all.",
      "The exit is simple but uncomfortable. You have to be willing to not know. You have to be okay with being the only person in the room with a different opinion and not immediately apologizing for it. You have to choose being right over being comfortable.",
      "Most people won't do it. Not because they're incapable — because the social cost is real and immediate and the benefit of independent thinking is slow and invisible. The system is designed exactly that way.",
      "The first step out is just noticing you're in it. Most people never even get that far."
    ]
  },
  {
    id: 2,
    pillar: "THE HERD",
    pillarColor: "#f59e0b",
    headline: "Social Media Didn't Connect Us. It Replaced Us.",
    teaser: "A generation more connected than ever and more lost than ever.",
    readTime: "6 min",
    wide: false,
    author: "Mech",
    date: "Mar 12, 2026",
    pullquote: "Your loneliness is a feature not a bug. A lonely person scrolls more.",
    content: [
      "There is a version of connection that looks exactly like connection but isn't. You see it everywhere. People at dinner on their phones. People at concerts watching through a screen instead of their own eyes. People sharing mental health awareness posts while being completely unreachable to the actual humans in their life.",
      "Social media didn't connect us. It handed us a replacement for connection that is cheaper, easier, and completely empty.",
      "Real connection is inconvenient. It requires your time, your patience, your full attention. It requires you to sit with someone while they're boring or difficult or in pain. It requires you to show up when you don't feel like showing up. It costs something.",
      "Social media costs nothing. You tap a heart. You type lol. You share something that made you feel seen and you collect the validation that comes back. And your brain — which evolved to track social belonging as a survival mechanism — registers all of it as real. As enough.",
      "It isn't enough. Not even close.",
      "What we're building now is a generation with thousands of followers and no one to call at 2am. A generation that knows exactly how to perform their personality for an audience but has no idea who they are when the audience is gone. A generation so practiced at being watched that they've forgotten how to just exist.",
      "The platform is not a neutral tool. It is an extraction machine that runs on your attention and sells it. Your loneliness is a feature, not a bug. A lonely person scrolls more. An insecure person engages more. An angry person shares more. The algorithm didn't create these feelings — it just learned to farm them.",
      "The fix is boring. Put the phone down. Go sit with a real person and have a real conversation that goes nowhere useful and gets no likes. Do it regularly. That's it. That's connection. Nobody's watching and that's exactly the point."
    ]
  },
  {
    id: 3,
    pillar: "THE HERD",
    pillarColor: "#f59e0b",
    headline: "I Gave The Mormon Church My Entire Childhood. Here's What I Got Back.",
    teaser: "Not faith. The permission to finally ask questions.",
    readTime: "10 min",
    wide: false,
    author: "Mech",
    date: "Mar 14, 2026",
    pullquote: "He didn't rescue me from religion. He just answered my questions honestly. That was enough.",
    content: [
      "I was eight years old when I got baptized into the LDS church. Eight. I didn't choose that. No eight year old chooses theology — they inherit whatever the adults around them have already decided is true. I inherited the Mormon church and I carried it for the next two decades of my life without ever being given a real reason to put it down.",
      "For those who don't know how the LDS church works — it's not like showing up to mass on Sunday and going home. It is a total system. Your social life runs through the church. Your sense of worth is tied to your obedience to church rules. Your identity is membership. The community, the family connections, the friendships — all of it exists inside that structure. Leaving doesn't just mean changing what you believe on Sunday morning. It means dismantling the entire architecture of who you are.",
      "The rules were the first thing that started breaking it for me. Not in a dramatic way — just a slow accumulation of things that didn't make sense when you looked at them honestly. Rules that seemed less like guidance from a loving God and more like control mechanisms designed by people who needed you compliant. The more I looked, the more I saw the machinery underneath the theology.",
      "But here's the thing about high-control religion — it prepares you for doubt. It teaches you that doubt is weakness, that questions are the enemy of faith, that the feeling of uncertainty is a sign you need to pray more and obey more. So for a long time I did exactly that. I pushed the questions down. I performed the faith. I stayed inside the system because the cost of leaving felt unsurvivable.",
      "Then I met my husband. He was already an atheist — had been since he was young. He didn't come at me with arguments or try to convince me of anything. He just answered my questions. Every time I asked something I'd never been allowed to ask before, he gave me a straight answer with actual evidence behind it. No deflection. No 'that's just how faith works.' Just facts, laid out clearly, and the space to think about them myself.",
      "He recommended Matt Dillahunty. If you don't know who that is — look him up. He's one of the sharpest thinkers on this subject alive and he has a gift for saying the thing that cuts straight through the deflection that religious arguments depend on. Watching him didn't make me angry at religion. It made me realize I had never actually examined what I believed. I had only ever defended it.",
      "Coming to America accelerated everything. In the Philippines, inside the LDS community, the walls of the system were everywhere. In America I could see the church from the outside for the first time. I could see how it operated as an institution. I could talk to people who had left and survived. I could read things that the church had spent my entire childhood steering me away from. The open air of genuine intellectual freedom is something you cannot fully understand until you've lived without it.",
      "The LDS church, like every high-control religion, runs on information management. It controls what you read, who you spend time with, what questions are acceptable, what conclusions are permitted. The moment you step outside that information environment and start reading without a filter — the whole thing unravels very quickly. Not because faith is fragile. Because the specific claims are falsifiable and they have been falsified.",
      "DNA evidence disproves the Book of Mormon's account of ancient American civilizations. The historical record contradicts the church's founding narrative in ways the church itself has quietly acknowledged. The policies, the exclusions, the financial structures — none of it looks like divine guidance when you examine it without the filter of required belief.",
      "I don't say any of this with anger anymore. I said it with anger for a while and that was necessary. But what I feel now is something cleaner — clarity. I gave the church my entire childhood. My formation. My identity. My unquestioning obedience during the years when I was most capable of genuine curiosity and least equipped to protect myself from a system designed to capture that curiosity and redirect it.",
      "What I got back when I left was harder than what I lost. No community waiting for me on the other side. No cosmic safety net. No guaranteed meaning. Just the real world, exactly as it is, asking me to figure out who I actually am when nobody is telling me.",
      "Turns out that's enough. More than enough. The only life I get is this one and I am done spending it on answers that were designed to stop me from asking better questions.",
      "If you're inside a system like this and something in you keeps itching — that itch is not weakness. That itch is your intelligence trying to get your attention. Listen to it."
    ]
  },
  {
    id: 4,
    pillar: "THE VERDICT",
    pillarColor: "#38bdf8",
    headline: "You Saw Something You Didn't Understand. You Called It A Ghost.",
    teaser: "Intellectual laziness dressed up as open-mindedness.",
    readTime: "5 min",
    wide: true,
    author: "Mech",
    date: "Mar 15, 2026",
    pullquote: "You didn't investigate. You just decided. And then you filmed it and told everyone.",
    content: [
      "Something moves that you didn't expect to move. A swing. A door. A shadow. Your first instinct isn't to look for the obvious explanation — it's to grab your phone, start recording, and tell the internet you found proof of the supernatural.",
      "You didn't investigate. You just decided. And then you filmed it and told everyone.",
      "Here's what actually happened. The swing that moves by itself has a loose bolt on one side making it heavier than the other. The door that opens on its own is in a house with an air pressure differential. The shadow that looks like a figure is a combination of a streetlight, a tree branch, and a human brain that is specifically wired to find faces and shapes in random visual noise. That last one even has a name — pareidolia. It's not supernatural. It's just how your visual system works.",
      "None of this requires a degree. It requires thirty seconds of basic reasoning. Check the obvious explanations first. If none of them work, then — and only then — do you get to start entertaining the unusual ones. That's not closed-mindedness. That's the correct order of operations.",
      "What these videos actually reveal is not ghosts. They reveal a population that has confused not knowing something with proof of the unknowable. I don't know what that is therefore it must be paranormal. That's not logic. That's a gap in your knowledge being filled with whatever story feels most exciting.",
      "The exciting story spreads. The boring explanation doesn't. So the algorithm rewards the ghost video and ignores the follow-up where someone explains the loose bolt. And now ten thousand people believe they watched something supernatural when they watched a maintenance issue.",
      "This is how misinformation works at the small scale. Not with grand conspiracies — with ordinary people who never learned to check the obvious thing first. Who never developed the habit of asking what else could explain this before deciding they'd found something extraordinary.",
      "Check the bolt. Check the door seal. Look for the actual explanation. You'll find it almost every time. And when you can't find it, the correct response is 'I don't know' — not 'ghost.'"
    ]
  },
  {
    id: 5,
    pillar: "THE VERDICT",
    pillarColor: "#38bdf8",
    headline: "They Can't Let You Win. Let Them Watch.",
    teaser: "The people who do nothing always have the most to say about what you're doing.",
    readTime: "4 min",
    wide: false,
    author: "Mech",
    date: "Mar 16, 2026",
    pullquote: "Nobody tears down something they don't feel threatened by. Remember that next time someone comes for what you built.",
    content: [
      "Notice who's loudest when you achieve something. It's never the people who are also building. It's never the people who are also in the arena doing something difficult. It's the ones on the side who haven't tried anything, risked anything, or finished anything.",
      "They have opinions though. Endless opinions. About what you did wrong, what you should have done instead, why it won't last, why you got lucky, why it doesn't count. The commentary is constant and it costs them nothing because they have no skin in the game.",
      "Here's what's actually happening underneath all of it. Your success is a mirror. It shows them the gap between where they are and where they could be if they stopped making excuses and started doing something. That gap is uncomfortable. Tearing you down is easier than closing it.",
      "This isn't new. This isn't cultural. This is just human nature running its worst program — if I can't have it, I'll make it worth less. If I can't build it, I'll find reasons why it isn't worth building. If I can't win, I'll change what winning means so that you didn't actually win either.",
      "The correct response is not to explain yourself. Not to justify. Not to prove anything to people who have already decided. The correct response is to keep building and let the work answer for itself.",
      "Nobody tears down something they don't feel threatened by. Remember that next time someone comes for what you built. The attack is the compliment. You just have to be unbothered enough to read it correctly."
    ]
  },
  {
    id: 6,
    pillar: "THE VERDICT",
    pillarColor: "#38bdf8",
    headline: "The Uniform Told Everyone Exactly Where I Stood.",
    teaser: "Rich people don't make their helpers wear uniforms for branding. They do it to label them.",
    readTime: "5 min",
    wide: false,
    author: "Mech",
    date: "Mar 17, 2026",
    pullquote: "Different table. Different clothes. Same house. That's not branding. That's a hierarchy with a dress code.",
    content: [
      "I know what it feels like to wear the uniform. Not as a theory. Not as an observation from the outside. I was a working student from the age of thirteen. I have been on both sides of this — the side that serves and the side that is served — and I can tell you exactly what the uniform is for. It is not for branding. It is for labeling.",
      "When a wealthy family makes their maid wear a uniform, their driver wear a uniform, their helper wear a uniform — they are not building a brand. They are making the structure of the household immediately visible to everyone in it. This person serves. This person does not sit at the main table. This person is here to make your life easier and their presence should be recognizable at a glance.",
      "I grew up in a family of seven kids. Both sides of my family. All of us knew hard life from the beginning because hard life was the only life available. My parents were too busy having children they couldn't fully take care of to notice that each one of us would have to figure out survival earlier than we should have had to.",
      "So I worked. Thirteen years old, working, because that was the reality. And in that work I learned things that no classroom teaches — I learned exactly how people with money treat people without it. I learned the difference between how you are spoken to when you are a guest and how you are spoken to when you are the help. I learned that the uniform is part of that communication. It tells everyone in the room — including you — what category you belong to.",
      "The separate eating arrangements are the part that stays with you. Same house. Same food, sometimes. Different table. Because the uniform isn't just about what you wear — it's about where you belong in the space. And where you belong is not at the family table.",
      "I'm not saying every employer who uses uniforms is a bad person. I'm saying we should stop pretending it's about professionalism or team unity or any of the other polished reasons people give. It is about making power visible. It is about making sure that everyone — the helper, the visitor, the family — always knows exactly who is who.",
      "I wore that uniform. I sat at that other table. And I never forgot what it felt like to be the person the household was designed around but not designed for.",
      "Now I build things. I write what I think. Nobody tells me what to wear. That's not a small thing. That's the whole point of everything I worked for."
    ]
  },
  {
    id: 7,
    pillar: "THE VERDICT",
    pillarColor: "#38bdf8",
    headline: "Marriage Is Not A Finish Line. Love Fades. Now What?",
    teaser: "Companionship takes two people who actually understand human nature.",
    readTime: "6 min",
    wide: true,
    author: "Mech",
    date: "Mar 18, 2026",
    pullquote: "Love fades. That's not a tragedy. That's just biology running its course. What you have left after is what you actually built.",
    content: [
      "Everyone talks about falling in love like it's the destination. Get the feeling, find the person, do the wedding, done. Marriage is the finish line and everything after is just living happily ever after.",
      "Nobody talks about what happens after the feeling changes. And it will change. Not because something went wrong. Because that's what feelings do. They shift, they settle, they become something quieter and less electric than what they were in the beginning. That's not failure. That's just biology running its course.",
      "The question nobody asks before getting married is: who is this person when the feeling is gone? What are we actually building together? Can we stand each other on a Tuesday afternoon with nothing special happening? Can we disagree about something real and still respect each other by the end of it?",
      "Marriage is companionship. That's the actual thing. Two people who understand human nature well enough to know that the other person is flawed, inconsistent, sometimes selfish, and occasionally infuriating — and who choose to stay anyway. Not because of a feeling. Because of a decision.",
      "It takes two people who are honest about what they are. You cannot build a real partnership on a version of yourself that you perform for someone else. Eventually the performance ends and whoever is underneath it has to live with whoever is underneath them. If those two people have never actually met, the whole thing collapses.",
      "This is why people get married for the wrong reasons. The feeling. The pressure. The checklist. The fear of being alone. None of those are reasons to build a life with someone. They're reasons to have a good time for a few years and then have a very expensive conversation with a lawyer.",
      "The paper matters less than the partnership. The ceremony matters less than what you do on an ordinary Wednesday. Love is the start — companionship, honesty, and two people who actually know each other is what makes it last.",
      "Most people skip straight to the wedding and wonder why the marriage is hard. The work was always in the before."
    ]
  },
  {
    id: 8,
    pillar: "NO FILTER",
    pillarColor: "#f87171",
    headline: "Have Kids You Can Actually Raise. Or Don't Have Them.",
    teaser: "A child is not a hobby you pick up when it's convenient.",
    readTime: "5 min",
    wide: false,
    author: "Mech",
    date: "Mar 19, 2026",
    pullquote: "You can't take care of yourself but you made three people who depend entirely on you. And somehow that's everyone else's problem.",
    content: [
      "This is the one nobody wants to say out loud so I'll say it. If you cannot feed yourself, pay your own bills, manage your own mental health, and maintain a stable living situation — you should not be having children. Not yet. Maybe not ever. That's not cruelty. That's just arithmetic.",
      "A child is not a hobby. Not a relationship fix. Not something you do because it's the next thing on the cultural checklist. A child is a person who will be entirely dependent on your decisions for the first eighteen years of their life and shaped by those decisions for the rest of it.",
      "When you bring a child into a situation you haven't stabilized, you're not just making a choice for yourself. You're making a choice for someone who had no vote in the matter and will live with the consequences of your unpreparedness for decades.",
      "And then — this is the part that gets me — the blame goes everywhere else. The government. The economy. The system. Bad luck. God's plan. Every external force gets the credit for an outcome that started with a personal decision made without preparation.",
      "The government is corrupt — yes, genuinely, demonstrably corrupt. The economy is rigged against poor people — also true. The system is designed to keep certain people stuck — correct. All of that is real.",
      "But none of it changes the math. A corrupt government cannot raise your child. A broken economy cannot replace the stability a child needs from their actual home. The system being unfair does not make an unprepared parent more prepared.",
      "You have control over one thing in this entire equation: the decision to become a parent before you're ready. That's the one variable that's yours. Everything else you can point at and blame. That one is on you.",
      "Take care of yourself first. Actually take care of yourself — not just functionally surviving but genuinely stable. Then decide. The child you bring into the world deserves to start with a real foundation, not a wish and a prayer that things will somehow work out."
    ]
  },
  {
    id: 9,
    pillar: "THE CROSSING",
    pillarColor: "#c084fc",
    headline: "He Flew 7 Times In 2 Years. That's Not Romance. That's Evidence.",
    teaser: "Effort isn't a feeling. It's a flight record.",
    readTime: "8 min",
    wide: true,
    author: "Mech",
    date: "Mar 20, 2026",
    pullquote: "Feelings are cheap. Everyone has feelings. This was evidence of decision. Of someone who decided something and kept deciding it every time it got expensive.",
    content: [
      "People hear this story and they call it romantic. I understand why. It has the shape of a romantic story — man travels across the world, meets a woman, comes back for her again and again. That's the movie version.",
      "But I was there for the actual version and let me tell you what it actually felt like. It felt like evidence being collected.",
      "The first trip, he came to the Philippines to see if what he felt on the phone was real. That's a reasonable thing to do. You can't know from a call. You have to be in the same room with a person to know if something is actually there.",
      "He came. It was there. He left. And then he came back.",
      "Seven times over two years. Each trip cost money — real money, international flight money. Each trip cost time. Each trip cost the uncertainty of coming back again and not knowing what would happen next. Each trip was a choice made under conditions that would have given most people a reasonable excuse to stop.",
      "The visa process alone would have stopped most people. The paperwork, the waiting, the interviews, the fees, the more waiting — it is designed to be difficult. It is not designed to make anything easy. And at no point in that process does anyone guarantee you that it will work out.",
      "He did it anyway. Every time he was tested — by the logistics, by the distance, by the time zones — he showed up.",
      "That's what I mean when I say it's evidence. Not evidence of feeling. Feelings are cheap. Everyone has feelings. Evidence of decision. Of someone who decided something and then kept deciding it every time the decision got expensive.",
      "I've thought about what I would have thought of a man who said all the right things but flew once. Or twice. Or who sent the tickets but never came himself. I would have thought: this is someone for whom I am an idea, not a reality.",
      "Seven trips made me a reality to him. And that reality was something I could build on.",
      "Effort is not a feeling. It is a record. And the record tells you what someone actually values — not what they say they value, not what they feel in a good moment, but what they will still show up for when it costs them something."
    ]
  },
  {
    id: 10,
    pillar: "THE CROSSING",
    pillarColor: "#c084fc",
    headline: "The Loneliness No Immigration Form Asks About",
    teaser: "The freedom is real. So is the loneliness. Both arrive at the same time.",
    readTime: "7 min",
    wide: false,
    author: "Mech",
    date: "Mar 21, 2026",
    pullquote: "I wasn't sick for home. What I was, was untethered. Floating in a place that hadn't become mine yet.",
    content: [
      "The immigration process asks you everything. Your history, your finances, your relationships, your intentions, your ties to your home country, your reasons for leaving. It is thorough and invasive and it takes a very long time.",
      "There is one question it never asks. It never asks: are you prepared for the specific loneliness of being a person without a context?",
      "Because that's what immigration is, underneath all the paperwork. You are removing yourself from the context that made you legible. In the Philippines, people knew who I was — not just my name but my family, my neighborhood, my history, my place in the social order. I had a context. A location in the world of people.",
      "In America, I had none of that. I was a stranger with an accent and a legal status and a husband and nothing else. No friends yet. No history here. No shared references, no common memories, no people who knew me before.",
      "The freedom part is real. I want to be clear about that because I don't want to sound ungrateful. The freedom to think what I wanted, say what I thought, build what I chose to build — that arrived exactly as promised and it was exactly as valuable as I thought it would be.",
      "But it arrived alongside something nobody mentioned. The quiet of a life starting over from zero. The Sunday afternoons with no one to call. The moments when something funny happened and there was no one who would understand exactly why it was funny to me specifically.",
      "Homesickness is a word that doesn't quite cover it. I wasn't sick for home — I had left home deliberately and I knew why. What I was, was untethered. Floating in a place that hadn't become mine yet, trying to figure out how to attach.",
      "It takes time. That's the honest answer. It takes longer than you think and it happens in ways you don't expect — through small things, through one conversation that goes somewhere real, through the first time a place starts to feel familiar rather than just known.",
      "I'm not untethered anymore. But I remember what it felt like. And I think it's worth saying out loud because nobody says it — the immigration story is always about the destination. The journey, the arrival, the success. Nobody talks about the years in the middle when you're neither here nor there and both places feel slightly wrong.",
      "Both places feeling slightly wrong is not failure. It's just what it costs to cross. And it's worth knowing about before you go."
    ]
  },
  {
    id: 11,
    pillar: "THE CODE",
    pillarColor: "#4ade80",
    headline: "AI Will Not Take Your Job. Your Laziness Will.",
    teaser: "Stop blaming the tool. Start looking at the person holding it.",
    readTime: "5 min",
    wide: true,
    author: "Mech",
    date: "Mar 22, 2026",
    pullquote: "The people most afraid of AI are the ones who found a level of competence that felt like enough and stopped there.",
    content: [
      "Every generation has a technology it panics about. The calculator was going to make mathematicians useless. The internet was going to end journalism. Photography was going to kill painting. None of that happened. What happened every single time is that people who learned to use the new tool became more capable and people who refused to adapt became less relevant. Same pattern. Every time.",
      "AI is not different. The people most vocal about it taking their jobs are, if we're being honest, already replaceable. Not because they're stupid. Because they found a level of competence that felt like enough and stopped growing there.",
      "Here's what AI actually does: it removes the floor. Tasks that required a baseline of skill — first draft, basic summary, standard email — are now table stakes. The machine does them. If that's the ceiling of what you offer, yes, you have a real problem. Not because AI is better than you. Because you never built anything above the floor.",
      "What AI cannot do reliably is judgment. It cannot read what a client actually needs versus what they said they need. It cannot take responsibility for an outcome. It cannot make a call in a situation that doesn't fit any training data. Those are human skills built from human experience and they are worth more now, not less.",
      "I learned to code while living in an RV moving across states and into Mexico, chasing weather, figuring out the next move with no fixed address and no fixed plan. There was no classroom. No campus. No stable desk. Just a laptop, an internet connection, and a decision that if life was going to be uncertain anyway, I might as well build something useful inside the uncertainty.",
      "AI tools were already everywhere by the time I started. I used them. They are genuinely useful. They also confidently produce solutions that are completely wrong and require someone who actually understands the problem to supervise them. That someone has to be you.",
      "Use every tool available. But use them to go further, not to do less. The people who treat AI as a replacement for thinking are the ones who will actually lose. The people who treat it as an accelerant for thinking will be fine.",
      "The tool is not the threat. Your relationship with effort is the threat."
    ]
  },
  {
    id: 12,
    pillar: "THE CODE",
    pillarColor: "#4ade80",
    headline: "I Got My CS Degree From An RV. Here's What That Actually Means.",
    teaser: "No campus. No fixed address. Just a laptop and a decision that needed to be made.",
    readTime: "8 min",
    wide: false,
    author: "Mech",
    date: "Mar 23, 2026",
    pullquote: "The degree didn't come from a classroom. It came from a life that refused to hold still.",
    content: [
      "The original plan was a sailboat. My husband and I were going to buy one, learn to sail, and go. That was the dream — water, movement, no fixed point on the map. The kind of life that sounds insane to most people and made complete sense to us.",
      "Life had other ideas. We ended up in an RV instead, which is its own kind of freedom and its own kind of chaos. Moving state to state, crossing into Mexico, chasing good weather and decent internet and the next stretch of road. Nothing was permanent. Everything was adjustable. That was the point.",
      "Somewhere in the middle of all that movement I decided to get my Computer Science degree online. Not because someone told me to. Not because it was the practical next step on some career ladder. Because I was already living a life that could happen from anywhere and I wanted a skill set that matched.",
      "Technology had always made sense to me in a way that other things didn't. Systems. Logic. The way something either works or it doesn't with no ambiguity in between. After years of navigating a culture that ran entirely on ambiguity — on 'bahala na' and 'God's will' and 'that's just how it is' — the binary clarity of code felt like solid ground.",
      "I did the coursework from parking lots, from campgrounds, from a tiny table in the back of a vehicle that was also our bedroom and kitchen and living room. I submitted assignments in states I'd never been to before. I took exams in Mexico.",
      "Nobody in my program knew any of that. To them I was just another student submitting work on time. Which is the other thing about online education that nobody talks about — it strips away all the context that people use to make assumptions about you. No one saw the RV. No one knew about the sailboat dream or the immigration paperwork or the life that had been rebuilt from scratch twice already. They just saw the work.",
      "The degree matters. The credential is real and I earned it and it opened doors. But what I actually learned during those years had less to do with the curriculum and more to do with what it proved — that you can build something serious in the middle of an unstable life. That the right conditions are a myth. That waiting for stability before you start is just another way of not starting.",
      "The degree didn't come from a classroom. It came from a life that refused to hold still. I wouldn't have it any other way."
    ]
  },
  {
    id: 13,
    pillar: "NO FILTER",
    pillarColor: "#f87171",
    headline: "The Rage Bait Reel Got You Again. Here's How It Works.",
    teaser: "The content isn't made to inform you. It's made to use you.",
    readTime: "5 min",
    wide: true,
    author: "Mech",
    date: "Mar 24, 2026",
    pullquote: "The content is not made to inform you. It is made to harvest your reaction and sell it.",
    content: [
      "You've seen it. A video designed to make you furious. Maybe it's someone saying something aggressively stupid. Maybe it's an injustice presented without context. Maybe it's a take so wrong that you feel physically compelled to correct it. You watch it. You feel the anger. You share it with a comment. You've just done exactly what it was designed to make you do.",
      "Rage bait is a content category. It has a formula. Find or manufacture something that will trigger a strong emotional reaction — preferably anger or outrage because those travel fastest. Present it without context or with misleading framing. Publish it and collect the engagement.",
      "The angry comments count. The 'this is disgusting' shares count. The stitches and duets from people explaining why it's wrong count. Every reaction feeds the algorithm the same signal: people are engaging with this, show it to more people.",
      "You think you're fighting the misinformation by correcting it. You're not. You're amplifying it. The algorithm cannot tell the difference between an approving share and an outraged one. It only sees the number.",
      "The people making this content know exactly what they're doing. The ones who are very good at it will make something just wrong enough to be infuriating but just plausible enough that you can't immediately dismiss it. They've studied what makes you react. They built the trap specifically for people like you.",
      "The counter-move is boring and it works: don't engage. Not even to correct. Not even to explain. Scroll past. Report if it's genuinely harmful. Move on.",
      "The content is not made to inform you. It is not made to start a conversation. It is made to harvest your reaction and sell it. The moment you react, you've paid for it.",
      "Your attention is the product. Stop giving it away for free to people who are using it to manipulate you."
    ]
  },
  {
    id: 14,
    pillar: "NO FILTER",
    pillarColor: "#f87171",
    headline: "Stop Pretending You Read The Article. You Didn't.",
    teaser: "A headline is not an argument. A share is not a take.",
    readTime: "3 min",
    wide: false,
    author: "Mech",
    date: "Mar 25, 2026",
    pullquote: "A headline gives you certainty immediately. Certainty feels better than complexity. So you choose the headline.",
    content: [
      "There is a collective agreement to pretend we've engaged with things we haven't. Someone shares an article. You read the headline. The headline confirms what you already believe. You share it with a comment that implies you read it. You didn't.",
      "This is so normalized that we've stopped noticing. Headlines become arguments. Shares become positions. The existence of an article becomes evidence for whatever the headline claims — without anyone checking what the article actually says.",
      "Here's what happens when you actually read things. The headline was a simplification. The study cited has forty participants. The expert quoted has a financial stake in the conclusion. The counter-argument exists and was left out. The context that changes everything is in paragraph nine and nobody got to paragraph nine.",
      "This doesn't mean everything is lying. Most of it isn't. But most of it is also not what the headline claims. The headline is marketing. The article is the product. You are making decisions based on the marketing alone.",
      "Reading takes time. It also produces uncertainty — a good article introduces you to complexity you didn't have before and complexity is uncomfortable. A headline gives you certainty in three seconds. Certainty feels better. So you choose the headline.",
      "You share the certainty. You build your worldview out of things you've technically been exposed to but never processed. And then conversations go nowhere because two people are arguing about headlines that summarized different articles that neither of them read.",
      "Read the article. The whole thing. If you don't have time to read it you don't have an informed opinion on it. That's not a criticism. That's just how information works."
    ]
  },
  {
    id: 15,
    pillar: "THE LAND",
    pillarColor: "#a3e635",
    headline: "What It Actually Means To Own 23 Acres When You Grew Up With Nothing",
    teaser: "I grew up where survival was the agenda. Now I have land. The contradiction is not lost on me.",
    readTime: "6 min",
    wide: true,
    author: "Mech",
    date: "Mar 26, 2026",
    pullquote: "I grew up in a house where seven kids shared everything. Now I have 23 acres. I still don't fully believe it.",
    content: [
  "Let me be clear about something before I say anything else. People will look at my life — the land, the stability, the American husband — and they will have opinions. Gold digger. Filipina looking for a way out. Using an American to escape poverty. I've heard every version of that sentence and I'll probably hear more.",
  "Here's what I actually think about that.",
  "I grew up in Iligan City. One of seven kids. First question every day was how to get through it. We didn't talk about land or owning anything. We talked about surviving the week. I was working at thirteen because that was the reality. There was no version of my childhood that included a conversation about property or comfort or what the future might look like if things went right.",
  "Then things went right. Not by accident — by a sequence of decisions made by two adults who were honest with each other from the beginning. A man who showed up seven times when he could have stopped. A partnership built on trust before it was built on anything else. A life we built together and now live together on land in California that we call home.",
  "And yes — I chose a comfortable life when a comfortable life became possible. I will not apologize for that. I know exactly what the alternative looks like. I lived it for more than two decades. Wearing a uniform at someone else's table, eating in a different room, working at thirteen, watching my parents have more children than they could take care of while the rest of us figured out survival on our own.",
  "What people who use the word gold digger don't want to admit is that choosing stability is rational. It is not shallow. It is not manipulation. It is what any person with sense does when they have the opportunity — they choose the option that gives them the foundation to actually build a life instead of just surviving one.",
  "Our relationship didn't start with love. It started with two people figuring out how to deal with each other honestly. Can I trust this person? Does he mean what he says? Is he the kind of man who shows up when it costs him something? Those were the real questions. Love came from the answers.",
"He's owned land most of his life — not because it was handed to him but because he worked for it and because he values space. Room to breathe. No nosy neighbors. No one in your business. He built that deliberately. A man who knows a little bit of everything, figures out what he doesn't know, and doesn't hire someone to do a job he can learn to do himself. Common sense as a lifestyle. Smart in the way that actually matters — practical, consistent, self-sufficient.",
"Getting grumpy these days too, but that's what happens when you've spent a lifetime doing things right and you watch the world doing things wrong.",
"My job is to help keep the place better and better. We work the property together — whatever needs doing, we figure it out. No shortcuts, no outsourcing what we can handle ourselves. That's the life. Not glamorous. Not what people imagine when they assume a Filipina married an American for easy money.",
"This is work. Real work. On real land. With a real man who earned everything here and a woman who showed up and learned how to be worth the space she was given.",
"Call it whatever you want. I call it a good decision made by two honest adults."
]
  },
  {
    id: 16,
    pillar: "THE LAND",
    pillarColor: "#a3e635",
    headline: "The Citizenship Ceremony. The Room. The Moment.",
    teaser: "Five years of paperwork led to one room. I want to tell you what that room felt like.",
    readTime: "5 min",
    wide: false,
    author: "Mech",
    date: "Mar 27, 2026",
    pullquote: "Every person in that room had a version of this story. Different countries, different roads, same room.",
    content: [
      "I want to tell you about the room.",
      "Not the paperwork — you already know about the paperwork if you've read anything else I've written. The forms, the fees, the interviews, the medical exams, the waiting rooms with their specific fluorescent light and their specific silence. Five years of that. You know about that part.",
      "I want to tell you about the actual room where it ended.",
      "It was a federal building. The kind that looks serious on purpose. You walk in and there are rows of chairs and people from everywhere — I mean everywhere. Different languages floating around, different families, different stories that all somehow ended in this same building on this same morning.",
      "I looked around that room and thought: every single person here paid for this in a way that nobody who was born here will ever fully understand. Every person in that room had a version of my story. Different country, different road, different sacrifice. Same room.",
      "They play a video. They read names. They ask you to raise your right hand and repeat words that are simple on the surface and enormous underneath. I, hereby declare, on oath — and you feel the weight of every year that led to this sentence.",
      "I became a citizen in that room. On paper it was the end of a process. In practice it was something else — it was the moment the country I had chosen finally chose me back.",
      "I called my husband after. I don't remember exactly what I said. I remember that I meant it.",
      "Five years. One room. Worth every single part of it."
    ]
  },
  {
    id: 17,
    pillar: "THE LAND",
    pillarColor: "#a3e635",
    headline: "I Built NexCoresis For My Sisters. Here's What They Don't Know.",
    teaser: "They know I built a studio. They don't know the full reason why.",
    readTime: "5 min",
    wide: false,
    author: "Mech",
    date: "Mar 28, 2026",
    pullquote: "I made it out. The least I could do was build something they could stand on.",
    content: [
      "My sisters are smart. I want to say that first because everything else I'm about to say only makes sense if you understand that — they are genuinely capable, intelligent women who deserved more runway than they got.",
      "They grew up in the same house I grew up in. Same seven kids, same hard life, same system that asks you to survive first and dream later. Except later never really comes when you're inside that system. Later keeps getting pushed back by the next immediate thing that needs handling.",
      "I got out. Not because I was smarter or more deserving — because a specific sequence of events happened in a specific order and I made decisions at the right moments and I had a husband who showed up every single time. Luck and choice in a ratio I still can't fully calculate.",
      "When I got stable — when the land was ours and the citizenship was done and the degree was finished — I started thinking about what to do with the position I was in. I had skills. I had time. I had a stable base that my sisters didn't have.",
      "So I built NexCoresis Studio. A web agency. Developer, teacher, designer — me and two of my sisters, two countries, one team. I built the website. I set up the structure. I created the thing that they could plug into without having to build it from scratch themselves.",
      "What they don't fully know is that I didn't build it because it was a good business idea. I built it because I couldn't think of a better way to use what I had than to point it back at the people who started in the same place I did.",
      "We grew up sharing everything because there wasn't enough of anything. Now I have something. Sharing it is the only thing that makes sense.",
      "That's the whole reason. The studio is real and the work is real and I'm proud of what we're building. But the reason behind it is simple — I made it out and the least I could do was build something they could stand on too."
    ]
  },
];