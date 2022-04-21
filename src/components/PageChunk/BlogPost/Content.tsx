export const BlogContent: React.FC = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ms-auto me-auto">
            <h6 className="card-category text-danger">
              <i className="material-icons">trending_up</i> Technology
            </h6>
            <h3 className="title mb-4">Create a design system that can be used in any product available</h3>
            <p className="text-dark">
              This is the paragraph where you can write more details about your product. Keep you user engaged by providing
              meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get
              here. Add a button if you want the user to see more. We are here to make life better.
              <br /> <br />
              And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the
              master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture
              piece.
              <br /> <br />
              The way to survive in modern society is to be an ascetic. It is to retreat from society. There’s too much
              society everywhere you go…The only solution is turn it off.
            </p>

            <div className="blockquote ps-4">
              <p className="lead">“And thank you for turning my personal jean jacket into a couture piece.”</p>
              <small>Kanye West, Producer.</small>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="section col-md-10 py-5">
            <div className="row">
              <div className="col-md-4">
                <img className="img-raised rounded img-fluid" alt="Raised Image" src="/static/img/examples/blog4.jpg" />
              </div>
              <div className="col-md-4">
                <img className="img-raised rounded img-fluid" alt="Raised Image" src="/static/img/examples/blog3.jpg" />
              </div>
              <div className="col-md-4">
                <img className="img-raised rounded img-fluid" alt="Raised Image" src="/static/img/examples/blog1.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-md-center py-4">
          <div className="col-md-8">
            <h3 className="title">Rest of the Story:</h3>
            <p>
              We are here to make life better. And now I look and look around and there•s so many Kanyes I've been trying to
              figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my
              personal jean jacket into a couture piece. <br /> I speak yell scream directly at the old guard on behalf of
              the future. daytime All respect prayers and love to Phife•s family Thank you for so much inspiration.{' '}
            </p>
            <p>
              {' '}
              Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand
              Panda I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The
              Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife•s family Thank you for so
              much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a
              dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the
              nr #1 song in the country. Panda! Good music 2016!
            </p>
            <p>
              {' '}
              I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to
              everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the
              country. Panda! Good music 2016!
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-7">
        <hr className="border" />
      </div>
    </section>
  )
}
