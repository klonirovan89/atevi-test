import {Icon} from "../icon/Icon.tsx";
import {TabsSwitcher} from "../tabsSwitcher/TabsSwitcher.tsx";
import {Switch} from "../switch/Switch.tsx";

import s from './Header.module.scss';

export const Header = () => {

    const tabsItems: TabItem[] = [
        {
            id: 'tab1',
            title: 'О нас',
        },
        {
            id: 'tab2',
            title: 'Туры',
        },
        {
            id: 'tab3',
            title: 'Туристам',
        },
        {
            id: 'tab4',
            title: 'Контакты',
        },
    ]

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <Icon iconId={'sunny'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                <h4>SunnyTour</h4>
            </div>
            <div className={s.tabs}>
                <TabsSwitcher items={tabsItems}/>
            </div>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.icon_wrapper}>
                        <Icon iconId={'globe'} width={'22'} height={'22'} viewBox={'0 0 22 22'}/>
                    </div>
                    <Switch/>
                </div>
                <div className={s.container}>
                    <div className={s.icon_wrapper}>
                        <Icon iconId={'plus'} width={'22'} height={'22'} viewBox={'0 0 22 22'}/>
                    </div>
                    <div className={s.login}>
                        <h5>Войти</h5>
                        <Icon iconId={'user'} width={'22'} height={'22'} viewBox={'0 0 22 22'}/>
                    </div>
                </div>
            </div>

        </header>
    );
};

export type TabItem = {
    id: string;
    title: string;
};