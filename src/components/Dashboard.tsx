import NewUser from './NewUser';
import UserListing from './UserListing';

const Dashboard = (): JSX.Element => (
  <div>
    <NewUser />
    <UserListing />
  </div>
);

export default Dashboard;
