/**
 * LESSON 9: CHALLENGES AND APPLICATIONS
 * Grade 11 Digital Solutions - JavaScript Fundamentals
 * 
 * Learning Objectives:
 * - Apply all learned concepts to solve complex problems
 * - Develop algorithmic thinking
 * - Create interactive console applications
 * - Debug and optimize code
 * - Solve real-world problems using programming
 */

console.log("=== CHALLENGES AND APPLICATIONS ===\n");

// ============================================
// CHALLENGE 1: STUDENT GRADE MANAGEMENT SYSTEM
// ============================================

console.log("CHALLENGE 1: STUDENT GRADE MANAGEMENT\n");

// Data
let students = [
  { name: "Alice", grades: [85, 92, 88] },
  { name: "Bob", grades: [78, 82, 75] },
  { name: "Charlie", grades: [95, 91, 89] },
  { name: "Diana", grades: [88, 86, 87] }
];

// Functions
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

function reportStudentGrades() {
  console.log("=== STUDENT GRADE REPORT ===\n");
  
  let classTotal = 0;
  let classCount = 0;
  let topStudent = "";
  let topAverage = 0;
  
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let average = calculateAverage(student.grades);
    let letterGrade = getLetterGrade(average);
    
    console.log(`${student.name}:`);
    console.log(`  Grades: ${student.grades.join(", ")}`);
    console.log(`  Average: ${average.toFixed(2)}`);
    console.log(`  Letter Grade: ${letterGrade}`);
    console.log("");
    
    classTotal += average;
    classCount++;
    
    if (average > topAverage) {
      topAverage = average;
      topStudent = student.name;
    }
  }
  
  let classAverage = classTotal / classCount;
  console.log(`Class Average: ${classAverage.toFixed(2)}`);
  console.log(`Top Student: ${topStudent} (${topAverage.toFixed(2)})`);
  console.log("");
}

reportStudentGrades();

// ============================================
// CHALLENGE 2: INVENTORY MANAGEMENT SYSTEM
// ============================================

console.log("CHALLENGE 2: INVENTORY MANAGEMENT\n");

// Data
let inventory = [
  { name: "Laptop", quantity: 10, price: 899.99 },
  { name: "Mouse", quantity: 50, price: 24.99 },
  { name: "Keyboard", quantity: 30, price: 79.99 },
  { name: "Monitor", quantity: 15, price: 299.99 }
];

// Functions
function addStock(productName, quantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      inventory[i].quantity += quantity;
      console.log(`✓ Added ${quantity} ${productName}(s)`);
      return true;
    }
  }
  console.log(`✗ Product "${productName}" not found`);
  return false;
}

function removeStock(productName, quantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      if (inventory[i].quantity >= quantity) {
        inventory[i].quantity -= quantity;
        console.log(`✓ Removed ${quantity} ${productName}(s)`);
        return true;
      } else {
        console.log(`✗ Not enough stock (have ${inventory[i].quantity})`);
        return false;
      }
    }
  }
  console.log(`✗ Product not found`);
  return false;
}

function getTotalValue() {
  let total = 0;
  for (let i = 0; i < inventory.length; i++) {
    total += inventory[i].quantity * inventory[i].price;
  }
  return total;
}

function displayInventory() {
  console.log("=== INVENTORY STATUS ===");
  console.log("");
  
  for (let i = 0; i < inventory.length; i++) {
    let item = inventory[i];
    let itemValue = item.quantity * item.price;
    console.log(`${item.name.padEnd(15)} | Qty: ${item.quantity.toString().padStart(3)} | $${item.price.toFixed(2).padStart(8)} | Total: $${itemValue.toFixed(2)}`);
  }
  
  let total = getTotalValue();
  console.log("".padEnd(60, "-"));
  console.log(`Total Inventory Value: $${total.toFixed(2)}\n`);
}

displayInventory();

addStock("Laptop", 5);
removeStock("Mouse", 20);

displayInventory();

// ============================================
// CHALLENGE 3: ATM/BANKING SYSTEM
// ============================================

console.log("CHALLENGE 3: BANKING SYSTEM\n");

