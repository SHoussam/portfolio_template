const WIDTH_MAP = {
  compact: 'max-w-2xl',
  narrow: 'max-w-3xl',
  medium: 'max-w-4xl',
  default: 'max-w-5xl',
  wide: 'max-w-6xl',
};

export default function SectionContainer({
  id,
  width = 'default',
  className = '',
  children,
}) {
  const widthClass = WIDTH_MAP[width] || WIDTH_MAP.default;
  const classes = ['section-padding', 'section-surface', widthClass, 'mx-auto', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
