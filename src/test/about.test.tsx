import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { Route } from "../routes/about";

test("opens and closes the About dialog", async () => {
  const About = Route.options.component;

  if (!About) {
    throw new Error("The About route must have a component");
  }

  const user = userEvent.setup();

  await About.preload?.();

  render(<About />);

  const trigger = screen.getByRole("button", { name: "Open dialog" });

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  await user.click(trigger);

  expect(await screen.findByRole("dialog")).toHaveAccessibleName("Base UI is wired up");

  await user.click(screen.getByRole("button", { name: "Close" }));

  await waitFor(() => {
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
