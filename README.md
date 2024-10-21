# React + Vite + Cloudflare Pages + Hono
This is a "super minimal" setup for using Vite and building a SPA with React using Hono for Cloudflare Functions as backend.

# Install
``` 
npm i 
```

# Development
```
npm run dev
```

It will open a browser with the page. Sometimes wrangler has not finished loading the functions, just reload the page and everything will be allright.

# When developing
Vite will hotreload on everything in `/src`. It will **not** hotreload things in `/functions`.
Put static files in `/public`.

# Deploy

Go to dash.cloudflare.com/ and create a new "Pages" then connect it to the repository that contains this code.

Use these Build Settings
```
Framework preset: none
Build command: npm run build
Build output directory: dist
```



# Finally
Well have fun and earn some money.