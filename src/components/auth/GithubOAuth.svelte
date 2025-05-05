<script lang="ts">
    import { IconBrandGithubFilled } from "@tabler/icons-svelte";

    import AuthJsSignIn from "./AuthJsSignIn.svelte";
</script>

<AuthJsSignIn providerId="github" class="w-full h-10 flex justify-center items-center text-base-content btn-neutral">
    <IconBrandGithubFilled />
    Sign in with GitHub
</AuthJsSignIn>
