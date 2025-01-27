import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";
// import i18n from "./src/i18n"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
    /* config options here */

};

export default withNextIntl(nextConfig);
