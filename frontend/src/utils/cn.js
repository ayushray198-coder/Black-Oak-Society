/**
 * Combines multiple class names into a single string.
 *
 * Example:
 * cn(
 *   "flex items-center",
 *   isActive && "bg-primary",
 *   disabled && "opacity-50"
 * )
 *
 * Output:
 * "flex items-center bg-primary opacity-50"
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}