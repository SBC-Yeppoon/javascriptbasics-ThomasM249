/**
 * LESSON 2: COMPARISON & LOGICAL OPERATORS
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Understand and use comparison operators
 * - Understand and use logical operators
 * - Combine operators to create complex conditions
 * - Output boolean results and make decisions
 */

console.log("=== COMPARISON OPERATORS ===\n");

// ============================================
// COMPARISON OPERATORS
// ============================================

// These operators compare two values and return true or false (boolean)

// 1. EQUAL TO (==)
console.log("1. EQUAL TO (==)");
let x = 5;
let y = 5;
console.log(`${x} == ${y} = ${x == y}`);
console.log(`${x} == 10 = ${x == 10}`);
console.log("");

// 2. NOT EQUAL TO (!=)
console.log("2. NOT EQUAL TO (!=)");
console.log(`${x} != ${y} = ${x != y}`);
console.log(`${x} != 10 = ${x != 10}`);
console.log("");

// 3. STRICTLY EQUAL (===)
console.log("3. STRICTLY EQUAL (===)");
console.log(`5 === 5 = ${5 === 5}`);
console.log(`"5" === 5 = ${"5" === 5}  (different types)`);
console.log(`5 == "5" = ${5 == "5"}  (loose equality)`);
console.log("");

// 4. STRICTLY NOT EQUAL (!==)
console.log("4. STRICTLY NOT EQUAL (!==)");
console.log(`"5" !== 5 = ${"5" !== 5}`);
console.log(`5 !== 5 = ${5 !== 5}`);
console.log("");

// 5. LESS THAN (<)
console.log("5. LESS THAN (<)");
let age = 16;
console.log(`${age} < 18 = ${age < 18}`);
console.log(`${age} < 16 = ${age < 16}`);
console.log("");

// 6. GREATER THAN (>)
console.log("6. GREATER THAN (>)");
let score = 85;
console.log(`${score} > 80 = ${score > 80}`);
console.log(`${score} > 90 = ${score > 90}`);
console.log("");

// 7. LESS THAN OR EQUAL TO (<=)
console.log("7. LESS THAN OR EQUAL TO (<=)");
console.log(`${age} <= 18 = ${age <= 18}`);
console.log(`${age} <= 16 = ${age <= 16}`);
console.log("");

// 8. GREATER THAN OR EQUAL TO (>=)
console.log("8. GREATER THAN OR EQUAL TO (>=)");
console.log(`${score} >= 80 = ${score >= 80}`);
console.log(`${score} >= 85 = ${score >= 85}`);
console.log("");

// ============================================
// LOGICAL OPERATORS
// ============================================

console.log("=== LOGICAL OPERATORS ===\n");

// Logical operators combine multiple conditions
// They also return true or false

// 1. AND (&&) - Both conditions must be true
console.log("1. AND (&&) - Both must be TRUE");
let isStudent = true;
let hasPermission = true;
console.log(`isStudent: ${isStudent}`);
console.log(`hasPermission: ${hasPermission}`);
console.log(`isStudent && hasPermission = ${isStudent && hasPermission}\n`);

// Example: Check if someone can vote
let personAge = 18;
let isCitizen = true;
let canVote = personAge >= 18 && isCitizen;
console.log(`Age: ${personAge}, Citizen: ${isCitizen}`);
console.log(`Can vote (age >= 18 AND citizen): ${canVote}`);
console.log("");

// 2. OR (||) - At least one condition must be true
console.log("2. OR (||) - At least ONE must be TRUE");
let hasDrivingLicense = false;
let hasPassport = true;
console.log(`hasDrivingLicense: ${hasDrivingLicense}`);
console.log(`hasPassport: ${hasPassport}`);
console.log(`hasDrivingLicense || hasPassport = ${hasDrivingLicense || hasPassport}\n`);

// Example: Can travel by plane
let isDomestic = true;
let isInternational = false;
let canTravelByPlane = isDomestic || isInternational;
console.log(`Domestic flight: ${isDomestic}, International flight: ${isInternational}`);
console.log(`Can travel by plane: ${canTravelByPlane}`);
console.log("");

