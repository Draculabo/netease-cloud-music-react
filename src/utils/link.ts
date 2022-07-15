// user
export const linkToUserHomePage = (id: number | undefined) => {
    return id ? `/user/home?id=${id}` : "";
};
