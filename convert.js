function convert(value, source, destination){
    
    switch (source) {
        case "millimeter":
            switch(destination){
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
            switch(destination){
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
            switch(destination){
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
            switch(destination){
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
            switch(destination){
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
            switch(destination){
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
            switch(destination){
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
            switch(destination){
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
        default:
            break;
    }
}

export default convert;