import { API_HOST } from '@constants';
import type {
  GetGroupsResponseBody,
  ErrorResponseBody,
} from '#types/ApiResponseTypes';

const apiGetGroups = async (
  year: string | null,
  month: string | null,
  week: string | null,
): Promise<GetGroupsResponseBody | undefined> => {
  const url = new URL(`${API_HOST}/boogako/dailyscrum/groups`);
  if (year && month && week) {
    url.searchParams.set('year', year);
    url.searchParams.set('month', month);
    url.searchParams.set('week', week);
  }

  const response = await fetch(url);

  const responseBody: GetGroupsResponseBody | ErrorResponseBody =
    await response.json();

  if (!response.ok || 'details' in responseBody)
    throw new Error(
      `Todo 목록을 가져오던 중 문제가 발생했습니다. : ${
        'details' in responseBody ? responseBody?.details : response.status
      }`,
    );

  return responseBody;
};

export default apiGetGroups;
