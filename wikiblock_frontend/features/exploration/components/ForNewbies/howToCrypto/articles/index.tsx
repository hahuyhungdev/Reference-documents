import { Button } from "@components";
import Page from "@components/Pagination";
import ItemArticles from "@features/exploration/components/components/item-articles";
import main from "@features/exploration/components/main.module.css";
import { menuAnalysis } from "@features/exploration/data/analysis";
import { explorationConfig } from "@features/exploration/exploration.config";
import { useGetNavigation } from "@features/exploration/hooks/navigation";
import clsx from "clsx";
import { omit } from "lodash";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./index.module.css";

export const Articles = () => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
        explorationConfig.i18nNamespaces
    )
    const { dataStep } = useGetNavigation();
    const router = useRouter();
    return (
        <div className="m-10">
            <div className={clsx(s["contain-nav"])}>
                {dataStep.map((item, index) => {
                    return (
                        <Button key={index} className={clsx("hover:bg-[#f4ac20] bg-[#E5E7EE] h-[50px] p-2 sm:py-3 rounded-[4rem]",
                            { "isActive_Step": item.url?.includes(router.query.step as string) }
                        )}>
                            <Link href={item.url} passHref>
                                <a>{item.title}</a>
                            </Link>
                        </Button>
                    )
                }
                )}
            </div>
            <div className={clsx(main["maincontent"])}>
                {
                    menuAnalysis.map((item, index) => {
                        return (
                            <ItemArticles key={index}
                                {...omit(
                                    item,
                                    ["author", "image_author"]
                                )} />

                        )
                    }
                    )
                }
            </div>
            <div className="text-center my-10">
                <Page />
            </div>
        </div>
    )
}

export default Articles