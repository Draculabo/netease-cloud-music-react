import { footerImages, footerLinks } from "@/configs/local-data";
import { memo } from "react";
import { FooterLeft, FooterRight, FooterWrapper } from "./style";

export const CMFooter = memo(() => {
    return (
        <div style={{ borderTop: "1px solid #d3d3d3" }}>
            <FooterWrapper className="wrap-v2">
                <FooterLeft>
                    <p className="first-line">
                        {footerLinks.map((value, index) => {
                            return (
                                <a
                                    key={index}
                                    href={value.link}
                                    rel={"noreferrer"}
                                    target={"_blank"}
                                >
                                    {value.title}
                                </a>
                            );
                        })}
                    </p>
                    <p className="second-line">
                        <span>网易公司版权所有©1997-2022</span>
                        <span>杭州乐读科技有限公司运营：</span>
                        <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">
                            浙网文[2021] 1186-054号
                        </a>
                    </p>
                    <p className="third-line">
                        <a
                            href="https://beian.miit.gov.cn/#/Integrated/index"
                            rel="noreferrer"
                            target="_blank"
                        >
                            粤B2-20090191-18 工业和信息化部备案管理系统网站
                        </a>
                        <a
                            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            浙公网安备 33010902002564号
                        </a>
                    </p>
                </FooterLeft>
                <FooterRight>
                    {footerImages.map((value, index) => {
                        return (
                            <div key={index} className="unit">
                                <a className="logo-amped" href={value.link} />
                                <span>{value.title}</span>
                            </div>
                        );
                    })}
                </FooterRight>
            </FooterWrapper>
        </div>
    );
});
