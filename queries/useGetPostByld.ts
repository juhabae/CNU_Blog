// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getPostById } from '../api';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useQuery } from '@tanstack/react-query';

const useGetPostById = (postId: string) => {
  const fetchPost = async () => {
    const { data } = await getPostById(postId);
    return data;
  };

  return useQuery({
    queryKey: ['getPostById', postId],
    queryFn: fetchPost,
    enabled: !!postId,
  });
};

export default useGetPostById;
