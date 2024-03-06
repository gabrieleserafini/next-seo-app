'use client';
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => (
  <NextUIProvider>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  </NextUIProvider>
);

export default Providers;
