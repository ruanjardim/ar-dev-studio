import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import "./styles/theme.css";

export function App(): string {
  return DefaultLayout({
    content: Home(),
  });
}
