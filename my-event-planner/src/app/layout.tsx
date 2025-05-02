// app/layout.tsx
export const metadata = {
  title: 'My Event Planner',
  description: 'Plan and manage your events easily.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
