// Simple wallet provider for now - will implement WalletConnect properly
interface WalletProviderProps {
  children: React.ReactNode;
}

export function PrivyWrapper({ children }: WalletProviderProps) {
  return <>{children}</>;
}