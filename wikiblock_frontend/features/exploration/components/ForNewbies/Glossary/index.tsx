import { SearchInput } from "@components";
import { Typography } from "@components/Typography";
import { datalphabet } from "@features/exploration/data/alphabet";
import { postGlossary } from "@features/exploration/data/postGlossary";
import { explorationConfig } from "@features/exploration/exploration.config";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./index.module.css";
export const Glossary: any = () => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
        explorationConfig.i18nNamespaces
    )
    const router = useRouter();
    return (
        <div className="m-10">
            <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
                {t("common:navbar-exploration.glossary")}
            </Typography>
            <p className="text-[#000000] text-[14px] font-nomal my-2">
                {t("exploration:glossary.description")}
            </p>
            <div className="my-5">
                <div className={clsx(s["phabet"])}>
                    {
                        datalphabet.map((item, index: number) => {
                            return (
                                <div key={index} className={clsx(s["alphabetItem"]
                                )}>
                                    <span>
                                        {
                                            item.name
                                        }
                                    </span>
                                </div>
                            )
                        }
                        )}
                </div>
                <div className="my-5">
                    <SearchInput className="w-1/4 h-[40px] sm:w-full" />
                </div>
                <div className={clsx(s["post"])}>
                    {
                        postGlossary.map((item, index: number) => {
                            return (
                                <Link key={index} href={item.url as string} passHref>
                                    <a className={clsx(s[""])}>
                                        <div className={clsx(s["content"])}>
                                            <h2>
                                                {item.title}
                                            </h2>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </a>
                                </Link>
                            )
                        }
                        )}

                </div>
            </div>
        </div >
    )
}

export default Glossary