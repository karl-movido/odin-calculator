# Calculator App

A simple calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations without using `eval()`.

---

## Features

- Basic operations: +, −, ×, ÷, %
- Decimal support (prevents multiple dots)
- Delete and clear functions
- Previous expression display
- Keyboard support (optional)

---

## How It Works

The calculator uses manual state tracking:

- `num1` → first number
- `num2` → second number
- `op` → selected operator

When `=` is pressed, the app runs a custom `operate()` function to compute the result.

---

## Learning Focus

- DOM manipulation
- Event handling
- State management
- Building logic without `eval()`
