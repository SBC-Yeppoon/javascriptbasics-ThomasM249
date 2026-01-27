/**
 * LESSON 6: CONDITIONALS AND LOOPS IN CONTEXT
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Combine conditionals and loops for complex logic
 * - Create real-world simulation programs
 * - Validate and process data using loops and conditions
 * - Build interactive console-based applications
 * - Develop problem-solving skills with algorithms
 */

console.log("=== CONDITIONALS & LOOPS COMBINED ===\n");

// ============================================
// LOOPS WITH CONDITIONALS
// ============================================

console.log("1. LOOPS WITH CONDITIONALS\n");

// Example 1: Filter numbers from a loop
console.log("Example 1: Display only multiples of 3");
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
console.log("");

// Example 2: Sum only numbers above threshold
console.log("Example 2: Sum numbers > 50 from 1-100");
let sumAbove50 = 0;
for (let i = 1; i <= 100; i++) {
  if (i > 50) {
    sumAbove50 += i;
  }
}
console.log(`Sum of numbers > 50: ${sumAbove50}`);
console.log("");

// Example 3: Grade statistics
console.log("Example 3: Grade statistics");
let grades = [85, 92, 78, 95, 88, 72, 91, 89];
let passCount = 0;
let failCount = 0;
let totalGrade = 0;

console.log("Grades: " + grades.join(", "));
console.log("");

for (let i = 0; i < grades.length; i++) {
  totalGrade += grades[i];
  
  if (grades[i] >= 80) {
    passCount++;
    console.log(`Grade ${grades[i]}: PASS`);
  } else {
    failCount++;
    console.log(`Grade ${grades[i]}: FAIL`);
  }
}

let averageGrade = totalGrade / grades.length;
console.log("");
console.log(`Passed: ${passCount}, Failed: ${failCount}`);
console.log(`Average: ${averageGrade.toFixed(2)}`);
console.log("");

// ============================================
// COMPLEX DECISION MAKING
// ============================================

console.log("2. COMPLEX DECISION MAKING IN LOOPS\n");

// Example: Grade assignment with multiple criteria
console.log("Example: Course grade calculation");
let quizzes = [85, 90, 78, 88];
let midterm = 82;
let finalExam = 90;

// Calculate weighted average
let quizAverage = 0;
for (let i = 0; i < quizzes.length; i++) {
  quizAverage += quizzes[i];
}
quizAverage = quizAverage / quizzes.length;

let courseGrade = (quizAverage * 0.3) + (midterm * 0.3) + (finalExam * 0.4);

// Determine letter grade and feedback
console.log(`Quiz Average: ${quizAverage.toFixed(2)}`);
console.log(`Midterm: ${midterm}`);
console.log(`Final Exam: ${finalExam}`);
console.log(`Course Grade: ${courseGrade.toFixed(2)}`);

let letterGrade;
let feedback;

if (courseGrade >= 90) {
  letterGrade = "A";
  feedback = "Excellent work!";
} else if (courseGrade >= 80) {
  letterGrade = "B";
  feedback = "Good work!";
} else if (courseGrade >= 70) {
  letterGrade = "C";
  feedback = "Satisfactory";
} else {
  letterGrade = "F";
  feedback = "Needs improvement";
}

console.log(`Letter Grade: ${letterGrade}`);
console.log(`Feedback: ${feedback}`);
console.log("");

// ============================================
// NESTED CONDITIONALS IN LOOPS
// ============================================

console.log("3. NESTED CONDITIONALS IN LOOPS\n");

// Example: Categorize numbers with multiple conditions
console.log("Example: Categorize numbers 1-20");
for (let num = 1; num <= 20; num++) {
  let category;
  
  if (num % 2 === 0) {
    // Even number
    if (num % 4 === 0) {
      category = "Even (divisible by 4)";
    } else {
      category = "Even (not divisible by 4)";
    }
  } else {
    // Odd number
    if (num > 10) {
      category = "Odd (> 10)";
    } else {
      category = "Odd (<= 10)";
    }
  }
  
  console.log(`${num.toString().padStart(2)}: ${category}`);
}
console.log("");

