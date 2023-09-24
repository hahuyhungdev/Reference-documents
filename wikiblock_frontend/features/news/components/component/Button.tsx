import clsx from 'clsx'
import Link from 'next/link'
import React, { FC } from 'react'

import main from "../news.module.css";

export const ButtonLoadMore: FC<any> = ({
    title,
}) => {
    return (
        <Link href="/news" passHref>
            <a className={clsx(main["load-more"])}>
                <div className="flex justify-center items-center gap-1 cursor-pointer">
                    <span className="cursor-pointer">{title}</span>
                </div>
            </a>
        </Link>
    )
}
