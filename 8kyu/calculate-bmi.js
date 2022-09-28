// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


/*** My Solution ***/
function bmi(weight, height) {
    let calc = weight/(Math.pow(height, 2));
    if (calc <= 18.5) return "Underweight"
    else if (calc > 18.5 && calc <= 25.0) return "Normal"
    else if (calc > 25.0 && calc <= 30.0) return "Overweight"
    else return "Obese";
  };
