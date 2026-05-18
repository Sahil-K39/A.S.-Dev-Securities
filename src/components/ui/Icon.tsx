import { cn } from "@/lib/utils";

type IconName =
  | "all_inclusive"
  | "arrow_forward"
  | "bolt"
  | "campaign"
  | "chat"
  | "fingerprint"
  | "forum"
  | "history_edu"
  | "movie"
  | "palette"
  | "query_stats"
  | "rocket_launch"
  | "security"
  | "shield_lock"
  | "speed"
  | "token"
  | "visibility";

const iconPaths: Record<IconName, string[]> = {
  all_inclusive: [
    "M7 8.5c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.4 0 2.5-.7 3.4-1.7l3.2-3.6c.9-1 2-1.7 3.4-1.7 2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.4 0-2.5-.7-3.4-1.7l-3.2-3.6C9.5 9.2 8.4 8.5 7 8.5Z"
  ],
  arrow_forward: ["M5 12h14", "m13 6 6 6-6 6"],
  bolt: ["m13 2-9 12h7l-1 8 9-12h-7l1-8Z"],
  campaign: [
    "M4 14h3l9 4V6l-9 4H4v4Z",
    "M7 14v4",
    "M18 10.5c1.2.7 2 1.9 2 3.5s-.8 2.8-2 3.5"
  ],
  chat: ["M5 6h14v10H8l-3 3V6Z", "M8 10h8", "M8 13h5"],
  fingerprint: [
    "M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5",
    "M9 17c.7-1.3 1-2.8 1-5 0-1.1.9-2 2-2s2 .9 2 2c0 3-.5 5.2-1.7 7",
    "M6 16c.6-1.1 1-2.4 1-4 0-2.8 2.2-5 5-5",
    "M12 22c2-2.5 3-5.7 3-10 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 2.8-.6 5-2 6.8",
    "M18.5 18c.4-1.7.5-3.7.5-6 0-3.9-3.1-7-7-7S5 8.1 5 12"
  ],
  forum: [
    "M4 5h12v8H7l-3 3V5Z",
    "M9 15h8l3 3V8h-2",
    "M7 8h6",
    "M7 11h4"
  ],
  history_edu: [
    "M5 19c2-1.5 4-2.2 6-2.2S15 17.5 17 19",
    "M7 5h10v10H7V5Z",
    "M9 8h6",
    "M9 11h4",
    "M5 5l2 2",
    "M19 5l-2 2"
  ],
  movie: ["M4 6h16v12H4V6Z", "M8 6v12", "M16 6v12", "M4 10h16", "M4 14h16"],
  palette: [
    "M12 4a8 8 0 0 0 0 16h1.2c1 0 1.5-1.2.8-2-.6-.7-.1-2 1-2h1a4 4 0 0 0 0-8h-1.2A8 8 0 0 0 12 4Z",
    "M8 11h.1",
    "M10 8h.1",
    "M14 8h.1",
    "M16 11h.1"
  ],
  query_stats: ["M5 19V5", "M5 19h14", "M8 15l3-4 3 2 4-6", "M16 7h2v2"],
  rocket_launch: [
    "M12 14 8 18l-2-4 4-4c2.5-2.5 5.3-4 8-4 0 2.7-1.5 5.5-4 8l-4 4-4-2 4-4Z",
    "M15 9h.1",
    "M6 18l-2 2",
    "M8 20l-2 2"
  ],
  security: ["M12 3 5 6v5c0 4.5 2.9 8.6 7 10 4.1-1.4 7-5.5 7-10V6l-7-3Z", "m9.5 12 1.8 1.8 3.7-4"],
  shield_lock: [
    "M12 3 5 6v5c0 4.5 2.9 8.6 7 10 4.1-1.4 7-5.5 7-10V6l-7-3Z",
    "M9.5 12h5v4h-5v-4Z",
    "M10.5 12v-1.2a1.5 1.5 0 0 1 3 0V12"
  ],
  speed: ["M4 14a8 8 0 0 1 16 0", "M12 14l4-5", "M5 18h14", "M7 14h.1", "M17 14h.1"],
  token: ["M12 3 20 8v8l-8 5-8-5V8l8-5Z", "M12 7v10", "M8 10l4-3 4 3", "M8 14l4 3 4-3"],
  visibility: [
    "M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z",
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
  ]
};

type IconProps = {
  name: IconName | string;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const paths = iconPaths[name as IconName] || iconPaths.bolt;

  return (
    <svg
      aria-hidden="true"
      className={cn("inline-block h-[1em] w-[1em] shrink-0", className)}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths.map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  );
}
