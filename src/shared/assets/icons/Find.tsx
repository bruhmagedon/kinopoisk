const Find = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17L13.622 13.622M13.622 13.622C14.748 12.496 15.4444 10.9404 15.4444 9.22222C15.4444 5.78578 12.6587 3 9.22222 3C5.78578 3 3 5.78578 3 9.22222C3 12.6587 5.78578 15.4444 9.22222 15.4444C10.9404 15.4444 12.496 14.748 13.622 13.622Z"
        stroke="#2E2E2E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
};

export default Find;
