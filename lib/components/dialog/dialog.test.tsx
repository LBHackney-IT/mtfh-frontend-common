import React, { FC, useRef, useState } from "react";

import { render, testA11y } from "@hackney/mtfh-test-utils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dialog, DialogActions } from "./dialog";

const Component: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Toggle
      </button>
      <Dialog isOpen={isOpen} title="Dialog Title" onDismiss={() => setOpen(false)}>
        {children}
      </Dialog>
    </>
  );
};

test("it renders correctly", async () => {
  const { container } = render(
    <Component>
      <p>Content</p>
    </Component>,
  );
  expect(container).toMatchSnapshot();
  await testA11y(container);

  const toggle = screen.getByText("Toggle") as HTMLButtonElement;
  userEvent.click(toggle);

  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test("it renders correctly with actions", async () => {
  const { container } = render(
    <Component>
      <p>Content</p>
      <DialogActions>
        <button type="button">Confirm</button>
        <a href="/">Cancel</a>
      </DialogActions>
    </Component>,
  );

  const toggle = screen.getByText("Toggle") as HTMLButtonElement;
  userEvent.click(toggle);

  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test("it prevents background scrolling while open", () => {
  render(<Component />);
  const createElement = jest.spyOn(document, "createElement");

  userEvent.click(screen.getByText("Toggle"));
  expect(document.body.style.overflow).toBe("hidden");
  expect(createElement).not.toHaveBeenCalledWith("style");

  userEvent.click(screen.getByText("Close"));
  expect(document.body.style.overflow).toBe("");
  createElement.mockRestore();
});

test("it reserves the scrollbar width while open", () => {
  const clientWidth = jest
    .spyOn(document.documentElement, "clientWidth", "get")
    .mockReturnValue(window.innerWidth - 15);
  render(<Component />);

  userEvent.click(screen.getByText("Toggle"));
  expect(document.body.style.paddingRight).toBe("15px");

  userEvent.click(screen.getByText("Close"));
  expect(document.body.style.paddingRight).toBe("");
  clientWidth.mockRestore();
});

test("it focuses the initial focus ref when provided", async () => {
  const InitialFocusComponent: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
      <Dialog
        isOpen
        title="Dialog Title"
        onDismiss={() => undefined}
        initialFocusRef={inputRef}
      >
        <input ref={inputRef} aria-label="Focus target" />
      </Dialog>
    );
  };

  render(<InitialFocusComponent />);

  await waitFor(() => expect(screen.getByLabelText("Focus target")).toHaveFocus());
});
