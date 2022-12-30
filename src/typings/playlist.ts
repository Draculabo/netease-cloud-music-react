// 榜单详情
export interface ITrack {
    id: number;
    name: string;
    [propName: string]: any;
}

export interface IPlayListDetail {
    id: number;
    name: string;
    coverImgUrl: string;
    commentCount: number;
    playCount: number;
    shareCount: number;
    updateFrequency: string;
    updateTime: number;
    trackCount: number;
    tracks: ITrack[];
    [propName: string]: any;
}
