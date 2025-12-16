/**
 * Type-only shims used to avoid distracting errors from omitted app infrastructure.
 *
 * These modules are intentionally undeclared at runtime; only their presence
 * is required to allow the form helpers to be evaluated in isolation.
 */
declare module "@/core";
declare module "@/core/snackbar";
declare module "@/utils";
declare module "@/modules/auth";
declare module "@/config";
declare module "react-i18next";
declare module "@/hooks";
declare module "@/core/ui";
