# Running and Debugging Guide for JavaScript Lessons

This guide explains how to run and debug the JavaScript lesson files in this unit.


## Methods for Running & Debugging

### Method 1: Terminal Execution (Simple Output Only)

**Best for:** Viewing lesson output without debugging

1. Open the integrated terminal (`Ctrl + `` or `View > Terminal`)
2. In the terminal run:

   node Lesson1-ArithmeticOperators.js

3. View the results printed to the console

**Lessons in this unit:**
- `Lesson1-ArithmeticOperators.js`
- `Lesson2-ComparisonLogicalOperators.js`
- `Lesson3-OperatorsAndOutput.js`
- `Lesson4-ConditionalStatements.js`
- `Lesson5-Loops.js`
- `Lesson6-ConditionalsAndLoopsInContext.js`

---

### Method 2: VS Code Debugger (Full Debugging)

**Best for:** Stepping through code, inspecting variables, understanding logic flow

#### Setup (One-time)
1. VS Code should recognize Node.js automatically
2. If prompted, select "Node.js" as your debug environment

#### Using the Debugger
1. **Open the lesson file** you want to debug
2. **Set breakpoints** by clicking on the left margin (gutter) next to line numbers
   - A red dot will appear indicating a breakpoint
3. **Start debugging:**
   - Press `F5`, OR
   - Go to `Run > Start Debugging`, OR
   - Click the Run icon on the left sidebar
4. **The code will pause** at your first breakpoint
5. **Use the debug controls:**
   - **Step Over** (`F10`): Execute the current line
   - **Step Into** (`F11`): Enter into function calls
   - **Step Out** (`Shift + F11`): Exit current function
   - **Continue** (`F5`): Run until next breakpoint
   - **Pause** (spacebar): Pause execution anytime

#### Inspecting Variables
- **Hover** over variables in the code to see their current value
- **Variables panel** (left sidebar) shows all local and global variables
- **Watch panel** (left sidebar) lets you track specific expressions

#### Example Debugging Session

1. Open `Lesson1-ArithmeticOperators.js`
2. Click on line 19 (the `console.log` with the sum)
3. Press `F5` to start debugging
4. The debugger pauses before line 19
5. Hover over `sum` to see its value
6. Press `F10` to step to the next line
7. Continue stepping through the lesson

---

## Understanding the Lesson Structure

Each lesson file follows this pattern:

```javascript
/**
 * LESSON [#]: [TOPIC]
 * Learning Objectives...
 */

console.log("=== TOPIC NAME ===\n");

// Code examples with explanations
// Each section demonstrates a concept
// Output shows the results
```

**Running a lesson shows:**
- Formatted output of each operation
- Calculated results
- Demonstration of how operators work

---

## Debugging Tips

### 1. **Set Multiple Breakpoints**
   - Click on several lines to track the flow
   - Debug will pause at each one in order

### 2. **Check Variable Types**
   - Hover over variables to see their type
   - Useful for understanding type coercion

### 3. **Watch Expressions**
   - Add expressions to the Watch panel
   - Example: `a + b` to see calculation results in real-time

### 4. **Use the Console**
   - While debugging, use the Debug Console tab
   - Type expressions to evaluate them: `a + b`, `typeof sum`

### 5. **Conditional Breakpoints**
   - Right-click a breakpoint and select "Edit Breakpoint"
   - Set a condition: `a > 5` (only pause when true)
   - Useful for loops

### Example: Debugging Lesson 4 (Conditionals)
```bash
# Run the file
node Lesson4-ConditionalStatements.js

# Or debug with F5 to step through conditional logic
# Set a breakpoint inside an if statement to see when it executes
```

---

## Troubleshooting

### File Not Found Error
```
Error: Cannot find module...
```
- Make sure you're in the `/workspaces/Unit1Topic4` directory
- Check the filename spelling exactly

### Permission Denied
```
command not found: node
```
- Node.js might not be installed or not on PATH
- Try: `which node` to verify Node.js is installed

### Debugger Won't Start
- Make sure the file has no syntax errors first
- Close any other debug sessions with `Ctrl + Shift + D`
- Restart VS Code if issues persist

---

## Summary of Commands

| Task | Command |
|------|---------|
| Run lesson | `node Lesson1-ArithmeticOperators.js` |
| Debug lesson | Press `F5` (with file open) |
| Step over line | `F10` |
| Step into function | `F11` |
| Continue to next breakpoint | `F5` (while debugging) |
| Inspect with Chrome | `node --inspect Lesson1-ArithmeticOperators.js` |

---

## Learning Workflow

1. **Read the lesson file** to understand the topic
2. **Run it** with `node` to see output
3. **Set breakpoints** on interesting lines
4. **Debug with F5** to step through and understand the flow
5. **Modify the code** to experiment
6. **Run again** to see your changes

This hands-on approach helps students understand how JavaScript operators and control structures work!
