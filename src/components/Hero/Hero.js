import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Jujutsu Kaisen 0</h2>
                    <h3 className={styles.hero__genre}>Anime, Action, Mystery</h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi sequi alias quaerat cum, iusto rerum velit omnis ad maiores.
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://picsum.photos/600/400" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;