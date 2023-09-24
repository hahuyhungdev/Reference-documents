import { Button } from "@components";
import { Typography } from "@components/Typography";
import { Category } from "@features/events/events.type";
import { explorationConfig } from "@features/exploration/exploration.config";
import { useGetNavigation } from "@features/exploration/hooks/navigation";
import Link from "next/link";
import router from "next/router";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { I18nActiveNamespaces } from "types/i18n";

import s from "./index.module.css";
interface Props {
    categoriesList?: Array<Category>;
}

export const HowToCrypto: FC<Props> = ({
    categoriesList = [],
}) => {
    const { t } = useTranslation<I18nActiveNamespaces<"common" | "exploration">>(
        explorationConfig.i18nNamespaces
    )
    const { dataStep } = useGetNavigation();
    // console.log('htwewq', { categoriesList })
    return (
        <div className="m-10">
            <Typography className="font-semibold text-[20px] uppercase mb-[10px]" color="primary">
                {t(`common:navbar-exploration.${router.query.category}` as any)}
            </Typography>
            <p className="text-[#000000] text-[14px] font-nomal">
                {t(`exploration:${router.query.category}.description` as any)}
            </p>
            <div className="my-5 text-center">
                {/* {console.log(categoryMenuLevel3)} */}
                {categoriesList.map((item, index) => {
                    return (
                        <div key={index} className={s["customWidth"]} >
                            <Link
                                href={`/exploration/${item.name}`}
                                passHref
                            >
                                <Button className="mx-auto block my-4 bg-[#E5E7EE] hover:bg-[#f4ac20] h-[60px] w-full px-4 rounded-[4rem]">

                                    <a>
                                        {item.title}
                                    </a>
                                </Button>
                            </Link>

                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default HowToCrypto