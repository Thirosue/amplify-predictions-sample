import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Picture {
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly Star?: number | null;
  readonly Price?: number | null;
  readonly ImageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Picture, PictureMetaData>);
  static copyOf(source: Picture, mutator: (draft: MutableModel<Picture, PictureMetaData>) => MutableModel<Picture, PictureMetaData> | void): Picture;
}