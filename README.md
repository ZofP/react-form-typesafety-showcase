# Type-Safe Form Helpers (Design Skeleton)

This repository is a **design-focused TypeScript code sample**, not a runnable application.

Its purpose is to demonstrate how to design reusable React abstractions with
**strong compile-time guarantees**.

The emphasis is on **type safety and ergonomics**, not on setup, styling, or runtime behavior.

---

## What This Demonstrates

- Binding `react-hook-form` inputs to a form schema via generics
- Eliminating stringly-typed form wiring at compile time which can cause runtime errors
- Designing an ergonomic Form API with typed child components and maintaining type safety across the component tree via a typed context

---

## Core Files

### 1. Form Factory

**`src/core/form/utils/createTypedFormHelpers.ts`**

- Creates a typed `Form` component with all child inputs bound to a single generic `TFormValues`
- Provides a `useTypedForm` hook coupled to the same generic for consistent form configuration
- Enforces at compile time that each field’s `name` exists in `TFormValues`

### 2. Context Hook

**`src/core/form/hooks/useTypedFormContext.ts`**

- Enables **type-safe access** to Form child components anywhere in the React context tree
- Ensures the `name` prop of each field is validated against the form schema at compile time
- Throws an error if used outside of a `TypedFormContext` Provider, maintaining runtime safety
- Demonstrates how to maintain **type safety across deep component hierarchies**

### 3. Example Login Form

**`src/modules/auth/components/LoginForm.tsx`** rendered by  
**`src/app/pages/LoginPage.tsx`**

- Shows the **practical value** of the typed Form helpers in a real-world scenario
- Fields are fully type-checked: attempting to use a `name` not present in `LoginSchema` would produce a TypeScript error
- Uses the typed `useForm` and `Form` from the context, demonstrating how the factory and hook work together

> **NOTE:** This file is intentionally not runnable. Its purpose is to demonstrate **compile-time guarantees enforced by the form helpers**.

---

## How to Review

This project is meant to be reviewed **in an editor with TypeScript enabled**.

1. Run `npm install` at the repository root
2. Open the project in an editor
3. Inspect:
   - `src/core/form/utils/createTypedFormHelpers.ts`
   - `src/core/form/hooks/useTypedFormContext.ts`
   - `src/modules/auth/components/LoginForm.tsx` (usage example -> try to change any input `name` prop to another value to receive a TypeScript error)

The project is **not intended to run or build**:

- There is no build configuration
- Some runtime imports are intentionally omitted

This setup exists solely to make the **type-safety guarantees visible in-editor**.

---

## About Missing Modules

Some application-level modules (e.g. `@/core`, `@/utils`) are **intentionally not implemented**.

A small set of **type-only module shims** is provided under `types/design-shims.d.ts` to prevent unrelated
TypeScript errors from obscuring the form abstractions being demonstrated.

These shims represent dependencies that would normally exist in a real application,
but are omitted here to keep the example minimal and focused on design.

---

## Scope & Intent

This repository is intentionally scoped to a **single design problem**.

In a real codebase, this pattern would typically live in a shared UI or platform
package and be consumed by multiple applications.
