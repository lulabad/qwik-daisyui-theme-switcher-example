import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ThemeSwitcher from "./theme-switcher";

export default component$(() => {
  return (
    <>
      <h1 class="text-xl text-primary">Hi 👋</h1>
      <p class="text-lg text-accent bg-secondary">
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <div class="divider"/>
      <ThemeSwitcher/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
