class CountrySubject {
  private observers: CountryObserver[] = [];
  private country: string = '';

  public attach(observer: CountryObserver) {
    this.observers.push(observer);
  }

  public detach(observerToRemove: CountryObserver) {
    this.observers = this.observers.filter(observer => observerToRemove !== observer);
  }

  public updateCountry(country: string) {
    if (country && country !== this.country) {
      this.country = country;
      this.notify(country);
      console.log('addCountry', country);
    }
  }

  private notify(country: string) {
    this.observers.forEach(observer => observer(country));
    console.log('notify', country);
  }
}

const countrySubject = new CountrySubject();

export default countrySubject;
