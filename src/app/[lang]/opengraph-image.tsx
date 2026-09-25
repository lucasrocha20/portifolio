import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";

export const alt = `${profile.name}, ${profile.role.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Same palette as the dark theme in globals.css.
const colors = { bg: "#0b1221", fg: "#e2e8f0", muted: "#94a3b8", accent: "#5eead4" };

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: colors.bg,
          color: colors.fg,
          borderLeft: `16px solid ${colors.accent}`,
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
        <div style={{ marginTop: 16, fontSize: 40, color: colors.accent }}>
          {profile.role[locale]}
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: colors.muted, maxWidth: 900 }}>
          {profile.tagline[locale]}
        </div>
        <div style={{ marginTop: 56, fontSize: 24, color: colors.muted }}>
          {profile.links.github.replace("https://", "")}
        </div>
      </div>
    ),
    size,
  );
}
