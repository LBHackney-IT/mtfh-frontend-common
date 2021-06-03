/* eslint-disable max-classes-per-file */
declare module 'lbh-frontend' {
  export class Accordion {
    constructor(module: HTMLDivElement);

    init(): void;

    setExpanded(expanded: boolean, section: HTMLDivElement | null): void;

    isExpanded(section: HTMLDivElement | null): boolean;

    $sections: NodeListOf<HTMLDivElement>;

    sectionButtonClass: string;
  }

  export class ErrorSummary {
    constructor(module: HTMLDivElement);

    init(): void;
  }

  export class Radios {
    constructor(module: HTMLDivElement);

    init(): void;
  }
}
