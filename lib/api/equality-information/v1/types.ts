export interface Gender {
  genderValue: string;
  genderValueIfOther: string;
  genderDifferentToBirthSex: boolean;
}

export interface Ethnicity {
  ethnicGroupValue: string;
  ethnicGroupValueIfOther: string;
}

export interface ReligionOrBelief {
  religionOrBeliefValue: string;
  religionOrBeliefValueIfOther: string;
}

export interface SexualOrientation {
  sexualOrientationValue: string;
  sexualOrientationValueIfOther: string;
}

export interface MarriageOrCivilPartnership {
  married: boolean;
  civilPartnership: boolean;
}

export interface PregnancyOrMaternity {
  pregnancyDate: string;
  pregnancyValidUntil: string;
}

export interface Languages {
  language: string;
  isPrimary: boolean;
}

export interface CaringResponsibilities {
  provideUnpaidCare: boolean;
  hoursSpentProvidingUnpaidCare: string;
}

export interface EconomicSituation {
  economicSituationValue: string;
  economicSituationValueIfOther: string;
}

export interface HomeSituation {
  homeSituationValue: string;
  homeSituationValueIfOther: string;
}

export interface EqualityData {
  id: string;
  targetId: string;
  gender: Gender;
  nationality: string;
  ethnicity: Ethnicity;
  religionOrBelief: ReligionOrBelief;
  sexualOrientation: SexualOrientation;
  marriageOrCivilPartnership: MarriageOrCivilPartnership;
  pregnancyOrMaternity: PregnancyOrMaternity[];
  nationalInsuranceNumber: string;
  languages: Languages[];
  caringResponsibilities: CaringResponsibilities;
  disabled: boolean;
  communicationRequirements: string[];
  economicSituation: EconomicSituation;
  homeSituation: HomeSituation;
  armedForces: string;
}
