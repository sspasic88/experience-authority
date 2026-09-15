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

export const guideBatch32: PublicExperience[] = [
  {
    id: "konigil-meros-paper-mill",
    slug: "follow-a-sheet-back-to-the-mulberry-branch",
    title: "Follow a sheet back to the mulberry branch",
    summary:
      "Leave Samarkand's finished manuscripts for Konigil, where bark, water, a mill and patient handwork turn mulberry branches into paper.",
    field: "work",
    place: "Konigil",
    country: "Uzbekistan",
    countrySlug: "uzbekistan",
    regionSlug: "samarkand",
    status: "public_guide",
    demo: false,
    ...guideImage("konigil-meros-paper-mill"),
    kernel:
      "Travel about 13 kilometres from Samarkand to the Meros paper mill in Konigil and follow the sequence rather than beginning in the shop. Look for mulberry branches being stripped, fibres softened and beaten, pulp suspended in water, sheets formed and the surface polished. Uzbekistan Travel currently describes organised factory excursions that show the production technology. A 2025 government project record independently says the process remains manual and visible to visitors. Your dependable role is observation. A hands-on papermaking workshop is not promised.",
    rootedness:
      "Samarkand paper belongs to a much longer history of writing, manuscript production and movement along Central Asian trade routes, but the current mill is a modern revival rather than an unchanged medieval workshop. Uzbekistan Travel attributes that revival to the Mukhtarov brothers and describes paper made with natural raw materials for uses that include manuscript restoration. The important connection is not a claim of perfect continuity. It is the return of material knowledge to a landscape where finished pages are usually encountered after the labour has disappeared.",
    shift:
      "From seeing Samarkand through writing on a finished page to recognising the branch, water, pressure, drying and polishing that first make the page possible.",
    humanReturn:
      "The next notebook or museum manuscript may prompt a better question about who made its surface and which local materials gave it strength, colour and texture.",
    responsibility:
      "Confirm current visitor hours, the excursion format, language and price before leaving Samarkand. Production areas contain water, moving equipment, tools and wet surfaces. Stay on the visitor route, follow staff instructions and touch bark, pulp, sheets or machinery only when invited. Ask before photographing workers. Do not describe a demonstration as an ancient process unchanged through time or assume every product is made entirely on site. The photograph shows real mill work from 2018, not today's staffing, visitor route or conditions.",
    evidence:
      "Uzbekistan Travel's current Konigil guide places the Meros mill about 13 kilometres from Samarkand, describes manual production from natural materials and states that factory excursions show the process and products. A government directorate page published with a 2025 site gallery says the mill is operating, production is manual and visitors can observe it while work continues on the wider visitor setting. Wikimedia Commons identifies the photograph as mulberry bark being stripped at the Meros mill and records Enric's CC BY-SA 4.0 licence. These sources support public observation, not a hands-on class, a fixed timetable or EA attendance.",
    duration:
      "Allow a half-day from Samarkand including road travel and an unhurried mill visit. Confirm the current excursion length",
    participation:
      "Public factory excursion focused on observing the process. Making your own paper is not promised",
    access:
      "Use the current Uzbekistan Travel listing as the starting point and confirm the mill's visitor arrangements before setting out. Do not rely on historical prices or informal workshop claims. No EA booking or commission.",
    guideReview: review("public_observation", [
      {
        title: "Uzbekistan Travel: Konigil village and Meros paper mill",
        url: "https://uzbekistan.travel/en/o/konigil-village-and-meros-paper-mill/",
        note: "Current national tourism guide describing the mill, its location near Samarkand, manual natural-material process, factory excursions and visitor-facing demonstration.",
      },
      {
        title: "Government directorate: Konigil Meros paper mill",
        url: "https://www.dkm.gov.uz/en-US/bumaznaa-fabrika-konigil-meros-samarkand",
        note: "Government project page with a 2025 gallery stating that the mill operates, production remains manual and visitors can observe the process during continuing site preparation.",
      },
      {
        title: "Wikimedia Commons: Mulberry bark preparation at Meros",
        url: "https://commons.wikimedia.org/wiki/File:084_Mol%C3%AD_paperer_Meros_(Konigil,_Samarcanda),_pelant_les_escorces_de_morera.jpg",
        note: "Image record identifying Enric's 2018 photograph at the Meros paper mill and documenting its Creative Commons Attribution-ShareAlike 4.0 licence.",
      },
    ]),
  },
  {
    id: "bonwire-kente-centre",
    slug: "follow-kente-one-strip-at-a-time",
    title: "Follow kente one strip at a time",
    summary:
      "Begin at Bonwire's visitor centre, meet the loom and try a first controlled step before the narrow woven strip becomes a larger cloth.",
    field: "make",
    place: "Bonwire",
    country: "Ghana",
    countrySlug: "ghana",
    regionSlug: "ashanti-region",
    status: "public_guide",
    demo: false,
    ...guideImage("bonwire-kente-centre"),
    kernel:
      "Start at Bonwire's visitor centre and arrange the published weaving tour rather than approaching an individual workspace uninvited. Ask the guide to slow the process down from thread preparation and warping to the movement of hands and feet at the narrow loom. Visit Ghana says the community workshop lets guests learn and try thread spinning, warping and weaving, then meet master weavers and see different stages of production. Treat any attempt as a guided introduction whose material, tool and duration belong to the host.",
    rootedness:
      "Visit Ghana identifies Bonwire as a major Asante weaving centre and connects kente patterns with names, proverbs, historical events and status. Museum records add a useful material correction to the finished spectacle. The Metropolitan Museum of Art explains that a monumental cloth is assembled from separately woven narrow bands and that colour, sequence and design depend on considerable preparation and skill. One visitor turn cannot transfer that knowledge, but it can reveal the structure hidden inside a familiar image of kente.",
    shift:
      "From reading kente as a field of colour to seeing separate strips, tension, repeated decisions and named patterns held together by specialised work.",
    humanReturn:
      "A patterned cloth elsewhere may invite closer attention to its construction, the sequence inside the design and the difference between recognising an object and understanding its making.",
    responsibility:
      "Arrange the tour through the visitor centre and confirm hours, fee, duration, group size and what guests may actually try. Do not enter a working space, touch a loom or interrupt a weaver without the guide's direction. Ask before photographing identifiable people and accept a refusal without negotiation. Do not reduce kente to bright colour or copy a named pattern without learning its context. Buy only when price, maker and material are clear to you. The photograph documents weaving in Bonwire in 2019, not the current tour or a promised instructor.",
    evidence:
      "Visit Ghana's current Bonwire page publishes a visitor-centre starting point, daily hours, a contact number and a weaving tour that includes the community workshop, master weavers and a first try at spinning, warping and weaving. The Metropolitan Museum of Art independently describes Asante kente as narrow loom-woven bands joined edge to edge and explains its prestige, materials and design discipline. Wikimedia Commons identifies the photograph as Sadads' 2019 image of weaving in Bonwire under CC BY-SA 4.0. These sources support a guided public introduction, not mastery, guaranteed access to every workspace or EA attendance.",
    duration:
      "Allow about two hours for arrival, orientation and an unhurried weaving tour. Confirm the actual format with the visitor centre",
    participation:
      "Guided community workshop visit with a published first try at selected weaving stages. The host defines the task and tools",
    access:
      "Begin with the Bonwire visitor centre details on Visit Ghana and arrange the tour before entering any workspace. Confirm the current fee and participation format directly. No EA booking or commission.",
    guideReview: review("public_programme", [
      {
        title: "Visit Ghana: Bonwire Kente",
        url: "https://visitghana.com/bonwire-kente/",
        note: "Current national tourism listing with visitor-centre access, daily hours, contact details and a guided workshop route including an introductory try at spinning, warping and weaving.",
      },
      {
        title: "The Metropolitan Museum of Art: Royal man's kente",
        url: "https://www.metmuseum.org/art/collection/search/894795",
        note: "Museum object research explaining Asante kente's narrow-band loom construction, joined strips, material history, prestige and the skill required to make a complete cloth.",
      },
      {
        title: "Wikimedia Commons: Bonwire man weaving",
        url: "https://commons.wikimedia.org/wiki/File:Bonwire_man_weaving.jpg",
        note: "Image record identifying Sadads' 2019 photograph of traditional weaving in Bonwire and documenting its Creative Commons Attribution-ShareAlike 4.0 licence.",
      },
    ]),
  },
];
