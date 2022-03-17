/**
 * Membuat Component Hello
 * Mencetak UI (elements)
 */
function Hello(props) {

    // melakukan destructing props
    const { name } = props;

    // Di dalam return adalah JSX
    return (
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Mahasiswa</p>
        </div>
    );
}

export default Hello;