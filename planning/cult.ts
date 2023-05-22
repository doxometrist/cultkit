
// user stuff
export type Cultist = {
  name: string;
  ranks: Rank[]; // could be many, infinite own profiles. no identity confirmation
  description: string;
  savedResources: Resource[];
}

export type User = {
  identities: Cultist[];
  joinDate: Date
  // login logout
  // more after paying me $
}

export type Rank = {
  order: number;
  name: string;
  visibility: boolean;
  permissions: Permission;
  pledgeContents: string;
}

// around the cult object
export type Cult = {
  name: string;
  cultists: Cultist[];
  possibleRanks: Rank[]
  setup: Setup;
  chronicle: Chronicle;
}

export type Resource = {
  name: string;
  contents: any;
  type: 'pdf' | 'recording' | 'image';
}

type Meeting = {
  minimalOrder: number;
  maximalOrder: number;
  invitees: Cultist[];
  // todo add audio channels
}

// PERMISSIONS, the most dense bit
const leader: Rank = {
  name: "",
  visibility: false,
  permissions: {
    resourcesRead: [],
    resourcesWrite: [],
    resourcesDelete: [],
    actions: [],
    expiry: new Date(),
  },
  pledgeContents: "",
  order: 0
}

export type Announcement = {
  contents: string;
  title: string;
  visibilityMinOrder: number;
}

export type Permission = {
  resourcesRead: Resource[];
  resourcesWrite: Resource[];
  resourcesDelete: Resource[];
  actions: Action[];
  expiry: Date;
}

export type Action = {
  name: string;
  id: number;
}

const founderActions = ['add-new-member']
const actions = ['addproduct']
const buyProduct = ['something']

// READONLY
type Chronicle = {
  timeline: DayState;
  foundingDate: Date;
}

type DayState = {
  cultists: number;
  posts: Announcement[];
}

// admin changeable stuff
type InnerDescription = {
  externalUrl: string;
  goal: string;
  logo: ImageBitmap;
  internalDescription: string;
}

type OuterDescription = {
  tags: string[]
  externalDescription: string;
}

type Setup = {
  publiclyListed: boolean;
  showCultistNumber: boolean;
  showChronicle: boolean;
  visuals: VibeVisuals;
  outerDescription: OuterDescription
  innerDescription: InnerDescription;
}

type VibeVisuals = {
  font: string;
  backgroundImage: ImageBitmap
}
