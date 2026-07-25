export type Tone = "info" | "success" | "error";

const DEFAULT_SUCCESS_HINTS = ["successful", "complete", "Done", "loaded", "verified"];

/**
 * Infer tone from a status string: anything starting with "Error" is an
 * error, anything containing one of `successHints` is a success, everything
 * else is neutral progress text.
 */
export function inferTone(
  message: string,
  successHints: string[] = DEFAULT_SUCCESS_HINTS,
): Tone {
  if (message.startsWith("Error")) return "error";
  if (successHints.some((hint) => message.includes(hint))) return "success";
  return "info";
}
