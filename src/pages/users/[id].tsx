// @ts-nocheck
import { useRouter } from 'next/router';
import UpdateUser from '../../components/UpdateUser';

const Update = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  return <UpdateUser id={id} />;
};

export default Update;
