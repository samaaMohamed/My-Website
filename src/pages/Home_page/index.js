import React, { Component } from 'react'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Contacts from '../contacts/component'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Projects/>
                <Contacts/>
            </div>
        )
    }
}
