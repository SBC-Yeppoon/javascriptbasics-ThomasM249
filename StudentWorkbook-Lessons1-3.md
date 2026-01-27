# JavaScript Operators Unit - Student Workbook

**Name:** ________________________  
**Date:** ________________________  
**Grade:** ________________________

---

## Unit 1: Arithmetic Operators

### What are Arithmetic Operators?
Arithmetic operators let us perform mathematical calculations in JavaScript.

### The Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponent | `2 ** 3` | `8` |

### Practice Problems

**Problem 1:** Calculate the area of a rectangle
- Width: 12 units
- Height: 8 units
- Formula: Area = Width × Height
- Answer: ______________________

**Problem 2:** Calculate the volume of a cube
- Side length: 5 units
- Formula: Volume = Side³
- Answer: ______________________

**Problem 3:** Check if a number is even
- Number: 24
- Formula: number % 2 === 0
- Answer: ______________________

**Problem 4:** Calculate total cost with tax
- Item price: $49.99
- Tax rate: 8%
- Your calculation steps:
  1. ______________________
  2. ______________________
  3. ______________________
- Answer: ______________________

### Order of Operations (PEMDAS/BODMAS)
Remember this order when solving:
1. **P**arentheses (or **B**rackets)
2. **E**xponents
3. **M**ultiplication & **D**ivision (left to right)
4. **A**ddition & **S**ubtraction (left to right)

**Example:** 2 + 3 × 4 = ?
- Multiply first: 3 × 4 = 12
- Then add: 2 + 12 = **14**
- (NOT 5 × 4 = 20)

**Solve these using order of operations:**
1. 5 + 2 × 3 = ______
2. (5 + 2) × 3 = ______
3. 10 - 2² = ______
4. 20 / 4 + 3 = ______

### Common Mistakes

❌ **Wrong:** `"5" + 3 = 53` (string concatenation)  
✓ **Right:** `5 + 3 = 8` (numeric addition)

**Why?** When you add a number to text, JavaScript treats it as joining text together, not math!

---

## Unit 2: Comparison & Logical Operators

### Comparison Operators
These compare two values and give a true/false answer.

| Operator | Meaning | Example | Answer |
|----------|---------|---------|--------|
| `<` | Less than | `3 < 5` | `true` |
| `>` | Greater than | `3 > 5` | `false` |
| `<=` | Less than or equal | `5 <= 5` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `==` | Equal to | `5 == "5"` | `true` |
| `===` | Strictly equal | `5 === "5"` | `false` |
| `!=` | Not equal | `5 != 3` | `true` |
| `!==` | Strictly not equal | `5 !== "5"` | `true` |

### Logical Operators
These combine conditions together.

#### AND (`&&`) - BOTH must be true
```
True AND True = True
True AND False = False
False AND True = False
False AND False = False
```

**Example:** To get a driver's license you need:
- Age ≥ 16 **AND**
- Pass the driving test

#### OR (`||`) - AT LEAST ONE must be true
```
True OR True = True
True OR False = True
False OR True = True
False OR False = False
```

**Example:** You can go to the park if:
- It's not raining **OR**
- You have an umbrella

#### NOT (`!`) - Reverses true/false
```
NOT True = False
NOT False = True
```

### Practice: Evaluate These Expressions

**Problem 1:**
- Is 7 < 10? ______
- Is 7 > 10? ______
- Is 7 === 7? ______
- Is 7 == "7"? ______

**Problem 2:**
- Is 15 > 10 AND 15 < 20? ______
- Is 15 > 10 AND 15 > 20? ______
- Is 15 < 10 OR 15 > 20? ______
- Is NOT (15 > 10)? ______

**Problem 3: Real-World Scenario**

You want to watch a movie in theaters. The rules are:
- You must be at least 13 years old, OR
- You must have parent permission

You are 12 years old with parent permission.

Can you watch the movie? ______

Write the expression: ______________________________

### Truth Table Practice

Complete this truth table for AND:

| A | B | A AND B |
|---|---|---------|
| T | T | ? |
| T | F | ? |
| F | T | ? |
| F | F | ? |

---

## Unit 3: All Operators in Action

### Putting It All Together

**Example Project:** Grade Calculator

```javascript
let midterm = 80;
let finalExam = 90;
let homework = 85;

// Calculate average
let average = (midterm + finalExam + homework) / 3;

// Check if passing (>= 60)
let isPassing = average >= 60;

// Check if honors (>= 85)
let isHonors = average >= 85;

// Output results
console.log(`Average: ${average}`);
console.log(`Passing: ${isPassing}`);
console.log(`Honors: ${isHonors}`);
```

