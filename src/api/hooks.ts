import { useQuery } from "@tanstack/react-query";
import { api } from "./client";

// Endpoints exist in the Django backend (apps/users, apps/education, apps/challenges). Response types stay loose
// until the pages are wired to live data.
export const useMeStats = () => useQuery({ queryKey: ["me", "stats"], queryFn: () => api<Record<string, unknown>>("/me/stats/") });
export const useCourses = () => useQuery({ queryKey: ["courses"], queryFn: () => api<unknown[]>("/courses/") });
export const useChallenges = () => useQuery({ queryKey: ["challenges"], queryFn: () => api<unknown[]>("/challenges/") });
export const useLeaderboard = (scope: string) => useQuery({ queryKey: ["leaderboard", scope], queryFn: () => api<unknown[]>(`/leaderboard/?scope=${scope}`) });
