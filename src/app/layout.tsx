import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'JJSKIN — Non-custodial CS2 Skin Trading',
    template: '%s | JJSKIN',
  },
  description:
    'Trade CS2 skins at 0.5% fees. Non-custodial escrow on Arbitrum, settled by cryptographic proof.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
