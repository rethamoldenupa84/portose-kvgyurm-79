import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve((req) =>
  serveDir(req, {
    fsRoot: "./",         // Make sure your index.html is in this same folder
    showDirListing: false // Hides file listing for visitors
  })
);
