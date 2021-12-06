import { differenceInYears, format } from "date-fns";

export const isUnderEighteen = (dob: string) => {
  const dobDate = format(new Date(dob), "yyyy-MM-dd");
  const ageInYears = differenceInYears(new Date(), new Date(dobDate));
  return ageInYears < 18;
};
