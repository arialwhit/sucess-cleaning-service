export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  image: string;
  filter: string;
  included: string[];
  why: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "cinema-cleaning",
    name: "Cinema Cleaning",
    short: "Auditorium, foyer and concession deep cleans between screenings.",
    hero: "Keep every screen, seat and snack bar ready for the next showing — without delaying doors.",
    image: "/images/cinema-clean.jpg",
    filter: "Cinema",
    included: [
      "Seat vacuuming, gum removal and cup-holder sanitising between shows",
      "Aisle, stair and auditorium floor care, including high-traffic carpet extraction on a planned cycle",
      "Foyer, ticket hall and toilet servicing to cinema opening standards",
      "Concession and bar back-of-house wipe-downs that respect food-hygiene rules",
      "Out-of-hours auditorium deep cleans so daytime programming is not disrupted",
    ],
    why: [
      { title: "Timed to your programme", body: "We work around last-exit and first-door times so cleaning never collides with ticket sales." },
      { title: "High-volume visitor traffic", body: "Teams are sized for weekend peaks, premieres and school-holiday rushes." },
      { title: "Quiet, discreet crews", body: "Low-noise kit and dark-auditorium protocols keep the cinema experience intact." },
    ],
    process: [
      { title: "Site walk", body: "We map auditoriums, concessions and public toilets against your screening calendar." },
      { title: "Programme plan", body: "A nightly and weekly plan is agreed so deep work happens after late shows." },
      { title: "Live service", body: "Crews sign in, complete checklists per screen, and report issues before you open." },
    ],
    faqs: [
      { q: "Can you clean between back-to-back screenings?", a: "Yes. Rapid-turn crews focus on seats, floors and bins in the window you give us. Full extraction is booked on darker days." },
      { q: "Do you handle 3D glasses and play areas?", a: "We sanitise reusable glasses and clean family zones as part of the foyer brief when requested." },
      { q: "Are your products safe around seating fabric?", a: "We use fabric-safe, low-residue products approved for high-use auditorium upholstery." },
    ],
    related: ["event-cleaning-service", "retail-cleaning", "facility-cleaning"],
  },
  {
    slug: "hospital-cleaning",
    name: "Hospital Cleaning",
    short: "Clinical-standard cleaning for wards, clinics and waiting areas.",
    hero: "Cleaning that supports infection control, not just appearance — for hospitals, clinics and diagnostic centres.",
    image: "/images/hospital-clean.jpg",
    filter: "Hospital",
    included: [
      "Colour-coded cleaning for clinical, public and utility areas",
      "High-touch disinfection of rails, switches, reception desks and waiting seats",
      "Floor care suitable for clinical vinyl, resin and terrazzo",
      "Washroom servicing to healthcare hygiene standards",
      "Documented checklists that your facilities or infection-control lead can audit",
    ],
    why: [
      { title: "Healthcare-aware teams", body: "Staff are briefed on isolation protocols, PPE and never entering restricted bays without clearance." },
      { title: "Traceable work", body: "Task sheets and supervisor sign-off give you a paper trail for inspections." },
      { title: "Quiet around patients", body: "We schedule noisy machine work away from rest periods and clinics in session." },
    ],
    process: [
      { title: "Risk briefing", body: "We align with your infection-control policy and restricted-area list before the first shift." },
      { title: "Zone plan", body: "Each floor is split into colour-coded zones with named owners." },
      { title: "Supervised delivery", body: "A lead cleaner audits high-risk rooms and logs exceptions the same day." },
    ],
    faqs: [
      { q: "Do you work inside clinical rooms?", a: "Yes, where your site lead authorises access. We never enter theatres or isolation rooms without a named escort and briefing." },
      { q: "Are staff DBS checked?", a: "All operatives placed on healthcare sites hold enhanced DBS checks and site induction records." },
      { q: "Can you cover nights and weekends?", a: "Hospital contracts routinely include nights, weekends and bank holidays." },
    ],
    related: ["facility-cleaning", "office-cleaning", "hotel-cleaning"],
  },
  {
    slug: "after-builders-cleaning",
    name: "After Builders Cleaning",
    short: "Dust, debris and handover-ready finishing after building work.",
    hero: "Turn a dusty snag list into a space you can photograph, let, or hand to the client.",
    image: "/images/after-builders.jpg",
    filter: "After Builders",
    included: [
      "Fine-dust removal from walls, ceilings, joinery, sockets and window tracks",
      "Paint-splatter, silicone smear and grout-haze treatment",
      "Floor vacuuming, mopping and first polish of new finishes",
      "Kitchen and bathroom first-use clean, including appliances if fitted",
      "Internal window and glass partition cleaning",
    ],
    why: [
      { title: "Built for handover days", body: "We time the last pass to your practical completion or agent photoshoot." },
      { title: "Dust control", body: "HEPA vacuums and staged cleaning stop plaster dust resettling on fresh paint." },
      { title: "Snag-aware", body: "Crews flag unfinished trades instead of cleaning over wet paint or unset silicone." },
    ],
    process: [
      { title: "Condition survey", body: "We walk the plot, note remaining trades, and agree a one- or two-stage clean." },
      { title: "First pass", body: "Debris, bulk dust and construction film come out first." },
      { title: "Final finish", body: "A second visit after snagging leaves the property camera-ready." },
    ],
    faqs: [
      { q: "Should we book one clean or two?", a: "Most London refurbs need a builders clean plus a final clean after snagging. We will say so on the survey." },
      { q: "Do you remove rubble?", a: "Bagged waste and light debris yes. Skip hire and heavy demolition waste stay with the contractor." },
      { q: "Can you clean occupied homes after a loft conversion?", a: "Yes. We isolate the work zone and protect lived-in rooms." },
    ],
    related: ["end-of-tenancy-cleaning", "residential-deep-cleaning", "office-cleaning"],
  },
  {
    slug: "retail-cleaning",
    name: "Retail Cleaning",
    short: "Shop-floor, fitting-room and back-of-house cleaning for London stores.",
    hero: "A store that looks as considered at 9am as it did at yesterday’s close.",
    image: "/images/retail-clean.jpg",
    filter: "Retail",
    included: [
      "Sales-floor vacuuming, mopping and entrance-mat care",
      "Glass, mirror and display-cabinet detailing",
      "Fitting-room and customer-toilet servicing",
      "Stock-room floors and staff-area hygiene",
      "Till-point and high-touch sanitising after close",
    ],
    why: [
      { title: "Brand-sensitive", body: "We follow your visual merchandising rules and never move product without a named method." },
      { title: "After-hours default", body: "Most retail contracts run after lock-up so daytime trade is untouched." },
      { title: "Multi-site ready", body: "One account manager can cover a high-street cluster or a mall portfolio." },
    ],
    process: [
      { title: "Store profile", body: "Floor type, opening hours and alarm protocol are captured before night one." },
      { title: "Close-down routine", body: "A fixed task list is completed and photographed on request." },
      { title: "Weekly extras", body: "Glass, high dusting and stock-room deep cleans rotate on a published calendar." },
    ],
    faqs: [
      { q: "Can you work around late trading?", a: "Yes. West End and Westfield stores often start after 21:00. We staff to that." },
      { q: "Do you clean food-hall units?", a: "Front of house yes. Catering extraction and grease-trap work is quoted as a specialist add-on." },
      { q: "What about alarm codes?", a: "Codes stay with your manager. We use named keyholders or meet-and-greet lock-up." },
    ],
    related: ["office-cleaning", "restaurant-cleaning", "facility-cleaning"],
  },
  {
    slug: "stadium-cleaning",
    name: "Stadium Cleaning",
    short: "Match-day turnaround and planned maintenance for large venues.",
    hero: "From last whistle to next event: concourses, seating and back-of-house at stadium scale.",
    image: "/images/stadium-clean.jpg",
    filter: "Stadium",
    included: [
      "Seating-bowl litter pick, spill treatment and gum removal",
      "Concourse, toilet and hospitality-suite turnaround",
      "Pitch-side and tunnel hygiene where access is granted",
      "Post-concert or conference reset of mixed-use spaces",
      "Planned deep cleans of washrooms and kitchens in the off-week",
    ],
    why: [
      { title: "Volume staffing", body: "We can surge crews for 20,000-plus attendances, then scale down on quiet weeks." },
      { title: "Event-aware", body: "Plans change with kick-off, extra time and late curfews. Supervisors stay on radio." },
      { title: "Safety first", body: "Working-at-height and crowded- concourse rules are written into the method statement." },
    ],
    process: [
      { title: "Event brief", body: "Capacity, timings and restricted zones are confirmed with your operations team." },
      { title: "Match-day surge", body: "Crews deploy by stand and concourse with live supervisor checks." },
      { title: "Handover", body: "A punch-list is signed before the next tenant or public opening." },
    ],
    faqs: [
      { q: "How quickly can you turn a bowl around?", a: "It depends on capacity and weather. We quote a crew size against your next-event deadline, not a generic hour count." },
      { q: "Do you clean hospitality kitchens?", a: "Front-of-house and wash-up areas yes. Full catering deep-cleans are scheduled separately." },
      { q: "Can you cover concerts as well as sport?", a: "Yes. Mixed-use stadia are a core part of this service." },
    ],
    related: ["event-cleaning-service", "cinema-cleaning", "facility-cleaning"],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    short: "Daily, weekly or after-hours cleaning for London workplaces.",
    hero: "Desks, kitchens and washrooms that stay presentable for staff, clients and investors.",
    image: "/images/office-clean.jpg",
    filter: "Office",
    included: [
      "Desk-point dusting, bin emptying and floor care",
      "Kitchen, tea-point and fridge hygiene on an agreed cycle",
      "Washroom restocking and disinfection",
      "Meeting-room glass, tables and AV surfaces",
      "Periodic high dusting, carpet and hard-floor maintenance",
    ],
    why: [
      { title: "After-hours by default", body: "Most City and Canary Wharf contracts run once the last meeting ends." },
      { title: "Named regulars", body: "You see the same small team, not a different agency face every Monday." },
      { title: "Flexible density", body: "Hybrid offices get frequency that matches actual occupancy, not empty desks." },
    ],
    process: [
      { title: "Walkthrough", body: "We count workstations, kitchens and washrooms and note access hours." },
      { title: "Specification", body: "Daily, weekly and monthly tasks are written into a one-page spec." },
      { title: "Start and review", body: "A supervisor visits in week one and again at 30 days to tighten the routine." },
    ],
    faqs: [
      { q: "Do you clean while staff are still in?", a: "We can, but most clients prefer lock-up cleans. Day-porter cover is available for busy receptions." },
      { q: "Can you handle multi-tenant buildings?", a: "Yes, including shared washrooms and landlord common parts when the managing agent appoints us." },
      { q: "What about recycling?", a: "We separate waste to your building’s stream and can supply liners that match the scheme." },
    ],
    related: ["facility-cleaning", "retail-cleaning", "residential-deep-cleaning"],
  },
  {
    slug: "residential-deep-cleaning",
    name: "Residential Deep Cleaning",
    short: "Whole-home resets for houses and flats across Greater London.",
    hero: "A thorough, scheduled clean of kitchens, bathrooms and lived-in rooms — not a rushed once-over.",
    image: "/images/residential-clean.jpg",
    filter: "Residential",
    included: [
      "Kitchen degrease, appliance fronts and interior ovens on request",
      "Bathroom descale, grout attention and sanitary disinfection",
      "Skirting, switch plates, doors and reachable woodwork",
      "Floors vacuumed and mopped; carpets treated as specified",
      "Internal glass and mirror detailing",
    ],
    why: [
      { title: "Time-boxed, not vague", body: "You know how many hours and which rooms are in scope before we arrive." },
      { title: "Occupied-home manners", body: "Teams remove shoes, protect beds and work around pets and children." },
      { title: "Product choice", body: "Eco-preferable ranges are standard; fragrance-free options are available." },
    ],
    process: [
      { title: "Room list", body: "You tell us beds, baths and extras such as ovens or inside windows." },
      { title: "Confirmed slot", body: "A two-hour arrival window is booked around your keys or doorman." },
      { title: "Walk-through", body: "The lead cleaner checks kitchens and bathrooms with you before leaving." },
    ],
    faqs: [
      { q: "How long does a deep clean take?", a: "A typical two-bed London flat is a full day for two cleaners. Houses take longer — we quote after the room count." },
      { q: "Do I need to be home?", a: "Not if we can collect keys or meet a porter. Many clients leave and return to a finished home." },
      { q: "Can this become a regular clean?", a: "Yes. Deep-clean clients often move to a fortnightly lighter routine." },
    ],
    related: ["end-of-tenancy-cleaning", "after-builders-cleaning", "office-cleaning"],
  },
  {
    slug: "event-cleaning-service",
    name: "Event Cleaning Service",
    short: "Pre, live and post-event cleaning for venues and production teams.",
    hero: "Cleaners who work to call sheets — not office hours — so your event looks finished from doors to derig.",
    image: "/images/event-clean.jpg",
    filter: "Event",
    included: [
      "Pre-event reset of foyers, toilets and presentation rooms",
      "Live-event porters for spills, bins and VIP routes",
      "Post-event litter, glass and floor recovery",
      "Overnight turnarounds between consecutive hire days",
      "Production-area tidy that respects cable runs and kit",
    ],
    why: [
      { title: "Call-time discipline", body: "Crews arrive at the hour your production manager sets, including Sundays." },
      { title: "Invisible during show", body: "Live cleaners stay off camera and off the guest path unless called." },
      { title: "One invoice", body: "Pre, live and post can sit on a single job number for the promoter." },
    ],
    process: [
      { title: "Run-of-show", body: "We read your schedule and mark door times, catering and derig." },
      { title: "Crew plot", body: "Porters are assigned to toilets, floor and back-of-house." },
      { title: "Close-out", body: "The venue is walked with the duty manager before we leave." },
    ],
    faqs: [
      { q: "Can you cover a one-off wedding or a three-day expo?", a: "Both. One-offs get a fixed quote. Multi-day hires get a daily crew roster." },
      { q: "Do you work in historic houses?", a: "Yes, with conservation-aware products and no steam on sensitive surfaces unless approved." },
      { q: "How late will you stay?", a: "Until the venue is accepted back, including 02:00 derigs when booked." },
    ],
    related: ["stadium-cleaning", "cinema-cleaning", "hotel-cleaning"],
  },
  {
    slug: "end-of-tenancy-cleaning",
    name: "End of Tenancy Cleaning",
    short: "Inventory-ready cleans for London renters, landlords and agents.",
    hero: "A checkout clean written against a typical London inventory — so deposits are not lost on dust and limescale.",
    image: "/images/tenancy-clean.jpg",
    filter: "End of Tenancy",
    included: [
      "Kitchen: cabinets, worktops, hob, extractor and appliance interiors as specified",
      "Bathrooms: descale, grout, shower screens and sanitary ware",
      "All rooms: floors, skirtings, sockets, doors and window sills",
      "Internal windows and traces of previous occupancy on paintwork",
      "Optional carpet shampoo and oven deep-clean add-ons",
    ],
    why: [
      { title: "Inventory-led", body: "We clean to the standard London letting inventories actually check, not a vague sparkle." },
      { title: "Same-week slots", body: "Move-out Fridays and Monday check-ins are our busiest — we hold capacity for them." },
      { title: "Re-clean path", body: "If an agent flags a fair fail on our scope, we return. See the refund policy for terms." },
    ],
    process: [
      { title: "Property brief", body: "Beds, baths, extras and key collection are confirmed in writing." },
      { title: "Checkout clean", body: "A dedicated end-of-tenancy crew works room by room to a checklist." },
      { title: "Photo log", body: "We can send a completion gallery so you have a record before the inventory clerk arrives." },
    ],
    faqs: [
      { q: "Will this guarantee my deposit?", a: "No cleaner can legally guarantee a deposit. We clean to inventory norms and document the finish. Wear, damage and unreported issues sit outside cleaning." },
      { q: "Should carpets be done?", a: "If the inventory notes them as stained or the tenancy requires professional carpet care, yes. We quote it as an add-on." },
      { q: "Can landlords book this between tenants?", a: "Yes. Many agents keep us on a preferred list for void periods." },
    ],
    related: ["residential-deep-cleaning", "after-builders-cleaning", "office-cleaning"],
  },
  {
    slug: "hotel-cleaning",
    name: "Hotel Cleaning",
    short: "Housekeeping support, public areas and back-of-house for hotels.",
    hero: "Guest-facing spaces that match your brand standard — even on sold-out weekends.",
    image: "/images/hotel-clean.jpg",
    filter: "Hotel",
    included: [
      "Public-area cleaning: lobby, corridors, lifts and guest toilets",
      "Housekeeping overflow for peak occupancy and events",
      "Breakfast-room and lounge reset between sittings",
      "Back-of-house corridors, staff areas and linen-room floors",
      "Periodic deep cleans of carpets, upholstery and bathrooms",
    ],
    why: [
      { title: "Brand standards", body: "Checklists can follow your existing SOP so guests never see a dip in finish." },
      { title: "Peak cover", body: "We add trained overflow when a concert, marathon or royal event fills the house." },
      { title: "Night managers supported", body: "Public-area teams can run to a night audit so the morning shift inherits a ready lobby." },
    ],
    process: [
      { title: "Standard mapping", body: "We sit with housekeeping and copy your room and public-area standards." },
      { title: "Roster", body: "Shifts are aligned to check-out waves and event calendars." },
      { title: "Quality walks", body: "A supervisor inspects a sample of rooms and public spaces each service." },
    ],
    faqs: [
      { q: "Do you replace in-house housekeeping?", a: "We can support, overflow, or take public areas while your team keeps rooms. Full outsourcing is scoped separately." },
      { q: "Are staff uniformed?", a: "Yes, in our kit or yours if the hotel prefers branded presence." },
      { q: "Can you work listed buildings?", a: "Yes. Methods change for historic finishes — we agree them before day one." },
    ],
    related: ["restaurant-cleaning", "event-cleaning-service", "facility-cleaning"],
  },
  {
    slug: "facility-cleaning",
    name: "Facility Cleaning",
    short: "Planned cleaning for mixed-use buildings, campuses and estates.",
    hero: "One specification for lobbies, washrooms, offices and common parts — with a single accountable supervisor.",
    image: "/images/facility-clean.jpg",
    filter: "Facility",
    included: [
      "Reception, lift lobby and common-part daily service",
      "Washroom hygiene programmes with consumable restocking",
      "Tenant-demise cleaning where the lease allows",
      "Periodic hard-floor, glass and high-level work",
      "Reporting into CAFM or a simple weekly email, as you prefer",
    ],
    why: [
      { title: "Landlord-grade reporting", body: "Managing agents get attendance logs, complaint close-outs and audit photos." },
      { title: "Multi-tenant diplomacy", body: "Crews know which floors are quiet, which are 24/7, and who holds the keys." },
      { title: "TUPE-aware", body: "We can discuss incoming staff where a contract already exists on site." },
    ],
    process: [
      { title: "Estate survey", body: "Floor plates, hours and current spec are reviewed with the FM." },
      { title: "Mobilisation", body: "Uniforms, chemicals, COSHH and site induction are completed before go-live." },
      { title: "Monthly review", body: "KPIs and any tenant comments are reviewed with the agent." },
    ],
    faqs: [
      { q: "Can you start within two weeks?", a: "Smaller sites yes. Large estates need a mobilisation plan — we will be honest about the date." },
      { q: "Do you provide materials?", a: "Yes, unless the building already has a preferred chemical range we must use." },
      { q: "Will you attend FM meetings?", a: "The account manager can join monthly ops meetings on request." },
    ],
    related: ["office-cleaning", "hospital-cleaning", "retail-cleaning"],
  },
  {
    slug: "restaurant-cleaning",
    name: "Restaurant Cleaning",
    short: "Front-of-house sparkle and kitchen hygiene support for London dining.",
    hero: "Closes that protect your food-hygiene rating and the room guests photograph.",
    image: "/images/restaurant-clean.jpg",
    filter: "Restaurant",
    included: [
      "Dining-room floors, chairs, glass and restroom service after close",
      "Bar front, pass and waiter-station wipe-down",
      "Kitchen floor, drains and stainless as scoped with the chef",
      "Scheduled extractor-safe degrease (not a full duct clean unless quoted)",
      "Bin store and back-alley hygiene where you control the space",
    ],
    why: [
      { title: "After last covers", body: "We start when the pass closes, not at a convenient office hour." },
      { title: "Hygiene-rating aware", body: "Checklists support the practices Environmental Health actually looks for." },
      { title: "Chef-respecting", body: "We do not rearrange mise en place. Kitchen scope is agreed with the head chef." },
    ],
    process: [
      { title: "Close-down map", body: "Front of house, bar and kitchen are split so nobody collides with remaining chefs." },
      { title: "Nightly routine", body: "A signed close-down sheet is left for the morning sous-chef." },
      { title: "Weekly deep", body: "Floors, skirting and hard-to-reach stainless rotate on a published night." },
    ],
    faqs: [
      { q: "Do you replace a kitchen porter?", a: "No. We clean after service. Wash-up and food prep stay with your brigade." },
      { q: "Can you help before an EHO visit?", a: "We can schedule an intensified week, but ratings reflect your whole operation, not one clean." },
      { q: "What about grease ducts?", a: "Specialist duct cleaning is quoted with a competent contractor. We keep the kitchen floor and surfaces in between." },
    ],
    related: ["hotel-cleaning", "retail-cleaning", "event-cleaning-service"],
  },
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getRelatedServices(slug: string) {
  const current = getService(slug);
  if (!current) return services.slice(0, 3);
  return current.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is Service => Boolean(item));
}
