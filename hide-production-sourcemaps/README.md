Prevents access to source maps in production and any files in your `public` folder with the `.map` file extension.

Install with
```
meteor add hexsprite:hide-production-sourcemaps
```

`hexsprite:hide-production-sourcemaps` only runs in production.

It works by preventing the Webapp package from adding the `x-sourcemap` header to javascript files, and removing the source maps from Webapp's list of static files. 
