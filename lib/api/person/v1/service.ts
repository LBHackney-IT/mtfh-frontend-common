import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import {
  AxiosSWRConfiguration,
  AxiosSWRResponse,
  getAxiosInstance,
  mutate,
  useAxiosSWR,
} from "../../../http";

import type { Person, TenureSummary } from "./types";

export const usePerson = (
  id: string | null,
  auth: CommonAuth,
  options?: AxiosSWRConfiguration<Person>,
): AxiosSWRResponse<Person> => {
  return useAxiosSWR<Person>(
    id && `${config.personApiUrlV1}/persons/${id}`,
    auth,
    options,
  );
};

export interface PostPersonRequestData extends Omit<Person, "id" | "tenures"> {
  reason: string;
  tenures: Omit<TenureSummary, "isActive">[];
}

export const addPerson = async (
  data: PostPersonRequestData,
  auth: CommonAuth,
): Promise<Person> => {
  const axiosInstance = getAxiosInstance(auth);

  const { data: person } = await axiosInstance.post(
    `${config.personApiUrlV1}/persons`,
    data,
  );
  mutate(`${config.personApiUrlV1}/persons/${person.id}`, person, false);
  return person;
};

export type PatchPersonRequestData = Partial<Omit<Person, "id">> & Pick<Person, "id">;

export const editPerson = async (
  { id, ...data }: PatchPersonRequestData,
  auth: CommonAuth,
): Promise<Person> => {
  const axiosInstance = getAxiosInstance(auth);

  const response = await axiosInstance.patch(
    `${config.personApiUrlV1}/persons/${id}`,
    data,
  );
  return response.data;
};