### Your Turn: Create a Calculator

**Task:** Write a program that calculates a monthly budget.

You have:
- Income: $2000
- Rent: $800
- Food: $300
- Transportation: $150
- Entertainment: $200

Calculate:
1. Total expenses = ____________________
2. Remaining money = ____________________
3. Are you within budget (income > expenses)? ____________________

Write your code below:
```javascript
let income = 2000;
let rent = 800;
let food = 300;
let transportation = 150;
let entertainment = 200;

// Write your code here:


```

### Output Methods

You can display information in three ways:

**1. console.log() - Simple**
```javascript
console.log(5 + 3);  // Outputs: 8
```

**2. String Concatenation - Adding text together**
```javascript
let name = "Alex";
console.log("Hello " + name);  // Outputs: Hello Alex
```

**3. Template Literals - Using backticks and ${} **
```javascript
let name = "Alex";
let age = 16;
console.log(`${name} is ${age} years old`);
// Outputs: Alex is 16 years old
```

**Which method would you use for each?**

a) Displaying a simple number: Method ___
b) Creating a full sentence with variables: Method ___
c) Quick testing in console: Method ___

---

## Challenge Problems

### Challenge 1: Even or Odd Checker
Write code that checks if a number is even or odd.

Your number: 27

Is it even? _____ (Hint: Use %)

Code:
```javascript


```

### Challenge 2: Temperature Comfortable?
Write code that checks if a temperature is comfortable.
- Comfortable range: 18°C to 26°C

Temperature: 22°C

Is comfortable? _____ (Hint: Use AND)

Code:
```javascript


```

### Challenge 3: Movie Eligibility
A movie requires:
- You are 13+ years old, OR
- You have parent permission

Person 1: Age 12, no permission  
Eligible? _____

Person 2: Age 15, no permission  
Eligible? _____

Person 3: Age 10, has permission  
Eligible? _____

### Challenge 4: BMI Calculator
BMI = Weight (kg) / Height² (m²)

Weight: 70 kg  
Height: 1.75 m

Calculate BMI: _____________________

Is it in healthy range (18.5 - 24.9)? _____________________

Code:
```javascript


```

---

## Self-Check: Can You...?

Check the boxes when you can do these things:

### Arithmetic Operators
- [ ] Use addition, subtraction, multiplication, division
- [ ] Use modulus (%) to find remainders
- [ ] Use exponent (**) for powers
- [ ] Follow order of operations correctly
- [ ] Calculate results with multiple operators

### Comparison Operators
- [ ] Use <, >, <=, >= correctly
- [ ] Understand == vs ===
- [ ] Know when to use != and !==
- [ ] Compare numbers and variables

### Logical Operators
- [ ] Use AND (&&) when both conditions must be true
- [ ] Use OR (||) when at least one must be true
- [ ] Use NOT (!) to reverse a condition
- [ ] Combine multiple conditions
- [ ] Understand truth tables

### Output
- [ ] Use console.log() to display information
- [ ] Use string concatenation (+)
- [ ] Use template literals with ${}
- [ ] Format output clearly and readably
- [ ] Show calculations step by step

---

## Key Formulas to Remember

**Area of Rectangle:** Width × Height

**Area of Triangle:** (Base × Height) / 2

**Volume of Cube:** Side³

**Compound Interest:** Principal × (1 + Rate)^Years

**Average:** (Value1 + Value2 + Value3) / Count

**Percentage:** (Part / Whole) × 100

---

## Glossary

| Term | Definition |
|------|-----------|
| **Operator** | A symbol that performs an action on values |
| **Operand** | A value that an operator works on |
| **Expression** | A combination of values and operators |
| **Boolean** | A value that is either true or false |
| **Comparison** | Checking how two values relate |
| **Logical** | Combining multiple true/false values |
| **Modulus** | The remainder after division |
| **Exponent** | A number raised to a power |
| **Concatenate** | Joining strings together |
| **Template Literal** | A string using backticks and ${} |

---

## Notes Section

Use this space for additional notes from class:

__________________________________________________________________________

__________________________________________________________________________

__________________________________________________________________________

__________________________________________________________________________

__________________________________________________________________________

__________________________________________________________________________

---

## Reflection

**What was the most challenging concept?**

__________________________________________________________________________

**What would help you understand it better?**

__________________________________________________________________________

**Where could you use these operators in real life?**

__________________________________________________________________________

**What would you like to learn next?**

__________________________________________________________________________

---

**Remember:** Practice is the key to mastering programming! Write lots of code, test it, and don't be afraid to make mistakes - that's how you learn. 💻
