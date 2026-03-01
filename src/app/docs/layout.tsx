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
            src="/logo/logo-full.svg"
            alt="JJSKIN"
            width={100}
            height={32}
            className="h-7 w-auto"
            unoptimized
          />
        ),
        url: '/',
      }}
      githubUrl="https://github.com/lumio-it"
      links={[
        {
          text: 'Launch App',
          url: 'https://jjskin.com',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
