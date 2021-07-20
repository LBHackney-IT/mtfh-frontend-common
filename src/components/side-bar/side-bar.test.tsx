import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import { queries, testA11y } from '../../test-utils';
import { SideBar, SideBarSection } from './side-bar';

let matchMedia: MatchMediaMock;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

const renderWithQuery = (ui: ReactElement, query: string) => {
  matchMedia.useMediaQuery(query);
  return render(ui);
};

test('it renders correctly on desktop', async () => {
  const { container } = renderWithQuery(
    <SideBar id="sidebar">
      <SideBarSection
        id="section-1"
        title="More Details"
        isAccordion
        isCollapsed
      >
        <div>Content</div>
      </SideBarSection>
    </SideBar>,
    queries.lg
  );
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test('it renders correctly on mobile', async () => {
  const { container } = renderWithQuery(
    <SideBar id="sidebar">
      <SideBarSection
        id="section-1"
        title="More Details"
        isAccordion
        isCollapsed
      >
        <div>Content</div>
      </SideBarSection>
    </SideBar>,
    queries.base
  );
  expect(container).toMatchSnapshot();
  await testA11y(container);
});

test.skip('it renders a heading on desktop', async () => {
  const { container } = renderWithQuery(
    <SideBar id="sidebar">
      <SideBarSection
        id="section-1"
        title="More Details"
        heading="A Heading"
        isAccordion
        isCollapsed
      >
        <div>Content</div>
      </SideBarSection>
    </SideBar>,
    queries.lg
  );
  expect(screen.getByRole('heading')).toHaveTextContent('A Heading');
  await testA11y(container);
});

test('it does not renders a heading on mobile', async () => {
  const { container } = renderWithQuery(
    <SideBar id="sidebar">
      <SideBarSection
        id="section-1"
        title="More Details"
        heading="A Heading"
        isAccordion
      >
        <div>Content</div>
      </SideBarSection>
    </SideBar>,
    queries.base
  );
  expect(screen.queryByText('A Heading')).toBe(null);
  await testA11y(container);
});

test('accepts and ignores a null child', () => {
  const { container } = renderWithQuery(
    <SideBar id="sidebar">
      <SideBarSection
        id="section-1"
        title="More Details"
        heading="A Heading"
        isAccordion
        isCollapsed
      >
        <div>Content</div>
      </SideBarSection>
      {null}
      <SideBarSection
        id="section-2"
        title="More Details 2"
        heading="A Heading 2"
        isAccordion
        isCollapsed
      >
        <div>Content 2</div>
      </SideBarSection>
      {null}
    </SideBar>,
    queries.base
  );
  expect(container).toMatchSnapshot();
});
