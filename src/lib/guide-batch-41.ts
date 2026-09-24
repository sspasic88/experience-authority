import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
  reviewBy = "2026-12-23",
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-24",
  reviewBy,
  accessUrl: sources[0].url,
  sources,
});

/** Original desk guides. Primary daily quotas are declared separately from overlapping interests. */
export const guideBatch41: PublicExperience[] = [
  {
    id: "melbourne-qvm-foodie-tour",
    slug: "taste-melbourne-across-the-market-counter",
    title: "Taste Melbourne across the market counter",
    summary:
      "Walk Queen Victoria Market with a guide and let small tastings turn a familiar landmark into a conversation about food.",
    field: "taste",
    place: "Melbourne",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "melbourne",
    status: "public_guide",
    demo: false,
    ...guideImage("melbourne-qvm-foodie-tour"),
    kernel:
      "Book the Ultimate Foodie Tour, then arrive with one question you would not normally ask across a busy counter. What makes this ingredient different? How would you serve it? Let the included tastings give the walk a sequence rather than trying to eat everything in the market. Return independently to the stall that made you curious.",
    rootedness:
      "Queen Victoria Market is a place to buy food as well as a Melbourne landmark. A guided food walk can connect its halls, traders and things you taste. The market's own programme is the entry point here, not a claim that one tour represents every community or food tradition in the city.",
    shift:
      "From collecting market snacks to recognising the knowledge on the other side of the counter.",
    humanReturn:
      "You may leave with a better question for the person who sells your food at home.",
    responsibility:
      "Ask about ingredients, allergies, substitutions, children, language and mobility before booking. Do not assume every dietary requirement can be accommodated or every pictured food will be served. Ask before photographing traders. This is a walking tour through a working market, not a cooking class or an all-you-can-eat meal.",
    evidence:
      "The market publishes a two-hour tour with tastings and a market bag, currently departing at 10am on Thursdays, Fridays and Saturdays. Its general visitor information distinguishes market opening days from tour departures. These are operator sources, not independent assessment of the food or guides. EA has not visited or tasted the programme.",
    duration:
      "Two hours. Check the live departure calendar rather than relying on general market opening days",
    participation:
      "Guided walking and tasting. Traders, samples and the precise route can change",
    access:
      "Reserve the Ultimate Foodie Tour through Queen Victoria Market. Follow the confirmation for the meeting point, fee and current inclusions. No EA booking or partnership is implied.",
    guideReview: review("public_programme", [
      {
        title: "Queen Victoria Market: tours",
        url: "https://qvm.com.au/tours/",
        note: "Direct public food-tour description, duration, departures and booking route.",
      },
      {
        title: "Queen Victoria Market: visitor information",
        url: "https://qvm.com.au/",
        note: "Current market notices and opening pattern. Market admission and a booked tour are different.",
      },
    ]),
  },
  {
    id: "taipei-wangtea-lab",
    slug: "taste-tea-from-the-tap-and-the-pour",
    title: "Taste tea from the tap and the pour",
    summary:
      "At a Taipei tea bar, compare a hot pour-over with a cold draft tea and notice what brewing changes before adding anything sweet.",
    field: "taste",
    place: "Taipei",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "taipei",
    status: "public_guide",
    demo: false,
    ...guideImage("taipei-wangtea-lab"),
    kernel:
      "At Wangtea Lab, use the menu to choose one hot pour-over and one non-alcoholic draft tea to share or taste separately. Ask which leaves and brewing methods sit behind them. Temperature, texture and aroma offer a more useful comparison than trying to identify the best tea. This is an ordinary counter order, not a promised tasting flight.",
    rootedness:
      "The bar extends Wangtea's tea business into a contemporary setting. Roasting and blending meet pour-over, pressure extraction and drinks served with nitrogen or carbon dioxide. It makes Taiwanese tea feel open to experiment without pretending that the bar stands for every regional practice or replaces a tea farm visit.",
    shift:
      "From treating tea as a fixed drink to noticing how a method changes the same broad family of ingredients.",
    humanReturn:
      "A familiar leaf can become a reason to ask how, not only where, something was made.",
    responsibility:
      "The menu also includes milk drinks and tea beer. Check ingredients, caffeine, allergens and alcohol before ordering. The photographed glasses are a menu illustration, not an included six-drink flight. English explanation, seating and a particular tea are not guaranteed. Do not treat the brand's flavour codes as an independent scientific rating.",
    evidence:
      "Wangtea Lab publishes its brewing approach, current menu and public address. Both linked pages belong to the same business. They establish a bar visit and individual purchases, not a formal lesson, comparative quality test or private factory access. EA has not visited or tasted the drinks.",
    duration:
      "A self-paced tea stop. The published hours are daily, 10am to 7pm. Recheck before travelling",
    participation:
      "Choose and purchase drinks from the current menu. No scheduled class or hosted tasting is included",
    access:
      "Visit No. 24, Lane 64, Section 2, Chongqing North Road, Datong District. Use the official menu for current choices and prices. No EA commission.",
    guideReview: review("public_hospitality", [
      {
        title: "Wangtea Lab: brewing and visit",
        url: "https://www.wangtealab.com/",
        note: "Direct Chinese-language source for address, hours, brewing methods and the bar's relationship to Wangtea.",
      },
      {
        title: "Wangtea Lab: menu",
        url: "https://www.wangtealab.com/menu",
        note: "Menu categories and drink choices. Milk and alcoholic options require individual checking.",
      },
    ]),
  },
  {
    id: "mexico-city-mucho-cacao",
    slug: "follow-cacao-from-the-museum-to-the-cup",
    title: "Follow cacao from the museum to the cup",
    summary:
      "Give chocolate a history before a flavour at MUCHO in Mexico City, then choose a drink or chocolate separately at its small counter.",
    field: "taste",
    place: "Mexico City",
    country: "Mexico",
    countrySlug: "mexico",
    regionSlug: "mexico-city",
    status: "public_guide",
    demo: false,
    ...guideImage("mexico-city-mucho-cacao"),
    kernel:
      "Begin inside the museum rather than at the shop. Follow the displays, then take one question about cacao into the chocolatería-cafetería. Ask what goes into a drink or chocolate you can buy that day and how it is prepared. The counter becomes more interesting when a flavour has something to answer.",
    rootedness:
      "MUCHO brings cacao and chocolate into a house on Milan in the Juárez neighbourhood. A small museum and a working retail counter give history and appetite different places in the same visit. Keep regional histories and contemporary recipes specific rather than flattening them into one supposedly original Mexican chocolate.",
    shift:
      "From choosing a chocolate by sweetness to asking which ingredients and histories are inside the cup.",
    humanReturn:
      "The next chocolate label might become something to read rather than simply recognise.",
    responsibility:
      "Museum admission does not promise a free tasting, drink or workshop. Pay separately for counter purchases and check milk, nuts and other allergens. Confirm tour language, stairs and mobility access. The photograph shows the museum's working display space, not a hands-on lesson available on every visit.",
    evidence:
      "MUCHO publishes daily museum and counter hours and describes its visitor experience. Mexico City's tourism authority separately identifies the museum and its location. These establish a public museum and food stop, not a daily metate workshop or independent product assessment. EA has not visited or tasted the chocolate.",
    duration:
      "Self-paced. Museum and chocolatería-cafetería are currently listed daily from 11am to 5pm",
    participation:
      "Museum observation followed by an optional, separately purchased drink or chocolate. Ask which guided visits are running",
    access:
      "Use MUCHO's current admission page for Milan 45, Colonia Juárez. Groups should arrange their visit directly. No EA ticketing or partnership.",
    guideReview: review("public_admission", [
      {
        title: "MUCHO: hours and admission",
        url: "https://www.mucho.org.mx/horarios-y-costos.html",
        note: "Direct current museum, guided-visit and chocolatería-cafetería access information.",
      },
      {
        title: "MUCHO: visitor experience",
        url: "https://en.mucho.org.mx/experience-mucho.html",
        note: "Museum approach and retail offering. No automatic workshop or tasting inclusion inferred.",
      },
      {
        title: "Mexico City tourism: MUCHO",
        url: "https://mexicocity.cdmx.gob.mx/venues/mundo-chocolate-mucho/?lang=en",
        note: "Official destination context, address and documentary photograph.",
      },
    ]),
  },
  {
    id: "lisbon-puraceramica-handbuilding",
    slug: "shape-a-cup-without-a-wheel",
    title: "Shape a cup without a wheel",
    summary:
      "Pinch, coil or build with slabs in a Lisbon ceramics studio, where the shape begins in your hands and the kiln work happens later.",
    field: "make",
    place: "Lisbon",
    country: "Portugal",
    countrySlug: "portugal",
    regionSlug: "lisbon",
    status: "public_guide",
    demo: false,
    ...guideImage("lisbon-puraceramica-handbuilding"),
    kernel:
      "Choose a dated handbuilding workshop at PURACERÂMICA, not a pottery-painting session. Work with the instructor on a small form, then notice how pressure, thickness and the join affect it. Decorating the clay is part of the session. The finished fired object belongs to a later stage, so decide how you will collect it before booking.",
    rootedness:
      "A small Alcântara studio puts contemporary ceramic making beside Lisbon's more familiar finished surfaces. The useful experience is the material decision, not a claim that your first cup reproduces a historic Portuguese craft. Handbuilding also offers a different kind of attention from watching a wheel spin.",
    shift:
      "From admiring the shape of a cup to feeling what holds its wall and handle together.",
    humanReturn:
      "A slight irregularity can become a memory of a decision you made, rather than a defect to hide.",
    responsibility:
      "This English-language class is for ages fourteen and over. Glazing and firing follow the lesson, with collection normally three to four weeks later. Confirm any shipping arrangement and extra cost before paying. The dedicated course page retains older dates, so use the current What's On calendar. Ask about mobility and hand-use needs.",
    evidence:
      "The studio describes a two-and-a-half-hour beginner handbuilding class with up to ten participants. Its current calendar lists autumn 2026 sessions, including 26 and 27 September. Both sources are the studio's own. EA has not attended, assessed the teaching or inspected a finished piece.",
    duration:
      "Two and a half hours in the studio, followed by three to four weeks for finishing and firing",
    participation:
      "Shape and decorate clay with instruction. Not a wheel lesson or a same-day finished souvenir",
    access:
      "Reserve a Handbuilding Workshop through the current calendar at Rua Jau 23a, Alcântara. Check collection or shipping before fixing travel dates. No EA partnership.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "PURACERÂMICA: current workshop calendar",
          url: "https://www.puraceramica.pt/en/whats-on.html",
          note: "Live dated handbuilding sessions. Takes precedence over older dates on the course description.",
        },
        {
          title: "PURACERÂMICA: handbuilding",
          url: "https://www.puraceramica.pt/en/handbuilding-workshop.html",
          note: "Technique, English, age, duration, group size, included firing and collection delay.",
        },
      ],
      "2026-10-24",
    ),
  },
  {
    id: "tokyo-sokichi-kiriko",
    slug: "cut-a-line-that-catches-the-light",
    title: "Cut a line that catches the light",
    summary:
      "At a glass workshop near Asakusa, practise cutting a pattern before taking the grinding wheel to a glass of your own.",
    field: "make",
    place: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    status: "public_guide",
    demo: false,
    ...guideImage("tokyo-sokichi-kiriko"),
    kernel:
      "Book Sokichi's ninety-minute kiriko introduction. Choose a glass, practise on a sample and mark the pattern before cutting. Turn the finished surface towards the light and look at what one groove does. You do not need an elaborate design for the process to become visible.",
    rootedness:
      "Sokichi offers a visitor introduction to cut glass in Kaminarimon, close to Asakusa's familiar streets. The wheel changes the surface of an existing glass. This is not glassblowing, and a short class does not confer the skill or designation of a professional Edo kiriko maker.",
    shift:
      "From seeing sparkle as decoration to recognising it as a series of controlled cuts.",
    humanReturn:
      "You can take the glass away, but the more lasting souvenir may be noticing the work inside another one.",
    responsibility:
      "The provider lists ages nine to eighty-five and cash payment. Tie back long hair and follow the instructor's equipment rules. Clear glass is the base offer, with coloured choices costing extra. The photograph shows coloured glass, not an included upgrade. Confirm language, mobility access and any assistance needs before booking.",
    evidence:
      "Sokichi publishes the ninety-minute programme and a step-by-step flow ending with a boxed glass to take away. GO TOKYO independently lists the venue and craft introduction. Payment information differs between listings, so follow the provider's current cash instruction. EA has not attended or assessed the class.",
    duration:
      "Ninety minutes. The official flow ends with packing the glass for same-day departure",
    participation:
      "Supervised practice and cutting a chosen glass. Not molten-glass work or an advanced qualification",
    access:
      "Reserve directly with Sokichi at 2-1-14 Kaminarimon, Taito. Recheck the glass choice, language and total fee. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Sokichi: ninety-minute workshop",
        url: "https://en.sokichi-workshop.com/90min",
        note: "Direct introductory workshop format and reservation route.",
      },
      {
        title: "Sokichi: class flow",
        url: "https://en.sokichi-workshop.com/flow",
        note: "Practice, pattern, cutting and same-day packing sequence.",
      },
      {
        title: "Sokichi: visitor information",
        url: "https://en.sokichi-workshop.com/",
        note: "Age range, cash instruction, location and equipment preparation.",
      },
      {
        title: "GO TOKYO: Sokichi workshop",
        url: "https://www.gotokyo.org/en/workshop/sd016/index.html",
        note: "Official destination corroboration. Direct provider instructions take precedence where payment details differ.",
      },
    ]),
  },
  {
    id: "bangkok-sompong-curry",
    slug: "build-the-curry-before-the-wok",
    title: "Build the curry before the wok",
    summary:
      "Begin a Silom cooking morning with ingredients, then make curry paste and cook at your own station instead of only watching a demonstration.",
    field: "make",
    place: "Bangkok",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    status: "public_guide",
    demo: false,
    ...guideImage("bangkok-sompong-curry"),
    kernel:
      "Choose Sompong's Morning Popular Menu, whose programme includes a market visit and curry paste. Listen to the ingredient explanations before returning to the kitchen. Taste the demonstration, then cook at your own station. When the paste reaches the pan, notice how the ingredients you met separately begin to behave together.",
    rootedness:
      "The class works from a Silom kitchen rather than presenting Bangkok as a single national menu. A scheduled curry changes by day, while the lesson makes preparation visible. It is a hosted introduction to selected dishes, not entry into a private family kitchen or proof that one recipe is definitive.",
    shift:
      "From recognising a curry by colour to following the ingredients and decisions that build it.",
    humanReturn:
      "A market ingredient can acquire a purpose you will recognise the next time you cook.",
    responsibility:
      "Select the Popular Menu rather than assuming every course includes curry paste. Market access belongs to the morning format. Confirm teaching language, age rules, allergies and mobility before paying. Do not rely on broad dietary claims for severe allergies or cross-contact safety. Follow instructions around knives, heat and the wok.",
    evidence:
      "Sompong describes the morning market visit, demonstration, individual stations and homemade curry paste. Its course pages publish the daily menus and morning duration. These are direct operator sources, not independent teaching or food-safety assessments. EA has not attended or tasted the dishes.",
    duration:
      "About three and a half hours, currently 9am to 12:30pm. Confirm arrival time separately",
    participation:
      "Guided ingredient introduction, demonstration, hands-on cooking and eating the class dishes",
    access:
      "Reserve the Morning Popular Menu directly with Sompong. The school lists 2/6–2/8 Soi Silom 13, Bang Rak. Use the confirmation for the exact meeting instructions. No EA partnership.",
    guideReview: review("public_programme", [
      {
        title: "Sompong: morning class",
        url: "https://sompongthaicookingschool.com/mor-af",
        note: "Morning schedule, market visit and class format.",
      },
      {
        title: "Sompong: Morning Popular Menu",
        url: "https://sompongthaicookingschool.com/morning-popular-1",
        note: "Current dish rotation and curry-paste programme. Distinct from the Favourite Menu.",
      },
      {
        title: "Sompong: school and location",
        url: "https://sompongthaicookingschool.com/home",
        note: "Public school address, individual stations, teaching sequence and photograph source.",
      },
    ]),
  },
  {
    id: "sydney-manly-adult-surf",
    slug: "learn-to-read-the-water-before-standing",
    title: "Learn to read the water before standing",
    summary:
      "Make Manly Beach an introduction to board control and ocean judgement, not just a backdrop for a first surfing photograph.",
    field: "move",
    place: "Sydney",
    country: "Australia",
    countrySlug: "australia",
    regionSlug: "sydney",
    status: "public_guide",
    demo: false,
    ...guideImage("sydney-manly-adult-surf"),
    kernel:
      "Ask Manly Surf School for an adult group lesson suited to your actual swimming and surfing experience. Begin with the instructor's instructions for handling the board and entering the water. Treat each attempt as information. Standing up is one possible moment in a lesson, not the test that decides whether it mattered.",
    rootedness:
      "Sydney's beach culture is easy to recognise from shore. A bounded lesson changes your relationship to the water by making conditions and other people part of every decision. Manly is a specific lesson location, not permission to carry new confidence straight into an unfamiliar beach break.",
    shift:
      "From waiting for a photogenic ride to noticing what makes an attempt appropriate in the first place.",
    humanReturn:
      "The beach can stay familiar while the water becomes something you pay attention to.",
    responsibility:
      "Ocean activity carries risk. Disclose swimming ability and relevant limitations, choose an appropriate session and follow the instructor. The school excludes under-twelves from adult groups and distinguishes conditions and stronger-swimmer sessions. Do not select a departure solely by convenience. Confirm weather decisions and cancellation terms. No successful ride or safe conditions are guaranteed.",
    evidence:
      "The provider publishes ninety-minute adult group lessons with board, wetsuit and rash vest. Its current site banner asks customers to book by phone or email during a booking-system change. These are operator statements, not an independent safety audit. EA has not taken the lesson or inspected conditions.",
    duration:
      "Ninety minutes. Ask which current Manly departure suits your experience and the conditions",
    participation:
      "Supervised ocean surfing introduction. Requires comfort in water and a suitability discussion, not a learn-to-swim class",
    access:
      "Use the official adult lesson page and current phone or email booking instructions. Confirm Manly Beach, not another school location. No EA reservation or partnership.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Manly Surf School: adult group lessons",
          url: "https://manlysurfschool.com/lessons/adult-group-lesson/",
          note: "Duration, equipment, age boundary, tides and session distinctions.",
        },
        {
          title: "Manly Surf School: current booking notice",
          url: "https://manlysurfschool.com/",
          note: "Temporary phone/email booking instruction takes precedence over older embedded online-booking text.",
        },
      ],
      "2026-10-08",
    ),
  },
  {
    id: "bangkok-co-classical-cycle",
    slug: "follow-bangkok-at-the-width-of-a-bicycle",
    title: "Follow Bangkok at the width of a bicycle",
    summary:
      "Ride from Chinatown towards Thonburi with a guide, using smaller streets and a river crossing to read the city at another pace.",
    field: "move",
    place: "Bangkok",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    status: "public_guide",
    demo: false,
    ...guideImage("bangkok-co-classical-cycle"),
    kernel:
      "Choose the three-hour Co Classical route from River City. Let the guide set the pace through tight streets and working neighbourhoods, dismounting whenever the route or local activity requires it. The river crossing is a useful hinge: look at what changes between the dense market streets and the next part of the ride.",
    rootedness:
      "Chinatown and Thonburi are not hidden places waiting to be discovered. A guided bicycle route offers a particular scale of access through an inhabited city. The interesting contrast is between street widths, working rhythms and water, not between a supposedly real Bangkok and the parts visitors already know.",
    shift:
      "From reading a city through its major roads to noticing the spaces a smaller vehicle can connect.",
    humanReturn:
      "The route may change how you imagine distance in a place you thought was only traffic.",
    responsibility:
      "You must be able to ride and control a bicycle. Ask about traffic exposure, heat, rain, children's suitability and mobility limits before booking. Request and wear a helmet. Give residents and traders priority, and ask before photographing people. Do not enter homes, workplaces or religious spaces beyond the guide's admitted route.",
    evidence:
      "Co van Kessel publishes a three-hour route of about twelve kilometres, currently departing at 8am and 2pm. Its programme includes bicycle travel, a river crossing, guidance and refreshments. These are operator sources, not independent safety certification or a guaranteed street-by-street route. EA has not ridden the tour.",
    duration:
      "Three hours and approximately twelve kilometres. Heat, stops and route adjustments affect the pace",
    participation:
      "Guided urban cycling with stops and a river crossing. Not a beginner bicycle lesson or a longtail-boat tour",
    access:
      "Book Co Classical directly and follow the River City meeting instructions. Other Co van Kessel programmes use different routes and starting points. No EA commission.",
    guideReview: review("public_programme", [
      {
        title: "Co van Kessel: Co Classical",
        url: "https://www.covankessel.com/bangkok/co-classical-3-hour-bicycle-tour",
        note: "Exact three-hour route, departures, distance, inclusions and public booking.",
      },
      {
        title: "Co van Kessel: tour formats",
        url: "https://www.covankessel.com/our-tours",
        note: "Distinguishes Co Classical from longer bicycle-and-boat programmes.",
      },
    ]),
  },
  {
    id: "buenos-aires-south-circuit",
    slug: "ride-between-buenos-aires-city-stories",
    title: "Ride between Buenos Aires city stories",
    summary:
      "Connect San Telmo, La Boca, Plaza de Mayo and Puerto Madero by bicycle, with a guide giving the spaces between landmarks a role.",
    field: "move",
    place: "Buenos Aires",
    country: "Argentina",
    countrySlug: "argentina",
    regionSlug: "buenos-aires",
    status: "public_guide",
    demo: false,
    ...guideImage("buenos-aires-south-circuit"),
    kernel:
      "Book BA Bikes' South Circuit and use the ride to compare the city's changes of scale. Let the guide handle route decisions while you notice where street life, civic space and the waterfront ask for different speeds. Keep a place you want to revisit on foot rather than treating every stop as a completed attraction.",
    rootedness:
      "The southern circuit puts recognisable Buenos Aires places into a connected public route. The contrast between neighbourhood streets and Puerto Madero's waterfront is more useful than a claim to see the whole city in one morning. A guide's account is one interpretation, not the final word on each barrio.",
    shift:
      "From separate pins on a map to noticing the transitions that make them part of a city.",
    humanReturn:
      "A short ride can give the rest of a stay a better sense of where to slow down.",
    responsibility:
      "Confirm riding ability, traffic exposure, language, age rules and weather arrangements. Wear the supplied helmet and follow the guide. The site's header and FAQ publish different meeting addresses, so use the address confirmed for your booking. Lunch is not included. Do not leave the guided route on the assumption that every surrounding street has the same conditions.",
    evidence:
      "BA Bikes publishes a daily 10am South Circuit lasting about three and a half hours. Its FAQ requires a reservation and describes equipment and English-language tours. Both sources are the operator's, and the meeting-address conflict remains explicit. EA has not ridden or independently safety-audited the route.",
    duration:
      "Approximately three and a half hours. Reconfirm the 10am departure and arrival instructions",
    participation:
      "Guided city cycling with stops. Not a bicycle lesson, food tour or all-day rental",
    access:
      "Reserve the South Circuit on BA Bikes' booking page. Obtain the exact meeting address in the confirmation before travelling. No EA combined booking or partnership.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "BA Bikes: South Circuit booking",
          url: "https://buenosairesbiketours.com/book-now/",
          note: "Current tour, neighbourhood route, departure and duration.",
        },
        {
          title: "BA Bikes: practical questions",
          url: "https://buenosairesbiketours.com/faqs/",
          note: "Reservation, language, equipment and weather information. Published meeting addresses conflict, so confirmation is necessary.",
        },
      ],
      "2026-10-24",
    ),
  },
  {
    id: "singapore-ura-city-gallery",
    slug: "see-singapore-at-the-scale-of-a-model",
    title: "See Singapore at the scale of a model",
    summary:
      "Study the city in miniature at the Singapore City Gallery, then step outside with a sharper question about the streets around you.",
    field: "learn",
    place: "Singapore",
    country: "Singapore",
    countrySlug: "singapore",
    regionSlug: "singapore",
    status: "public_guide",
    demo: false,
    ...guideImage("singapore-ura-city-gallery"),
    kernel:
      "Begin with the large city model and locate somewhere you have already walked. Look at its relationship to transport, open space and the waterfront before moving through the planning displays. Choose one connection to notice outside afterwards. A model is useful when it sends you back to the real place with a question.",
    rootedness:
      "The gallery sits inside the Urban Redevelopment Authority's public explanation of Singapore. It offers a planner's view of a dense island city, including choices that are difficult to see from one street. Read it as an official account of planning rather than an independent verdict on every policy or neighbourhood experience.",
    shift:
      "From looking at buildings one by one to asking how the spaces between them are organised.",
    humanReturn:
      "The city you step back into can feel larger because you understand one connection more clearly.",
    responsibility:
      "Check holiday closures and current gallery notices. Groups above twenty need advance arrangements. Do not assume a self-guided visit includes a guided tour or a specific projection. The official visit page lists lift access. Confirm any additional accessibility or language needs before travelling.",
    evidence:
      "URA publishes free gallery access from Monday to Saturday, 9am to 5pm, with Sunday and public-holiday closures. Its gallery pages identify the models and planning displays. Both sources are the responsible authority's own account. EA has not visited or independently evaluated the exhibition's interpretation.",
    duration:
      "Self-paced during gallery hours. Allow room to look closely rather than treating the model as a quick photograph",
    participation:
      "Public self-guided observation and exhibition interaction. No planner consultation or private-office access",
    access:
      "Use URA's official visit page for the Singapore City Gallery at The URA Centre. Entry is currently free. No EA reservation or partnership.",
    guideReview: review("public_admission", [
      {
        title: "URA: Singapore City Gallery visit",
        url: "https://www.ura.gov.sg/get-involved/singapore-city-gallery/visit/",
        note: "Current opening, free admission, group and accessibility information.",
      },
      {
        title: "URA: Singapore City Gallery",
        url: "https://www.ura.gov.sg/get-involved/singapore-city-gallery/",
        note: "Exhibition context and city-model photograph. Projection times are not treated as opening hours.",
      },
    ]),
  },
  {
    id: "cape-town-kirstenbosch-walk",
    slug: "let-a-garden-guide-change-what-you-notice",
    title: "Let a garden guide change what you notice",
    summary:
      "Join a public volunteer walk at Kirstenbosch and let one plant, seasonal detail or landscape connection interrupt the postcard view.",
    field: "nature",
    place: "Cape Town",
    country: "South Africa",
    countrySlug: "south-africa",
    regionSlug: "cape-town",
    status: "public_guide",
    demo: false,
    ...guideImage("cape-town-kirstenbosch-walk"),
    kernel:
      "Arrive at the Gate 1 Visitor's Centre for a currently offered volunteer walk, then let the guide decide what the season makes worth seeing. Ask about one plant rather than trying to memorise a list. After the walk, revisit a detail that would previously have disappeared into the general green.",
    rootedness:
      "Kirstenbosch gives Cape Town a cultivated setting in which to encounter South African plants. A volunteer's route can connect botanical detail with the garden's wider landscape. It is a garden introduction, not a mountain expedition, foraging lesson or claim that a planted collection is untouched wilderness.",
    shift:
      "From seeing a garden as scenery to noticing the relationships inside a small part of it.",
    humanReturn:
      "A single plant you can recognise may stay with you longer than a panorama you can photograph.",
    responsibility:
      "Walks depend on weather and volunteer availability, with a maximum of fifteen people on a first-come basis. The uneven guided route is not wheelchair friendly. Stay on admitted paths and do not pick or taste plants. Flowering varies by season, and no image guarantees what will be in bloom. This is not a Skeleton Gorge hike.",
    evidence:
      "SANBI publishes approximately ninety-minute free guided walks on weekdays at 10am and 11am, excluding public holidays and the first Monday of each month. Garden entry still costs extra. Its seasonal information explains changing displays. These are direct garden sources. EA has not joined a walk or checked conditions on site.",
    duration:
      "About ninety minutes for the walk, with optional independent garden time afterwards",
    participation:
      "Guided observation within the garden. Public walks do not take organised tour groups",
    access:
      "Check SANBI's current guided-walk notice before paying garden admission or travelling. There are no scheduled public walks on weekends. No EA booking or partnership.",
    guideReview: review("public_programme", [
      {
        title: "SANBI: Kirstenbosch guided tours",
        url: "https://www.sanbi.org/gardens/kirstenboch/visitor-information/guided-tours/",
        note: "Exact schedule, exclusions, capacity, fee distinction and terrain boundary.",
      },
      {
        title: "SANBI: Kirstenbosch seasons",
        url: "https://www.sanbi.org/gardens/kirstenboch/garden-information/seasons/",
        note: "Seasonal garden context, not a live flowering or weather guarantee.",
      },
    ]),
  },
  {
    id: "taipei-ri-xing-type",
    slug: "read-a-wall-of-words-before-they-print",
    title: "Read a wall of words before they print",
    summary:
      "At Ri Xing Type Foundry in Taipei, rows of movable type turn written language into an inventory of physical things.",
    field: "work",
    place: "Taipei",
    country: "Taiwan",
    countrySlug: "taiwan",
    regionSlug: "taipei",
    status: "public_guide",
    demo: false,
    ...guideImage("taipei-ri-xing-type"),
    kernel:
      "Visit during Ri Xing's published public hours and begin by looking rather than handling. Follow the rows of type and the labels that make the collection usable. Ask staff before buying or touching a piece. The surprising part is not only the number of characters but the physical organisation required to find one.",
    rootedness:
      "This Datong foundry presents a material side of Chinese-language printing inside a working specialist setting. A visitor can observe type without treating the room as a museum whose objects are freely handled. It is a different Taipei encounter from a tea bar, yet both reward asking what happens before a familiar everyday result.",
    shift:
      "From reading words as a flat surface to noticing the weight, storage and labour behind a printed line.",
    humanReturn:
      "Even a phone screen can look different after you have seen how much space a character once needed.",
    responsibility:
      "Store bags where staff indicate. Do not pull type from the shelves and replace it elsewhere. Handling, machine use, demonstrations and English explanation are not guaranteed. This guide does not promise a public workshop. Lead type is not a children's toy. Ask about stairs and mobility before visiting, and respect staff and customer work.",
    evidence:
      "Ri Xing publishes Wednesday, Friday and Saturday public hours from 10am to 5pm, with an annual calendar and visitor rules. Its own account establishes the foundry's identity and work. These are direct sources, not independent validation of rarity claims. EA has not visited or operated the equipment.",
    duration:
      "A short self-paced visit during current public hours. Recheck the annual closure calendar",
    participation:
      "Observe the type collection and make purchases only with staff assistance. No hands-on class is included",
    access:
      "Use Ri Xing's current visitor information for No. 13, Lane 97, Taiyuan Road, Datong. Follow the rules of a working space. No EA appointment or partnership.",
    guideReview: review("public_observation", [
      {
        title: "Ri Xing: visitor information",
        url: "https://www.letterpress.org.tw/information",
        note: "Current public days, opening hours, location, bag storage and type-handling rules.",
      },
      {
        title: "Ri Xing Type Foundry",
        url: "https://www.letterpress.org.tw/",
        note: "Direct foundry context. No unsupported claim to be the world's last is adopted.",
      },
    ]),
  },
  {
    id: "tokyo-haginoyu-sento",
    slug: "give-tokyo-an-hour-at-the-bathhouse",
    title: "Give Tokyo an hour at the bathhouse",
    summary:
      "Step into Hagino-yu near Uguisudani for an ordinary shared bath, with washing, bathing and resting given their own time.",
    field: "restore",
    place: "Tokyo",
    country: "Japan",
    countrySlug: "japan",
    regionSlug: "tokyo",
    status: "public_guide",
    demo: false,
    ...guideImage("tokyo-haginoyu-sento"),
    kernel:
      "Read the current entry rules before arriving, then let the bathhouse sequence set the pace. Use the washing area before entering a shared bath and keep quiet rest between warmer moments. You do not need to try every facility. The useful contrast is with the speed of the city outside, not with someone else's tolerance for heat.",
    rootedness:
      "Hagino-yu is a public sento in Negishi, not a hotel spa that requires an overnight stay. Its shared washing and bathing spaces offer a contemporary neighbourhood service. Participating respectfully means learning this venue's rules, not treating regular bathers as part of a cultural display.",
    shift:
      "From adding another Tokyo stop to allowing a familiar daily act to determine the order of an hour.",
    humanReturn:
      "Rest can become something you make room for, not a reward after finishing a list.",
    responsibility:
      "Confirm bathing attire, gender-separated facilities, tattoo policy, children's rules and accessibility directly if relevant. No photography in intimate spaces. Sauna access and towel arrangements are separate from basic admission. Follow posted heat guidance and seek qualified advice if unsure whether hot bathing suits you. No health benefit is promised.",
    evidence:
      "Hagino-yu publishes facilities, admission information and current notices. The Taito bathhouse association separately lists morning and later opening blocks, with a third-Tuesday closure pattern. Exact holiday changes require the venue's latest notice. EA has not bathed here or inspected hygiene and access.",
    duration:
      "Self-paced within opening blocks. Currently 6am to 9am and 11am to 1am, with earlier last admission",
    participation:
      "Shared public bathing and washing. Not a private bath, treatment or hosted cultural lesson",
    access:
      "Check Hagino-yu's notices and fee page before visiting Negishi 2-13-13. Pay the bathhouse directly and check extras. No EA booking or partnership.",
    guideReview: review("public_admission", [
      {
        title: "Hagino-yu: current notices",
        url: "https://haginoyu.jp/",
        note: "Direct current bathhouse notices and closure changes.",
      },
      {
        title: "Hagino-yu: admission and extras",
        url: "https://haginoyu.jp/fee/",
        note: "Admission, sauna and rental distinctions.",
      },
      {
        title: "Taito bathhouse association: Hagino-yu",
        url: "https://www.taitosento.com/haginoyu/",
        note: "Association corroboration of location, opening blocks and regular closing day.",
      },
    ]),
  },
  {
    id: "london-parliament-hill-lido",
    slug: "swim-a-london-length-under-open-sky",
    title: "Swim a London length under open sky",
    summary:
      "At Parliament Hill Lido, the sky stays in the frame and the unheated water makes the season part of an ordinary swim.",
    field: "restore",
    place: "London",
    country: "United Kingdom",
    countrySlug: "united-kingdom",
    regionSlug: "london",
    status: "public_guide",
    demo: false,
    ...guideImage("london-parliament-hill-lido"),
    kernel:
      "Choose a session that matches your swimming ability and the current water temperature. Follow the lane and lifeguard instructions, then give the swim its own place in the day. There is no distance to complete for this guide. A shorter, appropriate visit is more valuable than turning unfamiliar water into a test.",
    rootedness:
      "Parliament Hill Lido is a sixty-metre outdoor pool on the edge of Hampstead Heath. It is chlorinated and unheated, not a swimming pond or a heated spa. Its public sessions offer a recurring London routine whose feel changes with the season.",
    shift:
      "From fitting exercise between attractions to experiencing a city through a public facility people return to.",
    humanReturn:
      "The memorable part may be giving one ordinary length your full attention.",
    responsibility:
      "Read the operator's cold-water guidance and current temperatures before deciding to swim. Follow lifeguard advice, stay within your ability and do not treat cold exposure as a challenge or treatment. Evening lane sessions are eighteen-plus. Confirm family and access arrangements, including the hoist. Bring warm clothing for afterwards and check closure notices.",
    evidence:
      "The City of London publishes the pool's dimensions, unheated status, seasonal session system and accessibility information. The lido users' group provides additional local context, not operational authority. Photos do not establish today's conditions. EA has not swum here or independently assessed water or safety.",
    duration:
      "Choose a suitable current session. Opening hours shorten in winter and capacity can limit drop-in admission",
    participation:
      "Public outdoor swimming within the venue's rules. Not a lesson, cold-water induction or guaranteed sauna session",
    access:
      "Use the City of London page for booking, current entry conditions and temperatures. Swimming facilities become cashless on 1 October 2026. No EA reservation.",
    guideReview: review(
      "public_admission",
      [
        {
          title: "City of London: Parliament Hill Lido",
          url: "https://www.cityoflondon.gov.uk/things-to-do/green-spaces/hampstead-heath/where-to-go-at-hampstead-heath/parliament-hill-lido",
          note: "Responsible operator's live session, temperature, safety, payment and access information.",
        },
        {
          title: "Parliament Hill Lido Users' Group",
          url: "https://parliamenthilllido.org/",
          note: "Community context. Operator notices take precedence for all practical decisions.",
        },
      ],
      "2026-10-24",
    ),
  },
  {
    id: "rotorua-pavilion-pools",
    slug: "leave-room-between-rotoruas-warm-pools",
    title: "Leave room between Rotorua's warm pools",
    summary:
      "Choose shared geothermal bathing beside Lake Rotorua, with time outside the water as important as the next pool.",
    field: "restore",
    place: "Rotorua",
    country: "New Zealand",
    countrySlug: "new-zealand",
    regionSlug: "rotorua",
    status: "public_guide",
    demo: false,
    ...guideImage("rotorua-pavilion-pools"),
    kernel:
      "Choose the Pavilion Pools admission at Polynesian Spa, then read the temperature and bathing instructions before entering. Make space for pauses outside the water rather than moving through every pool as a circuit to complete. The lake view gives you something to notice while doing very little.",
    rootedness:
      "Rotorua's geothermal setting becomes a public bathing experience here through managed pools and an established visitor facility. This guide is about that specific offer. It does not turn a commercial spa visit into a Māori ceremony or imply access to unmanaged geothermal water.",
    shift:
      "From treating rest as another activity to complete to letting a place set a slower pace.",
    humanReturn:
      "You can leave without having done every pool and still have used the time well.",
    responsibility:
      "Pavilion Pools are for ages twelve and over. Follow all posted temperature guidance, keep your head above water and take breaks. Bring swimwear and drinking water, and check towel and locker charges. Seek qualified advice if unsure about hot bathing. This is not a health treatment, and warm water does not remove risk.",
    evidence:
      "Polynesian Spa publishes eight shared Pavilion pools, age rules and practical bathing information. Its FAQ separates this admission from private-pool offers. Both sources are the provider's own. They do not independently establish health benefits or future capacity. EA has not bathed here or inspected the facilities.",
    duration:
      "Self-paced admission. Allow breaks and rest, not continuous immersion for the length of your visit",
    participation:
      "Shared managed geothermal pools with lake views. Not private bathing, open-lake swimming or a cultural ceremony",
    access:
      "Book Pavilion Pools through the official site and check current hours, capacity and extras. Other bathing areas have different conditions. No EA partnership or booking.",
    guideReview: review("public_admission", [
      {
        title: "Polynesian Spa: Pavilion Pools",
        url: "https://www.polynesianspa.co.nz/bathing/pavilion-pools/",
        note: "Exact public pool offer, age boundary and documentary photograph.",
      },
      {
        title: "Polynesian Spa: practical questions",
        url: "https://www.polynesianspa.co.nz/faqs/",
        note: "Bathing guidance, equipment and distinctions from other admission types.",
      },
    ]),
  },
  {
    id: "bangkok-sala-chalermkrung",
    slug: "watch-a-story-travel-through-a-gesture",
    title: "Watch a story travel through a gesture",
    summary:
      "At Sala Chalermkrung, a short public stage programme makes Thai dance, music and a khon scene an attentive pause in a Bangkok day.",
    field: "gather",
    place: "Bangkok",
    country: "Thailand",
    countrySlug: "thailand",
    regionSlug: "bangkok",
    status: "public_guide",
    demo: false,
    ...guideImage("bangkok-sala-chalermkrung"),
    kernel:
      "Check the current theatre programme and the performance entitlement attached to the relevant Grand Palace admission. Once seated, follow one gesture before trying to decode the whole story. Watch how a hand, turned head and musical phrase work together. The short format is an introduction, not a reason to expect an entire dance drama.",
    rootedness:
      "Sala Chalermkrung's published programme combines forms of Thai performance, including a khon episode. It belongs to a public theatre setting. The audience is invited to watch a staged programme, not to enter a private ritual or treat different regional and court forms as interchangeable.",
    shift:
      "From seeing costume as the spectacle to noticing how movement carries a character and a relationship.",
    humanReturn:
      "One gesture you can follow may open more of the performance than a long list of names.",
    responsibility:
      "Confirm the exact date, show time, ticket validity, subtitles and mobility access before arranging the visit. Follow theatre photography rules and arrive before the performance starts. Do not assume a palace ticket bought on any date remains valid indefinitely or that an independently priced theatre seat is always available.",
    evidence:
      "The theatre describes a twenty-five-minute mixed performance with weekday shows at 1pm, 2:30pm and 4pm and English and Chinese subtitles. The Grand Palace links the performance to its visitor offer. These are official programme sources, not an independent artistic review. EA has not attended.",
    duration:
      "Twenty-five minutes, plus arrival time. Recheck weekday performances and closures",
    participation:
      "Seated listening and watching. No dance class, backstage visit or participation in a ceremony",
    access:
      "Use the theatre and Grand Palace's current instructions to confirm eligible admission and the performance slot. This is not an EA combined ticket, transfer or package.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Sala Chalermkrung: visitor performance",
          url: "https://salachalermkrung.com/?c=news&cid=90&m=detail",
          note: "Thai and English descriptions, mixed programme, performance times, subtitles and ticket entitlement.",
        },
        {
          title: "The Grand Palace: official visitor programme",
          url: "https://www.royalgrandpalace.th/en/home",
          note: "Official connection to the khon performance offer. Confirm validity before relying on inclusion.",
        },
      ],
      "2026-10-24",
    ),
  },
  {
    id: "new-orleans-preservation-hall",
    slug: "hear-the-band-without-a-screen-between-you",
    title: "Hear the band without a screen between you",
    summary:
      "Give a short Preservation Hall performance your undivided attention, listening to the exchange inside a New Orleans ensemble.",
    field: "gather",
    place: "New Orleans",
    country: "United States",
    countrySlug: "united-states",
    regionSlug: "new-orleans",
    status: "public_guide",
    demo: false,
    ...guideImage("new-orleans-preservation-hall"),
    kernel:
      "Choose a current show from Preservation Hall's calendar and arrive early enough to put the practical details behind you. During the set, move your attention between instruments rather than trying to identify every tune. Notice who answers a phrase and who holds the pulse. The no-recording rule leaves the moment in the room.",
    rootedness:
      "Preservation Hall offers a specific public setting for New Orleans music in the French Quarter. Its ensembles and calendar provide an entry into living performance, not a claim that one room contains the city's entire musical history. The value is in the musicians' interaction that night, not a promised celebrity appearance.",
    shift:
      "From collecting a clip of live music to listening for how musicians make something together.",
    humanReturn:
      "You may remember a response between instruments more clearly than a song title.",
    responsibility:
      "Photography, filming and audio recording are prohibited. Check seating, accessibility and the selected line-up before buying. The programme is all ages, but the attentive room may not suit every child. One ticket covers one show. Food and drink rules apply, and the optional pre-show café is not automatically part of admission.",
    evidence:
      "The live calendar lists bookable shows, including late September 2026. The FAQ publishes forty-five-minute sets, advance online ticketing and current check-in at 730 Saint Peter Street. These are venue sources, not independent performance reviews. EA has not attended or evaluated a particular ensemble.",
    duration:
      "Forty-five minutes. The venue asks guests to arrive fifteen minutes before their show",
    participation:
      "Seated or ticket-category-specific live listening. No jam-session participation, recording or backstage access",
    access:
      "Buy the selected show directly through Preservation Hall's calendar. Follow the current 730 Saint Peter check-in instruction rather than the historic building address alone. No EA commission.",
    guideReview: review(
      "public_programme",
      [
        {
          title: "Preservation Hall: live calendar",
          url: "https://www.preservationhall.com/calendar/",
          note: "Current dates, ensembles and direct ticket availability.",
        },
        {
          title: "Preservation Hall: visitor questions",
          url: "https://www.preservationhall.com/faq/",
          note: "Duration, current check-in, age, recording and ticket rules.",
        },
      ],
      "2026-10-24",
    ),
  },
  {
    id: "seoul-saturday-gugak",
    slug: "hear-seoul-change-tempo-on-a-saturday",
    title: "Hear Seoul change tempo on a Saturday",
    summary:
      "At the National Gugak Center, a changing Saturday programme places Korean instrumental music, song and dance within one listening afternoon.",
    field: "gather",
    place: "Seoul",
    country: "South Korea",
    countrySlug: "south-korea",
    regionSlug: "seoul",
    status: "public_guide",
    demo: false,
    ...guideImage("seoul-saturday-gugak"),
    kernel:
      "Choose a dated Saturday Gugak Concert at Umyeondang Hall. Read that day's programme, then begin with the difference you can hear: a sustained sound, a rhythmic exchange or the relationship between an instrument and movement. You do not need to understand every form before noticing that they ask for different kinds of attention.",
    rootedness:
      "The National Gugak Center presents several strands of Korean performance through a changing public series. Court and folk repertoires are not one uniform tradition. The mixed format can make those differences audible without asking a first-time visitor to choose a specialist concert blindly.",
    shift:
      "From approaching an unfamiliar musical tradition as one sound to hearing distinctions within it.",
    humanReturn:
      "The programme can leave you with one form you want to hear again, rather than a box marked traditional music.",
    responsibility:
      "The visitor listing specifies ages eight and over. Confirm the selected date, subtitles, accessibility and running time. The programme changes, so the photograph does not promise a particular dance or costume. Follow auditorium recording rules. Booking pages may move to the next available performance, so check the date before paying.",
    evidence:
      "The National Gugak Center lists the 2026 Saturday series at 3pm, with a scheduled finish at 4:20pm. Korea Tourism Organization separately describes the mixed repertoire and age rule. Programme and ticket availability remain date-specific. EA has not attended or reviewed the performers.",
    duration:
      "Usually eighty minutes on a Saturday afternoon. Check the programme for your selected date",
    participation:
      "Public seated listening and watching. Not a workshop, rehearsal visit or guaranteed subtitled performance",
    access:
      "Reserve the Saturday Gugak Concert through the National Gugak Center. Online booking normally closes at 6pm the preceding day, with remaining seats subject to on-site availability. No EA partnership.",
    guideReview: review("public_programme", [
      {
        title: "National Gugak Center: 2026 Saturday series",
        url: "https://www.gugak.go.kr/site/program/performance/detail?menuid=002002001&performance_id=37012",
        note: "Direct 2026 programme, Umyeondang venue, schedule and booking conditions.",
      },
      {
        title: "Visit Korea: Saturday Gugak Concert",
        url: "https://english.visitkorea.or.kr/svc/sp/kperformance/contentsView.do?dataSetId=92&menuSn=894&vcontsId=104077",
        note: "Official destination corroboration of format, approximate duration, age and documentary programme imagery.",
      },
    ]),
  },
];
