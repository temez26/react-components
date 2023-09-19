



function Scroll() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show')
            }

        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    return (
        <>
        <section className="hidden">
            <h1>
            Bonkkers
            </h1>
            <p>This is my website</p>

            <section className="hidden">
                <h2>
                Bonkkers is the best
                </h2>
                <p>
                kun perjantai koittaa on aika ottaa kaljaa
                </p>

                </section>
                <section className="logos">


                <div className="logo hidden">Bonkkers</div>
                <div className="logo hidden">Bonkkers</div>
                <div className="logo hidden">Bonkkers</div>
                <div className="logo hidden">Bonkkers</div>




                </section>

            <section className="hidden">


                <h2>
                 tama tarina on tosi
                </h2>
            </section>

        </section>
        </>
    )
}

export default Scroll
