// Route table (signed-in pages; the public auth pages are declared in App.tsx). Keys match the generated page component names in src/pages/generated.
export const ROUTES = {
  Main: "/", Mobile: "/mobile",
  Education: "/education", Course: "/education/course", Lesson: "/education/lesson", Assignment: "/education/assignment", AssignResult: "/education/assignment/result",
  Tasks: "/education/tasks", Results: "/education/results", Materials: "/education/materials", Group: "/education/group", Practical: "/education/practical",
  Hub: "/hub", MyRepos: "/hub/mine", NewRepo: "/hub/new", GroupWorks: "/hub/group-works",
  Repo: "/hub/repo", RepoTalk: "/hub/repo/talk", RepoSuggest: "/hub/repo/suggestions", RepoQuiz: "/hub/repo/quiz", RepoArticle: "/hub/repo/article",
  RepoMedia: "/hub/repo/media", RepoVersions: "/hub/repo/versions", RepoSettings: "/hub/repo/settings", RepoFile: "/hub/repo/file",
  Community: "/community", Question: "/community/question", Ask: "/community/ask", Chat: "/community/chat", StudyGroups: "/community/groups", Mentors: "/community/mentors", Saved: "/community/saved",
  Challenges: "/challenges", Problem: "/challenges/problem", Modelling: "/challenges/modelling", ChLists: "/challenges/lists", GroupContest: "/challenges/contest",
  Leaderboard: "/leaderboard", Ranks: "/ranks", Calendar: "/calendar", Help: "/help", Notifications: "/notifications", Profile: "/profile", Settings: "/settings",
} as const;
export type PageName = keyof typeof ROUTES;
