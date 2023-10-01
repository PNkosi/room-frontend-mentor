import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container py-12 text-dark-gray">
      <p>
        Challenge by <Link
          className="dark-gray font-bold"
          href="https://www.frontendmentor.io/?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
      </p>
      <p>
        coded by <Link className="dark-gray font-bold"
          href="https://github.com/PNkosi"
          target="_blank"
        >
          Perfect Nkosi
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
