import type { PublicExperience } from "./catalog";
import { guideMediaFor, type GuideMedia } from "./media";
import { canonicalUrl, SITE_NAME, SITE_ORIGIN } from "./seo";

export type JournalSection = {
  title: string;
  paragraphs: readonly string[];
};

export type JournalArticle = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  leadGuideSlug: string;
  guideSlugs: readonly string[];
  sourceGuideSlugs: readonly string[];
  publishedOn: string;
  updatedOn: string;
  sections: readonly JournalSection[];
  decision: {
    title: string;
    intro: string;
    questions: readonly string[];
  };
  closing: string;
};

export type JournalSource = {
  guideTitle: string;
  guideSlug: string;
  title: string;
  url: string;
  note: string;
};

export type ResolvedJournalArticle = JournalArticle & {
  leadGuide: PublicExperience;
  guides: readonly PublicExperience[];
  sources: readonly JournalSource[];
  media: GuideMedia;
  wordCount: number;
  readingMinutes: number;
};

export const journalArticles = [
  {
    slug: "build-a-day-around-one-experience",
    eyebrow: "Journey craft",
    title: "How to build a day around one experience",
    summary:
      "Choose one meaningful anchor, protect the time around it and let the rest of the day support what brought you there.",
    leadGuideSlug: "venice-through-an-oar",
    guideSlugs: [
      "venice-through-an-oar",
      "mexico-city-grown-on-water",
      "a-morning-at-the-hawker-table",
      "the-weight-of-the-tower",
    ],
    sourceGuideSlugs: ["venice-through-an-oar", "mexico-city-grown-on-water"],
    publishedOn: "2026-09-12",
    updatedOn: "2026-09-12",
    sections: [
      {
        title: "Begin with the reason for the day",
        paragraphs: [
          "Choose the experience that would still make the day worthwhile if everything else disappeared. A Venetian rowing lesson asks for focused attention, a meeting point and willingness to learn. As the anchor, the day stops being a race across Venice and starts becoming a day about movement, water and skill.",
          "The same principle works in a city that feels overwhelming. A public visit connected to Xochimilco's chinampa landscape can become the reason to spend time in one part of Mexico City. A hawker breakfast can provide a deliberate first chapter in Singapore. The anchor is not automatically the most famous thing. It is the encounter that gives the surrounding hours a point of view.",
        ],
      },
      {
        title: "Put the fixed parts in first",
        paragraphs: [
          "Open the guide's access section before you start arranging the day. Note what must be confirmed with the official source, including the current programme, meeting arrangement, duration and any preparation requested by the host. A rowing lesson cannot be treated like a museum you enter whenever convenient. A public event such as Barcelona's castells depends on the announced calendar. The real conditions belong in the plan before restaurants, shops and extra stops do.",
          "Then add generous arrival time without inventing a precision the source does not provide. The goal is not to predict every transfer. It is to avoid making the central experience absorb the risk created by an overfilled schedule. If the anchor matters, it should not begin with you rushing in from something less important.",
        ],
      },
      {
        title: "Make the hours around it belong",
        paragraphs: [
          "Ask what kind of attention the experience needs before and after. Before a lesson, leave enough mental space to listen. After a shared meal or a landscape visit, resist the reflex to sprint toward the next attraction. A short walk, a pause for notes or time in the same neighbourhood can help the experience remain connected to its place rather than becoming an isolated product consumed between taxis.",
          "This does not require a themed itinerary. It requires restraint. If the anchor is the hawker table, the rest of the morning can stay light and flexible. If the anchor is a human tower in a public square, arrive with time to understand where spectators belong and leave without expecting private access. The supporting hours should reduce friction and deepen context, not compete for the headline.",
        ],
      },
      {
        title: "Plan one release valve",
        paragraphs: [
          "Every day needs a version that still works when weather, capacity or a changed programme removes the anchor. That is not pessimism. It is respect for the fact that places and hosts are not controlled by your itinerary. Keep one nearby public option that needs little commitment, or allow the day to become slower. Do not replace a cancelled meaningful encounter with five hurried substitutes simply to protect the feeling of productivity.",
          "The release valve also protects the experience when it does happen. You can stay for a question, follow a host's timing and accept a slightly different finish without watching the next reservation collapse. Flexibility is most valuable around the thing you care about most.",
        ],
      },
      {
        title: "End with a useful trace",
        paragraphs: [
          "Before the day disappears into a camera roll, keep one useful trace. Write down what changed in your understanding, one question you still have and one detail worth sharing with the person who would appreciate it. Save the guide in Passport if you would recommend the way of entering the place, not simply the photograph it produced.",
          "A strong day leaves room for return. You may want to follow another guide about water, skilled movement or shared public life later. That connection is more valuable than claiming you completed a city in twelve hours.",
        ],
      },
    ],
    decision: {
      title: "The one-anchor test",
      intro:
        "Choose the experience that gives the clearest answer to these questions.",
      questions: [
        "Would the day still feel worthwhile if this were the only planned experience?",
        "Can I confirm the current access route directly and meet its timing without rushing?",
        "Does the experience reveal something about this place that the rest of my trip may miss?",
        "Can I leave useful space before and after it?",
      ],
    },
    closing:
      "One well-built day can be more memorable than a week of completed lists. Give the centre of the day enough room to become the reason you remember it.",
  },
  {
    slug: "a-better-question-than-is-it-authentic",
    eyebrow: "Better questions",
    title: "A better question than ‘Is it authentic?’",
    summary:
      "Replace a verdict you cannot responsibly make with questions about context, access, teaching and the visitor's actual role.",
    leadGuideSlug: "kimchi-before-the-jar",
    guideSlugs: [
      "kimchi-before-the-jar",
      "stay-for-the-session",
      "step-into-the-dance",
      "a-bowl-of-attention",
    ],
    sourceGuideSlugs: ["kimchi-before-the-jar", "stay-for-the-session"],
    publishedOn: "2026-09-12",
    updatedOn: "2026-09-12",
    sections: [
      {
        title: "Why the question fails",
        paragraphs: [
          "Travellers often ask whether an experience is authentic when they are really trying to avoid something hollow, staged or detached from place. The concern is reasonable. The word is less useful. It asks for a single verdict on practices that can be public and commercial, old and changing, local and adapted for visitors at the same time. It also encourages an outsider to decide whose culture is real enough.",
          "A scheduled kimchi-making class at Museum Kimchikan does not claim to reproduce the knowledge of every Korean household. It offers a bounded public introduction inside an institution devoted to the subject. That limitation is not a flaw to hide. It is part of the answer to a better question: what exactly is being offered here, and what does it not stand in for?",
        ],
      },
      {
        title: "Ask who defines the encounter",
        paragraphs: [
          "Start with the public description. Who teaches, hosts or maintains the setting? What form of participation have they chosen to offer? A Doolin music session is not made meaningful because a visitor labels it authentic. Its value begins with musicians, a venue and the social attention of the room. The guide can help you understand the visitor's place without turning an ordinary public session into a private performance arranged for your benefit.",
          "The same discipline applies at a Budapest dance house or a Kyoto tea session. Look for a clear route to enter, a stated format and behaviour that lets the practice retain its own terms. An invitation to beginners can be genuine without granting mastery, belonging or permission to speak for the wider tradition.",
        ],
      },
      {
        title: "Ask what belongs to this place",
        paragraphs: [
          "Rootedness is more precise than atmosphere. It asks how the experience is connected to local materials, institutions, histories, landscapes or patterns of gathering. Kimchi becomes more than a recipe when the museum class is read beside the wider practice of making and sharing. A music session becomes more than a playlist when you notice the relationships and conventions that hold the room together.",
          "This does not mean every meaningful experience must be ancient or untouched. Living practices change. Public programmes translate. Hosts make practical choices. The useful task is to understand the connection and the translation, then avoid claiming that a short encounter has revealed the final or pure version of anything.",
        ],
      },
      {
        title: "Ask what the visitor owes",
        paragraphs: [
          "A sharper question produces a clearer responsibility. If you are joining a class, follow the teacher's handling and photography rules. If you are entering a shared room, let regular participants use it without becoming your subjects. If you are watching, do not assume watching includes backstage access, personal explanation or a close portrait. Public access is real access, but it still has edges.",
          "Paying does not remove those edges. A ticket, meal or lesson secures the advertised offer. It does not purchase the right to define the culture around it, demand intimacy or turn other people's presence into content.",
        ],
      },
      {
        title: "Use evidence without pretending it is certainty",
        paragraphs: [
          "A public-source guide can establish that a programme exists, describe how access is offered and connect the visitor to current official information. It cannot prove the quality of every session, settle a debate about cultural representation or replace local review. Good editorial work makes that boundary visible instead of covering it with confident language.",
          "The result is not a weaker recommendation. It is a more useful one. You know what attracted EA's attention, what the source supports and what you still need to confirm. That is enough to decide whether an encounter deserves a place in your journey without turning it into a certificate of authenticity.",
        ],
      },
    ],
    decision: {
      title: "Four questions that travel better",
      intro:
        "Use these before asking anyone to prove that an experience is real.",
      questions: [
        "What exactly has the host chosen to offer to the public?",
        "How is this encounter connected to its place and the people who hold the knowledge?",
        "What role is available to me as a visitor, and where does that role end?",
        "Which claims come from the host, and which have been independently established?",
      ],
    },
    closing:
      "You do not need the final word on a culture to have a worthwhile encounter. You need a clear invitation, honest context and the humility to leave some knowledge where it belongs.",
  },
  {
    slug: "when-you-only-have-a-morning",
    eyebrow: "Time well spent",
    title: "What to do when you only have a morning",
    summary:
      "Treat a short window as a reason to choose more carefully, not as an invitation to compress an entire place.",
    leadGuideSlug: "read-the-desert-at-ground-level",
    guideSlugs: [
      "read-the-desert-at-ground-level",
      "a-morning-at-the-hawker-table",
      "a-bowl-of-attention",
      "the-fish-behind-the-islands",
    ],
    sourceGuideSlugs: [
      "read-the-desert-at-ground-level",
      "a-morning-at-the-hawker-table",
    ],
    publishedOn: "2026-09-12",
    updatedOn: "2026-09-12",
    sections: [
      {
        title: "Stop trying to see the place",
        paragraphs: [
          "A morning is not enough to understand a city, region or landscape. That can be liberating. Once you stop trying to cover the place, you can choose one encounter with a clear shape. A specialist morning tour of the Swakopmund dune belt offers one way to read the Namib at ground level. It does not promise every species or the whole desert. Its value is the focused act of looking for signs with someone equipped to interpret them.",
          "Singapore offers a completely different morning. A hawker breakfast asks less time and no claim of exceptional access. It can still reveal shared infrastructure, daily rhythm and the choices held behind a familiar plate. Short does not have to mean shallow. It means the experience needs a precise reason to occupy the hours you have.",
        ],
      },
      {
        title: "Choose a format that already has edges",
        paragraphs: [
          "The strongest morning options tell you when they begin, what participation involves and how to confirm current access. A guided tour, a booked introductory session, a museum with a focused question or a public food setting can all work. Avoid building the morning around an uncertain private encounter, an unannounced performance or a long chain of places that depend on perfect transfers.",
          "A Kyoto tea session provides a bounded introduction. SKREI in Lofoten provides a museum route into the fishery behind the islands. Neither is a substitute for the larger culture or landscape. Both can give a short visit an intelligible centre if you read the guide first and arrive knowing what the public format can reasonably provide.",
        ],
      },
      {
        title: "Protect the first hour",
        paragraphs: [
          "A short day is easily damaged before it begins. Confirm the official details close to the visit. Know which part of the plan requires a reservation and which part can remain open. Reduce the number of decisions you need to make on arrival. If the experience includes pickup, instruction or a timed entry, give that arrangement priority over an optional coffee stop or one more photograph across town.",
          "This is not about waking earlier to fit in more. It is about keeping your attention intact. The first hour should move you toward the anchor without creating a trail of minor obligations that makes you late, distracted or impatient with the people hosting it.",
        ],
      },
      {
        title: "Keep one nearby second chapter",
        paragraphs: [
          "After the anchor, choose one simple continuation rather than a second major experience. It might be time to write, eat, walk within the same area or follow a public interpretation the guide already points toward. The connection should feel natural. After reading animal tracks, you may want quiet time to notice the landscape without searching for another sighting. After a hawker breakfast, you may want to stay with the neighbourhood rather than cross the city for a famous lunch.",
          "The second chapter should also be easy to release. If the first experience runs long or prompts conversation, let it. A morning becomes memorable through coherence, not through the number of pins removed from a map.",
        ],
      },
      {
        title: "Leave without pretending you finished",
        paragraphs: [
          "End the morning with an open loop. Save a related guide, note a question or send one considered recommendation to the person who would value it. Do not summarise the destination as if a few hours made you an authority. The honest sentence is smaller: this was one useful way in.",
          "That openness creates a reason to return. It also makes the short visit kinder to the place. You are not asking it to deliver a complete identity before lunch.",
        ],
      },
    ],
    decision: {
      title: "The morning filter",
      intro:
        "A short-window experience should pass all four checks before it enters the plan.",
      questions: [
        "Is the current public access route clear enough to confirm before I arrive?",
        "Can this experience stand alone without three supporting attractions?",
        "Does its location and timing leave a reasonable margin around the fixed part?",
        "Will I still value it if the encounter is quieter or less photogenic than expected?",
      ],
    },
    closing:
      "The right morning does not shrink a place into a sample. It gives you one clear relationship to carry into whatever comes next.",
  },
  {
    slug: "be-a-good-guest-at-a-shared-table",
    eyebrow: "At the table",
    title: "How to be a good guest at a shared table",
    summary:
      "Bring appetite, attention and enough humility to let a public meal remain more than a backdrop for your trip.",
    leadGuideSlug: "the-vineyard-at-the-table",
    guideSlugs: [
      "the-vineyard-at-the-table",
      "a-morning-at-the-hawker-table",
      "bread-from-the-tonir",
      "when-the-sap-starts-to-run",
    ],
    sourceGuideSlugs: [
      "the-vineyard-at-the-table",
      "when-the-sap-starts-to-run",
    ],
    publishedOn: "2026-09-12",
    updatedOn: "2026-09-12",
    sections: [
      {
        title: "Know which table you are entering",
        paragraphs: [
          "Not every food experience offers the same relationship. Vienna's Heuriger is public hospitality. A Singapore hawker centre is shared civic food infrastructure, not a hosted cultural class. A lavash workshop in Tsaghkunk includes guided participation. An Outaouais sugar shack is seasonal hospitality whose menu and activities vary by venue. Good guest behaviour begins by understanding the actual format rather than applying one romantic idea of the communal table to all four.",
          "Read the current offer before you arrive. Is there a reservation, a class sequence, ordinary counter service or a seasonal set meal? Knowing this is not dull preparation. It frees you to notice the experience itself instead of negotiating basic expectations in the room.",
        ],
      },
      {
        title: "Let work remain visible",
        paragraphs: [
          "A generous table can make the labour behind it look effortless. Resist that illusion. Notice the people taking orders, teaching a technique, cleaning shared surfaces, preparing ingredients and keeping the room moving. Their work does not become part of your personal story simply because it is visible. Be ready when it is your turn, ask focused questions at an appropriate moment and accept that service sometimes needs to remain service.",
          "At a making session, follow the teacher's sequence instead of rushing toward the finished object. At a busy food centre, do not hold space longer than the setting invites. Attention to labour is not a performance of gratitude. It is practical consideration.",
        ],
      },
      {
        title: "Ask before turning people into the view",
        paragraphs: [
          "Food is photogenic. Other diners and workers are not therefore available as scenery. Photograph your own plate if the setting permits it, keep devices from interrupting shared space and ask clearly before including an identifiable person. A workshop fee or restaurant bill does not buy portrait rights. Nor does a lively room owe you the image that proves you found it.",
          "This restraint often improves memory. Without constantly arranging the table for a photograph, you can notice the order of a meal, the sound of the room and the small decisions that connect what you eat to where you are.",
        ],
      },
      {
        title: "Be precise about your needs",
        paragraphs: [
          "Dietary, accessibility and payment questions belong in the planning stage whenever the host provides a route for them. Ask directly and early. Do not assume a traditional menu can be changed, that every stall can explain every ingredient or that a previous year's listing describes the present season. The kind approach is clear communication, not waiting until service begins and hoping the room will reorganise around an unstated need.",
          "Precision also means accepting the answer. If an offer does not suit you, choose another experience without treating the host's limits as a failure of hospitality.",
        ],
      },
      {
        title: "Share the route, not a verdict",
        paragraphs: [
          "When you recommend the experience, pass on the useful part. Share the official access route, explain the format you encountered and mention what another visitor should confirm. Avoid declaring that one venue is the only real version of a food culture. Your meal can be excellent without becoming the standard by which a whole place is judged.",
          "A good recommendation helps someone arrive better prepared. It also leaves room for menus, seasons and practices to change after you leave.",
        ],
      },
    ],
    decision: {
      title: "The good-guest check",
      intro:
        "Before saving a table to your journey, make sure you can answer these questions.",
      questions: [
        "Is this ordinary hospitality, a class or a seasonal programme?",
        "What should I confirm directly about reservations, dietary needs and access?",
        "Can I participate without expecting staff or other guests to perform for me?",
        "What useful context will I share instead of giving an authenticity verdict?",
      ],
    },
    closing:
      "The table is not meaningful because a traveller discovers it. It is meaningful because work, place and other people were already there. Arrive in a way that respects that order.",
  },
  {
    slug: "let-a-season-choose-the-journey",
    eyebrow: "Seasonal travel",
    title: "Let a season choose the journey",
    summary:
      "Plan around what a place is doing now, even when that asks you to loosen your grip on dates and guarantees.",
    leadGuideSlug: "when-the-sap-starts-to-run",
    guideSlugs: [
      "when-the-sap-starts-to-run",
      "when-the-sky-moves-as-one",
      "walk-where-the-sea-was",
      "the-tide-brings-the-horses",
      "the-pour-before-the-glass",
    ],
    sourceGuideSlugs: [
      "when-the-sap-starts-to-run",
      "when-the-sky-moves-as-one",
      "walk-where-the-sea-was",
    ],
    publishedOn: "2026-09-12",
    updatedOn: "2026-09-12",
    sections: [
      {
        title: "Begin with the moving part",
        paragraphs: [
          "Most itineraries begin with available dates and ask a place to fit inside them. Seasonal travel reverses the order. Québec's sugar-shack season follows the movement of sap and a short public calendar. Black Sun in Denmark depends on migrating starlings gathering over the marshes. Wadden mudflat walking begins with the tide. The first planning question is not what do I want to book, but what is happening in the place during the window I can reach it?",
          "That question will sometimes remove an experience from the trip. This is useful information. A seasonal encounter outside its season is not improved by wishful copy or an old photograph.",
        ],
      },
      {
        title: "Separate a season from a guarantee",
        paragraphs: [
          "A season describes conditions and probability. It does not promise a particular sighting, demonstration or atmosphere. Starlings decide whether and how they appear. Weather affects what a guided landscape visit can do. A sugar-shack listing from a completed season can establish the public format, but it cannot confirm next year's dates. Good planning keeps those distinctions visible.",
          "Use the official source close to travel. Look for a newly published programme, the current operator notice or the specific public calendar. If the source still describes a previous year, keep the idea in Passport rather than treating it as a booking-ready plan.",
        ],
      },
      {
        title: "Build the route from least flexible to most flexible",
        paragraphs: [
          "Put the natural condition or rare public date at the centre. Then add experiences with wider access around it. A tide-led walk needs its qualified guide and current departure. The horseback shrimp fishers of Oostduinkerke appear through announced public dates shaped by the sea. An Asturian cider visit may offer a more conventional reservation route, but its meaning still grows when you understand orchard, cellar and pour as parts of one cycle.",
          "This order prevents a common mistake. Travellers often secure the easy restaurant or hotel first, then discover that the experience which justified the journey only happens on a different day. The scarce condition should guide the flexible choices, not struggle against them.",
        ],
      },
      {
        title: "Give uncertainty a useful alternative",
        paragraphs: [
          "Seasonal planning works best with an alternative that belongs to the same curiosity. If wildlife remains out of view, the wetland and the guide's interpretation can still matter. If a public demonstration is cancelled, another local public institution may keep the day connected to the practice without imitating it. The alternative should preserve the question, not promise a replacement spectacle.",
          "Decide in advance what would still make the journey worthwhile. If the answer is nothing, you are not planning a season. You are buying a single image with too much confidence attached to it.",
        ],
      },
      {
        title: "Return at the moment of change",
        paragraphs: [
          "A seasonal guide is an invitation to return to the source. Save it before dates are final, then check again when the local calendar moves from general information to a current offer. This return is not an inconvenience added by EA. It is part of planning honestly around a living system.",
          "Share the guide with the person travelling with you and agree on the acceptable uncertainty together. A journey shaped by season can be unusually memorable, but only if everyone understands that the place, weather and people still have a say.",
        ],
      },
    ],
    decision: {
      title: "The season-first test",
      intro:
        "Move from inspiration to planning only when these answers are clear.",
      questions: [
        "Which natural condition, harvest or public date actually defines the experience?",
        "Is the information current for the season I am considering?",
        "What remains uncertain even after I confirm the official programme?",
        "Would the journey still be worthwhile if the most photogenic moment does not happen?",
      ],
    },
    closing:
      "The point is not to win against the calendar. It is to arrive when a place can offer what it actually has, then let that timing shape the journey.",
  },
  {
    slug: "the-pleasure-of-being-a-beginner",
    eyebrow: "Learning well",
    title: "The pleasure of being a beginner",
    summary:
      "Choose an experience where not knowing is useful, instruction is clear and the first attempt makes skill more visible.",
    leadGuideSlug: "colour-before-cloth",
    guideSlugs: [
      "colour-before-cloth",
      "venice-through-an-oar",
      "kimchi-before-the-jar",
      "bread-from-the-tonir",
      "the-fish-behind-the-islands",
    ],
    sourceGuideSlugs: [
      "colour-before-cloth",
      "venice-through-an-oar",
      "kimchi-before-the-jar",
    ],
    publishedOn: "2026-09-12",
    updatedOn: "2026-09-12",
    sections: [
      {
        title: "Choose a first attempt, not instant mastery",
        paragraphs: [
          "The most generous learning experiences make the beginner's role clear. A natural-dyeing class in Luang Prabang can introduce plant colour, material preparation and a sequence of decisions. It cannot transfer the full knowledge of Lao textile practice in an afternoon. A Venetian rowing lesson can place an oar in your hands without making you a gondolier. These limits protect the experience from becoming a performance of expertise you have not earned.",
          "Look for language such as introduction, class, guided visit or public programme. A defined first step is more trustworthy than a promise to reveal every secret of a tradition. It tells you what to prepare for and leaves the larger body of knowledge intact.",
        ],
      },
      {
        title: "Let difficulty improve your attention",
        paragraphs: [
          "Watching a skilled movement often hides its decisions. Trying it once reveals weight, timing, temperature, resistance and the need to listen. The value of an attempt is not the object or photograph you take home. It is the new precision with which you can see the work. Bread shaped beside a tonir, cabbage prepared for kimchi or a boat moved by an oar becomes less simple once your hands are responsible for one part of the process.",
          "Do not rush past that difficulty. It is evidence that the skill contains more than the finished result. Frustration can become respect when the class gives you enough support to continue safely and enough context to understand why the sequence matters.",
        ],
      },
      {
        title: "Follow the teacher's version of the day",
        paragraphs: [
          "A good beginner arrives ready to be redirected. Use the materials provided. Follow handling instructions. Accept the pace of the group. Ask before changing a process for the camera or copying a design beyond what the class offers. If the teacher says a step is demonstration only, watching is participation enough.",
          "This is especially important when a public visitor programme sits beside a much wider communal practice. Museum Kimchikan can offer a scheduled making class while the meaning of kimjang extends through households, regions and seasons. The institution defines the bounded encounter. The visitor should not stretch that encounter into a claim about every version of the practice.",
        ],
      },
      {
        title: "Choose the skill that changes your question",
        paragraphs: [
          "Do not choose only by the souvenir. Choose by the question you want to carry afterward. How does a plant become colour? What does balance feel like from inside the boat? What work sits between fish and the identity of an island community? A museum such as SKREI may involve less making, yet still teaches you how to read a familiar landscape through labour and material systems.",
          "The strongest question stays useful after the class. It may change what you notice in a market, a museum, a meal or another working waterfront. That return on attention is more durable than a certificate of completion.",
        ],
      },
      {
        title: "Leave the credit in the right place",
        paragraphs: [
          "When you share the experience, name the teacher, institution or public programme that made your introduction possible. Describe yourself as a beginner. Do not reproduce restricted knowledge, imply endorsement or present one class as your own discovery of an entire tradition. Credit is part of memory because it keeps the path back to the people who did the teaching.",
          "Save the guide if it helped you find that path. Then return when you are ready for another first attempt. Curiosity grows well when it does not have to pretend it already knows.",
        ],
      },
    ],
    decision: {
      title: "The beginner's choice",
      intro:
        "A worthwhile first lesson should make these answers easier, not harder.",
      questions: [
        "Is the public teaching format specific about what a beginner will actually do?",
        "Are the teacher's role, materials and practical limits visible before I book?",
        "Can I value the attempt even if the finished result is imperfect?",
        "Will the experience leave me with better questions and clearer credit for who taught me?",
      ],
    },
    closing:
      "Being a beginner is not a lesser version of the experience. Done well, it is the moment when skill stops looking obvious and starts becoming worthy of attention.",
  },
  {
    slug: "the-souvenir-you-can-explain",
    eyebrow: "What remains",
    title: "The souvenir you can explain",
    summary:
      "Choose a made object for the decisions it helps you remember, the person who taught you and the place that gave the material meaning.",
    leadGuideSlug: "lift-a-pattern-from-the-water",
    guideSlugs: [
      "lift-a-pattern-from-the-water",
      "build-a-pattern-in-colour",
      "paint-the-pattern-you-noticed",
      "cut-the-first-piece-of-a-pattern",
    ],
    sourceGuideSlugs: [
      "lift-a-pattern-from-the-water",
      "build-a-pattern-in-colour",
      "paint-the-pattern-you-noticed",
    ],
    publishedOn: "2026-09-13",
    updatedOn: "2026-09-13",
    sections: [
      {
        title: "Begin before the object exists",
        paragraphs: [
          "The most useful souvenir may begin as a surface you do not yet know how to handle. In an introductory ebru workshop in Istanbul, colour is placed on prepared water before a pattern is lifted onto paper. The finished sheet matters, but the unfamiliar sequence matters more. It turns an object into a record of concentration, timing and instruction.",
          "A workshop changes the question from what should I buy to what am I willing to notice. The answer may involve how a tool is held, when a material resists or why the teacher repeats one small correction. That knowledge remains attached to the object long after its novelty has faded.",
        ],
      },
      {
        title: "Know the size of your lesson",
        paragraphs: [
          "A public introduction is not an apprenticeship. One session can show the logic of a process and give you responsibility for a bounded first attempt. It cannot transfer a maker's years of judgement. This limit makes the experience more credible. You can describe what you tried without presenting yourself as an authority on the wider practice.",
          "The same honesty applies in Kyoto, where a visitor may work with a defined textile technique, or in Porto, where painting a tile can sharpen attention to surfaces across the city. The lesson opens a door. It does not hand over ownership of everything behind it.",
        ],
      },
      {
        title: "Let the material lead the memory",
        paragraphs: [
          "A photograph usually records the appearance of a moment. A made object can record its sequence. The paper recalls the movement of pigment. The tile recalls the pressure of a brush. A cut piece of clay in Fez recalls that geometry is made through repeated physical decisions, not simply applied as decoration.",
          "Look at the object later and name three parts of the process. If you cannot, the workshop may have become another production line for take-home things. If you can, the object has become a compact map back to the work, place and instruction that shaped it.",
        ],
      },
      {
        title: "Keep the credit with the craft",
        paragraphs: [
          "When you show what you made, name the workshop or teacher and call it a first attempt. Do not remove a motif from its context and present it as your own design language. Ask before photographing people, demonstrations or material that is not part of the public exercise.",
          "Credit does not make a story less personal. It makes the route through the story visible. The person hearing it can understand who held the knowledge, where the introduction happened and why your role was that of a guest learning one small part.",
        ],
      },
      {
        title: "Return through a better question",
        paragraphs: [
          "The best object creates curiosity instead of closure. You may begin to notice marbled endpapers, tiled facades, repeated patterns or the difference between a printed surface and one worked by hand. That changed attention is the real thing you carry home.",
          "Save the guide with one sentence about what you want to understand next. The return may be another lesson, a museum collection or simply a more careful way of looking. A souvenir earns its space when it keeps the experience open.",
        ],
      },
    ],
    decision: {
      title: "The meaningful-object test",
      intro:
        "Before choosing a making experience, check what the finished object will help you remember.",
      questions: [
        "Will I take part in a real sequence rather than decorate a prepared product?",
        "Is the teacher or workshop clearly credited for the introduction?",
        "Can I describe my role honestly as a beginner?",
        "Will the object help me recall the place, material and decisions behind it?",
      ],
    },
    closing:
      "Bring home the object if you value it. Bring home the names, sequence and questions too. They are what turn it from evidence of travel into a memory with a responsible way back.",
  },
  {
    slug: "before-the-first-sip",
    eyebrow: "Taste with context",
    title: "Before the first sip",
    summary:
      "Follow rice, grapes, apples or agave through the work that gives a drink its character before treating the tasting as the whole experience.",
    leadGuideSlug: "begin-with-rice-not-the-bottle",
    guideSlugs: [
      "begin-with-rice-not-the-bottle",
      "taste-what-time-does-to-port",
      "the-pour-before-the-glass",
      "follow-the-agave-into-the-still",
      "the-vineyard-at-the-table",
    ],
    sourceGuideSlugs: [
      "begin-with-rice-not-the-bottle",
      "taste-what-time-does-to-port",
      "follow-the-agave-into-the-still",
    ],
    publishedOn: "2026-09-13",
    updatedOn: "2026-09-13",
    sections: [
      {
        title: "Start with the transformation",
        paragraphs: [
          "A tasting can make a drink seem complete from the moment it reaches the glass. The more revealing experience begins earlier. In a Seoul makgeolli class, rice, water, nuruk and fermentation become part of the story before the drink is ready. The class begins a process that continues beyond the session, which is precisely the point.",
          "Ask what changed the raw ingredient and who controls that change. Heat, yeast, vessel, time, climate and repeated human judgement all shape what you eventually taste. The drink becomes easier to remember when you can follow at least part of that path.",
        ],
      },
      {
        title: "Read time as an ingredient",
        paragraphs: [
          "In Vila Nova de Gaia, a cellar visit can make ageing visible through casks, bottles and the distinctions between styles of Port. The useful question is not simply which sample you prefer. It is what happened during the years before it was poured and why a particular vessel or method produced that result.",
          "Time works differently across drinks. Fermentation may still be underway after a class. Ageing may take place in wood or bottle. A seasonal cider route in Asturias follows a different calendar again. Avoid flattening these differences into a generic tasting flight.",
        ],
      },
      {
        title: "Keep landscape connected to labour",
        paragraphs: [
          "Agave, grapes, rice and apples can all become attractive shorthand for a region. A responsible visit asks what labour sits between landscape and glass. In Oaxaca, that includes the sequence from mature agave through cooking, crushing, fermentation and distillation. In Vienna, the vineyard and heuriger connect production to a public social setting.",
          "Do not let a beautiful field or cellar erase the workers, regulation and practical limits that make access possible. A public programme offers a specific window onto the system. It does not automatically explain every producer or give unrestricted access to working areas.",
        ],
      },
      {
        title: "Taste without turning it into a contest",
        paragraphs: [
          "The purpose is not to collect the largest number of samples or prove expert vocabulary. Notice one contrast you can explain in ordinary language. Ask one question about process. Use water, food and the pace offered by the host. If alcohol is involved, check age rules, transport and personal limits before the visit.",
          "A non-drinking companion should still be able to understand why the place and process matter. When the entire experience depends on consumption, it has less to offer than a well-shaped introduction to material, time and work.",
        ],
      },
      {
        title: "Leave with a route, not a ranking",
        paragraphs: [
          "At the end, write down the ingredient, transformation and decision that surprised you. Keep the official access link because programmes and availability change. Share the guide as a way to understand the drink, not as a declaration that one bottle or producer represents a whole region.",
          "That route gives you something useful on the next trip. You can enter another cellar, brewery, orchard or distillery with better questions and enough humility to notice how differently the same forces are handled.",
        ],
      },
    ],
    decision: {
      title: "The process-first check",
      intro:
        "A strong drink experience should remain worthwhile even when tasting is only one part of it.",
      questions: [
        "Can I understand the ingredient and at least one major transformation?",
        "Does the visit name the role of time, place and human judgement?",
        "Are current access, age and practical conditions clear enough to confirm?",
        "Will I leave with a better question rather than only a favourite sample?",
      ],
    },
    closing:
      "The first sip becomes more interesting when it is no longer the beginning of the story. Follow what came before it, then let taste confirm what your attention has already started to understand.",
  },
] as const satisfies readonly JournalArticle[];

