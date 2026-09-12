import { publisher } from "./publisher";

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
          "Each guide carries a source-check date and an official access link. Prices, opening times and availability remain with the operator. All photographs have a credit and a rights record. Official-source images without a confirmed reuse licence are identified as such. There are no copied provider descriptions or paid placements.",
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
          "A place becomes more interesting when you know what to pay attention to. The timing of a shared meal. The movement behind a craft. The work that gives a landscape its shape. Experience Authority follows those connections through original guides to locally rooted experiences.",
          "Use Compass when you know what you feel like doing. Browse Places when you already have a destination. Follow a Collection when you want an unexpected connection, or open the Journal for a more considered way to shape a day.",
        ],
      },
      {
        title: "Independent by design.",
        paragraphs: [
          "Experience Authority is a connected spin-off of Innovation Authority. The shared interest is in understanding what matters and why. EA has its own identity, website and editorial focus on experiences rooted in place.",
          "Editorial selection must remain separate from commercial work. Providers cannot pay for inclusion, ranking or a more favourable judgement.",
        ],
      },
      {
        title: "From curiosity to a journey.",
        paragraphs: [
          "Passport gives your discoveries somewhere to go. Save ideas, compare their practical details, arrange them by day and keep travel notes beside them. Download or share your draft with a companion. Your saved ideas stay in your browser, with no account required.",
          "The current edition uses public-source research with linked evidence and clear access notes. We distinguish that work from an on-site review or a locally validated EA selection. The initial research register contains 200 candidates. Every published guide must earn its place individually.",
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
          "The correction form can open a prepared message in your email app or copy it for you to send. The suggestion form downloads an unsent local draft. Neither sends information to EA until you choose to send an email yourself.",
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
      "Optional audience measurement stays off until you allow it. This public edition does not provide advertising, user accounts or cloud storage.",
    sections: [
      {
        title: "Stored on this device.",
        paragraphs: [
          "Your saved stories and comparison list use local browser storage under the key ea:passport:v1. They do not sync across devices and are not sent to an account server.",
          "The optional journey planner stores a journey name, experience identifiers, day numbers, your planning status and your notes under ea:trip:v1. These stay in this browser and are not sent to EA. Avoid entering payment details, passport numbers or sensitive booking information. Remove an experience to delete its note, clear text fields to remove their contents, or use Start a fresh journey to clear the plan while keeping your saved guides.",
          "Sharing happens only when you press Share and use your device’s sharing interface or copy the text. Your journey name, notes and personal planning statuses are excluded unless you explicitly include them. Downloads and printed or saved PDF copies include your notes and become files you control. These actions do not create a public editable itinerary or synchronize devices.",
          "Remove individual bookmarks to delete them from your Passport. Clearing this site’s browser data removes the entire local Passport. Private browsing or browser settings may prevent persistent saving.",
        ],
      },
      {
        title: "Messages and drafts.",
        paragraphs: [
          "Correction text stays in the page until you copy it or open a prepared message in your email app. The website does not transmit it. It reaches EA only if you send the email yourself. Suggestion text remains an unsent local draft unless you separately choose to email it.",
          "Do not enter sensitive personal information, private contact details or restricted locations in demonstration forms.",
        ],
      },
      {
        title: "Optional audience measurement.",
        paragraphs: [
          "EA offers a clear analytics choice. Google Analytics does not load and no information is sent to Google before you choose Allow analytics. If you choose Do not use analytics, that choice is stored only in this browser and the Google tag remains absent.",
          "When allowed, EA measures page paths and a small set of product actions such as saving a guide, comparing guides, using search, sharing and exporting a journey. Search text, Passport contents, journey names, private notes and URL query parameters are not sent. Advertising storage, advertising user data, advertising personalisation and Google signals remain disabled.",
          "Google Analytics may use first-party identifiers such as _ga after consent. EA keeps event and user data for 14 months so seasonal and year-to-year use can be compared. The separate EA property is not combined with advertising products. Enhanced Measurement, Google Signals, precise location and device collection, and advertising personalisation are disabled. Use Analytics choices in the footer to change your decision. Turning analytics off updates consent, removes accessible EA analytics cookies and reloads the page without the Google tag.",
        ],
      },
      {
        title: "Hosting and future services.",
        paragraphs: [
          "The hosting service may process ordinary request logs needed to deliver and secure the site. Any future account, submission, advertising or commercial service requires a separate review and an updated notice before introduction.",
        ],
      },
    ],
  },
};
editorialPages.legal = {
  eyebrow: "Publisher & contact",
  title: "Who stands behind EA.",
  intro:
    "Experience Authority is published and operated by Innovation Authority Ltd.",
  aside:
    "A separate editorial identity, with accountable corporate and editorial responsibility.",
  sections: [
    {
      title: "The publisher.",
      paragraphs: [
        publisher.name +
          " is a private limited company registered in " +
          publisher.jurisdiction +
          ", company number " +
          publisher.companyNumber +
          ".",
        "Registered office: " + publisher.registeredOffice + ".",
      ],
    },
    {
      title: "Editorial responsibility.",
      paragraphs: [
        publisher.editorialResponsibility +
          " is responsible for the publication. Experience Authority retains its own identity and editorial focus within the same operating company as Innovation Authority and What Holds Value.",
        "The public-source edition does not imply a personal field visit, holder consent, local validation or an independent review of every experience. Each guide explains its own evidence and limits.",
      ],
    },
    {
      title: "A direct route.",
      paragraphs: [
        "For enquiries, corrections, privacy requests or rights concerns, write to " +
          publisher.email +
          " and include EA in the subject line. Identify the relevant page and avoid sensitive personal information.",
        "The correction form prepares a message in your email app or copies it for you to send. The suggestion tool downloads an unsent local draft. Neither sends a message until you send it yourself by email.",
      ],
    },
  ],
};
editorialPages.contact = {
  eyebrow: "Contact",
  title: "A direct route to EA.",
  intro:
    "Questions, corrections, rights concerns and thoughtful suggestions reach the company responsible for Experience Authority.",
  aside:
    "Experience Authority is published and operated by Innovation Authority Ltd.",
  sections: [
    {
      title: "Write to us.",
      paragraphs: [
        "Email " +
          publisher.email +
          ". Include EA in the subject line and identify the page when your message concerns a guide, source, photograph or correction.",
        "Do not send payment details, passport numbers, confidential material, sensitive personal information or culturally restricted knowledge in a first message.",
      ],
    },
    {
      title: "Company details.",
      paragraphs: [
        publisher.name +
          " is registered in " +
          publisher.jurisdiction +
          ", company number " +
          publisher.companyNumber +
          ".",
        "Registered office: " + publisher.registeredOffice + ".",
        publisher.editorialResponsibility +
          " is responsible for the publication.",
      ],
    },
    {
      title: "What happens next.",
      paragraphs: [
        "An initial email does not create a booking, client, partnership or advisory relationship. EA reviews substantiated factual, source, image and rights concerns and responds when a reply is needed.",
        "The correction tool prepares a message for you to send. The suggestion tool prepares a local draft. Neither transmits information until you choose to email it.",
      ],
    },
  ],
};
editorialPages.accessibility = {
  eyebrow: "Accessibility",
  title: "The experience should remain open.",
  intro:
    "EA is being built so people can explore, read, save and plan with different devices, inputs and ways of perceiving content.",
  aside:
    "Accessibility is an ongoing product responsibility, not a one-time badge or a claim of certification.",
  sections: [
    {
      title: "What the site supports.",
      paragraphs: [
        "Pages use semantic headings, labelled controls, keyboard-visible focus, text alternatives, responsive layouts and reduced-motion preferences. Core discovery and planning actions do not depend on hover alone.",
        "Automated checks cover representative pages and common WCAG A and AA failures. They do not replace screen-reader testing, user testing or a formal accessibility audit.",
      ],
    },
    {
      title: "Tell us what blocks you.",
      paragraphs: [
        "If a page, control, photograph, document or explanation is difficult to use, email " +
          publisher.email +
          " with EA accessibility in the subject line. Include the page, device or assistive technology and the task you were trying to complete when practical.",
        "We will use credible reports to correct the immediate problem and improve the shared pattern behind it.",
      ],
    },
  ],
};
editorialPages.terms = {
  eyebrow: "Website terms",
  title: "Read, use and share the work fairly.",
  intro:
    "These terms define the boundary around EA's editorial work, research, photographs, tools and external links.",
  aside:
    "Effective 13 September 2026. Experience Authority is published by Innovation Authority Ltd.",
  sections: [
    {
      title: "Legal information.",
      paragraphs: [
        publisher.name +
          " is registered in " +
          publisher.jurisdiction +
          ", company number " +
          publisher.companyNumber +
          ". Registered office: " +
          publisher.registeredOffice +
          ". Contact: " +
          publisher.email +
          ".",
        "By using this website you agree to use it lawfully and without interfering with the site, its visitors, its sources or the people and places described.",
      ],
    },
    {
      title: "Editorial content and practical decisions.",
      paragraphs: [
        "EA provides independent editorial research and planning tools. It does not provide a booking, guarantee, certification, live availability service, safety assessment or substitute for current advice from an operator, authority or qualified professional.",
        "Access, prices, schedules, weather, conditions and local requirements can change. Follow the cited official route and make your own current checks before travelling or participating.",
      ],
    },
    {
      title: "Intellectual property.",
      paragraphs: [
        "Unless stated otherwise, Innovation Authority Ltd owns or controls EA's original writing, editorial selection and arrangement, taxonomies, research architecture, product formats, visual identity, software and presentation. Copyright, database rights, trade mark rights and other applicable rights are reserved.",
        "EA does not claim ownership of underlying facts, third-party names, credited photographs or other third-party material. Those rights remain with their respective holders.",
      ],
    },
    {
      title: "Permitted use.",
      paragraphs: [
        "You may read the public website, link to its pages and quote limited extracts with clear attribution where the law permits. You may use your own downloaded journey draft for personal planning.",
        "Without prior written permission, you may not reproduce or commercially exploit a substantial part of the catalogue, systematically extract its records, remove credits or rights notices, or recreate a competing database, publication, training set or service from EA material.",
      ],
    },
    {
      title: "Automated use.",
      paragraphs: [
        "EA reserves applicable rights in relation to text and data mining, automated extraction and model training. Conventional search indexing that sends readers to the original page is permitted subject to the site's machine-readable controls.",
        "Contact " +
          publisher.email +
          " before research, syndication, data licensing or other systematic use.",
      ],
    },
    {
      title: "Sources, images and external services.",
      paragraphs: [
        "External links let readers inspect sources and official access information. EA does not control those sites, their availability, accuracy, security, terms or data practices.",
        "Photographs remain connected to their named creators and sources. Contact EA promptly about a credit, source, factual or rights concern. Publication does not imply a provider partnership or endorsement.",
      ],
    },
    {
      title: "Governing law.",
      paragraphs: [
        "These terms are governed by the laws of England and Wales. Subject to mandatory rights that cannot lawfully be excluded, the courts of England and Wales have exclusive jurisdiction over disputes arising from the website.",
      ],
    },
  ],
};
editorialPages.about.sections.push({
  title: "Published by Innovation Authority Ltd.",
  paragraphs: [
    publisher.name +
      " (company " +
      publisher.companyNumber +
      ", " +
      publisher.jurisdiction +
      ") operates EA. " +
      publisher.editorialResponsibility +
      " is responsible for the publication. Contact: " +
      publisher.email +
      ".",
  ],
});
editorialPages.transparency.sections[3].paragraphs[1] =
  "Experience Authority is operated by " +
  publisher.name +
  ". Editorial responsibility: " +
  publisher.editorialResponsibility +
  ". Contact: " +
  publisher.email +
  ". Actual funding relationships and any future commercial services must be disclosed separately.";
