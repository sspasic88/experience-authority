import type { GuideReview, PublicExperience } from "./catalog";
import { guideImage } from "./media";

const review = (
  scope: GuideReview["scope"],
  sources: GuideReview["sources"],
): GuideReview => ({
  basis: "public_sources",
  scope,
  requiresSpecialPermission: false,
  checkedOn: "2026-09-15",
  reviewBy: "2026-12-14",
  accessUrl: sources[0].url,
  sources,
});

export const guideBatch33: PublicExperience[] = [
  {
    id: "jabal-akhdar-rose-season",
    slug: "meet-the-rose-before-it-becomes-water",
    title: "Meet the rose before it becomes water",
    summary:
      "Reach Jabal Akhdar in spring, gather a first basket with permission and follow the petals into an Omani rosewater still.",
    field: "make",
    place: "Jabal Akhdar",
    country: "Oman",
    countrySlug: "oman",
    regionSlug: "ad-dakhiliyah",
    status: "public_guide",
    demo: false,
    ...guideImage("jabal-akhdar-rose-season"),
    kernel:
      "Time the mountain for the Damask rose season, then enter through a published farm visit rather than walking into a working terrace. The current dusitD2 pages describe rose plucking tours, distillation demonstrations and guided visits to nearby farms. Begin with the flowers in the cool morning. Watch what happens after the basket reaches the still, where heat and condensation turn a brief bloom into something that can last through the year. Any picking belongs to the host's route and instruction. It is not open access to a family crop.",
    rootedness:
      "Oman's official seasonal guide places rose cultivation across named Jabal Akhdar villages and connects the resulting water with food, welcome, remedies, perfume and household use. The mountain season is agricultural work before it is visitor spectacle. A hotel-arranged visit is one public doorway into that work, not proof that every farm welcomes guests or that one demonstration represents every family's method. The useful connection is between altitude, a short flowering window and the decisions required to preserve scent after the petals leave the branch.",
    shift:
      "From treating rosewater as a finished fragrance to recognising the dawn harvest, heat, vessels, condensation and seasonal labour held inside it.",
    humanReturn:
      "The next scented ingredient may prompt you to ask which landscape produced it, how brief its harvest was and whose timing allowed it to last.",
    responsibility:
      "Confirm the specific season, farm, transport, walking surface and participation before booking. Public pages describe spring broadly, but flowering dates move with weather and altitude. Jabal Akhdar road access may require a suitable vehicle and local checks. Stay with the guide, keep off planted terraces and pick only the flowers you are invited to take. Ask before photographing farmers, homes or workspaces. Heat, steam and vessels around a still require distance and host instruction. The photograph shows a resort-published rose harvest scene, not a guaranteed farm, guide or 2027 programme.",
    evidence:
      "The current Experience Oman seasonal page identifies the Jabal Akhdar rose villages, the spring harvest and visitor interest in traditional and modern rosewater production. A current dusitD2 experience page describes visits to nearby rose farms to witness villagers turning Damask roses into rosewater. Its separate rose-season page publishes plucking tours, distillation demonstrations and guided farm visits, but does not establish live availability for a future date. These sources support a seasonal, host-arranged introduction. They do not support uninvited farm access, a guaranteed bloom, an unrestricted harvest or EA attendance.",
    duration:
      "Keep a half-day for mountain access, a farm visit and distillation context. Confirm the actual programme and spring dates directly",
    participation:
      "Host-arranged seasonal farm visit with a published plucking introduction and distillation demonstration. The host controls where and how you take part",
    access:
      "Use the current dusitD2 rosewater experience as the practical starting point and confirm the farm, date, transport, price and included activities. Do not treat a general rose-season page as a live reservation. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "dusitD2 Naseem Resort: Rosewater Making",
        url: "https://www.dusit.com/dusitd2-naseemresort/experience/rosewater-making/",
        note: "Current named experience page describing visits to nearby Jabal Akhdar rose farms and observation of villagers turning seasonal Damask roses into rosewater.",
      },
      {
        title: "dusitD2 Naseem Resort: Jabal Akhdar rose season",
        url: "https://www.dusit.com/dusitd2-naseemresort/activity/discover-the-enchanting-rose-season-at-jabal-akhdar/",
        note: "Current seasonal page publishing rose plucking tours, distillation demonstrations and guided nearby-farm visits. Exact future dates and inventory are not stated.",
      },
      {
        title: "Experience Oman: Rose season in Al Jabal Al Akhdar",
        url: "https://seasons.experienceoman.om/en/landing/24321/rose",
        note: "Official destination context naming rose-growing villages and explaining the harvest, production forms and cultural uses of Omani rosewater.",
      },
    ]),
  },
  {
    id: "fujian-tulou-yongding",
    slug: "walk-inside-the-earthen-ring",
    title: "Walk inside the earthen ring",
    summary:
      "Cross the thick wall of a Fujian tulou and let its open centre explain how a fortified form once held many households together.",
    field: "witness",
    place: "Yongding",
    country: "China",
    countrySlug: "china",
    regionSlug: "fujian",
    status: "public_guide",
    demo: false,
    ...guideImage("fujian-tulou-yongding"),
    kernel:
      "Enter through the public Yongding scenic area and choose one inscribed cluster slowly rather than collecting every circular roof from a vehicle window. At Zhencheng Lou or another currently open heritage building, move from the defensive outer wall toward the shared court. Look up through the timber galleries, then back toward the single controlled entrance. The dependable experience is a public visit to a living architectural form. An overnight stay, shared family meal, private room or resident relationship is not included in this guide.",
    rootedness:
      "UNESCO describes Fujian Tulou as communal residential buildings constructed between the fifteenth and twentieth centuries for extended clans in the mountainous south-east. Their rammed-earth walls, inward-facing galleries and shared centre joined defence with daily life. Some remain inhabited while others receive substantial visitor traffic. The Fujian government identifies Yongding's heritage clusters as a public scenic area with named buildings and visitor activities. That status does not turn every doorway into public space or every resident into an interpreter.",
    shift:
      "From seeing a circular landmark from above to reading how walls, galleries, kitchens, thresholds and one open centre organised life from within.",
    humanReturn:
      "A building elsewhere may become easier to read as a social agreement, not only a shape, once you ask what its plan expects people to share.",
    responsibility:
      "Check the current ticket, opening hours, access between clusters and any restrictions before travel. Use official entrances and remain within the visitor route. A tulou can be a home as well as a heritage attraction. Do not peer into private rooms, photograph residents closely without asking or treat domestic life as part of admission. Expect steps, uneven stone, weather exposure and crowding in peak periods. The photograph shows Zhencheng Lou in January 2019. It does not establish today's access, occupancy or conditions.",
    evidence:
      "The Fujian Provincial People's Government currently describes the Yongding Tulou Scenic Area as a UNESCO and national tourist destination with the Chengqi, Zhencheng and Chuxi areas open to visitor activity. UNESCO identifies 46 inscribed buildings, their communal residential purpose, construction period and relationship with surrounding landscape. Wikimedia Commons records Lennartbj's 2019 Zhencheng Lou photograph under CC BY-SA 4.0. These sources support a public heritage visit, not the original stay and shared-meal premise, access to private rooms or EA attendance.",
    duration:
      "Allow at least half a day for one cluster and its approaches. Longer transfers from Xiamen or between clusters require separate planning",
    participation:
      "Ticketed public heritage visit through designated areas. Overnight hospitality, a household meal and access to private residential space are not promised",
    access:
      "Start with the current Yongding scenic-area information and verify the exact cluster, ticket, transport and opening hours. Treat accommodation as a separate decision with its own named host. No EA booking or commission.",
    guideReview: review("public_admission", [
      {
        title:
          "Fujian Provincial People's Government: Fujian Tulou Yongding Scenic Area",
        url: "https://www.fujian.gov.cn/english/cultureandtravel/attractions/202501/t20250107_6619446.htm",
        note: "Current provincial guide identifying the public Yongding scenic area, its named tulou clusters and visitor-facing activities.",
      },
      {
        title: "UNESCO World Heritage Centre: Fujian Tulou",
        url: "https://whc.unesco.org/en/list/1113",
        note: "Primary heritage record describing the 46 inscribed buildings, communal residential form, construction period, landscape and management context.",
      },
      {
        title: "Wikimedia Commons: Zhencheng Lou in Yongding",
        url: "https://commons.wikimedia.org/wiki/File:China_Fujian_Yongding_Hongkeng_Tulou_Zhencheng_Lou.jpg",
        note: "Image record identifying Lennartbj's January 2019 photograph of Zhencheng Lou in Hongkeng and documenting its Creative Commons Attribution-ShareAlike 4.0 licence.",
      },
    ]),
  },
  {
    id: "bahrain-pearl-snorkelling",
    slug: "follow-the-pearl-back-underwater",
    title: "Follow the pearl back underwater",
    summary:
      "Begin with Muharraq's pearling story, then take a licensed boat to the oyster beds and search the shallows by snorkel.",
    field: "nature",
    place: "Muharraq",
    country: "Bahrain",
    countrySlug: "bahrain",
    regionSlug: "muharraq",
    status: "public_guide",
    demo: false,
    ...guideImage("bahrain-pearl-snorkelling"),
    kernel:
      "Start on land with the Pearling Path or its visitor centre so the water is connected to the labour and trade that shaped Muharraq. Then book the Bahrain Tourism and Exhibitions Authority's published beginner snorkelling format with an approved operator. The official guide says boats leave from Saada or Bu Maher Fort and reach oyster beds after roughly 20 to 30 minutes. An instructor explains how to look for oysters on the seabed. Certified divers can choose a different, deeper format. This guide keeps the beginner route distinct.",
    rootedness:
      "Bahrain's World Heritage property joins buildings in Muharraq, the seashore at Bu Maher and three offshore oyster beds into one account of an island economy. Pearling supported divers, haulers, captains, merchants, boat builders and households before the trade collapsed in the twentieth century. A contemporary visitor snorkel is not a reenactment of that dangerous labour. Its value is to put the natural oyster bed back into a story that can otherwise remain architectural and urban.",
    shift:
      "From treating a pearl as a finished luxury object to seeing the seabed, breath, boat work and island economy that came before it.",
    humanReturn:
      "Luxury may look different after you trace one small polished object back to a living habitat and the difficult work that once organised a city around it.",
    responsibility:
      "Book only through an operator approved for the activity and confirm weather, minimum age, swimming ability, equipment, permits, oyster rules and what may be retained. Choose snorkelling unless you hold the certification required for the deeper diving option. Follow the instructor, use the provided flotation or safety equipment and never touch coral or wildlife outside the permitted oyster activity. Do not present recreational collection as equivalent to historic pearling labour. The photograph comes from Bahrain Tourism's programme material and does not prove today's conditions, operator or route.",
    evidence:
      "Bahrain Tourism's current pearl snorkelling and diving guide states that visitors must use a BTEA-approved operator. It distinguishes beginner snorkelling from certified diving, identifies the departure marinas, describes the boat journey and says instructors teach participants how to locate oysters. The Pearling Path authority connects the offshore beds with Muharraq's former economy and publishes current visitor-centre access. UNESCO confirms the urban, seashore and oyster-bed components of the World Heritage property. These sources support a regulated public activity, not guaranteed weather, a pearl find or EA attendance.",
    duration:
      "Keep a half-day for the visitor-centre context, marina check-in, boat transfer and water session. Confirm the operator's total duration",
    participation:
      "Licensed beginner snorkelling with an instructor, or a separately qualified dive. A pearl find and permission to keep an oyster are not assumed",
    access:
      "Use Bahrain Tourism's approved-operator links and confirm the exact format, certification, inclusions and oyster policy before payment. Combine it with the Pearling Path only if timings work independently. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Bahrain Tourism: Pearl Snorkelling and Diving",
        url: "https://www.bahrain.com/en/the-pearl-snorkelling-and-diving",
        note: "Current official activity guide with approved-operator requirement, beginner and certified formats, departure points, boat timing and instructor-led oyster search.",
      },
      {
        title: "Pearling Path: Visitor information",
        url: "https://pearlingpath.bh/en/visitor-information/",
        note: "Bahrain Authority for Culture and Antiquities visitor information connecting current public centres and the walking route with the wider pearling property.",
      },
      {
        title:
          "UNESCO World Heritage Centre: Pearling, Testimony of an Island Economy",
        url: "https://whc.unesco.org/en/list/1364",
        note: "Primary heritage record describing Muharraq's buildings, Bu Maher seashore and the offshore oyster beds as parts of one historic island economy.",
      },
    ]),
  },
  {
    id: "kampong-ayer-public-route",
    slug: "read-a-city-from-the-waterline",
    title: "Read a city from the waterline",
    summary:
      "Cross the Brunei River by boat, then follow Kampong Ayer's public walkways until the water settlement reads as a neighbourhood, not a view.",
    field: "move",
    place: "Bandar Seri Begawan",
    country: "Brunei",
    countrySlug: "brunei",
    regionSlug: "kampong-ayer",
    status: "public_guide",
    demo: false,
    ...guideImage("kampong-ayer-public-route"),
    kernel:
      "Begin at the Bandar Seri Begawan waterfront and agree the fare and landing point before entering a water taxi. Once across, let the route change scale. Boats reveal the settlement's reach while wooden lanes bring schools, mosques, homes, shops and jetties into the same working geography. Brunei Tourism recommends combining a river ride, public paths and the Cultural and Tourism Gallery. The dependable experience is a self-directed public visit. Resident-led interpretation, entry to homes and an overnight stay are not included.",
    rootedness:
      "Kampong Ayer is a living group of water villages, not an attraction assembled around a visitor circuit. Brunei Tourism describes thousands of residents connected through kilometres of walkways and publishes a mapped Kampong Peramu walking trail with public points of interest. The structures, river transport and everyday services make water part of the settlement's infrastructure. A visitor can read that relationship without asking residents to perform domestic life or explain themselves on demand.",
    shift:
      "From photographing houses on stilts across the river to recognising a city organised through jetties, paths, boats and shared services.",
    humanReturn:
      "Another city may invite you to ask which systems make daily life possible before you decide that its most unusual form is merely picturesque.",
    responsibility:
      "Confirm the gallery's current opening, water-taxi fare and safe landing point before crossing. Wear a life jacket when provided and follow the boat driver's instructions. Public walkways can be narrow, exposed, wet or under repair. Use marked routes, watch edges and turn back when access is closed. Homes, family jetties and side paths are not public because they are visible. Ask before photographing identifiable residents. The 2014 photograph documents a boat passage through Kampong Ayer, not current walkway condition or a named taxi service.",
    evidence:
      "Brunei Tourism's current Kampong Ayer guide recommends a river ride, wooden paths and the Cultural and Tourism Gallery. Its official Kampong Peramu trail maps a public walking sequence and named points of interest, but older route material cannot guarantee today's walkway condition. Wikimedia Commons identifies Jorge Láscar's 2014 boat-view photograph under CC BY 2.0. These sources support a public boat-and-walk visit, not the original resident-led stay premise, entry to homes or EA attendance.",
    duration:
      "Allow two to three hours for the crossing, a cautious public walk and the gallery. Weather and walkway closures can change the route",
    participation:
      "Public water-taxi crossing and self-directed walking route. Private homes, resident-led interpretation and overnight hospitality are outside the promise",
    access:
      "Use Brunei Tourism's destination page and official trail as orientation, then confirm the gallery, landing point, fare and walkway condition locally. A visible path is not automatically public. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Brunei Tourism: Kampong Ayer",
        url: "https://www.bruneitourism.com/places/kampong-ayer/",
        note: "Current official destination guide recommending a Brunei River boat ride, wooden paths and the Cultural and Tourism Gallery.",
      },
      {
        title: "Brunei Tourism: Kampong Peramu walking trail",
        url: "https://www.bruneitourism.com/wp-content/uploads/2025/03/Kg-Ayer-Walking-Trail_compressed_2.pdf",
        note: "Official mapped walking trail with public route orientation and named points of interest. Its publication age does not prove present walkway condition.",
      },
      {
        title: "Wikimedia Commons: Kampong Ayer by boat",
        url: "https://commons.wikimedia.org/wiki/File:Kampong_Ayer_(18403648148).jpg",
        note: "Image record identifying Jorge Láscar's 2014 Kampong Ayer photograph and documenting its Creative Commons Attribution 2.0 licence.",
      },
    ]),
  },
  {
    id: "okavango-mokoro-public-ride",
    slug: "let-the-delta-decide-the-route",
    title: "Let the delta decide the route",
    summary:
      "Sit low in an Okavango mokoro and let a trained poler read the water, reeds and safe passage through a delta that keeps changing shape.",
    field: "move",
    place: "Okavango Delta",
    country: "Botswana",
    countrySlug: "botswana",
    regionSlug: "okavango-delta",
    status: "public_guide",
    demo: false,
    ...guideImage("okavango-mokoro-public-ride"),
    kernel:
      "Choose a currently licensed operator that names the departure area, guide, vessel and safety rules. Then let the mokoro's low speed become the point. Botswana Tourism describes the craft as a pole-propelled canoe adapted to the delta's shallow channels, with fibreglass now often replacing hollowed trees for conservation reasons. Sit where instructed, keep movements small and watch how the poler reads depth, vegetation and turns. This is guided passage through a living wetland. It is not a self-drive canoe or a guaranteed wildlife encounter.",
    rootedness:
      "The Okavango is an inland delta whose flood pulse arrives during Botswana's dry season and continually changes channels, floodplains and habitat. UNESCO describes a system in which hydrology and biological cycles are unusually interdependent. The mokoro makes that shallow, shifting geography physically legible, but a visitor ride does not transfer a poler's expertise or prove that every tourism model benefits nearby communities equally. Ask who operates the route and what the booking supports.",
    shift:
      "From crossing a wetland in search of sightings to noticing the depth, silence, vegetation and trained decisions that make each narrow passage possible.",
    humanReturn:
      "A journey elsewhere may feel richer when the person reading the terrain matters as much as the animal or landmark you hoped to see.",
    responsibility:
      "Confirm the operator's current licence, launch point, route, duration, weather policy, flotation equipment and emergency plan. Follow the poler's seating instructions and never stand, trail hands in the water or pressure a guide to approach wildlife. Keep voices low and take every sighting as optional. Water levels and routes vary with the flood cycle. The photograph shows an elephant and mokoro in the Okavango in 2017. It is not a promise of wildlife, proximity, safety or today's route.",
    evidence:
      "Botswana Tourism's current mokoro page describes the shallow-water craft, standing poler, quiet movement and shift toward fibreglass hulls. The authority's current travel guidance says visitors are intruders in protected wildlife areas and identifies licensed tourism enterprises and a Maun office for practical checks. UNESCO documents the delta's seasonal flood pulse, protected-area mosaic and ecological sensitivity. Wikimedia Commons records Hp.Baumeler's 2017 photograph under CC BY-SA 4.0. These sources support a professionally guided public ride, not a specific unnamed operator, a guaranteed sighting or EA attendance.",
    duration:
      "Formats range widely. Keep at least a half-day and confirm transfers, launch point and time on the water with the chosen operator",
    participation:
      "Guided passenger journey in a pole-propelled mokoro. Self-poling, wildlife approach and a particular route are not promised",
    access:
      "Use Botswana Tourism's mokoro overview and current operator information to select a licensed provider. Confirm community benefit, hull type, safety equipment and the actual launch area before payment. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Botswana Tourism Organisation: Mokoro Ride",
        url: "https://www.botswanatourism.co.bw/experience/mokoro-ride",
        note: "Current national tourism overview describing mokoro construction, shallow-water movement, the poler's role and conservation-driven use of fibreglass hulls.",
      },
      {
        title: "UNESCO World Heritage Centre: Okavango Delta",
        url: "https://whc.unesco.org/en/list/1432",
        note: "Primary heritage record explaining the inland delta, seasonal flood pulse, habitat diversity, protected-area mosaic and environmental sensitivity.",
      },
      {
        title: "Wikimedia Commons: Mokoro travel in the Okavango",
        url: "https://commons.wikimedia.org/wiki/File:Mokoro_travel_(cropped).jpg",
        note: "Image record identifying Hp.Baumeler's 2017 Okavango photograph and documenting its Creative Commons Attribution-ShareAlike 4.0 licence.",
      },
    ]),
  },
];
