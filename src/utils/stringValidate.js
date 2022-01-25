export const checkLength = (string) => string.length >= 25 ? `${string.slice(0, 30)}...` : string;
