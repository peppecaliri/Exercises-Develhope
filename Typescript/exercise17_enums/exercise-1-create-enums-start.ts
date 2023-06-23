/**
 * START: Follow the instructions below.
 */

// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.

enum Currency {
  France,
  UnitedStatesOfAmerica,
  Italy,
  NewZealand,
}

// Update the type for the `currency` property in this interface to use
// the `Currency` enum.

interface Country {
  name: Currency;
  currency: string;
}

// Replace the string values for the `currency` properties below with

const countries: Country[] = [
  {
    name: Currency.France,
    currency: "Euro",
  },
  {
    name: Currency.UnitedStatesOfAmerica,
    currency: "Dollar",
  },
  {
    name: Currency.Italy,
    currency: "Euro",
  },
  {
    name: Currency.NewZealand,
    currency: "Dollar",
  },
];

// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.

enum LanguageStatus {
  primary,
  secondary,
}

const countryLanguages = [
  { language: "Spanish", status: LanguageStatus.primary },
  { language: "English", status: LanguageStatus.secondary },
];

// ----

export {};
