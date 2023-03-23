<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>살아갈결심</title>
</svelte:head>

<h1>살아갈결심</h1>

<button><a href="/login">email로 로그인</a></button>
