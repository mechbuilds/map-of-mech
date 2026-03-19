const GRAIN_SVG = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

const FilmGrain = () => (
  <>
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 1,
        opacity: 0.032,
        backgroundImage: `url("${GRAIN_SVG}")`,
      }}
    />
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 1,
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.035) 2px, rgba(0,0,0,0.035) 4px)",
      }}
    />
  </>
);

export default FilmGrain;
