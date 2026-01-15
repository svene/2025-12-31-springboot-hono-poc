
export const SpringUrls = {
	Person: {
		details: (id: number) => `/person/${id}/details`,
		detailsBack: (id: number) => `/person/${id}/detailsback`,
		edit: (id: number) => `/person/${id}/edit`,
		table: () => `/persontable`,
	},
};
