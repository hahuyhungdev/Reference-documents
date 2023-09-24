import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const customStaticProps =
  (
    getStaticProps: GetStaticProps | null,
    namespaces: string[] = []
  ): GetStaticProps =>
  async (context) => {
    // Translation
    const locale = context.locale || context.defaultLocale || "vi"; // Vietnamese (vi) by default
    const translationProps = await serverSideTranslations(locale, namespaces);

    // getStaticProps
    if (typeof getStaticProps === "function") {
      const { props, ...rest }: any = await getStaticProps(context);
      return {
        ...rest,
        props: { ...props, ...translationProps },
      };
    }

    return {
      props: { ...translationProps },
    };
  };

export default customStaticProps;
