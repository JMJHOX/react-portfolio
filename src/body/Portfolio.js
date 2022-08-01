import { useQuery, gql } from "@apollo/client";
import { MultiActionAreaCard } from "./../components/Card";
import "./Portfolio.css";

const REPO_DATA = gql`
  query GithubUserRequest {
    user(login: "JMJHOX") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            resourcePath
            stargazerCount
          }
        }
      }
    }
  }
`;

export function Portfolio() {
  const { data } = useQuery(REPO_DATA);
  const userRepoGraph = data?.user.pinnedItems.nodes;
  console.log(userRepoGraph);
  return (
    <div id="portfolio">
      <p>Top proyectos realizados </p>
      <div className="container-custom">
        {userRepoGraph?.map((e) => {
          return (
            <MultiActionAreaCard
              name={e.name}
              desc={e.description}
              stars={e.stargazerCount}
              urlPath={e.url}
            />
          );
        })}
      </div>
    </div>
  );
}
