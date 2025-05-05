<script lang="ts">
    import GithubOAuth from "./GithubOAuth.svelte";
</script>

<!-- @component Card which contains all sign-in options -->
<div class="w-full flex flex-col justify-center items-center gap-8">
    <p class="text-4xl">We've been expecting you.</p>
    <div class="w-80 max-sm:w-full p-4">
        <div class="w-full p-4 rounded-md bg-base-300">
            <GithubOAuth />
        </div>
    </div>
</div>