// ============================================
// BREAK AND CONTINUE WITH LOGIC
// ============================================

console.log("4. ADVANCED LOOP CONTROL\n");

// Example 1: Find number matching criteria
console.log("Example 1: Find first perfect square after 50");
let found = false;
for (let i = 1; i <= 100; i++) {
  let square = i * i;
  
  if (square > 50) {
    console.log(`${i}² = ${square}`);
    console.log(`Found: ${square} is the first perfect square > 50`);
    break;
  }
}
console.log("");

// Example 2: Skip invalid data
console.log("Example 2: Process valid scores (skip invalid)");
let scores = [85, -5, 92, 110, 78, 88];

for (let i = 0; i < scores.length; i++) {
  // Skip invalid scores
  if (scores[i] < 0 || scores[i] > 100) {
    console.log(`Score ${scores[i]}: INVALID (skipped)`);
    continue;
  }
  
  // Process valid score
  let status = scores[i] >= 80 ? "PASS" : "FAIL";
  console.log(`Score ${scores[i]}: ${status}`);
}
console.log("");

// ============================================
// REAL-WORLD: BANK ATM SIMULATION
// ============================================

console.log("5. BANK ATM SIMULATION\n");

let balance = 500;
let isRunning = true;
let transaction = 0;

console.log("=== ATM SIMULATION ===");
console.log(`Starting balance: $${balance}`);
console.log("");

// Simulate multiple transactions
let transactions = [
  { type: "withdraw", amount: 50 },
  { type: "deposit", amount: 100 },
  { type: "withdraw", amount: 200 },
  { type: "withdraw", amount: 500 }, // Will fail - insufficient funds
  { type: "withdraw", amount: 300 }
];

for (let i = 0; i < transactions.length; i++) {
  transaction++;
  let txn = transactions[i];
  
  console.log(`Transaction ${transaction}: ${txn.type.toUpperCase()} $${txn.amount}`);
  
  if (txn.type === "withdraw") {
    if (balance >= txn.amount) {
      balance -= txn.amount;
      console.log(`✓ Success. New balance: $${balance}`);
    } else {
      console.log(`✗ Failed - Insufficient funds. Balance: $${balance}`);
    }
  } else if (txn.type === "deposit") {
    balance += txn.amount;
    console.log(`✓ Success. New balance: $${balance}`);
  }
  
  console.log("");
}

console.log(`Final balance: $${balance}`);
console.log("");

// ============================================
// REAL-WORLD: TICKET SALES SYSTEM
// ============================================

console.log("6. TICKET SALES SYSTEM\n");

let totalTicketsSold = 0;
let totalRevenue = 0;
let ticketLimit = 100;

// Simulate customers buying tickets
let customers = [
  { name: "Alice", quantity: 2, type: "adult" },
  { name: "Bob", quantity: 3, type: "adult" },
  { name: "Charlie", quantity: 1, type: "senior" },
  { name: "Diana", quantity: 4, type: "child" },
  { name: "Eve", quantity: 5, type: "adult" }
];

console.log("=== TICKET SALES ===");
console.log(`Available tickets: ${ticketLimit}`);
console.log(`Adult: $15, Senior: $10, Child: $8`);
console.log("");

for (let i = 0; i < customers.length; i++) {
  let customer = customers[i];
  let ticketPrice;
  
  // Determine price by type
  if (customer.type === "adult") {
    ticketPrice = 15;
  } else if (customer.type === "senior") {
    ticketPrice = 10;
  } else if (customer.type === "child") {
    ticketPrice = 8;
  }
  
  let totalCost = customer.quantity * ticketPrice;
  
  // Check if tickets available
  if (totalTicketsSold + customer.quantity <= ticketLimit) {
    totalTicketsSold += customer.quantity;
    totalRevenue += totalCost;
    console.log(`${customer.name}: ${customer.quantity} ${customer.type}(s) = $${totalCost}`);
  } else {
    console.log(`${customer.name}: Only ${ticketLimit - totalTicketsSold} tickets remaining`);
  }
}

