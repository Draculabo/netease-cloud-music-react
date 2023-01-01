// user
export const linkToUserHomePage = (id?: number) => {
    return id ? `/user/home?id=${id}` : "";
};
// playlist
export const linkToPlaylistDetailPage = (id?: number) => {
    return id ? `/playlist-detail?id=${id}` : "";
};
export const linkToPlaylistPageByCat = (cat: string) => {
    return `/playlist?cat=${cat}`;
};
