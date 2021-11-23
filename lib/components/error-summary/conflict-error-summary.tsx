import React from "react";

import locale from "../../locale";
import { SummaryList, SummaryListItem } from "../summary-list";
import { ErrorSummary, ErrorSummaryProps } from "./error-summary";

interface ConflictErrorSummaryProps extends Partial<ErrorSummaryProps> {
  id: string;
  updatedFields?: Record<string, unknown>;
  fieldLocale: Record<string, string>;
  fieldTransforms?: Record<string, (value: unknown) => string>;
  footNote?: string;
}

const { changesNotSaved, anotherUserMadeEdit, youEntered, toSaveMakeEdit } =
  locale.components.conflictErrorSummary;

export const ConflictErrorSummary = ({
  updatedFields,
  fieldLocale,
  fieldTransforms,
  title = changesNotSaved,
  description = anotherUserMadeEdit,
  footNote = toSaveMakeEdit,
  ...props
}: ConflictErrorSummaryProps): JSX.Element => {
  const keys = Object.keys(updatedFields || {});
  return (
    <ErrorSummary
      className="mtfh-change-conflict"
      title={title}
      description={description}
      {...props}
    >
      {keys.length > 0 && updatedFields && (
        <>
          <p>{youEntered}</p>
          <SummaryList variant="inline">
            {Object.keys(updatedFields).map((key) => (
              <SummaryListItem key={key} title={`${fieldLocale[key] || key}:`}>
                {fieldTransforms && fieldTransforms[key]
                  ? fieldTransforms[key](updatedFields[key])
                  : `${updatedFields[key]}`}
              </SummaryListItem>
            ))}
          </SummaryList>
          {footNote && <p>{footNote}</p>}
        </>
      )}
    </ErrorSummary>
  );
};
