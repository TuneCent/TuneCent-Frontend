"use client";

import { PrivyProvider } from '@privy-io/react-auth';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../config/wagmi';

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        // Login methods - users can choose any of these
        // Note: Social logins (google, twitter, discord, github) require OAuth setup in Privy dashboard
        loginMethods: ['email', 'wallet'],

        // Embedded wallet configuration
        embeddedWallets: {
          createOnLogin: 'users-without-wallets', // Auto-create wallets for email/social login users
          requireUserPasswordOnCreate: false, // Simplify onboarding
        },

        // Appearance customization
        appearance: {
          theme: 'dark',
          accentColor: '#10b981', // Green accent color matching TuneCent theme
          logo: '/logo.png', // You can add your logo to public folder
          landingHeader: 'Welcome to TuneCent',
          loginMessage: 'Connect your wallet or sign in to get started',
        },

        // Supported wallets for external connections
        supportedChains: config.chains,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
