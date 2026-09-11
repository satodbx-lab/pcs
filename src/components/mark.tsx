export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 2.5 27 6.5v9.2c0 7.4-4.7 12.4-11 13.8C9.7 28.1 5 23.1 5 15.7V6.5L16 2.5Z"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M16 2.5 27 6.5v9.2c0 7.4-4.7 12.4-11 13.8C9.7 28.1 5 23.1 5 15.7V6.5L16 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10.5 16.2 14.6 20l7-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
