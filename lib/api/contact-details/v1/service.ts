export const deleteContactDetail = async (
  id: string,
  targetId: string,
): Promise<void> => {
  const response = await axiosInstance.delete(
    `${config.contactDetailsApiUrlV1}/contactDetails?id=${id}&targetId=${targetId}`,
  );
  return response.data;
};
