<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ supabase } = data);

	onMount(async () => {
		const { data } = await supabase.auth.getSession();
		const { data: profile } = await supabase
			.from('profiles')
			.select(`username, full_name, website, avatar_url`)
			.eq('id', data.session.user.id)
			.single();

		console.log('profile :>> ', profile);
	});
</script>

<h1>자 이제 시작이야</h1>
