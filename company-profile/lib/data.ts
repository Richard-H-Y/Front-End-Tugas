// Data statis studio (dipakai oleh halaman Games & Team + dynamic route)

export interface Game {
  slug: string;
  title: string;
  genre: string;
  platform: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const games: Game[] = [
  {
    slug: "dungeon-quest",
    title: "Dungeon Quest",
    genre: "Dungeon Crawler",
    platform: "Roblox",
    tagline: "Run classic dungeons, beat bosses, chase gear.",
    description:
      "Run the classic dungeons solo or with friends, take down bosses, and collect weapons, armor, and abilities as you work your way up.",
    features: [
      "Play solo or with friends",
      "Take down powerful bosses",
      "Collect weapons, armor, and abilities",
    ],
    image: "/images/games/dungeon-quest.webp",
  },
  {
    slug: "brm5",
    title: "Blackhawk Rescue Mission 5",
    genre: "Tactical Open-World Shooter",
    platform: "Roblox",
    tagline: "Team-based combat across vast open-world maps.",
    description:
      "A tactical open-world shooter with vast maps and team-based combat, including PvP and the new Kingdom of Sawang map. Build your own Headquarters to earn offline income and research powerful weapons. Supports PC, Console, and Mobile.",
    features: [
      "1000+ outfit combinations",
      "70+ guns and 100+ attachments",
      "20+ vehicles, boats, and helicopters",
      "Sandbox Mode with a real-time game editor",
    ],
    image: "/images/games/brm5.webp",
  },
  {
    slug: "aeronautica",
    title: "Aeronautica",
    genre: "Flight Simulator",
    platform: "Roblox",
    tagline: "Train, Buy, Fly.",
    description:
      "An open-world flight simulator with economy elements. Earn money from jobs and flights between distant islands, unlock new vehicles with licenses, and even create an airline with your friends.",
    features: [
      "800+ vehicles in 10 classes",
      "210+ airports and heliports",
      "Player-run airlines and markets",
      "Custom liveries and dynamic weather",
    ],
    image: "/images/games/aeronautica.webp",
  },
  {
    slug: "bloxburg",
    title: "Bloxburg",
    genre: "Life Simulation",
    platform: "Roblox",
    tagline: "Welcome to Bloxburg, be anything you want to be!",
    description:
      "Build and decorate the house of your dreams, pick a job, drive around town, and roleplay with friends.",
    features: [
      "Build and decorate your own house",
      "Choose a job and earn rewards",
      "Drive vehicles around town",
      "Level up skills like cooking",
    ],
    image: "/images/games/bloxburg.webp",
  },
];

export const team: TeamMember[] = [
  {
    slug: "richard-harrisy",
    name: "Richard Harris Y",
    role: "Founder",
    bio: "Richard founded Harris Studios and leads its overall vision. He sets the direction for every game and makes sure the whole team moves toward the same goal, from the first idea to the final release.",
    image: "/images/team/smile-up.png",
  },
  {
    slug: "john-doe",
    name: "John Doe",
    role: "Lead Scripter",
    bio: "John writes the code behind our gameplay, from combat and quests to inventory and saving data. He keeps our games running smoothly and free of bugs.",
    image: "/images/team/smile-D.jpg",
  },
  {
    slug: "builderman",
    name: "Builderman",
    role: "Lead Builder",
    bio: "Builderman builds the worlds our players explore, including maps, dungeons, and towns. He focuses on detailed environments that are fun to walk through and easy to remember.",
    image: "/images/team/smile-star.jpg",
  },
  {
    slug: "cruz",
    name: "Cruz",
    role: "3D Modeler",
    bio: "Cruz creates the 3D models used in our games, such as weapons, vehicles, and props. He makes sure every model looks good while still running well on all devices.",
    image: "/images/team/smile.png",
  },
  {
    slug: "jane-doe",
    name: "Jane Doe",
    role: "Community Manager",
    bio: "Jane is the voice between Harris Studios and our players. She shares game updates, listens to feedback, and helps keep our community friendly and active.",
    image: "/images/team/smile-wink.png",
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
export const getMember = (slug: string) => team.find((m) => m.slug === slug);

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/games", label: "Games" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];
