import React from "react";
import { render } from "@testing-library/react";

import { testA11y } from "../../test-utils";
import { FormGroup } from "../form-group";
import { DateInput } from "./date-input";

test("it passes a11y", async () => {
  const { container } = render(
    <FormGroup id="test" name="test" label="DateInput Test">
      <DateInput />
    </FormGroup>,
  );
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test("it renders correctly", () => {
  const { container } = render(<DateInput />);
  expect(container).toMatchSnapshot();
});
