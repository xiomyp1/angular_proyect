export default async (request, context) => {
    return new Response("Edge function ejecutada correctamente.", {
      headers: { "content-type": "text/plain" },
    });
  };
  