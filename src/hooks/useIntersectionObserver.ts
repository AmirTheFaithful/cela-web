import { useRef, useState, useEffect } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * Observes a DOM element and returns its IntersectionObserverEntry,
 * when it enters viewport.
 *
 * @param options - IntersectionObserverInit + freezeOnceVisible.
 * @returns A tuple: [ref, entry] — `ref` to attach to a DOM element, and `entry` containing intersection information.
 *
 * @example
 * const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
 *   threshold: 0.1,
 *   freezeOnceVisible: true
 * });
 */
export const useIntersectionObserver = <T extends Element = Element>(
  options: Args
): [React.RefObject<T | null>, IntersectionObserverEntry | null] => {
  const ref = useRef<T | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const frozen = options.freezeOnceVisible && entry?.isIntersecting;

  useEffect(() => {
    const node = ref.current;
    if (!node || frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      options
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [options.root, options.rootMargin, options.threshold, frozen]);

  return [ref, entry];
};
