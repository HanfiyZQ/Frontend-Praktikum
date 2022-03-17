import Hello from './Hello';
/**
 * Membuat Component Main
 * Menampung Content Utama
 */
function Main() {
    // Mengirip props name ke component Hello
    return (
        <main>
            <Hello name="Hanfiy" />
            <Hello name="Gojo Satoru" />
            <Hello name="Geto Suguru" />
            <Hello name="Nanami Kento" />
            <Hello name="Yuta Okkotsu" />
        </main>
    );
}

export default Main;