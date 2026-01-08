"use client";

export function FormattedDate({ date }: { date: Date }) {
  return (
    <>
      {date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </>
  );
}
