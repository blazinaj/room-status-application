import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum RoomStatus {
  OPEN = "OPEN",
  CHECKED_IN = "CHECKED_IN",
  TECH_IN = "TECH_IN",
  DOC_IN = "DOC_IN"
}



export declare class Room {
  readonly id: string;
  readonly name?: string;
  readonly status?: RoomStatus | keyof typeof RoomStatus;
  readonly officeID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Room>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room>) => MutableModel<Room> | void): Room;
}

export declare class Office {
  readonly id: string;
  readonly code?: number;
  readonly Rooms?: (Room | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Office>);
  static copyOf(source: Office, mutator: (draft: MutableModel<Office>) => MutableModel<Office> | void): Office;
}