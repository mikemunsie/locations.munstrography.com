export type SharedLocation = {
  accessFee?: number;
  longitude: number;
  latitude: number;
  name: string;
  city: string;
  instagram_username: string;
  security: string;
  tags: string[];
};

export type SharedLocationWithDistance = SharedLocation & {
  distance: number;
};

export type LocationCoords = {
  longitude: number;
  latitude: number;
};

export class LocationModel {
  id = -1;
  name = "";
  city = "";
  security = "";
  access_fee_cents = 0;
  image_url = "";
  tags: string[] = [];
  extra = "";
  location_revision_id = -1;
  user_id = -1;
  instagram_username = "";

  constructor(params: Partial<LocationModel> = {}) {
    Object.assign(this, params);
  }
}

export class LocationRevisionModel extends LocationModel {
  reviewed_status = "";
  reviewed_by = -1;

  constructor(params: Partial<LocationRevisionModel> = {}) {
    super(params);
    Object.assign(this, params);
  }
}
