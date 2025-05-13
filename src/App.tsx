import s from "./App.module.scss";
import {Header} from "./components/header/Header.tsx";

export default function App() {

    return (
        <div className={s.app}>
            <Header />
        </div>
    );
}
