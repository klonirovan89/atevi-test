import {List, Root,  Trigger} from "@radix-ui/react-tabs";
import type {TabItem} from "../header/Header.tsx";
import s from "./TabsSwitcher.module.scss";

type Props = {
    items: TabItem[];
};

export const TabsSwitcher = ({ items }: Props) => {
    return (
        <Root className={s.root} defaultValue="tab1">
            <List className={s.list}>
                {items.map((item) => (
                    <Trigger className={s.trigger} value={item.id} key={item.id}>
                        {item.title}
                    </Trigger>
                ))}
            </List>
        </Root>
    );
};
