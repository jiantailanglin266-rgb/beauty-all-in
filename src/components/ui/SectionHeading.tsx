import { Reveal } from './Reveal';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
};

/** セクション共通の見出しブロック */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: Props) {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={`${isCenter ? 'mx-auto text-center' : 'text-left'} max-w-2xl`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`text-balance text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
          tone === 'dark' ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[15px] leading-relaxed sm:text-base ${
            tone === 'dark' ? 'text-ivory/70' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
