import { ArrowRight, ExternalLink, Lock, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { FadeIn, FadeInView } from '@/components/motion';
import { Button } from '@/components/ui/button';

const comparisonData = [
  {
    feature: 'Fund custody',
    csfloat: 'Platform holds your money',
    skinport: 'Platform holds your money',
    jjskin: 'Smart contract on Arbitrum',
  },
  {
    feature: 'Settlement',
    csfloat: 'Platform decides',
    skinport: 'Platform decides',
    jjskin: 'TDX oracle with MPC-TLS proof',
  },
  {
    feature: 'Fees',
    csfloat: '2% + payment fees',
    skinport: '12% seller / 6% buyer',
    jjskin: '0.5% seller only',
  },
  {
    feature: 'Exit scam risk',
    csfloat: 'Possible',
    skinport: 'Possible',
    jjskin: 'Funds are on-chain',
  },
  {
    feature: 'Currency',
    csfloat: 'Fiat (bank transfer)',
    skinport: 'Fiat (bank transfer)',
    jjskin: 'USDC (instant, global)',
  },
] as const;

const steps = [
  {
    step: '01',
    title: 'Buy',
    description: 'Find a skin. Pay with USDC. Funds are locked in a smart contract — not our bank account.',
    icon: Zap,
  },
  {
    step: '02',
    title: 'Trade',
    description: 'Seller sends a Steam trade offer. You accept. The oracle verifies the trade via MPC-TLS inside an Intel TDX enclave.',
    icon: ArrowRight,
  },
  {
    step: '03',
    title: 'Settle',
    description: 'The oracle signs an EIP-712 settlement. The smart contract releases funds automatically. No human involved.',
    icon: Lock,
  },
] as const;

const securityCards = [
  {
    title: 'Non-custodial escrow',
    description: 'USDC is held in a smart contract. No admin function can drain it. Settlement requires a valid oracle signature.',
    icon: Lock,
  },
  {
    title: 'MPC-protected verification',
    description: 'TLSNotary splits TLS session keys via MPC. The oracle participates in verification but cannot forge Steam responses alone.',
    icon: Shield,
  },
  {
    title: 'Intel TDX attestation',
    description: 'The oracle runs inside a TDX confidential VM. Its private key never leaves encrypted memory. Anyone can verify the code via DCAP.',
    icon: Zap,
  },
] as const;

const keyNumbers = [
  { value: '0.5%', label: 'Trading fee' },
  { value: '<3 min', label: 'Settlement time' },
  { value: 'USDC', label: 'On Arbitrum' },
  { value: '65 B', label: 'EIP-712 signature' },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.svg"
              alt="JJSKIN"
              width={100}
              height={52}
              className="h-10 w-auto dark:invert"
              unoptimized
            />
          </Link>
          <nav className="flex items-center gap-8 max-md:hidden">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <Link
              href="/docs/security"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Security
            </Link>
            <Button asChild size="sm" className="rounded-full">
              <Link href="https://app.jjskin.com">
                Launch App
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
              Trade CS2 skins
              <br />
              <span className="text-primary">at 0.5% fees.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Non-custodial marketplace. Settlement by cryptographic proof, not platform promises.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="https://app.jjskin.com">
                  Launch App
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/docs">Read the Docs</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why not another CSFloat? */}
      <section className="border-y border-border py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <FadeInView className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Why not just use CSFloat?</h2>
            <p className="mt-4 text-muted-foreground">
              Every skin marketplace works the same way: deposit money, trust the platform, hope they don&apos;t disappear. JJSKIN works differently.
            </p>
          </FadeInView>

          <FadeInView delay={0.1} className="mt-12 overflow-x-auto">
            <table className="mx-auto w-full max-w-4xl border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 text-left font-medium text-muted-foreground" />
                  <th className="px-4 py-4 text-left font-medium text-muted-foreground">CSFloat</th>
                  <th className="px-4 py-4 text-left font-medium text-muted-foreground">Skinport</th>
                  <th className="px-4 py-4 text-left font-semibold text-primary">JJSKIN</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-3.5 pr-4 font-medium">{row.feature}</td>
                    <td className="px-4 py-3.5 text-muted-foreground">{row.csfloat}</td>
                    <td className="px-4 py-3.5 text-muted-foreground">{row.skinport}</td>
                    <td className="px-4 py-3.5 font-medium">{row.jjskin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeInView>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">How it works</h2>
            <p className="mt-4 text-muted-foreground">Three steps. No middlemen. No custody.</p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((item, i) => (
              <FadeInView key={item.step} delay={i * 0.1} className="group">
                <div className="rounded-2xl border border-border bg-card p-8 transition-colors group-hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-6">
                    <span className="text-sm font-medium text-primary">{item.step}</span>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-y border-border bg-accent/20 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Security by cryptography, not promises</h2>
            <p className="mt-4 text-muted-foreground">
              JJSKIN cannot unilaterally access escrowed funds or forge settlement proofs. This is a mathematical property, not a policy.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-12">
            {securityCards.map((card, i) => (
              <FadeInView key={card.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView delay={0.3} className="mt-12 text-center">
            <Button asChild variant="link" className="px-0">
              <Link href="/docs/security">
                Read the full Security & Trust Model
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {keyNumbers.map((stat) => (
              <FadeInView key={stat.label} className="text-center">
                <div className="text-2xl font-bold lg:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <FadeInView className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Start trading</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              0.5% fees. USDC on Arbitrum. Settlement in under 3 minutes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="https://app.jjskin.com">
                  Launch App
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/docs/security">Security & Trust Model</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo.svg"
                alt="JJSKIN"
                width={80}
                height={42}
                className="h-8 w-auto opacity-60 dark:invert"
                unoptimized
              />
            </Link>
            <nav className="flex gap-8 text-sm text-muted-foreground">
              <Link href="/docs" className="hover:text-foreground">
                Docs
              </Link>
              <Link href="/docs/security" className="hover:text-foreground">
                Security
              </Link>
              <Link href="/docs/contracts" className="hover:text-foreground">
                Contracts
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">Built by Lumio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