const wordCount = (article: JournalArticle) =>
  [
    article.summary,
    ...article.sections.flatMap((section) => section.paragraphs),
    article.decision.intro,
    ...article.decision.questions,
    article.closing,
  ]
    .join(" ")
    .trim()
    .split(/\s+/).length;

/**
 * Journal entries fail closed when any guide used in the copy is no longer in
 * the active public edition. This prevents a live article from retaining stale
 * internal links or source context after a guide expires.
 */
export function getJournalArticles(
  activeGuides: readonly PublicExperience[],
): ResolvedJournalArticle[] {
  const bySlug = new Map(activeGuides.map((guide) => [guide.slug, guide]));

  return journalArticles.flatMap((article) => {
    const guides = article.guideSlugs.flatMap((slug) => {
      const guide = bySlug.get(slug);
      return guide ? [guide] : [];
    });
    const leadGuide = bySlug.get(article.leadGuideSlug);
    const media = leadGuide ? guideMediaFor(leadGuide.id) : undefined;

    if (!leadGuide || !media || guides.length !== article.guideSlugs.length) {
      return [];
    }

    const sources = article.sourceGuideSlugs.flatMap((slug) => {
      const guide = bySlug.get(slug);
      const source = guide?.guideReview?.sources[0];
      return guide && source
        ? [
            {
              guideTitle: guide.title,
              guideSlug: guide.slug,
              title: source.title,
              url: source.url,
              note: source.note,
            },
          ]
        : [];
    });

    if (sources.length < 2) return [];

    const count = wordCount(article);
    return [
      {
        ...article,
        leadGuide,
        guides,
        sources,
        media,
        wordCount: count,
        readingMinutes: Math.max(3, Math.ceil(count / 210)),
      },
    ];
  });
}

