import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type SiteFrameProps = {
  children: React.ReactNode;
  pathname?: string;
};

export function SiteFrame({ children, pathname = "/" }: SiteFrameProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.1),_transparent_68%)]" />
      <div className="pointer-events-none absolute -left-36 top-72 -z-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-[36rem] -z-10 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl" />

      <Header pathname={pathname} />

      <main className="pb-4 pt-32 sm:pt-36">{children}</main>

      <Footer />
    </div>
  );
}