// Account data
let account = {
  holder: "John Smith",
  accountNumber: "1234567890",
  balance: 2500,
  transactions: []
};

// Functions
function deposit(amount) {
  if (amount <= 0) {
    console.log("✗ Deposit amount must be positive");
    return false;
  }
  
  account.balance += amount;
  account.transactions.push({
    type: "DEPOSIT",
    amount: amount,
    newBalance: account.balance
  });
  console.log(`✓ Deposited $${amount.toFixed(2)}`);
  return true;
}

function withdraw(amount) {
  if (amount <= 0) {
    console.log("✗ Withdrawal amount must be positive");
    return false;
  }
  
  if (amount > account.balance) {
    console.log(`✗ Insufficient funds (Balance: $${account.balance.toFixed(2)})`);
    return false;
  }
  
  account.balance -= amount;
  account.transactions.push({
    type: "WITHDRAWAL",
    amount: amount,
    newBalance: account.balance
  });
  console.log(`✓ Withdrawn $${amount.toFixed(2)}`);
  return true;
}

function checkBalance() {
  return account.balance;
}

function displayStatement() {
  console.log("=== ACCOUNT STATEMENT ===");
  console.log(`Holder: ${account.holder}`);
  console.log(`Account: ${account.accountNumber}`);
  console.log(`Current Balance: $${checkBalance().toFixed(2)}`);
  console.log("");
  console.log("Recent Transactions:");
  
  for (let i = 0; i < account.transactions.length; i++) {
    let txn = account.transactions[i];
    console.log(`${txn.type.padEnd(12)} | $${txn.amount.toFixed(2).padStart(10)} | Balance: $${txn.newBalance.toFixed(2)}`);
  }
  console.log("");
}

console.log("Initial balance: $" + checkBalance().toFixed(2) + "\n");

deposit(500);
withdraw(200);
deposit(1000);
withdraw(3000); // This will fail

displayStatement();

// ============================================
// CHALLENGE 4: QUIZ APPLICATION
// ============================================

console.log("CHALLENGE 4: QUIZ APPLICATION\n");

// Quiz data
let quiz = {
  questions: [
    {
      question: "What is 5 + 3?",
      options: ["7", "8", "9", "10"],
      correctAnswer: 1 // Index of correct answer
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2
    },
    {
      question: "What is 10 × 6?",
      options: ["50", "60", "70", "80"],
      correctAnswer: 1
    }
  ]
};

// User responses (simulated)
let userResponses = [1, 2, 1]; // Indices of user's answers

function scoreQuiz() {
  let correct = 0;
  let total = quiz.questions.length;
  
  console.log("=== QUIZ RESULTS ===\n");
  
  for (let i = 0; i < quiz.questions.length; i++) {
    let q = quiz.questions[i];
    let userAnswer = userResponses[i];
    let isCorrect = userAnswer === q.correctAnswer;
    
    console.log(`Question ${i + 1}: ${q.question}`);
    console.log(`Your answer: ${q.options[userAnswer]}`);
    
    if (isCorrect) {
      console.log("✓ CORRECT");
      correct++;
    } else {
      console.log(`✗ INCORRECT (Correct: ${q.options[q.correctAnswer]})`);
    }
    console.log("");
  }
  
  let percentage = (correct / total) * 100;
  let grade = getGradeFromPercentage(percentage);
  
  console.log(`Score: ${correct}/${total} (${percentage.toFixed(1)}%)`);
  console.log(`Grade: ${grade}`);
  console.log("");
}

function getGradeFromPercentage(percentage) {
  if (percentage >= 90) return "A (Excellent)";
  if (percentage >= 80) return "B (Good)";
  if (percentage >= 70) return "C (Satisfactory)";
  if (percentage >= 60) return "D (Passing)";
  return "F (Needs Improvement)";
}

scoreQuiz();

// ============================================
// CHALLENGE 5: SHOPPING CART CALCULATOR
// ============================================

console.log("CHALLENGE 5: SHOPPING CART\n");

// Shopping cart
let cart = [
  { name: "Book", price: 15.99, quantity: 2 },
  { name: "Pen", price: 2.50, quantity: 5 },
  { name: "Notebook", price: 8.99, quantity: 1 }
];

