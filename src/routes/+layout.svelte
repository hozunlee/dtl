<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import Button from './lib/component/Button.svelte';

	export let data: LayoutData;

	let isLogin = false;

	$: ({ supabase } = data);

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.error(error);
			return alert('로그아웃에서 에러가 발생!!');
		}
		isLogin = false;
		alert('로그아웃됨 바이');
		goto('/');
	};

	onMount(async () => {
		const {
			data: { session }
		} = await supabase.auth.getSession();

		if (session) isLogin = true;

		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>살아갈 결심</title>
</svelte:head>

<nav>
	<a href="/">home</a>
	<a href="/account">about</a>
	{#if isLogin}
		<Button onclick={handleLogout}>로그아웃</Button>
	{/if}
</nav>

<div class="container" style="padding: 50px 0 100px 0">
	<slot />
</div>
