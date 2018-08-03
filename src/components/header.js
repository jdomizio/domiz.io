import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';

import './header.css';

const Header = ({ siteTitle, file }) => (
  <div className="site-header">
    <Img sizes={file.childImageSharp.sizes} />
    <div className="__site-header-text">
      <div className="__container">
        <h1 style={{ margin: 0 }}>
          <Link to="/" className="link">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  </div>
)

export default Header

// export const query = graphql`
//   query GatsbyImageSampleQuery {
//     file(relativePath: { eq: "bg.jpg" }) {
//       childImageSharp {
//         resolutions(height: 200) {
//           ...GatsbyImageSharpResolutions
//         }
//       }
//     }
//   }
// `;
