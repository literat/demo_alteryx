import { FormEvent } from 'react';
import useForm from '../lib/useForm';

export type UserInputs = {
  firstName: string, lastName: string, email: string, password: string
};

interface UserFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>, inputs: UserInputs | {}) => void;
  buttonLabel: string;
  loading: boolean;
  initialUser: UserInputs | null;
}

const UserForm = ({
  onSubmit,
  buttonLabel,
  loading,
  initialUser,
}: UserFormProps): JSX.Element => {
  const { inputs, handleChange } = useForm(
    initialUser || { firstName: '', lastName: '', email: '', password: '' }
  );

  return (
    <form method="post" onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e, inputs)}>
      <fieldset disabled={loading} aria-busy={loading} data-testid="loading">
        <label htmlFor="firstName">
          First name
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            // @ts-ignore
            value={inputs.firstName}
            onChange={handleChange}
            autoComplete="firstName"
          />
        </label>
        <label htmlFor="lastName">
          Last name
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            // @ts-ignore
            value={inputs.lastName}
            onChange={handleChange}
            autoComplete="lastName"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            // @ts-ignore
            value={inputs.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            // @ts-ignore
            value={inputs.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </label>

        <button type="submit">{buttonLabel}</button>
      </fieldset>
    </form>
  );
};

export default UserForm;
