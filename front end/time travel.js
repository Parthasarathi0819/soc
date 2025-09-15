

// Step 1: Set the distance you travelled
let distance = 19.5;

// Step 2: Start with fare = 0
let fare = 0;

// Step 3: Calculate fare based on distance slabs

// If distance is 4 km or less, charge ₹30 flat
if (distance <= 4) {
    fare = 30;
}

// If distance is more than 4 but less than or equal to 9
else if (distance <= 9) {
    // First 4 km = ₹30
    // Next (distance - 4) km = ₹10 per km
    fare = 30 + (distance - 4) * 10;
}

// If distance is more than 9 but less than or equal to 19
else if (distance <= 19) {
    // First 4 km = ₹30
    // Next 5 km (4-9) = ₹10 per km
    // Next (distance - 9) km = ₹15 per km
    fare = 30 + (5 * 10) + (distance - 9) * 15;
}

// If distance is more than 19 km
else {
     // First 4 km = ₹30
    // Next 5 km = ₹10/km
    // Next 10 km = ₹15/km
    // Remaining (distance - 19) km = ₹20/km
    fare = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20;
}

// Step 4: Show the result
console.log("You travelled " + distance + " km");
console.log("Your total fare is ₹" + fare);
