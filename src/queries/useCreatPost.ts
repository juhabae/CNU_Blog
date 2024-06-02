// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TAG } from '../api/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPost } from '../api';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useMutation } from '@tanstack/react-query';

const useCreatePost = () => {
  const mutation = async ({ title, contents, tag }: { title: string; contents: string; tag: TAG }) => {
    await createPost(title, contents, tag);
  };

  return useMutation({
    mutationKey: ['createPost'],
    mutationFn: mutation,
  });
};

export default useCreatePost;
