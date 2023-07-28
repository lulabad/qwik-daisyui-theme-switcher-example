import { component$, useContext } from "@builder.io/qwik";
import { ThemeContext } from "~/root";

export default component$(() => {
  const themeContext = useContext(ThemeContext);
  return (
    <div class="flex gap-5">
      <select
        onChange$={(e) => (themeContext.value = e.target.value)}
        class="select select-accent w-full max-w-xs"
        value={themeContext.value}
      >
        <option value="aqua">Aqua</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>
    </div>
  );
});
