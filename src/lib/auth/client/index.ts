import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient();

export const githubSignin = () => {
  authClient.signIn.social({
    provider: 'github',
  })
};