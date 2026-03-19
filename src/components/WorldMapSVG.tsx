const WorldMapSVG = () => (
  <svg
    viewBox="0 0 1000 500"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ zIndex: 2, opacity: 0.06 }}
  >
    {/* North America */}
    <path d="M 80,60 L 120,50 L 180,55 L 240,70 L 260,100 L 280,140 L 260,180 L 240,200 L 200,220 L 160,210 L 140,180 L 100,160 L 80,140 L 60,100 Z" fill="white" />
    {/* Central America */}
    <path d="M 200,220 L 220,240 L 210,270 L 190,280 L 180,260 L 190,240 Z" fill="white" />
    {/* South America */}
    <path d="M 210,280 L 240,290 L 270,320 L 280,370 L 270,420 L 250,450 L 230,440 L 220,400 L 200,360 L 190,320 L 195,290 Z" fill="white" />
    {/* Greenland */}
    <path d="M 260,30 L 300,25 L 330,35 L 320,60 L 290,65 L 265,50 Z" fill="white" />
    {/* Europe */}
    <path d="M 440,70 L 470,60 L 510,65 L 530,80 L 520,110 L 500,130 L 470,135 L 450,120 L 435,100 Z" fill="white" />
    {/* UK */}
    <path d="M 420,75 L 435,70 L 440,85 L 430,95 L 418,88 Z" fill="white" />
    {/* Scandinavia */}
    <path d="M 480,30 L 500,25 L 510,45 L 505,70 L 490,65 L 480,50 Z" fill="white" />
    {/* Africa */}
    <path d="M 460,160 L 500,150 L 540,170 L 560,220 L 550,300 L 530,360 L 500,380 L 470,360 L 450,300 L 440,240 L 445,190 Z" fill="white" />
    {/* Russia */}
    <path d="M 530,40 L 600,30 L 700,35 L 800,45 L 850,60 L 840,80 L 780,90 L 700,85 L 620,80 L 560,75 L 535,60 Z" fill="white" />
    {/* Middle East */}
    <path d="M 560,130 L 600,120 L 630,140 L 620,170 L 590,180 L 560,165 Z" fill="white" />
    {/* India */}
    <path d="M 640,160 L 670,150 L 700,170 L 690,220 L 660,250 L 640,230 L 635,190 Z" fill="white" />
    {/* China/East Asia */}
    <path d="M 700,80 L 760,70 L 810,90 L 800,130 L 770,150 L 730,145 L 700,120 Z" fill="white" />
    {/* Southeast Asia */}
    <path d="M 720,160 L 760,155 L 780,175 L 770,200 L 740,210 L 720,195 Z" fill="white" />
    {/* Japan */}
    <path d="M 830,90 L 845,85 L 850,105 L 840,120 L 828,110 Z" fill="white" />
    {/* Australia */}
    <path d="M 780,320 L 840,300 L 890,320 L 900,370 L 870,400 L 820,410 L 780,380 L 770,350 Z" fill="white" />
  </svg>
);

export default WorldMapSVG;
