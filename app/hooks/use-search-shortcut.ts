import { type RefObject, useEffect } from "react";

/** Focuses the global search field with the platform-standard Cmd/Ctrl + K shortcut. */
export function useSearchShortcut(searchInput: RefObject<HTMLInputElement | null>) {
  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
      if (!isShortcut) return;

      event.preventDefault();
      searchInput.current?.focus();
    };

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, [searchInput]);
}
