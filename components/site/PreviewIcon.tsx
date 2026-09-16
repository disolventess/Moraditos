const paths = {
  bell: "M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9m4 12h4",
  clock: "M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",
  phone: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 17h2",
  settings: "m9 3 1-2h4l1 2 3 2 2 1v4l-1 2 1 2v4l-3 1-2 2h-5l-2-2-3-1v-4l1-2-1-2V6l2-1 2-2Zm7 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  person: "M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-3a8 8 0 0 1 16 0v3Z",
  volume: "M3 9h4l5-5v16l-5-5H3Zm13-2a7 7 0 0 1 0 10m4-13a11 11 0 0 1 0 16",
  play: "m9 7 7 5-7 5ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",
  pause: "M8 5v14M16 5v14",
  screen: "M3 5h18v14H3Z",
  expand: "M3 8V3h5m8 0h5v5M3 16v5h5m8 0h5v-5",
};
export default function PreviewIcon({ name }: { name: keyof typeof paths }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
