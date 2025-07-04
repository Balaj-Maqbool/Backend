import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
const myPort=process.env.PORT
const myApi= {
  "login": "Balaj-Maqbool",
  "id": 176047454,
  "node_id": "U_kgDOCn5FXg",
  "avatar_url": "https://avatars.githubusercontent.com/u/176047454?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Balaj-Maqbool",
  "html_url": "https://github.com/Balaj-Maqbool",
  "followers_url": "https://api.github.com/users/Balaj-Maqbool/followers",
  "following_url": "https://api.github.com/users/Balaj-Maqbool/following{/other_user}",
  "gists_url": "https://api.github.com/users/Balaj-Maqbool/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Balaj-Maqbool/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Balaj-Maqbool/subscriptions",
  "organizations_url": "https://api.github.com/users/Balaj-Maqbool/orgs",
  "repos_url": "https://api.github.com/users/Balaj-Maqbool/repos",
  "events_url": "https://api.github.com/users/Balaj-Maqbool/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Balaj-Maqbool/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Balaj Maqbool ",
  "company": "University of Sargodha ",
  "blog": "https://www.linkedin.com/in/balaj-maqbool-9456a1310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  "location": "KHB, Pakistan",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-07-19T14:23:44Z",
  "updated_at": "2025-06-04T06:41:03Z"
}

app.get("/",(req,res)=>{
    res.send("<h1>welcome to your local server</h1>")

})

app.get("/about",(req,res)=>{
    res.send("<h3>my name is balaj maqbool, and i am learning backend right now!</h3>")

})
app.get('/balaj',(req,res)=>{
    res.status(200).send(myApi)

})

app.get('/redirect',(req,res)=>{
    res.redirect("/")

})

app.listen(myPort,(req,res)=>{
    console.log(`Server Lisnening at the port`,myPort);
})




