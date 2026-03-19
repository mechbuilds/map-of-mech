interface PhilippineSVGProps {
  active: boolean;
}

const PhilippineSVG = ({ active }: PhilippineSVGProps) => (
  <svg
    viewBox="720 130 90 110"
    className="absolute pointer-events-none transition-all duration-700"
    style={{
      zIndex: 3,
      left: "68%",
      top: "40%",
      width: "18%",
      height: "30%",
      opacity: active ? 0.45 : 0.18,
      transform: active ? "scale(1.08)" : "scale(1)",
      filter: active ? "drop-shadow(0 0 8px rgba(245,158,11,0.7))" : "none",
    }}
  >
    {/* Luzon */}
    <path
      d="M 748,148 L 758,134 L 768,136 L 774,150 L 771,164 L 763,174 L 754,172 L 746,162 L 744,154 Z"
      fill="#f59e0b"
      stroke="#f59e0b"
      strokeWidth="0.8"
    />
    {/* Samar/Leyte */}
    <path
      d="M 762,178 L 772,174 L 780,180 L 776,192 L 764,194 L 758,186 Z"
      fill="#f59e0b"
      stroke="#f59e0b"
      strokeWidth="0.8"
    />
    {/* Cebu */}
    <path
      d="M 756,182 L 764,178 L 770,184 L 766,196 L 756,194 Z"
      fill="#f59e0b"
      stroke="#f59e0b"
      strokeWidth="0.8"
    />
    {/* Mindanao */}
    <path
      d="M 752,198 L 774,194 L 788,202 L 786,224 L 768,232 L 750,226 L 744,212 Z"
      fill="#f59e0b"
      stroke="#f59e0b"
      strokeWidth="0.8"
    />
    {/* Palawan */}
    <path
      d="M 734,188 L 740,176 L 746,178 L 744,204 L 736,208 L 730,198 Z"
      fill="#f59e0b"
      stroke="#f59e0b"
      strokeWidth="0.8"
    />
    {/* Panay */}
    <path
      d="M 750,180 L 758,176 L 764,182 L 758,192 L 750,190 Z"
      fill="#f59e0b"
      stroke="#f59e0b"
      strokeWidth="0.8"
    />
    {/* Small islands */}
    {[
      [745, 145], [770, 142], [778, 170], [742, 170], [760, 200],
      [780, 212], [738, 195], [755, 230], [748, 175], [772, 186],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={2} fill="#f59e0b" />
    ))}
  </svg>
);

export default PhilippineSVG;
