import { config } from "../../../config";
import { getAxiosInstance } from "../../../http";

export const deleteContactDetail = async (
  id: string,
  targetId: string,
): Promise<void> => {
  const axiosInstance = getAxiosInstance();

  const response = await axiosInstance.delete(
    `${config.contactDetailsApiUrlV1}/contactDetails?id=${id}&targetId=${targetId}`,
  );
  return response.data;
};
