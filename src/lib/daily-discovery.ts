import type { PublicExperience } from "./catalog";

type Discovery = {
  date: string;
  slug: string;
  title: string;
  angle: string;
  notice: string;
  question: string;
};

/** Dated, authored angles on already published guides. No fake new articles or endless random cycle. */
export const dailyDiscoveries: readonly Discovery[] = [
  {
    date: "2026-09-13",
    slug: "hear-the-church-before-you-climb",
    title: "A landmark you can listen to.",
    angle:
      "You know the instinct: find the tower, climb, take in the city. Porto offers another beginning. Sit beneath the stone vaults at Clérigos and listen to what an organ phrase becomes after it leaves the instrument. A landmark can change without your moving an inch.",
    notice:
      "The space between the notes. Listen to the room, not only to the player.",
    question:
      "Which building on your next journey might be more interesting to hear than to photograph?",
  },
  {
    date: "2026-09-14",
    slug: "find-a-place-through-its-scent",
    title: "What if you remembered Kyoto by scent?",
    angle:
      "A photograph can tell you what was in front of you. A scent can bring back an association you did not know you were carrying. In Kunjyukan's gallery, begin by comparing two impressions before the labels offer their explanation. You do not have to buy a thing to leave with something.",
    notice:
      "Your own words before the display's words. Familiar, dry, green or something harder to name.",
    question:
      "What would you notice in a place if sight stopped doing all the work?",
  },
  {
    date: "2026-09-15",
    slug: "draw-a-small-shape-in-flame",
    title: "Venice, before the souvenir is finished.",
    angle:
      "A glass object in a window looks inevitable. A rod in a flame does not. A small Castello atelier lets you meet the decisions before the finished curve. Pair that concentration with a rowing lesson and Venice begins to look like a city of learned movements.",
    notice:
      "The work of keeping a softening material in motion. Shape is something someone has to maintain.",
    question:
      "Which object would you see differently after trying its first difficult step?",
  },
  {
    date: "2026-09-16",
    slug: "let-the-market-write-your-menu",
    title: "One ingredient. A better way into Porto.",
    angle:
      "A market becomes more interesting when you stop trying to taste everything. Choose one ingredient at Bolhão and follow the questions it opens. Fresh or preserved? Eaten alone or with something else? One purchase can give the rest of a meal a direction.",
    notice: "How a serving suggestion changes what you were about to buy.",
    question:
      "Could your next lunch begin with a question rather than a restaurant ranking?",
  },
  {
    date: "2026-09-17",
    slug: "let-the-ferry-redraw-istanbul",
    title: "The crossing is part of the city.",
    angle:
      "Not every revealing experience needs to be sold as one. A municipal ferry joins real journeys across Istanbul. Use the current timetable, find the right pier and let the crossing have its ordinary purpose. The skyline is still there, but it is no longer the whole story.",
    notice:
      "Arrivals, departures and how people share a moving public space. Observe without turning commuters into subjects for your camera.",
    question:
      "What does a place's everyday transport show that its viewing platform cannot?",
  },
  {
    date: "2026-09-18",
    slug: "begin-with-rice-not-the-bottle",
    title: "Start before the first sip.",
    angle:
      "A drink list gives you names. A brewing introduction gives you different questions. In Seoul, handling the beginning of makgeolli shifts attention to rice, water, starter and time. The class ends before the fermentation does, which is precisely the point.",
    notice:
      "The difference between beginning a process and having a finished product.",
    question:
      "What might you ask about the next drink before deciding whether you like it?",
  },
  {
    date: "2026-09-19",
    slug: "hear-the-arena-answer-back",
    title: "There is more than one performance in the room.",
    angle:
      "At Arena México, the ring naturally takes your eye. Give the stands some of your attention too. An entrance, a reversal and a pause travel through an audience before they become a shared reaction. You can be new to lucha libre and still notice that exchange.",
    notice:
      "How a reaction spreads. Do not worry about decoding every rule in one evening.",
    question: "When did the audience last become part of what you came to see?",
  },
  {
    date: "2026-09-20",
    slug: "ride-the-avenue-when-the-cars-step-aside",
    title: "A street can have another life.",
    angle:
      "A Sunday avenue in Mexico City is not a different place on the map. It is a different agreement about how to use the same space. Check the current public programme, then notice what becomes possible when the pace changes.",
    notice:
      "What you can hear and how far ahead you look when movement is no longer organised around traffic.",
    question:
      "Which street in your own city would you like to experience under different rules?",
  },
  {
    date: "2026-09-21",
    slug: "draw-with-wax-in-kampong-gelam",
    title: "A line that tells colour where to stop.",
    angle:
      "Batik asks you to notice a boundary being made, not just a pattern being filled. In Kampong Gelam, a workshop can make a familiar decorative surface feel like a sequence of decisions. The first imperfect line is useful information.",
    notice:
      "Where the colour meets the wax. Look for process, not a competition with the example.",
    question:
      "What changes when you make the boundary before you choose the colour?",
  },
  {
    date: "2026-09-22",
    slug: "taste-what-time-does-to-port",
    title: "Time has a taste, but ask how.",
    angle:
      "Port is a familiar reason to cross to Gaia. Use the cellar visit to get beyond a preference for one glass. Ask what the vessels and ageing choices change, then see whether the tasting gives you a difference you can actually describe.",
    notice:
      "A specific comparison, not a collection of impressive-sounding tasting words.",
    question:
      "Which question would make a tasting useful even if you remembered none of the labels?",
  },
  {
    date: "2026-09-23",
    slug: "build-a-pattern-in-colour",
    title: "A pattern is a set of decisions.",
    angle:
      "A finished textile can hide its order of making. In Kyoto, an introductory colouring session lets you slow that order down. After the tea bowl and the scent gallery, here is another small act that rewards close attention.",
    notice:
      "What has to happen first for the next colour or layer to make sense.",
    question:
      "Which repeated pattern have you admired without wondering how it is built?",
  },
  {
    date: "2026-09-24",
    slug: "mexico-city-grown-on-water",
    title: "Look beyond the boat.",
    angle:
      "Xochimilco is a name many visitors recognise through images of colourful boats. A bounded agricultural encounter asks a different question: how is this landscape worked, and what is growing within it? Choose the guide's specific public access route rather than assuming any boat trip offers the same thing.",
    notice:
      "The distinction between a landscape as a setting and a landscape as someone's ongoing work.",
    question:
      "What lies behind the most repeated photograph of your next destination?",
  },
  {
    date: "2026-09-25",
    slug: "a-morning-at-the-hawker-table",
    title: "The table matters as much as the dish.",
    angle:
      "Singapore's hawker food is a recognisable starting point. Stay attentive to what happens around the plate: ordering, waiting, finding a place and returning your tray. An ordinary meal can teach you something without becoming a performance arranged for visitors.",
    notice:
      "The shared rules that make a busy meal possible. Follow the guide's practical etiquette.",
    question:
      "What makes a public place feel welcoming without it having been designed just for you?",
  },
  {
    date: "2026-09-26",
    slug: "lift-a-pattern-from-the-water",
    title: "The moment a surface becomes a souvenir.",
    angle:
      "In ebru, the colour is still floating until the paper meets it. An Istanbul introduction gives that change a scale you can watch closely. Pair it with a ferry crossing and you have two very different reasons to pay attention to water.",
    notice:
      "The transfer, and what it preserves or changes about the floating arrangement.",
    question:
      "Would you rather bring back a perfect object or remember the moment you made one?",
  },
  {
    date: "2026-09-27",
    slug: "make-something-from-the-broken-pieces",
    title: "Look at the joins.",
    angle:
      "Barcelona's mosaic surfaces are easy to recognise and easy to photograph. A small trencadís workshop changes the question. Instead of admiring only the finished colour, you begin to see how one irregular fragment meets another. Take that attention back to the city without expecting a two-hour introduction to make you a master craftsperson.",
    notice:
      "The gap between two pieces, and the decision that makes it part of the pattern.",
    question:
      "Which familiar detail might become more interesting after you have tried making it?",
  },
  {
    date: "2026-09-28",
    slug: "watch-the-work-before-the-performance",
    title: "Let the unfinished part hold your attention.",
    angle:
      "A finished performance encourages us to wait for its most impressive moment. Vienna's publicly ticketed riding-school training asks for a different kind of looking. The repeated movement and the small adjustment are the reason to be there. Read the guide's welfare boundary before deciding whether this animal-based experience is for you.",
    notice:
      "What changes between attempts, without assuming you can assess a training method from the audience.",
    question:
      "When did you last choose to see the practice instead of the finished show?",
  },
  {
    date: "2026-09-29",
    slug: "meet-the-bay-on-its-working-hours",
    title: "The tide has the first word.",
    angle:
      "A plate of oysters is the familiar beginning. In Arcachon Bay, a public outing with an oyster farmer takes the story back to the beds and the water that sets the working hours. Leave the rest of the day loose enough to follow the confirmed departure, rather than asking the tide to fit around lunch.",
    notice:
      "The task that becomes possible as the water changes, and who decides when it can happen.",
    question:
      "What would you understand differently about a favourite food after seeing one part of the work behind it?",
  },
  {
    date: "2026-09-30",
    slug: "read-the-landscape-one-grain-at-a-time",
    title: "The monument is moving.",
    angle:
      "Dune du Pilat makes a strong first impression through scale. Look again through a smaller detail: the shape of sand at your feet. The manager's account of wind-driven movement turns a famous viewpoint into something less fixed, a landscape still being rearranged long after you put the camera away.",
    notice:
      "A surface pattern you can observe without disturbing it. Do not remove sand or enter closed areas.",
    question:
      "Which apparently permanent place might become more interesting if you asked what is changing?",
  },
  {
    date: "2026-10-01",
    slug: "twist-the-city-before-you-taste-it",
    title: "Kraków has a shape you can learn with your hands.",
    angle:
      "Obwarzanek krakowski is easy to recognise and easy to eat without a second thought. Slow the ring down. In a one-hour public workshop, the revealing moment is the twist that turns separate strands of dough into the city's everyday form. Taste a normally produced one later, when your hands know what your eyes are seeing.",
    notice:
      "The sequence before the finished crust. The museum gives conflicting advice about eating the workshop piece, so keep making and tasting separate.",
    question:
      "Which food have you known for years without ever noticing the movement that gives it shape?",
  },
  {
    date: "2026-10-02",
    slug: "take-the-window-back-to-the-workbench",
    title: "The line between colours is doing the work.",
    angle:
      "Kraków's stained glass rewards distance, but its making begins much closer. A tour-and-workshop inside a studio still in use moves from monumental windows to a small object you cut, wrap and solder under direction. The scale is modest. The shift in looking can be much larger.",
    notice:
      "The join, not only the colour. Follow every safety instruction around glass and tools.",
    question:
      "What finished surface would become more interesting if you could see what holds its separate parts together?",
  },
  {
    date: "2026-10-03",
    slug: "watch-a-city-arrive-in-miniature",
    title: "Once a year, Kraków carries in another Kraków.",
    angle:
      "On the first Thursday of December, szopka makers bring elaborate constructions shaped by the city's own architecture to the Main Market Square. The encounter is public and visually immediate, but the right role is simple: make room, look carefully and let the makers carry the work.",
    notice:
      "A tower, dome or colour translated from the full-sized city. This is spectatorship, not a visitor workshop.",
    question:
      "Which familiar landmark would you recognise if a local maker transformed it into something small enough to carry?",
  },
  {
    date: "2026-10-04",
    slug: "make-the-morning-before-it-reaches-the-cafe",
    title: "A croissant is a morning made in layers.",
    angle:
      "Paris makes the finished croissant easy to find and the work behind it easy to overlook. Give that familiar breakfast five and a half hours. Folding, cooling, shaping and waiting turn an icon back into a sequence of choices. The point is not to replace tomorrow's bakery visit. It is to arrive there with better eyes and a much better question.",
    notice:
      "The layers inside the cut pastry and the control behind their regularity. Follow the kitchen's safety and allergen guidance.",
    question:
      "Which food would you value differently if you gave its making as much time as its eating?",
  },
  {
    date: "2026-10-05",
    slug: "watch-a-picture-grow-one-thread-at-a-time",
    title: "At the Gobelins, the picture grows from the reverse.",
    angle:
      "A tapestry can look like a single grand surface from across a gallery. Inside the Gobelins workshops, attention moves to warp, bobbins, a mirror and the measured progress of the weaver. Contemporary images still pass through an old technique here. The surprise is not that the process survived. It is how actively it keeps interpreting the present.",
    notice:
      "The working edge where the image is not finished yet. Photography of artists is prohibited, so let observation be enough.",
    question:
      "What changes when you meet a monumental image at the scale of one thread and one decision?",
  },
  {
    date: "2026-10-06",
    slug: "see-what-keeps-paris-moving-underground",
    title: "Paris has another address below the street.",
    angle:
      "The city above is rich in objects designed to hold your gaze. Beneath Pont de l'Alma, the Sewer Museum redirects it towards water, maintenance and the people who keep an immense system working. The setting is unusual, but novelty is not the most valuable part. For an hour, infrastructure becomes something you can actually see and think about.",
    notice:
      "The equipment and job descriptions, not only the tunnel. This is an active industrial environment inside a bounded museum route.",
    question:
      "Which invisible system deserves a place in how you understand the next city you visit?",
  },
  {
    date: "2026-10-07",
    slug: "ask-the-market-where-london-came-from",
    title: "London begins with a better market question.",
    angle:
      "Borough Market is easy to recognise and easy to reduce to a queue for lunch. A guided morning changes the unit of attention. Follow one ingredient backwards through the trader, producer and place it came from. The market does not become a complete portrait of London, but it becomes more than a backdrop for eating.",
    notice:
      "The explanation behind one product. Ask before photographing, keep the working route clear and buy only what you can use.",
    question:
      "What would you learn from the next market if you followed one ingredient instead of trying to taste everything?",
  },
  {
    date: "2026-10-08",
    slug: "meet-the-work-before-the-curtain-rises",
    title: "The performance begins before anyone takes the stage.",
    angle:
      "At the Royal Opera House, the public image naturally settles on the performer and auditorium. A backstage route widens the frame. Rehearsal, costume, scenery, machinery and timing must meet before the curtain can rise. The exact spaces change with the working day, which makes the visit less predictable and more truthful.",
    notice:
      "One task that would disappear inside the finished performance. Respect every working boundary and photography instruction.",
    question:
      "Whose work would you notice if you watched the next performance as a system rather than a single event?",
  },
  {
    date: "2026-10-09",
    slug: "open-a-door-the-underground-left-behind",
    title: "The Tube map leaves out the rooms beside the line.",
    angle:
      "Piccadilly Circus is designed to move people onward. Behind its working passages, earlier routes, lift shafts and closed spaces preserve decisions made for another London. A Hidden London tour lets an expert open one bounded part of that history. The surprise is not simply that the rooms exist. It is how closely an abandoned station can sit beside an ordinary journey.",
    notice:
      "A tiled edge, blocked doorway or change in scale that reveals where one version of the station meets another.",
    question:
      "Which familiar system in your own city might contain an earlier version just beyond the route you use?",
  },
  {
    date: "2026-10-10",
    slug: "make-pasta-until-the-sauce-makes-sense",
    title: "The pasta shape is already part of the answer.",
    angle:
      "Rome makes it easy to order a famous plate and harder to see the decisions that hold it together. A long pasta class slows the meal back down to dough, thickness, edge, filling and sauce. Make more than one shape and the difference stops being decorative. Each one changes what it can carry, hold or release at the table.",
    notice:
      "The pressure of the rolling pin and the seal around a filling. Follow the kitchen's allergy and safety instructions closely.",
    question:
      "Which dish would become more interesting if you understood why its parts were designed to meet?",
  },
  {
    date: "2026-10-11",
    slug: "ride-the-road-rome-built-to-leave-it",
    title: "Rome built a road that changed the meaning of distance.",
    angle:
      "The Appian Way is ancient, but its first job was movement. On a carefully chosen cycle section, stones, tombs, fields and long sightlines return the road to that purpose. Let the surface set the pace. The useful surprise is not how far you travel. It is how quickly Rome begins to look like a connected system rather than a centre full of separate monuments.",
    notice:
      "Where the road surface changes and what that asks of your speed. Dismount whenever the paving, traffic or other visitors require it.",
    question:
      "Which place would you understand differently if you followed the route that once connected it to everything beyond?",
  },
  {
    date: "2026-10-12",
    slug: "put-the-gods-back-among-the-machines",
    title: "Rome keeps more than one past in the same room.",
    angle:
      "At Centrale Montemartini, a white marble figure can stand directly in front of a dark diesel engine. The contrast is immediate, but stay long enough to move beyond it. One object belonged to ancient civic and religious life. The other helped a modern city make light. Their shared room reveals how Rome excavates, powers and rearranges itself across time.",
    notice:
      "One pipe, gauge or machine label beside one ancient object label. Ask what larger system each fragment once served.",
    question:
      "What changes when a museum lets two histories confront each other instead of keeping them in separate buildings?",
  },
  {
    date: "2026-10-13",
    slug: "read-a-ship-before-the-sails-arrive",
    title: "The ship is most revealing before it looks finished.",
    angle:
      "A finished sailing vessel can hide the decisions that hold it together. On Bulukumba's working coast, an unfinished wooden hull makes them immense. Ribs repeat around one worker. Planks meet before the outer curve becomes smooth. Visit only from a safe public edge and let the structure carry the discovery. Three days later, the current public festival offers a separate way to see how the maritime tradition enters Bulukumba's shared calendar.",
    notice:
      "One joint, support or change of curve that helps many pieces behave like one hull. Never enter a work zone without a clear invitation.",
    question:
      "Which finished object would become more remarkable if you could first read the structure hidden inside it?",
  },
  {
    date: "2026-10-14",
    slug: "follow-the-fizz-through-a-working-factory",
    title: "A bottle can remember an entire delivery route.",
    angle:
      "Inside a Brooklyn seltzer works, the glass siphon is not packaging to throw away. It belongs to a cycle of return, inspection, washing, filling, pressure, repair and delivery. Old machinery and an active production floor make that system visible. The surprise is not simply that seltzer has a museum. It is that a drink many people barely notice can reveal a living piece of urban logistics.",
    notice:
      "One sign of repeated use on a glass siphon. Stay with the guided route and never touch machinery unless the host invites it.",
    question:
      "What everyday object in your city still carries evidence of the system that keeps it moving?",
  },
  {
    date: "2026-10-15",
    slug: "open-the-other-side-of-ellis-island",
    title: "Ellis Island has another side to the arrival story.",
    angle:
      "The Great Hall is the image most visitors know. Across the island, the hospital complex holds a harder conjunction. People received medical care while inspection and immigration law still shaped whether they could enter the country. An escorted route through selected unrestored buildings adds those rooms to the landmark. JR's archival figures appear on walls and windows, but the people and systems behind them remain the subject.",
    notice:
      "A service space that changes how you understand the better-known public rooms. Keep photographs respectful and remain with the guide.",
    question:
      "Which national landmark would become more truthful if its less comfortable rooms were part of the main story?",
  },
  {
    date: "2026-10-16",
    slug: "make-halloumi-before-it-reaches-the-plate",
    title: "Halloumi begins long before the grill.",
    angle:
      "Cyprus gives halloumi an easy place in the travel imagination. The finished slice is familiar. The transformation is not. On a full-day route into the Troodos foothills, milk separates, curd gathers, whey runs and the cheese takes its folded form before the table appears. The day is not about collecting food stops. It is about following one recognisable ingredient far enough backwards that its texture stops feeling inevitable.",
    notice:
      "The moment loose curd begins to hold a form. Follow every kitchen and dietary instruction given by the host.",
    question:
      "Which familiar food would become new again if you followed it back to the point where it first held together?",
  },
  {
    date: "2026-10-17",
    slug: "read-a-smoke-sauna-before-the-heat",
    title: "The sauna begins before anyone enters.",
    angle:
      "A smoke sauna is easy to reduce to heat, darkness and a dramatic interior. A farm walk at Mooska begins earlier. Timber, roof, hearth, ventilation, fire and time have to meet before the room can serve anyone. One sauna also smokes meat, placing another form of preparation beside bathing. The public visit does not make a private ritual yours. It gives you a better way to recognise the work that protects it.",
    notice:
      "A surface marked by repeated smoke or heat. Stay with the host and do not assume that the walk includes bathing.",
    question:
      "What shared place would you understand differently if you first learned how it is prepared for other people?",
  },
  {
    date: "2026-10-18",
    slug: "fold-a-pattern-into-the-blue",
    title: "The pattern begins where the blue cannot go.",
    angle:
      "A finished indigo textile draws attention to colour. In Suchitoto, a one-hour workshop shifts it to resistance. Fold, bind and protect parts of the cloth before it reaches the dye. Only when the piece opens can you see how those earlier decisions held their ground. The result does not need to be perfect. It needs to let you recognise that every white line is evidence of something the colour was prevented from touching.",
    notice:
      "The edge between indigo and undyed cloth. Use only the studio-provided textile and follow the dye-handling instructions.",
    question:
      "What if the most interesting part of a colour were the boundary that kept it from spreading?",
  },
  {
    date: "2026-10-19",
    slug: "follow-medellins-flowers-back-to-the-farm",
    title: "Medellín's flowers begin above the city.",
    angle:
      "The silletero parade gives Medellín one of its most recognisable images. Santa Elena lets you begin earlier. A farm visit places the flowers beside the gardens, wooden frames and family decisions that come before the public route. Choose one current host and let that specific farm speak for itself. The surprise is not a hidden version of the parade. It is the amount of year-round work carried into a few visible hours.",
    notice:
      "The relationship between one flower, its position on the frame and the person who will carry it. Do not pick or handle anything unless the host invites you.",
    question:
      "Which famous city image would become more meaningful if you followed it back to the people and place that prepare it?",
  },
  {
    date: "2026-10-20",
    slug: "read-a-hive-from-the-inside",
    title: "A hive is not still, even in a museum.",
    angle:
      "In Višnja Gora, illuminated honeycomb displays lead toward something no label can freeze. A glass hive lets you watch the Carniolan bee as a living system. Stay with it long enough to stop following one insect and begin noticing circulation, density and repeated movement. The room turns a familiar word into a more difficult question: what does it take for thousands of small actions to become one colony?",
    notice:
      "The point where individual movement becomes a pattern. Keep the glass quiet and follow every instruction from the house.",
    question:
      "What living system have you mistaken for a single object because you never watched it long enough?",
  },
  {
    date: "2026-10-21",
    slug: "follow-mastiha-back-to-the-tree",
    title: "This clear drop belongs to one island.",
    angle:
      "Mastiha can arrive as flavour, scent, gum or a name on a package. At Chios Mastic Museum, begin before all of them. A clear resin drop gathers on rough bark, then enters a chain of cultivation knowledge, cleaning, cooperative processing and use. The close view of the tree is enough to make a familiar product strange again. The museum then gives that surprise a landscape and a system.",
    notice:
      "The contrast between clear resin and textured bark. Stay within public areas and do not collect plant material.",
    question:
      "Which ingredient would change completely if you first met it at the tree, field or water it came from?",
  },
  {
    date: "2026-10-22",
    slug: "follow-appenzeller-from-vat-to-cellar",
    title: "The secret begins after the process becomes visible.",
    angle:
      "Appenzeller is easy to meet as a name, a wedge or a promise of flavour. In Stein, the more interesting beginning is an open vat below a visitor gallery. Milk moves, curd forms and a working floor turns the finished wheel back into a sequence of decisions. The recipe for the herbal brine stays guarded, but much of the labour around it can still be read. Taste last, after the familiar object has become a system.",
    notice:
      "One change in texture or movement on the production floor. Remain behind the glass and let the real working rhythm set the pace.",
    question:
      "Which protected recipe would become more interesting if you first understood everything around the part that stays secret?",
  },
  {
    date: "2026-10-23",
    slug: "watch-a-dhow-take-shape-beside-the-creek",
    title: "A boat can be read before it touches water.",
    angle:
      "Ajman's dhow yard offers a different counterpoint to the polished Gulf skyline. Timber ribs rise before the hull becomes smooth. Tools, sanding, fitting and unfinished surfaces make a familiar maritime silhouette legible as work. The yard is not staged around a visitor and may not be active when you arrive. That uncertainty is part of the boundary. Watch only from a clearly public edge and let the structure, not access to the workers, carry the discovery.",
    notice:
      "The line where separate ribs begin to suggest the finished hull. Stay clear of every work zone and ask before photographing a person.",
    question:
      "Which symbol of a place would become less generic if you saw it before it was finished?",
  },
  {
    date: "2026-10-24",
    slug: "read-monument-valley-beyond-the-scenic-drive",
    title: "The famous road is only one line through this landscape.",
    angle:
      "Monument Valley may feel familiar before you arrive. Two buttes, a straight road and a thousand repeated frames can create that illusion. Begin instead with the current Navajo Nation Parks operator list. A guided backcountry route moves through land whose access is managed, where names, stories and formations do not become public property simply because the horizon is famous. The deeper discovery is not a hidden photograph. It is the authority to decide where a visitor goes, what a guide shares and when the road should stop.",
    notice:
      "The moment the guide's route makes the postcard feel incomplete. Follow every instruction on places, names, photography and recording.",
    question:
      "Which landscape have you mistaken for familiar because you recognised its most repeated view?",
  },
  {
    date: "2026-10-25",
    slug: "follow-balis-water-before-the-rice",
    title: "Before the terrace becomes green, the water has to agree.",
    angle:
      "Jatiluwih is easy to photograph as a sequence of green curves. A local farming guide can turn those curves back into decisions. Water arrives, changes height, divides and reaches fields through a subak system that connects canals, farmers and water temples. The landscape is still cultivated, so the most useful route is not the one that finds the widest view. It is the one that helps you notice shared infrastructure without stepping outside the path or turning work and ceremony into scenery.",
    notice:
      "One place where the level or direction of water changes. Never touch a gate, block a channel or step into a planted terrace.",
    question:
      "What beautiful landscape would become more remarkable if you could read the system that keeps it working?",
  },
  {
    date: "2026-10-26",
    slug: "make-tea-before-taipei-drinks-it",
    title: "The cup begins with a leaf you can misread.",
    angle:
      "In Pinglin, a seasonal farm reservation can begin before tea has colour, aroma or a name on a package. The host shows you which leaf to pick and which to leave, then opens only the processing steps available that day. A complete commercial cycle will not fit neatly into one visit, and that is precisely why the sequence matters. Compare the fresh leaf, the material changed by your hands and the tea poured at the end. Flavour becomes less mysterious without becoming simple.",
    notice:
      "The exact leaf the host chooses and the reason the neighbouring leaf stays on the plant. Pick nothing until invited.",
    question:
      "Which finished flavour would you understand differently if you first met its raw material in the hands of the person growing it?",
  },
  {
    date: "2026-10-27",
    slug: "make-the-bagel-before-new-york-serves-it",
    title: "New York's familiar ring begins as a set of choices.",
    angle:
      "A bagel arrives at the counter looking complete and obvious. In a hands-on class, the ring has to be made before it can become an icon. Dough, fermentation, shaping, boiling and baking each leave a mark on the final texture. Make the sequence yourself and the useful question stops being who is number one. It becomes how different bakers decide what a New York bagel should be.",
    notice:
      "The point where a rough piece of dough begins to hold its ring. Follow every allergy and hot-water instruction given by the class.",
    question:
      "Which familiar food would become more interesting if you replaced a ranking with one hour of making?",
  },
  {
    date: "2026-10-28",
    slug: "learn-hong-kong-one-hand-at-a-time",
    title: "Four walls of tiles. One problem that never sits still.",
    angle:
      "Hong Kong gives mahjong a familiar visual language, but recognition is not the same as knowing how the table moves. In a beginner class, tile families become possible hands, one discard changes what three other people can do and etiquette keeps competition social. The electronic table handles the shuffle. Use that saved time to notice how often your best next move depends on remembering what everyone else has already let go.",
    notice:
      "The discard that changes your plan. Learn the rules used at this table before comparing them with another version of the game.",
    question:
      "Which game would reveal more about a place if you learned how people share the table, not only how someone wins?",
  },
  {
    date: "2026-10-29",
    slug: "draw-with-silver-in-skopjes-old-bazaar",
    title: "The lightest-looking object can demand the steadiest hand.",
    angle:
      "Silver filigree can look almost weightless in a finished pendant. A two-day beginner workshop in Skopje turns that delicacy back into structure. Fine wire bends, a frame sets the boundary and each small element has to fit before heat can hold the whole together. The first project need not be perfect. Its value is showing how much patience and control sit inside an ornament the eye might otherwise cross in a second.",
    notice:
      "The frame beneath the decoration. Follow every instruction around wire, sharp tools, heat and soldering.",
    question:
      "Which intricate object have you called delicate without noticing the discipline required to make it hold?",
  },
  {
    date: "2026-10-30",
    slug: "meet-the-rose-before-the-perfume",
    title: "The perfume begins before the day becomes warm.",
    angle:
      "A rose on a bottle looks complete. In the fields near Kazanlak, the more revealing beginning is a cool morning and a short harvest window. The public festival ritual lets visitors meet the flower before distillation compresses a field of petals into a small amount of oil. Pick only when the host directs you. Then look past the colour and ask what timing, volume and labour the finished scent has made easy to forget.",
    notice:
      "The weight and scent of one small handful. Stay inside the announced field and follow every picking instruction.",
    question:
      "Which familiar scent would change if you first met the crop, hour and work required to produce it?",
  },
  {
    date: "2026-10-31",
    slug: "let-the-shadows-move-after-angkor",
    title: "The carving becomes a performance only after dark.",
    angle:
      "Siem Reap is often asked to stand still in stone. Sbek Thom offers another relationship with carved form. Large leather panels meet light, dancers carry them with their whole bodies and narrators and a pin peat orchestra move the Reamker across the screen. Follow one figure rather than trying to decode the whole story. Its cutwork stays fixed while every step changes the shadow reaching the audience.",
    notice:
      "The instant a still leather panel begins to feel like a character. Keep flash, recording and backstage curiosity within the organiser's rules.",
    question:
      "What would you understand differently about a carved story if you watched people make it move?",
  },
  {
    date: "2026-11-01",
    slug: "hear-a-landscape-without-instruments",
    title: "One voice begins. A whole room decides how to answer.",
    angle:
      "Alentejo is often introduced through open land and visual quiet. Cante changes the emphasis. At Serpa's museum, recordings and documentation let you hear the structure before a public calendar may offer it live. One voice begins as the ponto, an alto enters above it and the larger group carries the line without instruments or conductor. Do not hunt for a spontaneous tavern performance. Learn what to listen for and let any unplanned singing remain the singers' own moment.",
    notice:
      "The distance between the opening voice and the full group response. Record only when the setting and people clearly allow it.",
    question:
      "Which landscape have you been taught to see when its most revealing form might be something you hear?",
  },
];

export function availableDiscoveries(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  return dailyDiscoveries.flatMap((discovery) => {
    const item = bySlug.get(discovery.slug);
    return discovery.date <= today && item ? [{ ...discovery, item }] : [];
  });
}

export function currentDiscovery(
  items: PublicExperience[],
  today = new Date().toISOString().slice(0, 10),
) {
  return availableDiscoveries(items, today).at(-1);
}

export function editionDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
