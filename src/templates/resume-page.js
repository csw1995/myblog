import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import Entry from '../components/resume/Entry'
import Experience from '../components/resume/Experience'
import Education from '../components/resume/Education'
import Certification from '../components/resume/Certification'
import Skill from '../components/resume/Skill'

const sectionHeaderStyle = {
  fontWeight: 300,
  fontSize: "2.5em",
  textAlign: "center",
  borderBottom: "dashed 2px #CCCCCC",
  paddingBottom: "10px",
  marginBottom: "40px",
}

export const ResumePageTemplate = ({
  image,
  title,
  subtitle,
  description,
  intro,
}) => (    
  <div>
    <section className="section section--gradient">
      
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">              
              <div className="columns">
                <div className="column is-8">
                  <h1 style={{
                    fontSize: 2 + 'em',
                    marginBottom: 0.1 + 'em',
                    fontWeight: 500,
                  }}>{title}</h1>
                  <h2 style={{
                    fontWeight: 300,
                    fontSize: 1 + 'em',
                  }}>{subtitle}</h2>
                </div>
                <div className="column is-4">
                  <div style={{ display: 'table' , height: '100%'}}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                      <p>Email: <a href="/contact"> %*Contact Me*% </a></p>
                      <p>Homepage: <a href="/"> www.csw1995.com </a></p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 style={sectionHeaderStyle}>About Me</h3>
              <Entry 
                image={image} 
                text={description}
                imageWidth={120}
              />
              <h3 style={sectionHeaderStyle}>Experience</h3>
              <Experience gridItems={intro.experience} />
              <h3 style={sectionHeaderStyle}>Education</h3>
              <Education gridItems={intro.education} />
              <h3 style={sectionHeaderStyle}>Certification</h3>
              <Certification gridItems={intro.certification} />
              <h3 style={sectionHeaderStyle}>Skills</h3>
              <Skill gridItems={intro.skill} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ResumePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    projects: PropTypes.array,
    experience: PropTypes.array,
    education: PropTypes.array,
  }),
}

const ResumePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ResumePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResumePage

export const pageQuery = graphql`
  query ResumePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "resume-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        subtitle
        description
        intro {
          experience {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            job
            duration
            text
          }
          education {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            degree
            major
            grade
            duration
            text
          }          
          certification {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            duration
            link
          }
          skill {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            level
          }
        }
      }
    }
  }
`
