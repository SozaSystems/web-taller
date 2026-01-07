import './Contacto.css';

const Contacto = () => {
    return (
        <section id="contacto" className="contacto section-padding">
            <div className="container contacto__container">
                <div className="contacto__content">
                    <h2>¿Necesitas un electricista urgente?</h2>
                    <p>Estoy disponible para resolver tus problemas eléctricos. Contáctame por WhatsApp para una respuesta rápida.</p>

                    <a
                        href="https://wa.me/5491168096768"
                        className="btn-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="whatsapp-icon">📞</span> Contactar por WhatsApp
                    </a>

                    <div className="contacto__info">
                        <p><strong>Email:</strong> birkanomi@gmail.com</p>
                        <p><strong>Teléfono:</strong> +54 9 11 6809 6768</p>
                        <p><strong>Zona:</strong> Norte y Oeste de Bs. As.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
