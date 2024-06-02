// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useMutation } from '@tanstack/react-query';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { deletePostById } from '../api';
import { useNavigate } from 'react-router-dom';

const useDeletePostById = () => {
  const navigate = useNavigate();

  const mutate = async ({ postId }: { postId: string }) => {
    const { data } = await deletePostById(postId);
    return data;
  };

  return useMutation({
    mutationFn: mutate,
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {
      alert('게시글 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });
};

export default useDeletePostById;
