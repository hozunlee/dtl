<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import type { PageData } from './$types';
	import Button from '../lib/component/Button.svelte';
	import { page } from '$app/stores';

	export let data: PageData;

	console.log('$page.url.origin :>> ', $page.url.origin);
	let signStat = 'sign_in';

	const toggleSign = () => {
		signStat === 'sign_in' ? (signStat = 'sign_up') : (signStat = 'sign_in');
	};
</script>

<svelte:head>
	<title>살아갈결심</title>
</svelte:head>

<h1>살아갈결심</h1>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view={signStat}
			redirectTo={`http://localhost:5173/main`}
			providers={['google']}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: black' } }}
		/>
		<Button onclick={toggleSign}>Change {signStat === 'sign_in' ? 'sign up' : 'sign in'}</Button>
	</div>
</div>
