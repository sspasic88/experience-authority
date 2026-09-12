export const journeyModes = [
  {
    index: "01",
    title: "Begin with one place",
    text: "Choose the place first, then look for a way to participate in it. One strong experience can give the rest of a trip a clearer centre.",
    href: "/places",
    link: "Browse places",
  },
  {
    index: "02",
    title: "Follow what draws you",
    text: "Start with taste, movement, making, nature or a shared ritual. Compass lets the kind of day you want lead the search.",
    href: "/fields",
    link: "Explore the fields",
  },
  {
    index: "03",
    title: "Build around a thread",
    text: "Use an editorial collection to connect experiences without turning the world into a checklist. Keep the thread and change the destination.",
    href: "/collections",
    link: "Follow a collection",
  },
] as const;

export const planningChecks = [
  {
    title: "Check the current access route",
    text: "Open the host or public authority link in the guide. Confirm dates, capacity, price, age limits and any advance booking requirement directly.",
  },
  {
    title: "Leave time around the experience",
    text: "Do not stack meaningful experiences back to back. Allow for travel, weather, arrival instructions and the possibility that the place deserves more time.",
  },
  {
    title: "Read the participation note",
    text: "Know whether you will watch, learn, move, eat or share a public space. Clothing, fitness, language and local conduct may affect whether it is right for you.",
  },
  {
    title: "Keep a second plan",
    text: "Seasonal events and small programmes can change. Save an alternative nearby and verify both shortly before you travel.",
  },
  {
    title: "Ask before you record",
    text: "Public access is not blanket permission to photograph people, private work or culturally sensitive moments. Presence comes before proof.",
  },
  {
    title: "Book with the source",
    text: "EA currently connects you to the published access route. It does not take payment, confirm availability or insert itself between you and the host.",
  },
] as const;

export const journeySteps = [
  {
    label: "Discover",
    text: "Use Compass, a place or a field to find a guide that earns your attention.",
  },
  {
    label: "Verify",
    text: "Read the evidence boundary, responsibility note and latest source check.",
  },
  {
    label: "Keep",
    text: "Save promising guides to your private EA Passport and compare up to three.",
  },
  {
    label: "Shape",
    text: "Put saved experiences into days, add travel notes and download or share the draft.",
  },
] as const;
