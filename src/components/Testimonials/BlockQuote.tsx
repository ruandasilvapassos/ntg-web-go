export const BlockQuote: React.FC = () => {
  return (
    <section className="py-lg-7 py-5 bg-white career-quote">
      <div className="container">
        <div className="quote-box bg-pink">
          <div className="row">
            <div className="col-lg-2">
              <div className="mb-2">
                <img alt="" src="/static/img/c-avatar.png" />
              </div>
            </div>
            <div className="col-lg-10">
              <p className="lead fw-bold text-dark mb-4">
                "What we have done (migrating SAP to AWS on Ntegral) is not just a digital transformation, it’s a business
                transformation. We are all saying, ‘It’s a good thing we did this"
              </p>
              <p className="text-mute fw-bold mb-0">
                Shawn Behounek General Manager, Digital Strategy, <br />
                Architecture and Analytics Phillips 66.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
