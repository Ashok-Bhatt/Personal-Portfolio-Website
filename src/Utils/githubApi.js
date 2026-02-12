import axios from "axios";
import { ENV } from "../config/env.js";

// Helper for GitHub GraphQL queries
const githubGraphQlQuery = async (query, variables = {}) => {
    try {
        const response = await axios.post("https://api.github.com/graphql",
            { query, variables },
            {
                headers: {
                    Authorization: `token ${ENV.GITHUB_TOKEN}`,
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
    try {
        const response = await axios.get(`https://api.github.com/${endpoint}`, {
            headers: {
                Authorization: `token ${ENV.GITHUB_TOKEN}`,
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
