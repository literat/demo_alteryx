import { Fragment } from 'react';
import { nanoid } from 'nanoid';
import { ApolloError } from '@apollo/client';

const Error = ({ error }: { error: ApolloError }): JSX.Element => (
  <>
    {error.graphQLErrors.map(({ message }) => (
      <Fragment key={nanoid()}>
        <div color="danger">{message}</div>
      </Fragment>
    ))}
  </>
);

export default Error;
