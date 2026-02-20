type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-slate-300 bg-white shadow-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
      </span>
      <span className="text-base font-semibold tracking-tight text-slate-900">
        Simply Social
      </span>
    </div>
  );
}
