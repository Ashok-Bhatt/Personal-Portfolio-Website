export const GITHUB_API_QUERIES = {
    GITHUB_CONTRIBUTION_COUNT_QUERY: `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
                contributionsCollection(from: $from, to: $to) {
                    pullRequestContributions(first: 1) { totalCount }
                    issueContributions(first: 1) { totalCount }
                    totalCommitContributions
                    pullRequestReviewContributions(first: 1) { totalCount }
                    repositoryContributions(first: 1) { totalCount }
                    restrictedContributionsCount
                }
            }
        }
    `,
    GITHUB_YEARLY_CONTRIBUTION_CALENDAR_QUERY: `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
                contributionsCollection(from: $from, to: $to) {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                            }
                        }
                    }
                }
            }
        }
    `,
};
