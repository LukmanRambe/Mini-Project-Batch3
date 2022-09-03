export function unAuthPage(ctx: any) {
  return new Promise((resolve) => {
    const token = ctx.req.cookies?.ci_session;
    if (!token) {
      return ctx.res
        .writeHead(302, {
          location: "/",
        })
        .end();
    }
    return resolve("unauthorized");
  });
}

export function authPage(ctx: any) {
  return new Promise((resolve) => {
    const token = ctx.req.cookies?.ci_session;
    if (token) {
      return ctx.res
        .writeHead(302, {
          location: "/home",
        })
        .end();
    }
    return resolve("authorized");
  });
}
