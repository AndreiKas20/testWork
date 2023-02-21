import React, {useEffect} from 'react';
import styles from './personpage.module.css';
import {useSelector} from "react-redux";
import {Icon} from "../../../UI/Icon";

interface IProps {
    mail: string
}

export function PersonPage({mail}: IProps) {
    // @ts-ignore
    const cardData = useSelector(state => state.personCardReducer.card)
    useEffect(() => {
        console.log('card data', cardData)
    }, [cardData])
    return (
        <div className={styles.container}>
            <div className={styles.blockText}>
                <p className={styles.paragraph}>
                    Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов,
                    включая такие
                    аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам
                    лучше
                    понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и
                    увеличивать
                    продажи, используя самые современные аналитические инструменты.
                </p>

                <p className={styles.paragraph}>
                    В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с
                    трудностями. Не
                    менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание
                    того, что
                    ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после
                    окончания
                    проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
                </p>

                <p className={styles.paragraph}>
                    Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
                    предпринимательскую
                    деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей
                    инновационный подход к красоте, а также инвестором других бизнес-проектов.
                </p>
            </div>
            <address className={styles.contactsBlock}>
                <a className={styles.contact} href={'+79543334455'}>
                    <div style={{top: '0'}} className={styles.iconPosition}><Icon nameIcon={'IconTel'}/></div>
                    +7 (954) 333-44-55
                </a>
                <a className={styles.contact} href={`mailto:${mail}`}>
                    <div className={styles.iconPosition}><Icon nameIcon={'IconMail'}/></div>
                    {mail}
                </a>
            </address>
        </div>
    );
}
