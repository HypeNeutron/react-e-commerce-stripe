import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from '../../components';

export default function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Section>
        <Loading />
      </Section>
    );
  }
  if (error) {
    return (
      <Section>
        <h1>{error.message}</h1>
      </Section>
    );
  }
  return children;
}

const Section = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
