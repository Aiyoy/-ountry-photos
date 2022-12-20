type AsideState = {
  data: ContinentType[],
  options: {
    children: string,
    label: string,
  },
  searchValue: React.SyntheticEvent<HTMLInputElement, Event> | undefined,
  countryName: string[];
}
type ContinentType = {
  code: string;
  name: string;
  countries: CountryType[];
  __typename?: string;
}
type CountryType = {
  code: string;
  name: string;
  __typename?: string;
};
