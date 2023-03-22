import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals: { getSession } }) => {
	return {
		session: getSession()
	};
};
