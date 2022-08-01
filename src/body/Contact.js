
export function Contact() {
    return (
<section className="page-section" id="contact">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-8 text-center">
      <h2 className="mt-0">¡Trabajemos juntos!</h2>
      <hr className="divider my-4" />
      <p className="text-muted mb-5">
        Si te interesó algunos de mis proyectos y quieres formar una
        colaboración conmigo. ¡No dudes en hacerlo!
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
      <i className="fas fa-phone fa-3x mb-3 text-muted" />
      <div>Próximamente</div>
    </div>
    <div className="col-lg-4 mr-auto text-center">
      <i className="fas fa-envelope fa-3x mb-3 text-muted" />
      {/* Make sure to change the email address in BOTH the anchor text and the link target below!*/}
      <a className="d-block" href="mailto:josemiguelaparicio507@gmail.com">
        josemiguelaparicio507@gmail.com
      </a>
    </div>
  </div>
</div>
</section>
    );
  }
  




