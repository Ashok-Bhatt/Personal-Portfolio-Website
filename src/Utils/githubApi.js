import axios from "axios";

// Helper for GitHub GraphQL queries
const githubGraphQlQuery = async (query, variables = {}) => {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    try {
        const response = await axios.post("https://api.github.com/graphql",
            { query, variables },
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github+json"
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("GitHub GraphQL Error:", error);
        return null;
    }
};

// Helper for GitHub REST API queries
const githubRestApiQuery = async (endpoint) => {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    try {
        const response = await axios.get(`https://api.github.com/${endpoint}`, {
            headers: {
                Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : "",
                Accept: "application/vnd.github+json",
            }
        });
        return response.data;
    } catch (error) {
        console.error("GitHub REST Error:", error);
        return null;
    }
};

export {
    githubGraphQlQuery,
    githubRestApiQuery
};
