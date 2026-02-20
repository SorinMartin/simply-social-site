type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-300/80 bg-gradient-to-br from-white to-slate-100 shadow-sm">
        <span className="relative h-3 w-3 rounded-full bg-slate-900">
          <span className="absolute -right-1.5 -top-1.5 h-2 w-2 rounded-full bg-emerald-600" />
        </span>
      </span>
      <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
        Simply Social
      </span>
    </div>
  );
}
