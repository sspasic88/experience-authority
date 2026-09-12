export const editorialPages: Record<
  string,
  {
    eyebrow: string;
    title: string;
    intro: string;
    aside: string;
    sections: { title: string; paragraphs: string[] }[];
  }
> = {
  method: {
    eyebrow: "Our method",
    title: "Care is part of the experience.",
    intro:
      "A selection is a responsibility. Our method starts with the experience, the people who hold it and the place that makes it possible.",
    aside:
      "Method v0.2 / Public-source guides and locally validated selections are different editorial products. One does not automatically become the other.",
    sections: [
      {
        title: "Public-source guides: a useful first step.",
        paragraphs: [
          "A public-source guide is original editorial writing about a specific, publicly offered programme, ordinary admission or public hospitality. It explains the experience, its relationship to place, a possible change in perspective, responsible participation and the limits of the evidence. It is not an EA Selected endorsement or an on-site review.",
          "We use published official information and link to the source of each account. First-party descriptions are attributed, not treated as independent proof of quality or impact. No special private access, sacred practice, uninvited workplace visit or culturally restricted knowledge is offered through these guides.",
          "Each guide carries a desk-check date and an official access link. Prices, opening times and availability remain with the operator. We do not arrange a visit or imply a partnership. No provider photographs, copied descriptions or paid placements are used in the first guide set.",
          "The sections on a possible shift and human return are editorial interpretations, not measured effects. Local validation remains a separate step before an experience can receive an EA Selected status. The guide register excludes entries after their review-by date, at most 90 days after a source check. This is not live availability monitoring.",
        ],
      },
      {
        title: "01 / Experience before inventory.",
        paragraphs: [
          "We begin with what a person can meaningfully encounter or participate in. We do not begin with a supplier catalogue, a popularity score or a commission opportunity.",
          "A holder or provider may help make access possible. They are not the reason a story is selected, and payment must never buy editorial inclusion or prominence.",
        ],
      },
      {
        title: "02 / Rootedness before reach.",
        paragraphs: [
          "Every selection must explain its relationship to place, lived practice and the people whose knowledge gives it meaning. Local review is a required part of understanding that relationship.",
          "A beautiful image or an appealing description is not evidence. Our publication record must hold the sources, consent, review decisions and dates behind the public story.",
        ],
      },
      {
        title: "03 / A shift, not a promise.",
        paragraphs: [
          "We describe a possible shift in attention, understanding or participation. We do not promise personal transformation, therapeutic outcomes or a prescribed emotional response.",
          "Human return is an invitation to reflect, not a measurable product benefit or a guarantee.",
        ],
      },
      {
        title: "04 / Access has boundaries.",
        paragraphs: [
          "Open access, context required, protected visibility and paused are distinct editorial states. They must make it clear whether a story is an invitation, needs preparation, or offers no access at all.",
          "Protected stories use separately reviewed public wording. Sensitive directions, coordinates, private contacts and restricted imagery must never enter the public website or its metadata.",
        ],
      },
      {
        title: "05 / Review is ongoing.",
        paragraphs: [
          "Access, consent and context can change. Each live entry needs a current review date, sources and a correction route. High-risk and protected publication requires two distinct reviewers, including local review.",
          "Research candidates remain internal. AI may assist research and organization, but it cannot grant consent, establish authenticity or replace accountable editorial judgement.",
        ],
      },
    ],
  },
  about: {
    eyebrow: "About Experience Authority",
    title: "The world is not a checklist.",
    intro:
      "A global selection of locally rooted experiences. For people who want to understand a place by being more present in it.",
    aside:
      "Experience Authority is a connected spin-off of Innovation Authority, with its own identity, domain and independently built product.",
    sections: [
      {
        title: "A different starting point.",
        paragraphs: [
          "We are developing a way to discover experiences through their relationship to place, the knowledge they hold and the perspective they may open.",
          "Compass is not a booking marketplace, a provider directory or a list of things everyone should do. It is an editorial project built around context, care and curiosity.",
        ],
      },
      {
        title: "Independent by design.",
        paragraphs: [
          "Experience Authority has a separate application and intended deployment at experienceauthority.com. Its relationship to Innovation Authority does not mean shared user accounts or shared personal data.",
          "Editorial selection must remain separate from commercial work. Providers cannot pay for inclusion, ranking or a more favourable judgement.",
        ],
      },
      {
        title: "In the making.",
        paragraphs: [
          "The first content edition contains original public-source guides to specifically identified, publicly offered experiences. Each states what its sources establish and what remains unverified. No local validation, personal visit or provider partnership is claimed.",
          "The public edition contains original public-source guides. A separate, explicitly labelled design-demo mode retains fictional interface examples for testing and is not available in production. The 200 preliminary research candidates are not automatically published.",
        ],
      },
    ],
  },
  transparency: {
    eyebrow: "What sits behind our selection",
    title: "Nothing implied. Nothing hidden.",
    intro:
      "The boundaries of this public-source edition, the editorial model and the decisions that remain before EA Selected can launch.",
    aside:
      "Public-source edition disclosure / 12 September 2026. No paid listings, bookings or tracking integrations are active in this application.",
    sections: [
      {
        title: "What kind of content is this?",
        paragraphs: [
          "The public edition contains public-source guides, not locally validated EA selections. Sources were checked as documented in each guide. AI-assisted desk research and original drafting have not been presented as a human field visit, holder consent, an independent quality audit or a guarantee of availability.",
          "Guide cards use real photographs with named creators, source links, licences and explicit depiction boundaries. Some show the actual place. Others are clearly identified activity or cultural context. The homepage and thematic pathways reuse credited guide photography. None is evidence of an EA visit. No AI-generated photographs are used.",
        ],
      },
      {
        title: "What works here.",
        paragraphs: [
          "The public edition supports search and filters, grid and list views, place and field navigation, photo enlargement, device-local saving, comparison of up to three experiences, and a private day-by-day journey draft. Visitors can download a plan or choose to share a text copy. A draft is not a confirmed booking or a checked travel route.",
          "Suggestion and correction forms only download an unsent draft. They do not send messages, save information to a database or create a submission queue.",
        ],
      },
      {
        title: "What is not connected.",
        paragraphs: [
          "There is no production database, authentication, administrative publishing interface, booking system, payment processing or cloud Passport synchronization.",
          "The production configuration excludes all demo experience records. Research notes, private contacts and the preliminary 200-candidate register are not exposed. Public guides do not satisfy the separate locally validated EA Selected launch requirement.",
        ],
      },
      {
        title: "How money must not influence selection.",
        paragraphs: [
          "A provider must not pay for editorial selection, ranking or an access status. Future commissioned work or partnerships must be labelled and separated from editorial decision-making.",
          "Any actual funding relationships, operating-entity details and commercial services will need explicit disclosure before they begin.",
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your Passport stays with you.",
    intro:
      "No account is required. Your Passport and optional journey plan stay in this browser, including any notes you choose to write.",
    aside:
      "No analytics or advertising scripts are included in the application. This public edition does not provide user accounts or cloud storage.",
    sections: [
      {
        title: "Stored on this device.",
        paragraphs: [
          "Your saved stories and comparison list use local browser storage under the key ea:passport:v1. They do not sync across devices and are not sent to an account server.",
          "The optional journey planner stores a journey name, experience identifiers, day numbers and your notes under ea:trip:v1. These stay in this browser and are not sent to EA. Avoid entering payment details, passport numbers or sensitive booking information. Remove an experience from the plan to delete its note, clear text fields to remove their contents, or clear this site’s browser data to delete the whole plan.",
          "Sharing happens only when you press Share and use your device’s sharing interface or copy the text. Private names and notes are excluded from shared plans unless you explicitly opt in. A downloaded plan includes your notes and becomes a file you control. Neither action creates a public editable itinerary or synchronizes devices.",
          "Remove individual bookmarks to delete them from your Passport. Clearing this site’s browser data removes the entire local Passport. Private browsing or browser settings may prevent persistent saving.",
        ],
      },
      {
        title: "Drafts are not submissions.",
        paragraphs: [
          "Suggestion and correction text stays in the page until you download an unsent text file. It is not transmitted by the application. If you leave the page, the unsaved draft can be lost.",
          "Do not enter sensitive personal information, private contact details or restricted locations in demonstration forms.",
        ],
      },
      {
        title: "Hosting and future services.",
        paragraphs: [
          "The application does not add tracking, but the hosting service may process ordinary request logs needed to deliver and secure the site. This website must be updated with the operator and applicable privacy details before any account, analytics, submission or commercial service is introduced.",
        ],
      },
    ],
  },
};
