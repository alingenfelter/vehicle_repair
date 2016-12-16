const React = require('react')

const PageFooter = React.createClass({
  render() {
    return (
      <footer className="tc-l bg-center cover">
        <div className="w-100 ph3 pv4 bg-black-90">
          <p className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2">
          alingenfelter &middot;</p>
          <a href="https://linkedin.com/in/andrealingenfelter" target="_blank">LinkedIn</a> &middot;
          <a href="https://github.com/alingenfelter" target='_blank'>GitHub</a>
        </div>
      </footer>
    )
  }
})

module.exports = PageFooter
