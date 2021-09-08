import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small mt-auto footer">
                <a href="https://github.com/arpitkekri/MobileKharido" target="_blank" rel="noreferrer" className="float-btn" data-toggle="tooltip" title="Github repo">
                <i className="fab fa-github my-float-btn" />
                </a>
            </footer>
        )
    }
}
