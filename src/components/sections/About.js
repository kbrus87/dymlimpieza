import React from "react";
import "../../css/about.css";

const useOnScreen = (options) => {
    const ref = React.useRef();
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        const forcleanup = ref.current;

        return () => {
            if (ref.current) {
                observer.unobserve(forcleanup);
            }
        }
    }, [ref, options])

    return [ref, visible];
}

const About = props => {

    const [ref, visible] = useOnScreen({ threshold: 0.5 });
    const [trigger, setTrigger] = React.useState(false);

    React.useEffect(() => {
        if (visible) setTrigger(true)
    }, [visible])

    return (
        <div ref={ref} id={`${props.id}`} className="about">
            <div className="about__right">
                <h1 className="about__title">{props.id}<div className={`about__title__bar ${trigger ? "animate-border" : null}`}></div></h1>
                <div className="about__text">

                    <div>Somos una compañía joven con amplia experiencia en el sector consorcios, oficinas y grandes obras. Con miembros profesionales y capacitados para gestionar calidad y control sobre el personal, el trabajo y los productos utilizados.<br />

                    Nuestros valores son la integridad, el compromiso, la responsabilidad, y el respeto. Buscamos generar vínculos de confianza con nuestros clientes mediante la excelencia en nuestro trabajo diario.
                    </div>

                </div>
            </div>
            <div className={`about__image ${trigger ? "image-opacity" : null}`}></div>
        </div >
    )
}

export default About;