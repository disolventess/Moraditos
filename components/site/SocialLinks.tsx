import { site } from "../../config/site";
const networks = [
  { key: "instagram", label: "Instagram", path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm9 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17.5 6.5h.01" },
  { key: "tiktok", label: "TikTok", path: "M14 3v12a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V3h3Zm0 0c0 4 3 6 6 6V6c-2 0-3-1-3-3" },
  { key: "facebook", label: "Facebook", path: "M14 21v-8h3l1-4h-4V7c0-1 .5-2 2-2h2V2h-3c-3 0-5 2-5 5v2H7v4h3v8" },
] as const;
export default function SocialLinks() {
  return <div className="footer-social"><h2>Redes sociales</h2><ul>
    {networks.map(({ key, label, path }) => {
      const url = site.social[key];
      const content = <><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg>{label}</>;
      return <li key={key}>{url ? <a href={url} target="_blank" rel="noopener noreferrer">{content}</a> : <span aria-disabled="true" title="Perfil próximamente">{content}</span>}</li>;
    })}
  </ul></div>;
}
