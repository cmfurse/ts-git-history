import { GraphQLClient } from "graphql-request";

export const getHistory = async () => {
  const endpoint = "https://api.github.com/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`
    },
  });

  const query = /* GraphQL */ `
  {
    repository(name: "ts-git-history", owner: "cmfurse") {
      ref(qualifiedName: "master") {
        name
        target {
          ... on Commit {
            id
            history(first: 10) {
              pageInfo {
                hasNextPage
                endCursor
              }
              edges {
                node {
                  message
                  committedDate
                  author {
                    name
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const data = await graphQLClient.request(query);
  return data;
};