// 3. NOT (!) - Inverts the boolean value
console.log("3. NOT (!) - Reverses TRUE/FALSE");
let isRaining = true;
let isSunny = false;
console.log(`isRaining: ${isRaining}, NOT isRaining: ${!isRaining}`);
console.log(`isSunny: ${isSunny}, NOT isSunny: ${!isSunny}`);
console.log("");

// ============================================
// COMBINING LOGICAL OPERATORS
// ============================================

console.log("=== COMBINING LOGICAL OPERATORS ===\n");

let temperature = 25;
let hasUmbrella = false;
let isWeekend = true;

// Complex condition
let shouldGoOutside = (temperature >= 20 && temperature <= 30) && 
                      (isWeekend || hasUmbrella);
console.log(`Temperature: ${temperature}°C`);
console.log(`Has umbrella: ${hasUmbrella}`);
console.log(`Is weekend: ${isWeekend}`);
console.log(`Should go outside: ${shouldGoOutside}\n`);

// ============================================
// TRUTH TABLES
// ============================================

console.log("=== TRUTH TABLES ===\n");

console.log("AND (&&) Truth Table:");
console.log("true && true =", true && true);
console.log("true && false =", true && false);
console.log("false && true =", false && true);
console.log("false && false =", false && false);
console.log("");

console.log("OR (||) Truth Table:");
console.log("true || true =", true || true);
console.log("true || false =", true || false);
console.log("false || true =", false || true);
console.log("false || false =", false || false);
console.log("");

console.log("NOT (!) Truth Table:");
console.log("!true =", !true);
console.log("!false =", !false);
console.log("");

// ============================================
// REAL-WORLD EXAMPLES
// ============================================

console.log("=== REAL-WORLD EXAMPLES ===\n");

// Example 1: Movie Rating System
console.log("Example 1: Movie Ticket Eligibility");
let personAge2 = 15;
let hasParentPermission = true;
let movieRating = "PG-13"; // Parental Guidance suggested for under 13

let canWatchMovie = (personAge2 >= 13) || (personAge2 < 13 && hasParentPermission);
console.log(`Age: ${personAge2}, Parent permission: ${hasParentPermission}`);
console.log(`Movie rating: ${movieRating}`);
console.log(`Can watch: ${canWatchMovie}\n`);

// Example 2: Student Grade Eligibility
console.log("Example 2: Scholarship Eligibility");
let gpa = 3.8;
let testScore = 92;
let communityService = 50; // hours

let eligibleForScholarship = (gpa >= 3.5 && testScore >= 90) && 
                             communityService > 0;
console.log(`GPA: ${gpa}, Test Score: ${testScore}, Service Hours: ${communityService}`);
console.log(`Eligible for scholarship: ${eligibleForScholarship}\n`);

// Example 3: Game Level Requirements
console.log("Example 3: Video Game Level Access");
let playerLevel = 25;
let hasPaid = true;
let isBetaTester = false;

let canAccessLevel = (playerLevel >= 20) || (hasPaid) || (isBetaTester);
console.log(`Player Level: ${playerLevel}, Paid Premium: ${hasPaid}, Beta Tester: ${isBetaTester}`);
console.log(`Can access level: ${canAccessLevel}\n`);

// ============================================
// EXAMPLE PROBLEMS
// ============================================

console.log("=== EXAMPLE PROBLEMS ===\n");

// Problem 1: Check if grade is passing
let studentGrade = 72;
let isPassing = studentGrade >= 60;
console.log(`Student grade: ${studentGrade}`);
console.log(`Is passing (>= 60): ${isPassing}\n`);

// Problem 2: Check if temperature is comfortable
let temp = 22;
let isComfortable = temp >= 18 && temp <= 26;
console.log(`Temperature: ${temp}°C`);
console.log(`Is comfortable (18-26°C): ${isComfortable}\n`);

// Problem 3: Check if user account is active
let accountExists = true;
let accountPaid = false;
let accountActive = accountExists && accountPaid;
console.log(`Account exists: ${accountExists}, Paid: ${accountPaid}`);
console.log(`Account active: ${accountActive}\n`);
