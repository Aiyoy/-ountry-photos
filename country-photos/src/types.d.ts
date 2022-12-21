type AsideState = {
  data: ContinentType[],
  options: {
    children: string,
    label: string,
  },
  searchValue: React.SyntheticEvent<HTMLInputElement, Event> | undefined,
  countryName: string[],
}
type ContinentType = {
  code: string,
  name: string,
  countries: CountryType[],
  __typename?: string,
}
type CountryType = {
  code: string,
  name: string,
  __typename?: string,
};
type PhotoAPIAnswerType = {
  total_results: number,
  page: never,
  per_page: number,
  photos: PhotoInfType[],
  next_page: string
}
type PhotoInfType = {
  id: number,
  width: number,
  height: number,
  url: string,
  photographer: string,
  photographer_url: string,
  photographer_id: number,
  avg_color: string,
  src: {
    original: string,
    large2x: string,
    large: string,
    medium: string,
    small: string,
    portrait: string,
    landscape: string,
    tiny: string,
  },
  liked: boolean,
  alt: string,
}
type CountryObserver = (country: string) => void;