export function getJournalArticle(
  slug: string,
  activeGuides: readonly PublicExperience[],
) {
  return getJournalArticles(activeGuides).find(
    (article) => article.slug === slug,
  );
}

export function journalArticleStructuredData(article: ResolvedJournalArticle) {
  const url = canonicalUrl(`/journal/${encodeURIComponent(article.slug)}`);
  const imageId = `${url}#photograph`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        mainEntityOfPage: url,
        headline: article.title,
        description: article.summary,
        inLanguage: "en",
        articleSection: article.eyebrow,
        wordCount: article.wordCount,
        datePublished: article.publishedOn,
        dateModified: article.updatedOn,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: canonicalUrl("/about"),
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_ORIGIN,
        },
        image: { "@id": imageId },
        citation: article.sources.map((source) => source.url),
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: canonicalUrl(article.media.src),
        name: article.media.title,
        caption: article.media.depiction,
        creditText: `Photo: ${article.media.photographer}. ${article.media.licenseName}. Resized for the web with responsive cropping.`,
        ...(article.media.rightsBasis === "documented_license"
          ? {
              license: article.media.licenseUrl,
              acquireLicensePage: article.media.sourceUrl,
            }
          : { acquireLicensePage: article.media.sourceUrl }),
      },
    ],
  };
}
