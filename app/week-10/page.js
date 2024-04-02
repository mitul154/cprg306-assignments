"use client";
import Link from "next/link";
import Button from "../../components/ui/button";
import { useUserAuth } from "./_utils/auth-context";

export default function page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  return (
    <div>
      <h1>Week 10</h1>
      <button className="block" onClick={gitHubSignIn}>
        Sign in with GitHub
      </button>
      <button className="block" onClick={firebaseSignOut}>
        Sign out
      </button>
      {user && (
        <div>
          <p>
            Welcome, {user.displayName} {user.email}
          </p>
          <Link href="/week-10/shopping-list">shopping list</Link>
        </div>
      )}
    </div>
  );
}
