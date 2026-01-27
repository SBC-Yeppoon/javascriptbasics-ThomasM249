/**
 * LESSON 4: CONDITIONAL STATEMENTS (SELECTION STRUCTURES)
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Understand and use if statements
 * - Use else and else if for multiple branches
 * - Create nested conditional logic
 * - Use switch statements for multi-branch selection
 * - Output results based on conditions
 */

console.log("=== CONDITIONAL STATEMENTS ===\n");

// ============================================
// SINGLE CONDITIONAL (IF)
// ============================================

console.log("1. SINGLE CONDITIONAL (IF)\n");

// If statement: runs code only if condition is true
let age = 16;
if (age >= 18) {
  console.log("You are an adult");
}
console.log(""); // This line runs regardless

// If with curly braces is best practice
let score = 85;
if (score >= 80) {
  console.log(`Score ${score} is a good grade!`);
}
console.log("");

// Real example: Check if someone can drive
let personAge = 16;
let hasLicense = true;
if (personAge >= 16 && hasLicense) {
  console.log(`Age ${personAge}: Can legally drive with license`);
}
console.log("");

// ============================================
// IF-ELSE STATEMENTS
// ============================================

console.log("2. IF-ELSE (TWO BRANCHES)\n");

// If the condition is true, run the first block
// Otherwise, run the else block
let grade = 72;
if (grade >= 70) {
  console.log(`Grade ${grade}: PASS`);
} else {
  console.log(`Grade ${grade}: FAIL`);
}
console.log("");

// Real example: Voting eligibility
let voterAge = 16;
if (voterAge >= 18) {
  console.log(`Age ${voterAge}: Eligible to vote`);
} else {
  console.log(`Age ${voterAge}: Not yet eligible to vote`);
}
console.log("");

// Check if number is even or odd
let num = 15;
if (num % 2 === 0) {
  console.log(`${num} is EVEN`);
} else {
  console.log(`${num} is ODD`);
}
console.log("");

// ============================================
// IF-ELSE IF-ELSE (MULTIPLE BRANCHES)
// ============================================

console.log("3. IF-ELSE IF-ELSE (MULTIPLE BRANCHES)\n");

// Check multiple conditions in order
// Stops at the first true condition
let score2 = 88;
if (score2 >= 90) {
  console.log(`Score ${score2}: A (Excellent)`);
} else if (score2 >= 80) {
  console.log(`Score ${score2}: B (Good)`);
} else if (score2 >= 70) {
  console.log(`Score ${score2}: C (Satisfactory)`);
} else if (score2 >= 60) {
  console.log(`Score ${score2}: D (Passing)`);
} else {
  console.log(`Score ${score2}: F (Fail)`);
}
console.log("");

// Real example: Water temperature
let waterTemp = 22;
if (waterTemp < 0) {
  console.log(`${waterTemp}°C: Water is FROZEN (Solid)`);
} else if (waterTemp >= 0 && waterTemp < 100) {
  console.log(`${waterTemp}°C: Water is LIQUID`);
} else if (waterTemp >= 100) {
  console.log(`${waterTemp}°C: Water is STEAM (Gas)`);
}
console.log("");

// Real example: Speed enforcement
let speed = 55;
let speedLimit = 50;
if (speed <= speedLimit) {
  console.log(`Speed ${speed} km/h: Legal`);
} else if (speed <= speedLimit + 10) {
  console.log(`Speed ${speed} km/h: Minor speeding (small fine)`);
} else if (speed <= speedLimit + 20) {
  console.log(`Speed ${speed} km/h: Moderate speeding (larger fine)`);
} else {
  console.log(`Speed ${speed} km/h: Dangerous speeding (severe penalty)`);
}
console.log("");

// ============================================
// NESTED CONDITIONAL STATEMENTS
// ============================================

console.log("4. NESTED CONDITIONALS (CONDITIONALS INSIDE CONDITIONALS)\n");

// An if statement inside another if statement
let hasDrivingLicense = true;
let isAdult = true;

if (isAdult) {
  console.log("Person is an adult");
  
  if (hasDrivingLicense) {
    console.log("  - Has a driving license");
    console.log("  - Can operate a vehicle");
  } else {
    console.log("  - Does not have a driving license");
    console.log("  - Cannot legally operate a vehicle");
  }
}
console.log("");

// Real example: Online shopping eligibility
let isLoggedIn = true;
let hasPaymentMethod = true;
let itemInStock = true;

if (isLoggedIn) {
  console.log("✓ User is logged in");
  
  if (hasPaymentMethod) {
    console.log("  ✓ Payment method available");
    
    if (itemInStock) {
      console.log("    ✓ Item is in stock");
      console.log("    → Can proceed with purchase");
    } else {
      console.log("    ✗ Item is out of stock");
      console.log("    → Cannot purchase");
    }
  } else {
    console.log("  ✗ No payment method");
    console.log("  → Add a payment method first");
  }
} else {
  console.log("✗ User not logged in");
  console.log("→ Log in to continue");
}
console.log("");

// Real example: Game level requirements
let playerLevel = 25;
let hasKey = true;

if (playerLevel >= 20) {
  console.log(`Player level ${playerLevel}: Meets minimum level`);
  
  if (hasKey) {
    console.log("  ✓ Has the required key");
    console.log("  → Can enter the next level");
  } else {
    console.log("  ✗ Missing the required key");
    console.log("  → Find the key first");
  }
} else {
  console.log(`Player level ${playerLevel}: Too low for this level`);
  console.log("→ Level up more before attempting this area");
}
console.log("");

// ============================================
// SWITCH STATEMENTS (ALTERNATIVE TO MULTIPLE IF-ELSE)
// ============================================

