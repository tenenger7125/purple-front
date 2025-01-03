import { NextRequest, NextResponse } from "next/server";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";
import { getCookie } from "cookies-next";

// 로그인이 필요 없는 페이지 경로
const AUTH_PAGES = ["/signin", "/auth/"];

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const { origin, pathname, basePath } = nextUrl;
  const res = new NextResponse();
  const accessToken = getCookie(TOKEN_SAVE_KEY, { res, req });

  // 로그인이 필요 없는 페이지
  if (AUTH_PAGES.some(page => pathname.startsWith(page))) {
    // 로그인 되어 있는 경우 메인 페이지로 리다이렉트
    if (accessToken) {
      const mainUrl = new URL(`${basePath}/`, origin);
      return NextResponse.redirect(mainUrl);
    } else {
      // 로그인이 필요 없는 페이지는 그냥 다음 요청으로 진행
      return NextResponse.next();
    }
  }
  // 로그인이 필요한 페이지
  if (!accessToken) {
    const signInUrl = new URL(`${basePath}/signin`, origin);
    // 로그인 페이지로 리다이렉트
    return NextResponse.redirect(signInUrl);
  }
  // 로그인 되어 있는 경우 요청 페이지로 진행
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)", "/signin", "/auth/:path*"],
};
