// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TAG } from '../api/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { updatePostById } from '../api';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useMutation } from '@tanstack/react-query';

const useUpdatePostById = () => {
  const mutation = async ({ postId, title, contents, tag }: { postId: string; title: string; contents: string; tag: TAG }) => {
    await updatePostById(postId, title, contents, tag);
  };

  return useMutation({
    mutationKey: ['updatePost'],
    mutationFn: mutation,
  });
};
export default useUpdatePostById;
