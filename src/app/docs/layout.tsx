import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import Image from 'next/image';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <Image
            src="/logo/logo.png"
            alt="JJSKIN"
            width={100}
            height={52}
            className="h-8 w-auto"
          />
        ),
        url: '/',
      }}
      links={[
        {
          text: 'Docs',
          url: '/docs',
          active: 'nested-url',
        },
        {
          text: 'Security',
          url: '/docs/security',
        },
        {
          text: 'Launch App',
          url: 'https://app.jjskin.com',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
