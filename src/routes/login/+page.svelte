<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import type { PageData } from './$types';
	import Button from '../lib/component/Button.svelte';
	import { page } from '$app/stores';

	export let data: PageData;

	let findEmail = '';

	console.log('$page.url.origin :>> ', $page.url.origin);
	let signStat = 'sign_in';

	const toggleSign = () => {
		signStat === 'sign_in' ? (signStat = 'sign_up') : (signStat = 'sign_in');
	};

	const findEmailHandle = async () => {
		const { error } = await data.supabase.auth.resetPasswordForEmail(findEmail);

		if (error) {
			console.log(error.message);
			return;
		}

		console.log('Password reset email sent');
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
			redirectTo={`${$page.url.origin}/main`}
			providers={['google']}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: black' } }}
		/>
		<Button onclick={toggleSign}>Change {signStat === 'sign_in' ? 'sign up' : 'sign in'}</Button>

		<div>
			<div>비밀번호를 잊어버렸을 때</div>
			<form action="">
				<input type="text" bind:value={findEmail} />
				<button on:click={findEmailHandle}>비밀번호 재설정</button>
			</form>
		</div>
	</div>
</div>
