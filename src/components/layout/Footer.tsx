import Link from 'next/link';
import { siteConfig } from '@/config/site';

const links = [
  { label: '利用規約', href: '/terms' },
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '特定商取引法に基づく表記', href: '/tokushoho' },
  { label: 'お問い合わせ', href: '#contact' },
];

export function Footer() {
  const year = 2025; // 表記用（更新時はここを変更）
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="container-content py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gold text-[11px] font-bold text-charcoal">
                BAI
              </span>
              <span className="font-serif text-lg font-bold tracking-tight text-ivory">
                {siteConfig.serviceName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60">
              美容サロン・クリニック・接骨院の集客とホームページ、SEO・MEO・AI検索・SNS・CRMを、
              月額{siteConfig.price.monthlyExcl.toLocaleString()}円でまとめて支援するオールインワンサービスです。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-ivory/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-ivory/60">
              <p className="font-medium text-ivory/80">{siteConfig.company.name}</p>
              <p>{siteConfig.company.address}</p>
              <p>TEL：{siteConfig.company.tel}</p>
              <p>{siteConfig.company.businessHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-6 text-xs text-ivory/50">
          <p className="mb-2">
            ※{siteConfig.disclaimers.scope}
            {siteConfig.disclaimers.noGuarantee}
          </p>
          <p>
            © {year} {siteConfig.company.name} / {siteConfig.serviceName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
