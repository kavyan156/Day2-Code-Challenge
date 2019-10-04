import gql from 'graphql-tag';

export const USER_DETAILS_QUERY = gql`
query {
  allUsers {
    id
    email
    name
  }
}

`;

export const ADD_USER = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
     name
     email
    }
  }
`;
