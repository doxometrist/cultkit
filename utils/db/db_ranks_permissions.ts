
export interface Rank {
  order: number;
  name: string;
  visibility: boolean;
  permissions: Permission[];
  pledgeContents: string;
}

export interface Permission {
  expiry: Date;
  name: string;
  uses: number;
  infinite: boolean;
}

export const permission0: Permission = {
  expiry: new Date(),
  name: "null permission",
  uses: 0,
  infinite: true,
};

export const rank0: Rank = {
  order: 0,
  name: "member",
  visibility: false,
  permissions: [permission0],
  pledgeContents: ""
}
