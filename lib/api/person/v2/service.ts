import { config } from "@mtfh/common/lib/config";
import { mutate } from "@mtfh/common/lib/hooks";
import { axiosInstance } from "@mtfh/common/lib/http";
import { Person } from "./types";

export interface PostPersonRequestData extends Omit<Person, "id" | "tenures"> {
  reason: string;
}

export const addPerson = async (data: PostPersonRequestData): Promise<Person> => {
  const { data: person } = await axiosInstance.post(
    `${config.personApiUrlV2}/persons`,
    data,
  );
  mutate(`${config.personApiUrlV1}/persons/${person.id}`, person, false);
  return person;
};