console.log("");
console.log(`Total tickets sold: ${totalTicketsSold}/${ticketLimit}`);
console.log(`Total revenue: $${totalRevenue}`);
console.log("");

// ============================================
// REAL-WORLD: STUDENT GRADING REPORT
// ============================================

console.log("7. STUDENT GRADING REPORT\n");

let studentData = [
  { name: "Alice", math: 92, english: 88, science: 95 },
  { name: "Bob", math: 78, english: 82, science: 75 },
  { name: "Charlie", math: 95, english: 91, science: 89 },
  { name: "Diana", math: 85, english: 86, science: 87 }
];

console.log("=== CLASS REPORT ===\n");

let classAverage = 0;
let totalGrades = 0;
let gradeCount = 0;

for (let i = 0; i < studentData.length; i++) {
  let student = studentData[i];
  let studentAverage = (student.math + student.english + student.science) / 3;
  
  totalGrades += student.math + student.english + student.science;
  gradeCount += 3;
  
  // Determine status
  let status;
  if (studentAverage >= 90) {
    status = "Excellent";
  } else if (studentAverage >= 80) {
    status = "Good";
  } else if (studentAverage >= 70) {
    status = "Satisfactory";
  } else {
    status = "Needs Improvement";
  }
  
  console.log(`${student.name}: ${studentAverage.toFixed(2)} (${status})`);
  console.log(`  Math: ${student.math}, English: ${student.english}, Science: ${student.science}`);
  console.log("");
}

classAverage = totalGrades / gradeCount;
console.log(`Class Average: ${classAverage.toFixed(2)}`);
console.log("");

// ============================================
// EXAMPLE PROBLEMS
// ============================================

console.log("=== EXAMPLE PROBLEMS ===\n");

// Problem 1: Validate and process test scores
console.log("Problem 1: Test Score Validation and Analysis");
let rawScores = [95, 102, 87, -5, 91, 100, 45];
let validScores = [];
let invalidCount = 0;

for (let i = 0; i < rawScores.length; i++) {
  if (rawScores[i] >= 0 && rawScores[i] <= 100) {
    validScores.push(rawScores[i]);
  } else {
    invalidCount++;
  }
}

console.log(`Raw scores: ${rawScores.join(", ")}`);
console.log(`Valid scores: ${validScores.join(", ")}`);
console.log(`Invalid scores: ${invalidCount}`);
console.log("");

// Problem 2: Itinerary planning
console.log("Problem 2: Itinerary Planning");
let activities = [
  { name: "Breakfast", time: 8, duration: 1 },
  { name: "Work", time: 9, duration: 4 },
  { name: "Lunch", time: 13, duration: 1 },
  { name: "Work", time: 14, duration: 3 },
  { name: "Exercise", time: 17, duration: 1 },
  { name: "Dinner", time: 18, duration: 1 }
];

console.log("Daily Schedule:");
for (let i = 0; i < activities.length; i++) {
  let activity = activities[i];
  let endTime = activity.time + activity.duration;
  console.log(`${activity.time}:00 - ${endTime}:00: ${activity.name}`);
}
console.log("");

// Problem 3: Expense tracking
console.log("Problem 3: Expense Tracking and Budget");
let budget = 500;
let expenses = [
  { category: "Food", amount: 120 },
  { category: "Transport", amount: 80 },
  { category: "Entertainment", amount: 150 },
  { category: "Utilities", amount: 100 }
];

let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
  totalExpenses += expenses[i].amount;
}

let remaining = budget - totalExpenses;

console.log(`Budget: $${budget}`);
for (let i = 0; i < expenses.length; i++) {
  let exp = expenses[i];
  let percentage = (exp.amount / budget * 100).toFixed(1);
  console.log(`${exp.category}: $${exp.amount} (${percentage}%)`);
}
console.log(`Total expenses: $${totalExpenses}`);

if (remaining >= 0) {
  console.log(`✓ Remaining: $${remaining}`);
} else {
  console.log(`✗ Over budget by: $${Math.abs(remaining)}`);
}
console.log("");
