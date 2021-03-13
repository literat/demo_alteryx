interface UserFormProps {
  onSubmit: () => void;
  onChange: () => void;
  buttonLabel: string;
  inputs: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
  loading: boolean;
}

const UserForm = ({
  onSubmit,
  onChange,
  buttonLabel,
  loading,
  inputs,
}: UserFormProps): JSX.Element => (
  <form method="post" onSubmit={onSubmit}>
    <fieldset disabled={loading} aria-busy={loading} data-testid="loading">
      <label htmlFor="firstName">
        First name
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={inputs.firstName}
          onChange={onChange}
          autoComplete="firstName"
        />
      </label>
      <label htmlFor="lastName">
        Last name
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={inputs.lastName}
          onChange={onChange}
          autoComplete="lastName"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          placeholder="email"
          value={inputs.email}
          onChange={onChange}
          autoComplete="email"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password}
          onChange={onChange}
          autoComplete="new-password"
        />
      </label>

      <button type="submit">{buttonLabel}</button>
    </fieldset>
  </form>
);

export default UserForm;
