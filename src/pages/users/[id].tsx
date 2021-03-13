import { useRouter } from 'next/router';
import UpdateUser from '../../components/UpdateUser';

const Update = () => {
  const router = useRouter();
  const { id } = router.query;

  return <UpdateUser id={id} />;
};

export default Update;
