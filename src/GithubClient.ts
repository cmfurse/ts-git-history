import { GraphQLClient } from 'graphql-request';

export class GithubClient {
  private readonly GITHUB_ENDPOINT = 'https://api.github.com/graphql';
  private readonly QUERY = `
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

  private graphQLClient: GraphQLClient;

  constructor() {
    this.graphQLClient = new GraphQLClient(this.GITHUB_ENDPOINT, {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      },
    });
  }

  public async getHistory() {
    return await this.graphQLClient.request(this.QUERY);
  }
}
