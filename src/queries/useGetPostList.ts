// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getPostList } from '../api';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useQuery } from '@tanstack/react-query';

const useGetPostList = () => {
  const fetcher = async () => {
    const { data } = await getPostList();
    return data;
  };

  return useQuery({
    queryKey: ['getPostList'],
    queryFn: fetcher,
  });
};

export default useGetPostList;
