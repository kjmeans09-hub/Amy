## 2026-02-05 - Unbounded Input in Calculator
**Vulnerability:** Calculator inputs allowed negative or excessively large numbers, potentially causing logic errors or UI breakage via large number formatting.
**Learning:** React controlled inputs with `type="number"` do not automatically sanitize `e.target.value` before state updates. Explicit clamping logic is required in the `onChange` handler to ensure data integrity.
**Prevention:** Implement validation handlers that sanitize and clamp numeric input before setting state.
