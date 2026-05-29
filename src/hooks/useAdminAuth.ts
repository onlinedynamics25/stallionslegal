import { useAuth } from "@/contexts/AuthContext";

/**
 * Backwards-compatible hook. Route protection is now handled by <ProtectedRoute />.
 */
export function useAdminAuth() {
  const { user, isAdmin, loading } = useAuth();
  return { loading, isAdmin, email: user?.email ?? null };
}
