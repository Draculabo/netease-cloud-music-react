import React from "react";
import { DownloadTipWrapper } from "@/components/DownloadTip/DownloadTip.style";

function DownloadClientTips() {
    return (
        <DownloadTipWrapper>
            <div className="text">查看更多内容，请下载客户端</div>
            <a
                href="https://music.163.com/#/download"
                target="_blank"
                className="btn"
                rel="noreferrer"
            >
                立即下载
            </a>
        </DownloadTipWrapper>
    );
}

export default DownloadClientTips;
