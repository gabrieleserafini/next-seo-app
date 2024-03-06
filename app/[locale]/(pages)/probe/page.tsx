import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <p>PROBE 200</p>
    </>
  );
};

export default Page;
