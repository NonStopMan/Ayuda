import TagsInput from 'react-tagsinput'
import React from 'react'

import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

export default class TagsBox extends React.Component {
    constructor() {
        super()
        this.state = {
            tags: [],
            tag: {}
        }
    }

    handleChange(tags) {
        debugger;
        this.setState({ tags })
    }
    handleChangeInput(aaaa){
        debugger;
    }

    render() {
        return <TagsInput value={this.state.tags}
            onChange={this.handleChange.bind(this)}
            onChangeInput={this.handleChangeInput.bind(this)}
        />
    }
}