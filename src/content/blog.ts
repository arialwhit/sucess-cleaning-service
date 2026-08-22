export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: "Cleaning Tips" | "Industry News" | "Case Studies" | "Company Updates";
  image: string;
  readTime: string;
  content: { heading?: string; paragraphs: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-often-should-offices-be-deep-cleaned",
    title: "How often should London offices be deep cleaned?",
    excerpt:
      "Daily bin runs are not a deep clean. Here is a practical cadence for kitchens, washrooms and carpets in hybrid City workplaces.",
    date: "2026-06-18",
    author: "London Prime Cleaning",
    category: "Cleaning Tips",
    image: "/images/office-clean.jpg",
    readTime: "6 min",
    content: [
      {
        paragraphs: [
          "Most London offices still pay for a nightly clean that looks busy and still leaves a sour tea-point. The gap is not effort. It is mixing daily maintenance with work that needs machines, time and an empty floor.",
          "A useful split is this: daily work keeps the workplace usable. Periodic work resets the building so daily work can succeed. If you only ever do the first, carpets, grout and fridge interiors slide until someone complains.",
        ],
      },
      {
        heading: "A cadence that fits hybrid occupancy",
        paragraphs: [
          "For a typical 80–200 desk workplace in Zones 1–2, start with a nightly or thrice-weekly maintenance clean tied to actual occupancy, not the original fit-out headcount. Add a monthly kitchen deep-clean (appliance interiors, tiles, under-unit floors) and a quarterly carpet or hard-floor maintenance visit.",
          "Washrooms need a different rhythm. Daily disinfection is non-negotiable. Descale and grout attention every 6–8 weeks in hard-water postcodes, which is most of Greater London.",
        ],
      },
      {
        heading: "What ‘deep clean’ should mean in a specification",
        paragraphs: [
          "Write the tasks. High dusting, internal glass, upholstery, behind vending, and the server-room threshold (if you clean it at all) do not belong in a one-line ‘deep clean as required’. Facilities managers who name the rooms and the months get fewer disputes.",
          "If your team is hybrid, do not pay Friday-night rates to clean empty neighbourhoods of desks. Move hours to Monday mornings or the days people actually commute. That is usually a cheaper way to raise standards than adding another weekly visit.",
        ],
      },
    ],
  },
  {
    slug: "end-of-tenancy-cleaning-checklist-london",
    title: "End of tenancy cleaning checklist for London renters",
    excerpt:
      "What inventory clerks in London actually look at — and what a cleaner cannot fix for you the night before checkout.",
    date: "2026-05-02",
    author: "London Prime Cleaning",
    category: "Cleaning Tips",
    image: "/images/tenancy-clean.jpg",
    readTime: "7 min",
    content: [
      {
        paragraphs: [
          "Deposit deductions in London cluster around the same rooms: the oven, the shower, the windows and the carpet by the front door. A generic ‘sparkle clean’ that skips those is how tenants lose money they did not need to lose.",
          "This checklist is written against the way unfurnished and part-furnished inventories are usually taken in the capital. It is not legal advice and it does not guarantee a deposit. It does tell you where to spend the hours.",
        ],
      },
      {
        heading: "Do these before the cleaner arrives",
        paragraphs: [
          "Remove every personal item. Cleaners are not a house-clearance firm. Leftover food, clothes and toiletries slow the job and hide dirt the inventory will still find.",
          "Photograph existing damage now, not after you have handed keys back. Cleaning will not repair a chipped hob or a stained mattress. Those are dilapidations, not dirt.",
          "If the tenancy or inventory mentions professional carpet cleaning, book it. A vacuum will not lift a year of street grit from a basement flat.",
        ],
      },
      {
        heading: "What the clean itself should cover",
        paragraphs: [
          "Kitchen: cupboard interiors if they were clean at check-in, hob, extractor filters you can remove, appliance fronts, and the oven if it was supplied. Bathroom: limescale on taps and screens, grout, extractor grille, and the floor including behind the pan. Every other room: skirtings, sockets, internal doors, window sills and internal glass.",
          "Ask for a photo log when the crew leaves. If the clerk visits 24 hours later, you have a record of the finish you paid for.",
        ],
      },
    ],
  },
  {
    slug: "eco-friendly-cleaning-products-we-use",
    title: "The eco-preferable products we actually use on site",
    excerpt:
      "Fragrance-free options, concentrate dosing, and what ‘eco’ cannot mean in a hospital washroom or a restaurant kitchen.",
    date: "2026-03-21",
    author: "London Prime Cleaning",
    category: "Company Updates",
    image: "/images/residential-clean.jpg",
    readTime: "5 min",
    content: [
      {
        paragraphs: [
          "Clients ask for ‘eco-friendly products’ and then need a hospital-grade disinfectant the same week. Those requests are not the same job. We are clear about which products go where, instead of putting a green label on everything.",
          "On general commercial and residential work we default to concentrated, low-VOC, readily biodegradable ranges dosed with measured pumps. That cuts plastic, transport weight and the chemical load in indoor air. Fragrance-free versions are standard for schools, clinics and anyone who asks.",
        ],
      },
      {
        heading: "Where we will not pretend",
        paragraphs: [
          "Food rooms, clinical washrooms and outbreak response need products with a stated biocidal claim and a contact time we can actually observe. We will not swap those for a vinegar mix because it photographs well.",
          "Microfibre and HEPA filtration do as much for indoor air as the bottle on the trolley. If a specification only argues about brand names and ignores cloth hygiene, it is incomplete.",
        ],
      },
      {
        heading: "What you can ask us for",
        paragraphs: [
          "COSHH sheets, a site-specific product list, and a fragrance-free brief. If your building already mandates a chemical range, we will use it rather than fighting the landlord’s policy.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
