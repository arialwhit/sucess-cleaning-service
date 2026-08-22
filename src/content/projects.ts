export type Project = {
  slug: string;
  title: string;
  service: string;
  serviceSlug: string;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  before: string;
  after: string;
};

export const projects: Project[] = [
  {
    slug: "canary-wharf-office-reset",
    title: "Nightly reset of a Canary Wharf workplace",
    service: "Office Cleaning",
    serviceSlug: "office-cleaning",
    location: "Tower Hamlets",
    summary: "A 180-desk hybrid office needed a quieter, more reliable after-hours clean after complaints about kitchens.",
    challenge: "Staff returned to sticky tea-points and missed bins on Mondays after a weekend of light occupancy.",
    solution: "We cut Friday frequency, added a Monday morning porter hour, and wrote a kitchen-only checklist for the lead cleaner.",
    result: "Facilities reported zero kitchen complaints in the following quarter and kept the same three-person crew.",
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
  },
  {
    slug: "islington-refurb-handover",
    title: "Builders clean on a four-storey Islington refurb",
    service: "After Builders Cleaning",
    serviceSlug: "after-builders-cleaning",
    location: "Islington",
    summary: "A residential contractor needed a two-stage clean before agent photography and client handover.",
    challenge: "Plaster dust was resettling on fresh paint and the client viewing was booked 36 hours after snagging.",
    solution: "Stage one removed dust with HEPA kit. Stage two ran the morning of photography after the painter’s last touch-ups.",
    result: "The listing went live the same afternoon. The contractor now books us on every plot in the terrace.",
    before: "/images/project-before.jpg",
    after: "/images/after-builders.jpg",
  },
  {
    slug: "southbank-restaurant-close",
    title: "After-close programme for a South Bank restaurant",
    service: "Restaurant Cleaning",
    serviceSlug: "restaurant-cleaning",
    location: "Lambeth",
    summary: "A 90-cover dining room needed a close-down that did not collide with a late pastry section.",
    challenge: "Previous cleaners started too early and worked around chefs, leaving floors until the morning brigade.",
    solution: "Start time moved to 23:15. Kitchen floors and stainless were split from dining-room glass so pastry could finish.",
    result: "Morning prep starts on a dry floor. The duty manager signs a one-page close-down sheet every night.",
    before: "/images/project-before.jpg",
    after: "/images/restaurant-clean.jpg",
  },
  {
    slug: "hackney-tenancy-checkout",
    title: "End of tenancy on a two-bed Hackney warehouse flat",
    service: "End of Tenancy Cleaning",
    serviceSlug: "end-of-tenancy-cleaning",
    location: "Hackney",
    summary: "A renter needed an inventory-led clean between a Friday move-out and Monday check-in.",
    challenge: "Limescale on the industrial bathroom fittings and oven grease were the likely deposit risks.",
    solution: "A two-person crew ran a full checkout spec with oven and shower-screen extras, then sent a photo log.",
    result: "The inventory clerk noted the property as professionally cleaned. The deposit was released in full.",
    before: "/images/project-before.jpg",
    after: "/images/tenancy-clean.jpg",
  },
  {
    slug: "westminster-hotel-overflow",
    title: "Housekeeping overflow for a Westminster boutique hotel",
    service: "Hotel Cleaning",
    serviceSlug: "hotel-cleaning",
    location: "Westminster",
    summary: "A 42-key hotel needed extra public-area and room support during a three-day conference spike.",
    challenge: "In-house housekeeping could not cover same-day turnarounds and lobby traffic at once.",
    solution: "We supplied a six-person overflow team for public areas and 18 rooms, working to the hotel’s own SOP.",
    result: "Guest comment scores on cleanliness held through the event. The hotel now has us on a peak-calendar retainer.",
    before: "/images/project-before.jpg",
    after: "/images/hotel-clean.jpg",
  },
  {
    slug: "greenwich-event-turnaround",
    title: "Overnight turnaround at a Greenwich hire venue",
    service: "Event Cleaning Service",
    serviceSlug: "event-cleaning-service",
    location: "Greenwich",
    summary: "A Saturday wedding and Sunday conference shared the same rooms with an eight-hour derig window.",
    challenge: "Catering litter, dance-floor hire marks and a 07:00 conference set all landed on one night team.",
    solution: "Twelve cleaners split foyer, toilets and rooms. Production stayed in the hall until 01:00; we followed the cable clear.",
    result: "Doors opened on time Sunday with no leftover glass or linen. The venue kept the same plot for the season.",
    before: "/images/project-before.jpg",
    after: "/images/event-clean.jpg",
  },
];