console.log("5. SWITCH STATEMENTS\n");

// Switch is useful when checking one value against many options
let day = 3; // 1=Monday, 2=Tuesday, etc.

switch (day) {
  case 1:
    console.log("Monday - Start of work week");
    break;
  case 2:
    console.log("Tuesday - Mid-week");
    break;
  case 3:
    console.log("Wednesday - Hump day");
    break;
  case 4:
    console.log("Thursday - Almost weekend");
    break;
  case 5:
    console.log("Friday - TGIF!");
    break;
  case 6:
  case 7:
    console.log("Weekend - Time to relax");
    break;
  default:
    console.log("Invalid day number");
}
console.log("");

// Real example: Letter grade to GPA
let letterGrade = "B";
let gpaValue;

switch (letterGrade) {
  case "A":
    gpaValue = 4.0;
    break;
  case "B":
    gpaValue = 3.0;
    break;
  case "C":
    gpaValue = 2.0;
    break;
  case "D":
    gpaValue = 1.0;
    break;
  case "F":
    gpaValue = 0.0;
    break;
  default:
    gpaValue = null;
}

console.log(`Letter grade: ${letterGrade}, GPA: ${gpaValue}`);
console.log("");

// Real example: Menu selection
let userChoice = 2;

switch (userChoice) {
  case 1:
    console.log("You selected: View Profile");
    break;
  case 2:
    console.log("You selected: Edit Settings");
    break;
  case 3:
    console.log("You selected: Logout");
    break;
  default:
    console.log("Invalid selection. Please try again.");
}
console.log("");

// ============================================
// COMBINING CONDITIONS AND OPERATIONS
// ============================================

console.log("6. COMPLEX CONDITIONAL LOGIC\n");

// Multiple conditions with logical operators
let studentAge = 17;
let studentGPA = 3.7;
let communityHours = 25;

if (studentAge >= 16 && studentGPA >= 3.5 && communityHours >= 20) {
  console.log("Student meets ALL requirements for scholarship");
  console.log("  ✓ Age requirement met");
  console.log("  ✓ GPA requirement met");
  console.log("  ✓ Community service requirement met");
  console.log("→ ELIGIBLE FOR SCHOLARSHIP");
} else {
  console.log("Student does NOT meet all requirements");
  if (studentAge < 16) console.log("  ✗ Age requirement not met");
  if (studentGPA < 3.5) console.log("  ✗ GPA requirement not met");
  if (communityHours < 20) console.log("  ✗ Community service requirement not met");
}
console.log("");

// ============================================
// TERNARY OPERATOR (SHORTHAND IF-ELSE)
// ============================================

console.log("7. TERNARY OPERATOR (? :)\n");

// Shorthand: condition ? valueIfTrue : valueIfFalse
let temperature = 25;
let weather = temperature > 20 ? "warm" : "cold";
console.log(`Temperature: ${temperature}°C, Weather: ${weather}`);
console.log("");

// More examples
let number = 15;
let category = number % 2 === 0 ? "even" : "odd";
console.log(`${number} is ${category}`);
console.log("");

let score3 = 75;
let result = score3 >= 70 ? "PASS" : "FAIL";
console.log(`Score: ${score3}, Result: ${result}`);
console.log("");

// ============================================
// EXAMPLE PROBLEMS
// ============================================

console.log("=== EXAMPLE PROBLEMS ===\n");

// Problem 1: Movie Ticket Pricing
console.log("Problem 1: Movie Ticket Pricing");
let personAge2 = 12;
let ticketPrice;

if (personAge2 < 5) {
  ticketPrice = 0; // Free for very young children
} else if (personAge2 < 12) {
  ticketPrice = 8.50; // Child price
} else if (personAge2 < 65) {
  ticketPrice = 12.00; // Adult price
} else {
  ticketPrice = 9.00; // Senior price
}

console.log(`Age: ${personAge2}`);
console.log(`Ticket price: $${ticketPrice.toFixed(2)}\n`);

// Problem 2: Fitness Level Assessment
console.log("Problem 2: Fitness Level Assessment");
let pushups = 35;
let fitnessLevel;

if (pushups >= 50) {
  fitnessLevel = "Excellent";
} else if (pushups >= 35) {
  fitnessLevel = "Good";
} else if (pushups >= 20) {
  fitnessLevel = "Average";
} else if (pushups >= 10) {
  fitnessLevel = "Below Average";
} else {
  fitnessLevel = "Poor";
}

console.log(`Pushups completed: ${pushups}`);
console.log(`Fitness level: ${fitnessLevel}\n`);

// Problem 3: Bank Account Overdraft Check
console.log("Problem 3: Bank Account Status");
let accountBalance = -50;
let accountStatus;

if (accountBalance > 0) {
  accountStatus = "Positive balance";
} else if (accountBalance === 0) {
  accountStatus = "Zero balance";
} else {
  accountStatus = "Overdraft - negative balance";
}

console.log(`Balance: $${accountBalance}`);
console.log(`Status: ${accountStatus}\n`);

// Problem 4: Nested Logic - Login System
console.log("Problem 4: Login System");
let username = "alice";
let password = "correct123";
let isAdmin = false;

if (username === "alice") {
  console.log("✓ Username found");
  
  if (password === "correct123") {
    console.log("  ✓ Password correct");
    
    if (isAdmin) {
      console.log("    ✓ Admin privileges granted");
      console.log("    → ADMIN ACCESS GRANTED");
    } else {
      console.log("    → USER ACCESS GRANTED");
    }
  } else {
    console.log("  ✗ Password incorrect");
    console.log("  → ACCESS DENIED");
  }
} else {
  console.log("✗ Username not found");
  console.log("→ ACCESS DENIED");
}
console.log("");
