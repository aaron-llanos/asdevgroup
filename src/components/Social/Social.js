export default function Social({ contact }) {

  return (
    <>
      {contact ? (
        <div className="social-logos contact">
          <img src="/instagram-logo.png" atl="instagram logo"/>
          <p>Instagram</p>
          <img src="/linkedin-logo.png" atl="linkedin logo"/>
          <p>LinkedIn</p>
          <img src="/facebook-logo.png" atl="facebook logo"/>
          <p>Facebook</p>
          <img src="/x-logo.png" atl="x logo"/>
          <p>X</p>
        </div>
      ) : (
        <div className="social-logos">
          <img src="/facebook-logo.png" atl="facebook logo"/>
          <img src="/instagram-logo.png" atl="instagram logo"/>
          <img src="/linkedin-logo.png" atl="linkedin logo"/>
          <img src="/x-logo.png" atl="x logo"/>
        </div>
      )}
    </>
  );
}
