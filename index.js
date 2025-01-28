const length_value = document.getElementById("length-value");
const weight_value = document.getElementById("weight-value");
const temperature_value = document.getElementById("temperature-value");
const btn = document.querySelector(".btn");
const length_to_convert_from = document.querySelector(
  'select[name="length-unit-to-convert-from"]'
);
const length_to_convert_to = document.querySelector(
  'select[name="length-unit-to-convert-to"]'
);
const weight_to_convert_from = document.querySelector(
  'select[name="weight-unit-to-convert-from"]'
);
const weight_to_convert_to = document.querySelector(
  'select[name="weight-unit-to-convert-to"]'
);
const temperature_to_convert_from = document.querySelector(
  'select[name="temperature-unit-to-convert-from"]'
);
const temperature_to_convert_to = document.querySelector(
  'select[name="temperature-unit-to-convert-to"]'
);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const units = btn.parentElement.classList[0];
  switch (units) {
    case "length":
      const length_content = document.querySelector(".length");
      length_content.innerHTML = "";
      const converted_value = convert(
        length_value.value,
        length_to_convert_from.value,
        length_to_convert_to.value
      );
      length_content.innerHTML = `<h1>${length_value.value} ${length_to_convert_from.value} = ${converted_value} ${length_to_convert_to.value}</h1>`;
      break;

    case "weight":
      const weight_content = document.querySelector(".weight");
      weight_content.innerHTML = "";
      const converted_value1 = convert(
        weight_value.value,
        weight_to_convert_from.value,
        weight_to_convert_to.value
      );
      weight_content.innerHTML = `<h1>${weight_value.value} ${weight_to_convert_from.value} = ${converted_value1} ${weight_to_convert_to.value}</h1>`;
      break;

    case "temperature":
      const temperature_content = document.querySelector(".temperature");
      temperature_content.innerHTML = "";
      const converted_value2 = convert(
        temperature_value.value,
        temperature_to_convert_from.value,
        temperature_to_convert_to.value
      );
      temperature_content.innerHTML = `<h1>${temperature_value.value} ${temperature_to_convert_from.value} = ${converted_value2} ${temperature_to_convert_to.value}</h1>`;
      break;

    default:
      console.log("enter valid data");
      break;
  }
});

function convert(value, source, destination) {
  switch (source) {
    case "millimeter":
      switch (destination) {
        case "centimeter":
          return value * 0.1;
        case "meter":
          return value * 0.001;
        case "kilometer":
          return value * 0.000001;
        case "inch":
          return value * 0.03937;
        case "foot":
          return value * 0.003281;
        case "yard":
          return value * 0.001094;
        case "mile":
          return value * 6.21371e-7;
        default:
          break;
      }
      break;

    case "centimeter":
      switch (destination) {
        case "millimeter":
          return value * 10;
        case "meter":
          return value * 0.01;
        case "kilometer":
          return value * 0.00001;
        case "inch":
          return value * 0.393701;
        case "foot":
          return value * 0.0328084;
        case "yard":
          return value * 0.0109361;
        case "mile":
          return value * 6.21371e-6;
        default:
          break;
      }
      break;

    case "meter":
      switch (destination) {
        case "millimeter":
          return value * 1000;
        case "centimeter":
          return value * 100;
        case "kilometer":
          return value * 0.001;
        case "inch":
          return value * 39.3701;
        case "foot":
          return value * 3.28084;
        case "yard":
          return value * 1.09361;
        case "mile":
          return value * 0.000621371;
        default:
          break;
      }
      break;

    case "kilometer":
      switch (destination) {
        case "millimeter":
          return value * 1000000;
        case "centimeter":
          return value * 100000;
        case "meter":
          return value * 1000;
        case "inch":
          return value * 39370.1;
        case "foot":
          return value * 3280.84;
        case "yard":
          return value * 1093.61;
        case "mile":
          return value * 0.621371;
        default:
          break;
      }
      break;

    case "inch":
      switch (destination) {
        case "millimeter":
          return value * 25.4;
        case "centimeter":
          return value * 2.54;
        case "meter":
          return value * 0.0254;
        case "kilometer":
          return value * 2.54e-5;
        case "foot":
          return value * 0.0833333;
        case "yard":
          return value * 0.0277778;
        case "mile":
          return value * 1.5783e-5;
        default:
          break;
      }
      break;

    case "foot":
      switch (destination) {
        case "millimeter":
          return value * 304.8;
        case "centimeter":
          return value * 30.48;
        case "meter":
          return value * 0.3048;
        case "kilometer":
          return value * 0.0003048;
        case "inch":
          return value * 12;
        case "yard":
          return value * 0.333333;
        case "mile":
          return value * 0.000189394;
        default:
          break;
      }
      break;

    case "yard":
      switch (destination) {
        case "millimeter":
          return value * 914.4;
        case "centimeter":
          return value * 91.44;
        case "meter":
          return value * 0.9144;
        case "kilometer":
          return value * 0.0009144;
        case "inch":
          return value * 36;
        case "foot":
          return value * 3;
        case "mile":
          return value * 0.000568182;
        default:
          break;
      }
      break;

    case "mile":
      switch (destination) {
        case "millimeter":
          return value * 1609344;
        case "centimeter":
          return value * 160934;
        case "meter":
          return value * 1609.34;
        case "kilometer":
          return value * 1.60934;
        case "inch":
          return value * 63360;
        case "foot":
          return value * 5280;
        case "yard":
          return value * 1760;
        default:
          break;
      }
      break;

    case "milligram":
      switch (destination) {
        case "gram":
          return value * 0.001;
          break;
        case "kilogram":
          return value * 1e-6;
          break;
        case "ounce":
          return value * 3.5274e-5;
          break;
        case "pound":
          return value * 2.20462e-6;
        default:
          break;
      }
      break;

    case "gram":
      switch (destination) {
        case "milligram":
          return value * 1000;
          break;
        case "kilogram":
          return value * 0.001;
          break;
        case "ounce":
          return value * 0.035274;
          break;
        case "pound":
          return value * 0.00220462;
        default:
          break;
      }
      break;

    case "kilogram":
      switch (destination) {
        case "milligram":
          return value * 1e6;
          break;
        case "gram":
          return value * 1000;
          break;
        case "ounce":
          return value * 35.274;
          break;
        case "pound":
          return value * 2.20462;
        default:
          break;
      }
      break;

    case "ounce":
      switch (destination) {
        case "milligram":
          return value * 28349.5;
          break;
        case "gram":
          return value * 28.3495;
          break;
        case "kilogram":
          return value * 0.0283495;
          break;
        case "pound":
          return value * 0.0625;
        default:
          break;
      }
      break;

    case "pound":
      switch (destination) {
        case "milligram":
          return value * 453592;
          break;
        case "gram":
          return value * 453.592;
          break;
        case "kilogram":
          return value * 0.453592;
          break;
        case "ounce":
          return value * 16;
        default:
          break;
      }
      break;

    case "celsius":
      switch (destination) {
        case "fahrenheit":
          return value * 1.8 + 32;
          break;
        case "kelvin":
          return value + 273.15;
          break;
        default:
          break;
      }
      break;

    case "fahrenheit":
      switch (destination) {
        case "celsius":
          return (value - 32) / 1.8;
          break;
        case "kelvin":
          return (value - 32) / 1.8 + 273.15;
          break;
        default:
          break;
      }
      break;

    case "kelvin":
      switch (destination) {
        case "celsius":
          return value - 273.15;
        case "fahrenheit":
          return (value - 273.15) * 1.8 + 32;
        default:
          return value;
      }
    default:
      return value;
  }
}
