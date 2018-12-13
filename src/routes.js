import homePage from "./components/homePage";
import aboutUsPage from "./components/aboutUsPage";
import posts from "./components/posts";
import postsPage from "./components/postsPage";
import usersPage from "./components/usersPage";
import usersHomePage from "./components/users/usersHomePage";
import usersViewPage from "./components/users/usersViewPage";

const routes = [
    {path: "/", component: homePage},
    {path: "/about", component: aboutUsPage},
    {path: "/posts/:id", component: posts, props: true},
    {path: "/posts", component: postsPage},
    {path: "/users", component: usersPage, children: [
            {path: "", component: usersHomePage},
            {path: ":id", component: usersViewPage, props: true}
    ]}
];

export default routes;