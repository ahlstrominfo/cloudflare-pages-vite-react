import { useState, useEffect, } from 'react'
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ConditionalLink = ({ to, text }) => {
  return location.pathname !== to ? <Link to={to}>{text}</Link> : null;
}
ConditionalLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function Home() {
  const { uuid } = useParams(); // Retrieve the uuid from the route params
  const [message, setMessage] = useState('')

  useEffect(() => {
    const path = uuid ? `/api/page/${uuid}` : '/api/page';
    fetch(path)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, [uuid]);

  return (
    <>

      <p className="the-backend-message">
        This message comes from Cloudflare Pages Functions, i.e. the backend.:
        <br/>
        <b>{message}</b>
      </p>
      <div className="navigation">
        These are just links to send a message to the backend that outputs a message, up there ^:
        <br/><br/>
        <ConditionalLink to="/ninja" text="Ninja Page" />
        <ConditionalLink to="/about" text="About Page" />
        <ConditionalLink to="/" text="Front Page" />
      </div>
      <div className="robot"></div>
    </>
  )
}

export default Home
