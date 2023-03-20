import { CommonAuth } from "../../../auth";
import { config } from "../../../config";
import { getAxiosInstance } from "../../../http";

export const deleteContactDetail = async (
  id: string,
  targetId: string,
  auth: CommonAuth,
): Promise<void> => {
  const axiosInstance = getAxiosInstance(auth);

  const response = await axiosInstance.delete(
    `${config.contactDetailsApiUrlV1}/contactDetails?id=${id}&targetId=${targetId}`,
  );
  return response.data;
};
