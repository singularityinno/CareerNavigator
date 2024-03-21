export enum BaseRoute {
  CAREER_NAVIGATOR = "/career-navigator",
}

export enum CareerNavigatorRoute {
  SURVEY = "/survey",
}

export const Route = {
  CAREER_NAVIGATOR: BaseRoute.CAREER_NAVIGATOR as const,
  SURVEY:
    `${BaseRoute.CAREER_NAVIGATOR}${CareerNavigatorRoute.SURVEY}` as const,
};
