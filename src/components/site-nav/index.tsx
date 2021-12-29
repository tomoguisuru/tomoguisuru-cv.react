import { NavLink } from "react-router-dom";
import './nav.css';

interface IRoutes {
    name: string;
    route: string;
}

const routes: IRoutes[] = [
    {  name: 'Home', route: '/' },
    {  name: 'About', route: './about' },
    {  name: 'Projects', route: './projects' },
]

export default function Nav() {
    return (
        <nav className="nav">
            <div className="logo text-[32px]">
            </div>

            <div className="items">
            {routes.map((r, i) => (
                <NavLink
                    to={r.route}
                    key={i}
                >
                    {r.name}
                </NavLink>
            ))}
            </div>

            <div className="actions"></div>
        </nav>
    );
}