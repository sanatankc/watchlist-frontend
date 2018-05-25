import gql from "graphql-tag"

export default (username, password) => gql`{
  login(username: username, password: password)
}`