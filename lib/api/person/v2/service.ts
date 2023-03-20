import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import { getAxiosInstance, mutate } from "../../../http";

import type { Person } from "./types";

export interface PostPersonRequestData extends Omit<Person, "id" | "tenures"> {
  reason: string;
}

export const addPerson = async (
  data: PostPersonRequestData,
  auth: CommonAuth,
): Promise<Person> => {
  const axiosInstance = getAxiosInstance(auth);
  const { data: person } = await axiosInstance.post(
    `${config.personApiUrlV2}/persons`,
    data,
  );
  mutate(`${config.personApiUrlV1}/persons/${person.id}`, person, false);
  return person;
};
