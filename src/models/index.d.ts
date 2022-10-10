import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Picture {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Picture, PictureMetaData>);
  static copyOf(source: Picture, mutator: (draft: MutableModel<Picture, PictureMetaData>) => MutableModel<Picture, PictureMetaData> | void): Picture;
}