import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const allowedPaths = ["/coming-soon", "/"];

export function middleware(req: NextRequest) {
    const urlPath = req.nextUrl.pathname;
    if (allowedPaths.includes(urlPath)){
        return NextResponse.next();
    }

    const allowedIps = (process.env.ALLOWED_IPS || "").split(",");
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    console.log(`ClientIP: ${clientIP}`);

    if (allowedIps.includes(clientIP)) {
        return NextResponse.next();
    }

    const url = req.nextUrl.clone();
    url.pathname = "/coming-soon";
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/"]
}
