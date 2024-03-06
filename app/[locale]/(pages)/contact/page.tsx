import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import Contact2 from '~/components/widgets/Contact2';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero {...heroContact} />
      <Contact2 {...contact2Contact} />
      <Features2 {...features2Contact} />
    </>
  );
};

export default Page;
