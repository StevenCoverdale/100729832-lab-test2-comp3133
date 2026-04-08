export interface Rocket {
  rocket_id?: string;
  rocket_name?: string;
  rocket_type?: string;
  first_stage?: any;
  second_stage?: any;
  fairings?: any;
}

export interface Links {
  mission_patch?: string | null;
  mission_patch_small?: string | null;
  article_link?: string | null;
  wikipedia?: string | null;
  video_link?: string | null;
}

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details?: string | null;

  rocket?: Rocket;
  links?: Links;
}