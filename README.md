# How to use this template

1. Clone the repo `git clone https://github.com/briannelson95/next-sanity-client-template.git YOUR_NEW_FOLDER_NAME`
2. Install the packages `yarn` or `npm i`
3. Set up your sanity project. Go to [https://sanity.io/manage](https://sanity.io/manage) and create a new project using the cli. Copy and run the cli command. Follow instructions to install sanity. 
    - sanity/admin page is already set up so you can say no to creating those pages
    - override the sanity config and cli files
    - if you want to use the schemas I've made you can keep them if not override the schema file(s)
4. Run the next app to make sure its working `yarn dev` or `npm run dev`  
5. Remove the git history and set up the new git repo
```
rm -rf .git
```
```
git init
```
```
git add .
``` 
```
git commit -m "Initial commit"
```
```
gh repo create YOUR_NEW_REPO_NAME --private --source=. --remote=origin
```
```
git remote add origin https://github.com/your_github_username/your_repo_name.git 
git branch -M main
git push -u origin main
```

6. Update README.md

7. Start coding
