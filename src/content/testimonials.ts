export type Testimonial = {
  name: string;
  company?: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  service: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Mehta",
    company: "Northbank Legal",
    location: "City of London",
    rating: 5,
    quote:
      "Kitchens were the weak point with our last contractor. London Prime put a named lead on the job and the Monday mess stopped within a fortnight.",
    service: "Office Cleaning",
    date: "2026-03-12",
  },
  {
    name: "James Okonkwo",
    company: "Harbor & Pine Residences",
    location: "Hackney",
    rating: 5,
    quote:
      "We use them for every void now. The photo log after end of tenancy saves an argument with the inventory clerk.",
    service: "End of Tenancy Cleaning",
    date: "2026-01-28",
  },
  {
    name: "Elena Rossi",
    company: "Cinder Restaurant",
    location: "Lambeth",
    rating: 5,
    quote:
      "They wait until the pass is actually closed. That single change made the close-down usable for a kitchen that runs late.",
    service: "Restaurant Cleaning",
    date: "2025-11-04",
  },
  {
    name: "Tom Ellis",
    company: "Ellis + Ward Construction",
    location: "Islington",
    rating: 5,
    quote:
      "Two-stage builders clean on a dusty terrace refurb. Photography went ahead the same day as the final pass.",
    service: "After Builders Cleaning",
    date: "2026-02-19",
  },
  {
    name: "Hannah Crowe",
    company: "The Lantern Hotel",
    location: "Westminster",
    rating: 5,
    quote:
      "Overflow housekeeping during a sold-out conference week. They followed our room standard rather than inventing their own.",
    service: "Hotel Cleaning",
    date: "2025-12-09",
  },
  {
    name: "Marcus Adeyemi",
    location: "Wandsworth",
    rating: 5,
    quote:
      "Booked a deep clean of our family house before relatives arrived. They finished the bathrooms and oven in one day and left a room list of what was done.",
    service: "Residential Deep Cleaning",
    date: "2026-04-02",
  },
  {
    name: "Sophie Lang",
    company: "Dockside Events",
    location: "Greenwich",
    rating: 4,
    quote:
      "Overnight wedding-to-conference turnaround was tight but they hit the 07:00 doors. We would brief the derig earlier next time — that is on us.",
    service: "Event Cleaning Service",
    date: "2026-05-16",
  },
];
