import { HomePage } from "./pages/HomePage";
import { BookADine } from "./pages/BookADine";
import { ContactUs } from "./pages/ContactUs";
import { FranchisePage } from "./pages/FranchisePage";
import { RecipesPage } from "./pages/RecipesPage";
import { PageNotFound } from "./pages/PageNotFound";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";
import { ViewMenu } from "./pages/ViewMenu";
import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";
import { PasswordReset } from "./pages/PasswordReset";
import { ForgetPassword } from "./pages/ForgetPassword";
import { BlogHome } from "./pages/BlogHome";
import { BlogPage } from "./components/BlogPage";

export const routeConfig = [
  { path: "/", component: HomePage },
  { path: "/franchise", component: FranchisePage },
  { path: "/recipes", component: RecipesPage },
  { path: "/bookadine", component: BookADine },
  { path: "/contactus", component: ContactUs },
  { path: "/login", component: Login },
  { path: "/recipe/:id", component: RecipeDetailPage },
  { path: "/viewmenu/:id", component: ViewMenu },
  { path: "/create-account", component: CreateAccount },
  { path: "/password-reset", component: PasswordReset },
  { path: "/forget-password", component: ForgetPassword },
  { path: "/blog", component: BlogHome },
  { path: "/blog/:id", component: BlogPage },
  { path: "*", component: PageNotFound },
];
