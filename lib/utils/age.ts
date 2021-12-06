import { differenceInYears, format, isValid, parseISO } from "date-fns";

export const isUnderEighteen = (dob: string) => {
  const isValidDate = parseISO(dob);
  if (!isValid(isValidDate)) {
    return true;
  }

  const dobDate = format(new Date(dob), "yyyy-MM-dd");
  const ageInYears = differenceInYears(new Date(), new Date(dobDate));
  return ageInYears < 18;
};
