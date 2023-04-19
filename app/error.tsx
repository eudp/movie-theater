"use client";

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="bg-gray-200">
      <div className="container max-w-7xl mx-auto pb-10 px-4 min-h-screen flex justify-center">
        <div className="flex flex-col pt-8 items-center justify-center">
          <div className="text-2xl text-center">Error: {error.message}</div>
          <button
            onClick={() => reset()}
            className="mt-4 w-32 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
