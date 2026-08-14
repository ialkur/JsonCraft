export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Statik dosyaları ASSETS'ten sun
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not found', { status: 404 });
  }
};
