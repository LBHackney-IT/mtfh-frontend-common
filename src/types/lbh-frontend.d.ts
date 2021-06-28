/* eslint-disable max-classes-per-file */
declare module 'lbh-frontend' {
  export class Accordion {
    constructor(module: HTMLElement);

    init(): void;

    setExpanded(expanded: boolean, section: HTMLElement | null): void;

    isExpanded(section: HTMLElement | null): boolean;

    $sections: NodeListOf<HTMLElement>;

    sectionButtonClass: string;
  }

  export class ErrorSummary {
    constructor(module: HTMLElement);

    init(): void;
  }

  export class Radios {
    constructor(module: HTMLElement);

    init(): void;
  }

  export class Checkboxes {
    constructor(module: HTMLElement);

    init(): void;
  }
}
