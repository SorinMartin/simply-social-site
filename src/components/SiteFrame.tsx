import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type SiteFrameProps = {
  children: React.ReactNode;
  pathname?: string;
};

export function SiteFrame({ children, pathname = "/" }: SiteFrameProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--fg)]">
      <Header pathname={pathname} />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
