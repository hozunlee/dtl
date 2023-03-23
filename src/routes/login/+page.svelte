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

<Auth
	supabaseClient={data.supabase}
	view="sign_in"
	redirectTo={`http://localhost:5173/account`}
	providers={['google']}
	showLinks={false}
	appearance={{ theme: ThemeSupa, style: { input: 'color: black' } }}
/>

<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/logging-in?redirect=/`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: black' } }}
		/>
	</div>
</div>
