"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div>
      <h2>❌Something went wrong!</h2>
      <button
        onClick={
          // attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try reset button
      </button>
    </div>
  );
}