editorialPages.privacy.sections.push({
  title: "Operator and contact.",
  paragraphs: [
    publisher.name +
      " (company " +
      publisher.companyNumber +
      ") is responsible for information processed to operate EA. Registered office: " +
      publisher.registeredOffice +
      ". Contact: " +
      publisher.email +
      ".",
    "Hosting is provided by Vercel. If you email us, we receive your address, message and any attachments. Enquiries are not newsletter subscriptions. Our basis for secure operation, responding to enquiries and maintaining editorial records is legitimate interests, or legal obligation where applicable.",
    "Information is handled by publication personnel and necessary hosting and email-service providers. Technical logs follow hosting retention controls. Correspondence is retained while needed to resolve the request, preserve a relevant correction or rights record, or meet a legal obligation. Hosting and communications can involve international processing, including the United States. Ask us about the arrangements relevant to your request.",
    "Subject to applicable law, contact us to request access, correction, deletion, restriction or portability where applicable. You may object to legitimate-interest processing. You can also complain to the UK Information Commissioner’s Office or the relevant local data-protection authority.",
  ],
});
editorialPages.privacy.sections[3].paragraphs[0] =
  "The hosting service may process ordinary request logs needed for delivery and security, including IP address, URL, browser details and time. New account, submission, advertising or commercial services require an updated notice before introduction.";
