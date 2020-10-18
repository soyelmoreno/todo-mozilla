import { useEffect, useRef } from "react";

// A custom hook to get the previous state to compare to the current one
export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
