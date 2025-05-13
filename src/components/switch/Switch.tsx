import * as SwitchPrimitive from "@radix-ui/react-switch";
import clsx from "clsx";
import s from "./Switch.module.scss";

export const Switch = () => {
    return (
        <SwitchPrimitive.Root className={s.root}>
            <span className={clsx(s.label, s.ru)}>RU</span>
            <span className={clsx(s.label, s.en)}>EN</span>
            <SwitchPrimitive.Thumb className={s.thumb} />
        </SwitchPrimitive.Root>
    );
};
