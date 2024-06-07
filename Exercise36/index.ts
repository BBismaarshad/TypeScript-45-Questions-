function describe_city(city: string, country: string = "Pakistan"): void {
  // print a simple sentence describing the city and its country
  console.log(`${city} is in ${country}.`);
}

// call the function for three different cities
describe_city("Karachi"); // output: Karachi is in Pakistan.
describe_city("Lahore"); // output: Lahore is in Pakistan.
describe_city("New York", "USA"); // output: New York is in USA.
