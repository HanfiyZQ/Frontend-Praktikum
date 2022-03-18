import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src="https://picsum.photos/600/400" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form action="" className={styles.form__list}>
                        <label
                            htmlFor="title"
                            className={styles.form__titleMovie}>
                            Title
                        </label><br />
                        <input
                            type="text"
                            className={styles.form__inputTitle} /><br />
                        <label
                            htmlFor="year"
                            className={styles.form__year}>
                            Year
                        </label><br />
                        <input
                            type="text"
                            className={styles.form__inputYear} /><br />
                        <input
                            type="submit"
                            value="submit"
                            className={styles.form__submit} />
                    </form>
                </div>
            </section >
        </div >
    );
}

export default AddMovieForm;