import { dataColumn } from "@features/news/data/dataColum";
import { newsConfig } from "@features/news/news.config";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import main from "../news.module.css";
import s from "./footer.module.css";

type colProps = {
    title: string,
    listvalue: string[]
}
export const Col: FC<colProps> = ({ title, listvalue }) => {
    return (
        <div className={clsx(s["col"])}>
            <h4>{title}</h4>
            <ul>
                {listvalue.map((item: string, index) => {
                    return (
                        <li key={index}><a href="#">{item}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}
export const Footer = () => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "events" | "news">>(
        newsConfig.i18nNamespaces
    )
    return (
        <footer className={clsx(main["footer"])}>
            <div className={clsx(s["container"])}>
                <div className={clsx(s["cols"])}>
                    {dataColumn.map((item, index) => {
                        return (
                            <Col key={index} title={item.title} listvalue={item.listNews} />
                        )
                    })}
                </div>
                <div className={clsx(s["footer-disclaimer"])}>
                    <p>
                        <strong>Disclaimer:</strong>
                        By using this website, you agree to our
                        <Link href="/news/demo" passHref>
                            <a>Terms and Conditions</a>
                        </Link>
                        <Link href="/news/demo" passHref>
                            <a>Privacy Policy</a>
                        </Link>
                        CryptoSlate has no affiliation or relationship with any coin, business, project or event unless explicitly stated otherwise. CryptoSlate is only an informational website that provides news about coins, blockchain companies, blockchain products and blockchain events. None of the information you read on CryptoSlate should be taken as investment advice. Buying and trading cryptocurrencies should be considered a high-risk activity. Please do your own diligence before making any investment decisions. CryptoSlate is not accountable, directly or indirectly, for any damage or loss incurred, alleged or otherwise, in connection to the use or reliance of any content you read on the site.
                    </p>
                </div>
                <div className={clsx(s["copyright"])}>
                    <p>© 2022 Wikiblock. All rights reserved.
                        <Link href="/news/demo" passHref>
                            <a>Terms</a>
                        </Link>
                        |
                        <Link href="/news/demo" passHref>
                            <a>Privacy</a>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}