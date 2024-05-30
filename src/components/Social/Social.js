export default function Social({ contact }) {

  return (
    <>
      {contact ? (
        <div className="social-logos contact">
          <a href="https://www.instagram.com/asdevgroup" target="_blank">
            <img src="/instagram-logo.png" atl="instagram logo"/>
            <p>Instagram</p>
          </a>
          <a href="https://www.linkedin.com/company/agador-spartacus-development/" target="_blank">
            <img src="/linkedin-logo.png" atl="linkedin logo"/>
            <p>LinkedIn</p>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555700798485" target="_blank">
            <img src="/facebook-logo.png" atl="facebook logo"/>
            <p>Facebook</p>
          </a>
          <a href="https://x.com/ASDEVGROUP_" target="_blank">
            <img src="/x-logo.png" atl="x logo"/>
            <p>X</p>
          </a>
        </div>
      ) : (
        <div className="social-logos">
          <a href="https://www.facebook.com/profile.php?id=61555700798485" target="_blank">
            <img src="/facebook-logo.png" atl="facebook logo"/>
          </a>
          <a href="https://www.instagram.com/asdevgroup" target="_blank">
            <img src="/instagram-logo.png" atl="instagram logo"/>
          </a>
          <a href="https://www.linkedin.com/company/agador-spartacus-development/" target="_blank">
            <img src="/linkedin-logo.png" atl="linkedin logo"/>
          </a>
          <a href="https://x.com/ASDEVGROUP_" target="_blank">
            <img src="/x-logo.png" atl="x logo"/>
          </a>
        </div>
      )}
    </>
  );
}
