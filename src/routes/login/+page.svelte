<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import type { PageData } from './$types';

	export let data: PageData;

	let signStat = 'sign_in';

	const toogleSign = (params) => {
		if (signStat === 'sign_in') {
			signStat = 'sign_up';
		} else {
			signStat = 'sign_in';
		}
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
			redirectTo={`http://localhost:5173/account`}
			providers={['google']}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: black' } }}
		/>
		<button on:click={toogleSign}>회원가입</button>
	</div>
</div>
