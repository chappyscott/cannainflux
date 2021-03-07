/* Defines the dispensarys catalog */
export interface Dispensary {
  id: number;  // unique id for each pool not editable by user

  // for Dispensary Details
  dispensaryName: string;
  dispensaryType: string;
  dispensaryNotes: string;
  dispensaryPrice: number;
}
