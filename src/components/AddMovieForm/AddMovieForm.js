import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
    // destructing props
    const { movies, setMovies } = props;

    // membuat state title
    const [title, setTitle] = useState("");

    // membuat state date
    const [date, setDate] = useState("");

    // membuat state image
    const [image, setImage] = useState("");

    // membuat state type
    const [type, setType] = useState("");

    // membuat state error/empty
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isImageError, setIsImageError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);

    // membuat fungsi handleTitle
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    // membuat fungsi handleDate
    function handleDate(e) {
        setDate(e.target.value);
    }

    // membuat fungsi handleImage
    function handleImage(e) {
        setImage(e.target.value);
    }

    // membuat fungsi handleType
    function handleType(e) {
        setType(e.target.value);
    }

    // handle form ketika disubmit
    function handleSubmit(e) {
        // mencegah perilaku default: refresh
        e.preventDefault();

        // menambah validasi
        // Jika title kosong, maka set error title menjadi true
        if (title === "") {
            setIsTitleError(true);
        }
        // Jika date kosong, maka set error date true
        else if (date === "") {
            setIsTitleError(false);
            setIsDateError(true);
        }
        // Jika image kosong, maka set error date true
        else if (image === "") {
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(true);
        }
        // Jika image kosong, maka set error date true
        else if (type === "") {
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(false);
            setIsTypeError(true);
        }
        // jika tidak kosong, tambah data
        else {
            // siapkan movie yang ingin diinput
            const movie = {
                id: nanoid(10),
                title: title,
                year: date,
                type: type,
                poster: image,
            };

            setMovies([...movies, movie]);
            setIsTitleError(false);
            setIsDateError(false);
            setIsImageError(false);
            setIsTypeError(false);
        }
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src="https://picsum.photos/600/400" alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie Form</h2>
                    <form onSubmit={handleSubmit} className={styles.form__list}>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="title"
                                className={styles.form__label}>
                                Title
                            </label>
                            <input
                                onChange={handleTitle}
                                id="title"
                                type="text"
                                className={styles.form__input}
                                value={title}
                            />
                            {/* 
                            menambahkan conditional operator
                            Jika isTitleError true: munculkan error
                            Jika false: munculkan string kosong
                             */}
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="date"
                                className={styles.form__label}>
                                Year
                            </label>
                            <input
                                onChange={handleDate}
                                id="date"
                                type="number"
                                className={styles.form__input}
                                value={date}
                            />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="image"
                                className={styles.form__label}>
                                Image Address
                            </label>
                            <input
                                onChange={handleImage}
                                id="image"
                                type="text"
                                className={styles.form__input}
                                value={image}
                            />
                            {isImageError && <Alert>Image Address Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label
                                htmlFor="type"
                                className={styles.form__label}>
                                Genre
                            </label>
                            <select id="type" className={styles.form__input} value={type} onChange={handleType}>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                                <option value="comedy">Comedy</option>
                                <option value="superhero">Superhero</option>
                                <option value="fantasy">Fantasy</option>
                            </select>
                            {isTypeError && <Alert>Genre Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <button className={styles.form__button}>Add Movie</button>
                        </div>
                    </form>
                </div>
            </section >
        </div >
    );
}

export default AddMovieForm;