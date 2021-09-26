const locale = {
  components: {
    conflictErrorSummary: {
      changesNotSaved: "Changes not saved",
      anotherUserMadeEdit: "Another user has edited this page since you opened it.",
      youEntered: "You entered:",
      toSaveMakeEdit: "To save your changes you must make your edits again.",
    },
    formErrorSummary: {
      error: "Error",
    },
    statusErrorSummary: {
      statusTitle: (code: number): string => {
        switch (code) {
          case 403:
            return "You don't have the required persmissions to access this resource.";
          case 409:
            return locale.components.conflictErrorSummary.changesNotSaved;
          default:
            return "There was a problem with completing the action";
        }
      },
      statusDescription: (code: number): string => {
        switch (code) {
          case 409:
            return locale.components.conflictErrorSummary.anotherUserMadeEdit;
          default:
            return "Please try again. If the issue persists, please contact support.";
        }
      },
    },
  },
};

export default locale;
