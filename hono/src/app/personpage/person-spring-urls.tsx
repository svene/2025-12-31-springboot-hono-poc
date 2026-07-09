
export const PersonSpringUrls = {
	Person: {
		details: (id: number) => `/person/${id}/details`,
		detailsBack: (id: number) => `/person/${id}/detailsback`,
		edit: (id: number) => `/person/${id}/edit`,
		editBack: (id: number) => `/person/${id}/editback`,
		table: () => `/persontable`,
	},
};
