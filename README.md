# MangaStar

For server deployment: 
1. Ensure that you have added the build script in the package.json file.
2. Use Render to deploy the server

For client deployment: 
1. Use netlify and in the netlify's build command , use CI= false npm run build instead of the usual npm run build as netlify by default fails the deployment if there are any warnings in your terminal.
2. Create a netlify.toml file inside the client root directory and paste the following code to redirect to index.html (Use this step only if your netlifty page has a 404 error):
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200

   ## Website not responsive yet
