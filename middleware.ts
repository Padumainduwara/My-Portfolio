import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware — SEO & Security
 *
 * 1. Redirects non-www to www (canonical URL consolidation)
 * 2. Adds security headers as fallback (in case next.config.ts misses)
 * 3. Blocks known malicious bot patterns
 */

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const response = NextResponse.next();

  // ── 1. WWW redirect (non-www → www) ──────────────────────────────────────
  // Only for production domain
  if (
    hostname === 'padumainduwara.me' &&
    !hostname.startsWith('www.') &&
    !hostname.includes('localhost') &&
    !hostname.includes('vercel.app')
  ) {
    const newUrl = new URL(url.toString());
    newUrl.hostname = 'www.padumainduwara.me';
    return NextResponse.redirect(newUrl, 301);
  }

  // ── 2. Trailing slash redirect (optional — Next.js handles this by default) ──
  // No action needed — Next.js defaults remove trailing slashes

  // ── 3. Block known bad bots via User-Agent ──────────────────────────────────
  const ua = request.headers.get('user-agent') || '';
  const blockedBots = [
    'AhrefsBot',
    'SemrushBot',
    'MJ12bot',
    'DotBot',
    'BLEXBot',
    'MegaIndex',
    'ZoominfoBot',
    'ClaudeBot',
    'Bytespider',
    'PetalBot',
    'sogou',
    'YisouSpider',
  ];

  if (blockedBots.some((bot) => ua.includes(bot))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // ── 4. Extra security headers (fallback layer) ──────────────────────────────
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // ── 5. Remove unnecessary headers (security through obscurity) ──────────────
  response.headers.delete('X-Powered-By');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|images/|partners/|projects/|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|woff2|css|js|xml|txt|pdf)).*)',
  ],
};
