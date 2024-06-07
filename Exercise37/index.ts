function city_country(city: string, country: string): string {
  // return a string formatted like "Lahore, Pakistan"
  return `${city}, ${country}`;
}

// call the function with three city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan")); // output: Lahore, Pakistan
console.log(city_country("New York", "USA")); // output: New York, USA
console.log(city_country("Tokyo", "Japan")); // output: Tokyo, Japan
