export default function StepIcon({ step }: { step: number }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {step === 1 ? <>
      <path d="m16 10-3-5m19 5 3-5" />
      <path d="M12 20a12 12 0 0 1 24 0Z" fill="currentColor" stroke="none" />
      <circle cx="19" cy="15" r="1.2" fill="var(--page-bg)" stroke="none" /><circle cx="29" cy="15" r="1.2" fill="var(--page-bg)" stroke="none" />
      <rect x="12" y="22" width="24" height="16" rx="2" fill="currentColor" stroke="none" />
      <path d="M7 24v11m34-11v11M18 38v6m12-6v6" strokeWidth="4.5" />
    </> : step === 2 ? <>
      <rect x="8" y="9" width="32" height="24" rx="2" /><path d="M5 33h38l2 6H3l2-6Zm14 3h10" />
      <image href="/hero/moraditos-logo.svg" x="16" y="14" width="16" height="14" />
    </> : <>
      <path d="M6 19h8l10-9v28l-10-9H6Z" /><path d="M31 17a11 11 0 0 1 0 14m6-20a20 20 0 0 1 0 26" />
    </>}
  </svg>;
}
