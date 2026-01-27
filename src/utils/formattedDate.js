const now = new Date();

export const formattedDate = now
  .toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  })
  .replace(",", "");