// Functions
function calculateSubtotal() {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
  }
  return subtotal;
}

function calculateTax(subtotal, taxRate = 0.1) {
  return subtotal * taxRate;
}

function calculateTotal(subtotal, tax) {
  return subtotal + tax;
}

function applyDiscount(subtotal, discountPercent) {
  return subtotal * (1 - discountPercent / 100);
}

function displayReceipt() {
  console.log("=== SHOPPING RECEIPT ===\n");
  
  let subtotal = calculateSubtotal();
  let tax = calculateTax(subtotal);
  let total = calculateTotal(subtotal, tax);
  
  console.log("Item".padEnd(20) + "Price".padStart(10) + "Qty".padStart(8) + "Total".padStart(10));
  console.log("".padEnd(48, "-"));
  
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let itemTotal = item.price * item.quantity;
    console.log(
      item.name.padEnd(20) + 
      ("$" + item.price.toFixed(2)).padStart(10) + 
      item.quantity.toString().padStart(8) + 
      ("$" + itemTotal.toFixed(2)).padStart(10)
    );
  }
  
  console.log("".padEnd(48, "-"));
  console.log("Subtotal".padEnd(40) + ("$" + subtotal.toFixed(2)).padStart(8));
  console.log("Tax (10%)".padEnd(40) + ("$" + tax.toFixed(2)).padStart(8));
  console.log("".padEnd(48, "-"));
  console.log("TOTAL".padEnd(40) + ("$" + total.toFixed(2)).padStart(8));
  console.log("");
}

displayReceipt();

// ============================================
// CHALLENGE 6: STATISTICS CALCULATOR
// ============================================

console.log("CHALLENGE 6: STATISTICS CALCULATOR\n");

let data = [45, 52, 38, 92, 67, 88, 73, 95, 55, 81];

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function calculateMean(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function findMedian(numbers) {
  let sorted = [];
  for (let i = 0; i < numbers.length; i++) {
    sorted.push(numbers[i]);
  }
  
  // Simple sort (bubble sort)
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  
  let middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[middle];
  } else {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
}

function displayStatistics() {
  console.log("=== DATA STATISTICS ===\n");
  console.log(`Data: ${data.join(", ")}\n`);
  
  console.log(`Count: ${data.length}`);
  console.log(`Minimum: ${findMin(data)}`);
  console.log(`Maximum: ${findMax(data)}`);
  console.log(`Mean: ${calculateMean(data).toFixed(2)}`);
  console.log(`Median: ${findMedian(data).toFixed(2)}`);
  console.log("");
}

displayStatistics();

// ============================================
// CHALLENGE 7: GAME SIMULATION
// ============================================

console.log("CHALLENGE 7: SIMPLE NUMBER GUESSING GAME\n");

let gameData = {
  secretNumber: 42,
  guesses: [],
  maxGuesses: 5
};

function makeGuess(guess) {
  gameData.guesses.push(guess);
  
  if (guess === gameData.secretNumber) {
    return "CORRECT";
  } else if (guess < gameData.secretNumber) {
    return "TOO LOW";
  } else {
    return "TOO HIGH";
  }
}

function playGame() {
  console.log("=== GUESSING GAME ===");
  console.log(`Guess the number (1-100)`);
  console.log(`You have ${gameData.maxGuesses} attempts\n`);
  
  // Simulated guesses
  let simulatedGuesses = [50, 30, 40, 42];
  
  for (let i = 0; i < simulatedGuesses.length && i < gameData.maxGuesses; i++) {
    let guess = simulatedGuesses[i];
    let result = makeGuess(guess);
    
    console.log(`Guess ${i + 1}: ${guess}`);
    console.log(`Result: ${result}`);
    
    if (result === "CORRECT") {
      console.log(`🎉 You won in ${i + 1} attempts!`);
      return;
    }
    console.log("");
  }
  
  if (gameData.guesses[gameData.guesses.length - 1] !== gameData.secretNumber) {
    console.log(`Game Over! The number was ${gameData.secretNumber}`);
  }
  console.log("");
}

playGame();

console.log("=== END OF CHALLENGES ===\n");
