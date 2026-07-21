import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-hero-radial px-5 text-center text-ivory">
      <p className="font-serif text-6xl font-bold text-gold">404</p>
      <h1 className="mt-4 text-xl font-bold">
        ページが見つかりませんでした
      </h1>
      <p className="mt-3 text-sm text-ivory/60">
        お探しのページは移動または削除された可能性があります。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light"
      >
        <ArrowLeft size={16} />
        トップページへ戻る
      </Link>
    </div>
  );
}
